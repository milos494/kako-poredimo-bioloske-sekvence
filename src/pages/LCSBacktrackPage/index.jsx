import React, { useEffect, useState } from 'react';
import Button from '../../basic/Button';
import Input from '../../basic/Input';
import LCS from '../../components/LCS';
import LCSBacktrack from '../../utils/LCSBacktrack';
import { StyledLCSPageWrapper } from './LCSPageStyles';
// import LCSBacktrack from "../../utils/LCSBacktrack";

const LCSBacktrackPage = () => {
  const [firstString, setFirstString] = useState();
  const [secondString, setSecondString] = useState();
  const [drawLCS, setDrawLCS] = useState(false);
  const [LCSOutput, setLCSOutput] = useState({});

  // const v = "AGTCGTGATCGTTGTA";
  // const w = "GTATGAA";
  // const { track, S } = LCSBacktrack(v, w);
  // console.log(S, track);
  console.log(LCSOutput, 'milos');

  useEffect(() => {
    setDrawLCS(false);
    setLCSOutput({});
  }, [firstString, secondString]);

  const inputChange = (e, type) => {
    const { value } = e.target;

    // eslint-disable-next-line
    // debugger;
    if (value) {
      if (type === 'first') {
        setFirstString(value.toUpperCase());
      } else {
        setSecondString(value.toUpperCase());
      }
    }
  };

  const getLCS = () => {
    if (firstString && secondString) {
      const output = LCSBacktrack(firstString, secondString);
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
      <Button onClick={getLCS} label="Get LCS" type="button" />
      {drawLCS && (
        <LCS firstString={firstString} secondString={secondString} LCSOutput={LCSOutput} />
      )}
    </StyledLCSPageWrapper>
  );
};

export default LCSBacktrackPage;
