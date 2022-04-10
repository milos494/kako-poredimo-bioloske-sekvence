import PropTypes from 'prop-types';
// import { generate } from 'randomstring';
import React from 'react';
import Element from '../Element';
import LetterArray from '../LetterArray';
import { StyledLCSRowWrapper, StyledLCSWrapper } from './LCSStyles';

const LCS = ({ firstString, secondString, S, track, trackLongestSequence }) => {
  const wArray = Array.from(Array(firstString.length + 1)).map((a, index) =>
    firstString.substring(index),
  );
  const hArray = Array.from(Array(secondString.length + 1)).map((a, index) =>
    secondString.substring(index),
  );

  return (
    <>
      <LetterArray sequence={firstString} horizontal />
      <StyledLCSRowWrapper>
        <LetterArray sequence={secondString} />
        <StyledLCSWrapper>
          {hArray.map((hElement, hIndex) => (
            <StyledLCSRowWrapper key={hElement} className="row-wrapper">
              {wArray.map((wElement, wIndex) => (
                <Element
                  key={`${hElement}-${wElement}`}
                  height={hArray.length}
                  width={wArray.length}
                  coordindates={{ i: hIndex, j: wIndex }}
                  hasInputs={false}
                  label={S[`${hIndex};${wIndex}`]}
                  edges={track[`${hIndex};${wIndex}`]}
                  finalPath={trackLongestSequence[`${hIndex};${wIndex}`]}
                  showDiagonalEdge
                />
              ))}
            </StyledLCSRowWrapper>
          ))}
        </StyledLCSWrapper>
      </StyledLCSRowWrapper>
    </>
  );
};

LCS.propTypes = {
  firstString: PropTypes.string.isRequired,
  secondString: PropTypes.string.isRequired,
  S: PropTypes.shape().isRequired,
  track: PropTypes.shape().isRequired,
  trackLongestSequence: PropTypes.shape().isRequired,
};

export default LCS;
