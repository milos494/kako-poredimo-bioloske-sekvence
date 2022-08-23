/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import useIterative from '../../hooks/iterative';
import Element from '../Element';
import GraphWrapper from '../GraphWrapper';
import LetterArray from '../LetterArray';
import {
  StyledLCS,
  StyledLCSOutputLetter,
  StyledLCSOutputStrings,
  StyledLCSRowWrapper,
  StyledLCSWrapper,
} from './LCSStyles';

const LCS = ({ firstString, secondString, LCSOutput, iterative }) => {
  const [paused, setPaused] = useState(false);
  const [speed, setSpeed] = useState(300);
  const { sequence1Modified, sequence2Modified, sequence1Position, sequence2Position } = LCSOutput;

  const { finalPath, iterativeOutput } = useIterative({
    output: LCSOutput,
    height: secondString.length + 1,
    width: firstString.length + 1,
    paused,
    speed,
    showIterative: iterative,
  });

  const wArray = Array.from(Array(firstString.length + 1)).map((a, index) =>
    firstString.substring(index),
  );
  const hArray = Array.from(Array(secondString.length + 1)).map((a, index) =>
    secondString.substring(index),
  );

  return (
    <>
      <GraphWrapper
        height={secondString.length + 3}
        width={firstString.length + 2}
        showPauseButton={LCSOutput}
        pauseButtonProps={{ paused, setPaused, pauseDisabled: !!finalPath }}
        showSpeed={!!LCSOutput}
        setSpeed={LCSOutput ? setSpeed : undefined}
      >
        <StyledLCS>
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
                      i={hIndex}
                      j={wIndex}
                      hasInputs={false}
                      label={iterativeOutput?.S[`${hIndex};${wIndex}`]}
                      edges={iterativeOutput?.track[`${hIndex};${wIndex}`]}
                      finalPath={finalPath?.[`${hIndex};${wIndex}`]}
                      showDiagonalEdge
                    />
                  ))}
                </StyledLCSRowWrapper>
              ))}
            </StyledLCSWrapper>
          </StyledLCSRowWrapper>
        </StyledLCS>
      </GraphWrapper>
      {finalPath && (
        <>
          <h2>OUTPUT:</h2>
          <StyledLCSOutputStrings>
            {sequence1Modified.split('').map((letter, index) => (
              <StyledLCSOutputLetter
                active={sequence1Position.findIndex((k) => k === index) !== -1}
                key={index}
              >
                {letter}
              </StyledLCSOutputLetter>
            ))}
          </StyledLCSOutputStrings>
          <StyledLCSOutputStrings>
            {sequence2Modified.split('').map((letter, index) => (
              <StyledLCSOutputLetter
                active={sequence2Position.findIndex((k) => k === index) !== -1}
                key={index}
              >
                {letter}
              </StyledLCSOutputLetter>
            ))}
          </StyledLCSOutputStrings>
        </>
      )}
    </>
  );
};

LCS.propTypes = {
  firstString: PropTypes.string.isRequired,
  secondString: PropTypes.string.isRequired,
  LCSOutput: PropTypes.shape().isRequired,
  iterative: PropTypes.bool.isRequired,
};

export default LCS;
