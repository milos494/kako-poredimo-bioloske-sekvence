import React, { useEffect, useState } from 'react';
import { getData } from '../../api';
import Button from '../../basic/Button';
import Input from '../../basic/Input';
import LCS from '../../components/LCS';
import { StyledLCSPageWrapper } from './GlobalAlignmentStyles';

const LCSBacktrackPage = () => {
  const [firstString, setFirstString] = useState();
  const [secondString, setSecondString] = useState();
  const [epsPenalty, setEpsPenalty] = useState();
  const [sigmaPenalty, setSigmaPenalty] = useState();
  const [mismatchPenalty, setMismatchPenalty] = useState();
  const [drawLCS, setDrawLCS] = useState(false);
  const [LCSOutput, setLCSOutput] = useState({});

  useEffect(() => {
    setDrawLCS(false);
    setLCSOutput({});
  }, [firstString, secondString]);

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

  return (
    <StyledLCSPageWrapper>
      <Input id="LCSFirstString" label="First String" onChange={(e) => inputChange(e, 'first')} />
      <Input
        id="LCSSecondString"
        label="Second String"
        onChange={(e) => inputChange(e, 'second')}
      />
      <Input
        type="number"
        id="mismatchPenalty"
        label="Mismatch"
        onChange={(e) => inputChange(e, 'mismatch')}
      />
      <Input id="epsPenalty" label="Eps" type="number" onChange={(e) => inputChange(e, 'eps')} />
      <Input
        id="sigmaPenalty"
        label="Sigma"
        type="number"
        onChange={(e) => inputChange(e, 'sigma')}
      />
      <Button onClick={getLCS} label="Get LCS" type="button" />
      {drawLCS && (
        <LCS firstString={firstString} secondString={secondString} LCSOutput={LCSOutput} />
      )}
    </StyledLCSPageWrapper>
  );
};

export default LCSBacktrackPage;
