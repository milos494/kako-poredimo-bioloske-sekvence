/* eslint-disable react/no-array-index-key */
import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Element from '../Element';
import { StyledManhattanRowWrapper, StyledManhattanWrapper } from './ManhattanStyles';

const Manhattan = ({ width, height, manhattanInput, setManhattanInput, manhattanOutput }) => {
  const hString = 'a'.repeat(height);
  const wString = 'b'.repeat(width);
  const hArray = Array.from(Array(height)).map((_, index) => hString.substring(index));
  const wArray = Array.from(Array(width)).map((_, index) => wString.substring(index));
  const [iterativeManhattanOutput, setIterativeManhattanOutput] = useState(null);
  const [showFinalPath, setShowFinalPath] = useState(false);
  const [finalPath, setFinalPath] = useState(null);

  const showInitialManhattanOutput = () => {
    const S = {};
    const track = {};

    for (let j = 0; j < width; j += 1) {
      const current = manhattanOutput.backtrack[`${0};${j}`];
      S[`${0};${j}`] = manhattanOutput.S[`${0};${j}`];
      track[current] = track?.[current] ? [...track[current], `${0};${j}`] : [`${0};${j}`];
    }

    for (let i = 0; i < height; i += 1) {
      const current = manhattanOutput.backtrack[`${i};${0}`];
      S[`${i};${0}`] = manhattanOutput.S[`${i};${0}`];
      track[current] = track?.[current] ? [...track[current], `${i};${0}`] : [`${i};${0}`];
    }

    setIterativeManhattanOutput({ S, track, i: 1, j: 1 });
  };

  const showManhattanOutput = useCallback(() => {
    const { S, track, i, j } = iterativeManhattanOutput;
    if (i === height) {
      setShowFinalPath(true);
      return;
    }
    if (j === width) {
      setIterativeManhattanOutput({ S, track, i: i + 1, j: 1 });
      return;
    }

    const newS = { ...S, [`${i};${j}`]: manhattanOutput.S[`${i};${j}`] };
    const current = manhattanOutput.backtrack[`${i};${j}`];
    const newTrack = {
      ...track,
      [current]: track?.[current] ? [...track[current], `${i};${j}`] : [`${i};${j}`],
    };

    setIterativeManhattanOutput({ S: newS, track: newTrack, i, j: j + 1 });
  }, [iterativeManhattanOutput]);

  useEffect(() => {
    if (manhattanOutput && !iterativeManhattanOutput) {
      showInitialManhattanOutput();
    }
    if (manhattanOutput && iterativeManhattanOutput) {
      setTimeout(() => {
        showManhattanOutput();
      }, 1000);
    }
  }, [manhattanOutput, iterativeManhattanOutput]);

  useEffect(() => {
    if (showFinalPath && manhattanOutput) {
      setFinalPath(manhattanOutput.trackLongestSequence);
    }
  }, [showFinalPath, manhattanOutput]);

  return (
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
              manhattanInput={manhattanInput}
              setManhattanInput={setManhattanInput}
              label={iterativeManhattanOutput?.S[`${hIndex};${wIndex}`]}
              edges={iterativeManhattanOutput?.track[`${hIndex};${wIndex}`]}
              edgeLabels={manhattanInput?.[`${hIndex};${wIndex}`]}
              finalPath={finalPath?.[`${hIndex};${wIndex}`]}
            />
          ))}
        </StyledManhattanRowWrapper>
      ))}
    </StyledManhattanWrapper>
  );
};

Manhattan.defaultProps = {
  manhattanInput: null,
  setManhattanInput: () => {},
  manhattanOutput: null,
};

Manhattan.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  manhattanInput: PropTypes.shape(),
  setManhattanInput: PropTypes.func,
  manhattanOutput: PropTypes.shape(),
};

export default Manhattan;
