import { Checkbox } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getData } from '../../api';
import Button from '../../basic/Button';
import Input from '../../basic/Input';
import GlobalPageWrapper from '../../components/GlobalPageWrapper';
import LCS from '../../components/LCS';
import { StyledInputOutputWrapper, StyledLCSPageWrapper } from './AffineGapPenaltyAlignmentStyles';
import Content from './content';

const LCSBacktrackPage = () => {
  const [firstString, setFirstString] = useState();
  const [secondString, setSecondString] = useState();
  const [epsPenalty, setEpsPenalty] = useState();
  const [sigmaPenalty, setSigmaPenalty] = useState();
  const [mismatchPenalty, setMismatchPenalty] = useState();
  const [drawLCS, setDrawLCS] = useState(false);
  const [LCSOutput, setLCSOutput] = useState(null);
  const [iterative, setIterative] = useState(true);

  useEffect(() => {
    setDrawLCS(false);
    setLCSOutput(null);
  }, [firstString, secondString, mismatchPenalty, epsPenalty, sigmaPenalty]);

  const inputChange = (e, type) => {
    const { value } = e.target;

    if (value) {
      switch (type) {
        case 'first':
          setFirstString(value.toUpperCase());
          break;
        case 'second':
          setSecondString(value.toUpperCase());
          break;
        case 'mismatch':
          setMismatchPenalty(value.toUpperCase());
          break;
        case 'eps':
          setEpsPenalty(value.toUpperCase());
          break;
        default:
          setSigmaPenalty(value.toUpperCase());
          break;
      }
    }
  };

  const getLCS = async () => {
    if (firstString && secondString) {
      const output = await getData('affine-gap-penalty-alignment', {
        sequence1: firstString,
        sequence2: secondString,
        mismatch: +(mismatchPenalty || 0),
        eps: +(epsPenalty || 0),
        sigma: +(sigmaPenalty || 0),
      });
      setLCSOutput(output);
      setDrawLCS(true);
    }
  };

  const handleIterative = (e) => {
    setIterative(e.target.checked);
  };

  return (
    <GlobalPageWrapper>
      <Content />
      <StyledLCSPageWrapper>
        <StyledInputOutputWrapper>
          <Input
            id="LCSFirstString"
            label="Prva sekvenca"
            onChange={(e) => inputChange(e, 'first')}
          />
          <Input
            id="LCSSecondString"
            label="Druga sekvenca"
            onChange={(e) => inputChange(e, 'second')}
          />
        </StyledInputOutputWrapper>
        <StyledInputOutputWrapper>
          <Input
            type="number"
            id="mismatchPenalty"
            label="Promašaj"
            onChange={(e) => inputChange(e, 'mismatch')}
          />
          <Input
            id="epsPenalty"
            label="Epsilon"
            type="number"
            onChange={(e) => inputChange(e, 'eps')}
          />
          <Input
            id="sigmaPenalty"
            label="Sigma"
            type="number"
            onChange={(e) => inputChange(e, 'sigma')}
          />
        </StyledInputOutputWrapper>
        <StyledInputOutputWrapper>
          <Button onClick={getLCS} label="Pokreni algoritam" type="button" />
          <Checkbox
            label="Show algorithm iteratively"
            size="large"
            onChange={handleIterative}
            defaultChecked
            disabled={!!LCSOutput}
          />
          <p>Iterativni izlaz</p>
        </StyledInputOutputWrapper>
        {drawLCS && (
          <LCS
            firstString={firstString}
            secondString={secondString}
            LCSOutput={LCSOutput}
            iterative={iterative}
          />
        )}
      </StyledLCSPageWrapper>
    </GlobalPageWrapper>
  );
};

export default LCSBacktrackPage;
