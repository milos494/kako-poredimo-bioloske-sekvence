import React from 'react';
import LCS from '../../components/LCS';
import { StyledLCSPageWrapper } from './LCSPageStyles';
// import LCSBacktrack from "../../utils/LCSBacktrack";

const LCSBacktrackPage = () => {
  // const v = "AGTCGTGATCGTTGTA";
  // const w = "GTATGAA";
  // const { track, S } = LCSBacktrack(v, w);
  // console.log(S, track);

  return (
    <StyledLCSPageWrapper>
      <LCS />;
    </StyledLCSPageWrapper>
  );
};

export default LCSBacktrackPage;
