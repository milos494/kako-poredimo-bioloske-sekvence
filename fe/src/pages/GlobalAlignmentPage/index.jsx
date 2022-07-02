import React, { useEffect, useState } from 'react';
import { getData } from '../../api';
import Button from '../../basic/Button';
import Input from '../../basic/Input';
import LCS from '../../components/LCS';
// import GlobalAlignment from '../../utils/GlobalAlignment';
import { StyledLCSPageWrapper } from './GlobalAlignmentStyles';

const LCSBacktrackPage = () => {
  const [firstString, setFirstString] = useState();
  const [secondString, setSecondString] = useState();
  const [insertionPenalty, setInsertionPenalty] = useState();
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
      const output = await getData('global-alignment', {
        sequence1: firstString,
        sequence2: secondString,
        indel: +(insertionPenalty || 0),
        mismatch: +(mismatchPenalty || 0),
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
        id="insertionPenalty"
        label="Indel"
        onChange={(e) => inputChange(e, 'third')}
      />
      <Input
        id="mismatchPenalty"
        label="Mismatch"
        type="number"
        onChange={(e) => inputChange(e, 'forth')}
      />
      <Button onClick={getLCS} label="Get LCS" type="button" />
      {drawLCS && (
        <LCS firstString={firstString} secondString={secondString} LCSOutput={LCSOutput} />
      )}
    </StyledLCSPageWrapper>
  );
};

export default LCSBacktrackPage;
