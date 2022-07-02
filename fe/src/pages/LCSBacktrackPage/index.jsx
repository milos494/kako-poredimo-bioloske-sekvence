import React, { useEffect, useState } from 'react';
import { getData } from '../../api';
import Button from '../../basic/Button';
import Input from '../../basic/Input';
import LCS from '../../components/LCS';
import { StyledLCSPageWrapper } from './LCSPageStyles';

const LCSBacktrackPage = () => {
  const [firstString, setFirstString] = useState();
  const [secondString, setSecondString] = useState();
  const [drawLCS, setDrawLCS] = useState(false);
  const [LCSOutput, setLCSOutput] = useState({});

  useEffect(() => {
    setDrawLCS(false);
    setLCSOutput({});
  }, [firstString, secondString]);

  const inputChange = (e, type) => {
    const { value } = e.target;

    if (value) {
      if (type === 'first') {
        setFirstString(value.toUpperCase());
      } else {
        setSecondString(value.toUpperCase());
      }
    }
  };

  const getLCS = async () => {
    if (firstString && secondString) {
      const output = await getData('lcs', { sequence1: firstString, sequence2: secondString });
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
