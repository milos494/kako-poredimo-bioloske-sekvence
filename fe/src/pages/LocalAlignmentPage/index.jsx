import { Checkbox } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getData } from '../../api';
import Button from '../../basic/Button';
import Input from '../../basic/Input';
import GlobalPageWrapper from '../../components/GlobalPageWrapper';
import LCS from '../../components/LCS';
import { StyledInputOutputWrapper, StyledLCSPageWrapper } from './LocalAlignmentStyles';

const LCSBacktrackPage = () => {
  const [firstString, setFirstString] = useState();
  const [secondString, setSecondString] = useState();
  const [insertionPenalty, setInsertionPenalty] = useState();
  const [mismatchPenalty, setMismatchPenalty] = useState();
  const [drawLCS, setDrawLCS] = useState(false);
  const [LCSOutput, setLCSOutput] = useState(null);
  const [iterative, setIterative] = useState(true);

  useEffect(() => {
    setDrawLCS(false);
    setLCSOutput(null);
  }, [firstString, secondString, insertionPenalty, mismatchPenalty]);

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
        case 'third':
          setInsertionPenalty(value.toUpperCase());
          break;
        default:
          setMismatchPenalty(value.toUpperCase());
          break;
      }
    }
  };

  const getLCS = async () => {
    if (firstString && secondString) {
      const output = await getData('local-alignment', {
        sequence1: firstString,
        sequence2: secondString,
        indel: +(insertionPenalty || 0),
        mismatch: +(mismatchPenalty || 0),
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
            id="insertionPenalty"
            label="Indel"
            onChange={(e) => inputChange(e, 'third')}
          />
          <Input
            id="mismatchPenalty"
            label="Promašaj"
            type="number"
            onChange={(e) => inputChange(e, 'forth')}
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
        </StyledInputOutputWrapper>{' '}
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
