import { Checkbox } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getData } from '../../api';
import Button from '../../basic/Button';
import Input from '../../basic/Input';
import LCS from '../../components/LCS';
import { StyledInputOutputWrapper, StyledLCSPageWrapper } from './LCSPageStyles';

const LCSBacktrackPage = () => {
  const [firstString, setFirstString] = useState();
  const [secondString, setSecondString] = useState();
  const [drawLCS, setDrawLCS] = useState(false);
  const [LCSOutput, setLCSOutput] = useState(null);
  const [iterative, setIterative] = useState(true);

  useEffect(() => {
    setDrawLCS(false);
    setLCSOutput(null);
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
      console.log(output);
    }
  };

  const handleIterative = (e) => {
    setIterative(e.target.checked);
  };

  return (
    <StyledLCSPageWrapper>
      <StyledInputOutputWrapper>
        <Input id="LCSFirstString" label="First String" onChange={(e) => inputChange(e, 'first')} />
        <Input
          id="LCSSecondString"
          label="Second String"
          onChange={(e) => inputChange(e, 'second')}
        />
      </StyledInputOutputWrapper>
      <StyledInputOutputWrapper>
        <Button onClick={getLCS} label="Get LCS" type="button" />
        <Checkbox
          label="Show algorithm iteratively"
          size="large"
          onChange={handleIterative}
          defaultChecked
          disabled={!!LCSOutput}
        />
        <p>Get LCS output iteratively</p>
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
  );
};

export default LCSBacktrackPage;
