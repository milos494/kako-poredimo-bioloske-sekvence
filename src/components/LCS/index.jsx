import { generate } from 'randomstring';
import React from 'react';
import LCSBacktrack from '../../utils/LCSBacktrack';
import Element from '../Element';
import { StyledLCSRowWrapper, StyledLCSWrapper } from './LCSStyles';

const LCS = () => {
  const v = 'AGTCGTGATCGTTGTA';
  const w = 'GTATGAA';

  const hArray = Array.from(Array(w.length + 1)).map(() =>
    generate({ length: 12, charset: 'alphabetic' }),
  );
  const wArray = Array.from(Array(v.length + 1)).map(() =>
    generate({ length: 12, charset: 'alphabetic' }),
  );
  const { track, S } = LCSBacktrack(v, w);

  return (
    <StyledLCSWrapper>
      {hArray.map((hElement, hIndex) => (
        <StyledLCSRowWrapper key={hElement} className="row-wrapper">
          {wArray.map((wElement, wIndex) => (
            <Element
              key={`${hElement}-${wElement}`}
              height={w.length + 1}
              width={v.length + 1}
              coordindates={{ i: hIndex, j: wIndex }}
              hasInputs={false}
              label={S[`${hIndex};${wIndex}`]}
              edges={track[`${hIndex};${wIndex}`]}
              showDiagonalEdge
            />
          ))}
        </StyledLCSRowWrapper>
      ))}
    </StyledLCSWrapper>
  );
};

export default LCS;
