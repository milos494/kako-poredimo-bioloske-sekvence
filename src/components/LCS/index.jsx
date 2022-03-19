import React from "react";
import LCSBacktrack from "../../utils/LCSBacktrack";
import Element from "../Element";
import { StyledLCSRowWrapper, StyledLCSWrapper } from "./LCSStyles";

const LCS = () => {
  const v = "AGTCGTGATCGTTGTA";
  const w = "GTATGAA";

  const hArray = Array.from(Array(w.length + 1));
  const wArray = Array.from(Array(v.length + 1));
  const { track, S } = LCSBacktrack(v, w);

  console.log(track);
  return (
    <StyledLCSWrapper>
      {hArray.map((_, hIndex) => (
        <StyledLCSRowWrapper key={hIndex} className='row-wrapper'>
          {wArray.map((_, wIndex) => (
            <Element
              key={wIndex}
              height={w.length + 1}
              width={v.length + 1}
              coordindates={{ i: hIndex, j: wIndex }}
              hasInputs={false}
              label={S[`${hIndex};${wIndex}`]}
              edges={track[`${hIndex};${wIndex}`]}
              showDiagonalEdge={true}
              // edgeLabels={manhattanInput[`${hIndex};${wIndex}`]}
            />
          ))}
        </StyledLCSRowWrapper>
      ))}
    </StyledLCSWrapper>
  );
};

export default LCS;
