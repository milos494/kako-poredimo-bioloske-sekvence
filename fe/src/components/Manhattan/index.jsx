/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Element from '../Element';

import { StyledManhattanRowWrapper, StyledManhattanWrapper } from './ManhattanStyles';
import GraphWrapper from '../GraphWrapper';
import useIterative from '../../hooks/iterative';

const Manhattan = ({
  width,
  height,
  manhattanInput,
  dispatchManhattanInput,
  manhattanOutput,
  iterative,
}) => {
  const hString = 'a'.repeat(height);
  const wString = 'b'.repeat(width);
  const hArray = Array.from(Array(height)).map((_, index) => hString.substring(index));
  const wArray = Array.from(Array(width)).map((_, index) => wString.substring(index));
  const [speed, setSpeed] = useState(300);

  const [paused, setPaused] = useState(false);
  const { output } = manhattanOutput ?? {};
  const { finalPath, iterativeOutput } = useIterative({
    output: manhattanOutput,
    width,
    height,
    paused,
    speed,
    showIterative: iterative,
  });

  return (
    <>
      <GraphWrapper
        height={height}
        width={width}
        showPauseButton={manhattanOutput}
        pauseButtonProps={{ paused, setPaused, pauseDisabled: !!finalPath }}
        showSpeed={!!manhattanOutput}
        setSpeed={manhattanOutput ? setSpeed : undefined}
        iterative={iterative}
      >
        <StyledManhattanWrapper>
          {hArray.map((hElement, hIndex) => (
            <StyledManhattanRowWrapper key={hElement} className="row-wrapper">
              {wArray.map((wElement, wIndex) => (
                <Element
                  key={`${hElement}-${wElement}`}
                  height={height}
                  width={width}
                  i={hIndex}
                  j={wIndex}
                  hasInputs={!manhattanOutput}
                  dispatchManhattanInput={dispatchManhattanInput}
                  label={iterativeOutput?.S[`${hIndex};${wIndex}`]}
                  edges={iterativeOutput?.track[`${hIndex};${wIndex}`]}
                  edgeLabels={manhattanOutput ? manhattanInput?.[`${hIndex};${wIndex}`] : undefined}
                  finalPath={finalPath?.[`${hIndex};${wIndex}`]}
                />
              ))}
            </StyledManhattanRowWrapper>
          ))}
        </StyledManhattanWrapper>
      </GraphWrapper>
      {finalPath && <h2>Najteža putanja: {output}</h2>}
    </>
  );
};

Manhattan.defaultProps = {
  manhattanInput: null,
  dispatchManhattanInput: () => {},
  manhattanOutput: null,
  iterative: true,
};

Manhattan.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  manhattanInput: PropTypes.shape(),
  dispatchManhattanInput: PropTypes.func,
  manhattanOutput: PropTypes.shape(),
  iterative: PropTypes.bool,
};

export default Manhattan;
