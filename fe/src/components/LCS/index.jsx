import PropTypes from 'prop-types';
import React, { useState } from 'react';
import useIterative from '../../hooks/iterative';
import Element from '../Element';
import GraphWrapper from '../GraphWrapper';
import LetterArray from '../LetterArray';
import { StyledLCS, StyledLCSRowWrapper, StyledLCSWrapper } from './LCSStyles';

const LCS = ({ firstString, secondString, LCSOutput, iterative }) => {
  const [paused, setPaused] = useState(false);
  const [speed, setSpeed] = useState(300);

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
  );
};

LCS.propTypes = {
  firstString: PropTypes.string.isRequired,
  secondString: PropTypes.string.isRequired,
  LCSOutput: PropTypes.shape().isRequired,
  iterative: PropTypes.bool.isRequired,
};

export default LCS;
