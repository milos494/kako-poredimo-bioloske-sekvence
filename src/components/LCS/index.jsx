import { InputLabel, Slider } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { MdPause, MdPlayArrow } from 'react-icons/md';
import Button from '../../basic/Button';
import Element from '../Element';
import LetterArray from '../LetterArray';
import {
  StyledFullLCSWrapper,
  StyledLCS,
  StyledLCSRowWrapper,
  StyledLCSWrapper,
  StyledTopWrapper,
} from './LCSStyles';

const LCS = ({ firstString, secondString, LCSOutput }) => {
  const [iterativeLCSOutput, setIterativeLCSOutput] = useState(null);
  const [showFinalPath, setShowFinalPath] = useState(false);
  const [finalPath, setFinalPath] = useState(null);
  const [paused, setPaused] = useState(false);
  const [scale, setScale] = useState(1);

  const wArray = Array.from(Array(firstString.length + 1)).map((a, index) =>
    firstString.substring(index),
  );
  const hArray = Array.from(Array(secondString.length + 1)).map((a, index) =>
    secondString.substring(index),
  );

  const showInitialLCSOutput = () => {
    const S = {};
    const track = {};

    for (let j = 0; j <= firstString.length; j += 1) {
      const current = LCSOutput.backtrack[`${0};${j}`];
      S[`${0};${j}`] = LCSOutput.S[`${0};${j}`];
      track[current] = track?.[current] ? `${track[current]}--${0};${j}` : `${0};${j}`;
    }

    for (let i = 0; i <= secondString.length; i += 1) {
      const current = LCSOutput.backtrack[`${i};${0}`];
      S[`${i};${0}`] = LCSOutput.S[`${i};${0}`];
      track[current] = track?.[current] ? `${track[current]}--${i};${0}` : `${i};${0}`;
    }

    setIterativeLCSOutput({ S, track, i: 1, j: 1 });
  };

  const showLCSOutput = useCallback(() => {
    const { S, track, i, j } = iterativeLCSOutput;
    if (i === secondString.length + 1) {
      setShowFinalPath(true);
      return;
    }
    if (j === firstString.length + 1) {
      setIterativeLCSOutput({ S, track, i: i + 1, j: 1 });
      return;
    }

    const newS = { ...S, [`${i};${j}`]: LCSOutput.S[`${i};${j}`] };
    const current = LCSOutput.backtrack[`${i};${j}`];
    const newTrack = {
      ...track,
      [current]: track?.[current] ? `${track[current]}--${i};${j}` : `${i};${j}`,
    };

    setIterativeLCSOutput({ S: newS, track: newTrack, i, j: j + 1 });
  }, [iterativeLCSOutput]);

  const handleScaleChange = (e) => {
    setScale(e.target.value);
  };

  useEffect(() => {
    let timeout;
    if (LCSOutput && !iterativeLCSOutput) {
      showInitialLCSOutput();
    }
    if (LCSOutput && iterativeLCSOutput && !paused) {
      timeout = setTimeout(() => {
        showLCSOutput();
      }, 100);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [LCSOutput, iterativeLCSOutput, paused]);

  useEffect(() => {
    if (showFinalPath && LCSOutput) {
      setFinalPath(LCSOutput.trackLongestSequence);
    }
  }, [showFinalPath, LCSOutput]);

  return (
    <StyledFullLCSWrapper>
      <StyledTopWrapper>
        <Button label={paused ? <MdPlayArrow /> : <MdPause />} onClick={() => setPaused(!paused)} />
        <InputLabel style={{ marginLeft: '20px' }}>Zoom in/out:</InputLabel>
        <Slider
          label="Zoom in/out"
          size="small"
          defaultValue={1}
          step={0.1}
          min={0.4}
          max={1}
          onChange={handleScaleChange}
          style={{ width: '200px' }}
          marks
          valueLabelDisplay="on"
        />
      </StyledTopWrapper>
      <StyledLCS scale={scale}>
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
                    label={iterativeLCSOutput?.S[`${hIndex};${wIndex}`]}
                    edges={iterativeLCSOutput?.track[`${hIndex};${wIndex}`]}
                    finalPath={finalPath?.[`${hIndex};${wIndex}`]}
                    showDiagonalEdge
                  />
                ))}
              </StyledLCSRowWrapper>
            ))}
          </StyledLCSWrapper>
        </StyledLCSRowWrapper>
      </StyledLCS>
    </StyledFullLCSWrapper>
  );
};

LCS.propTypes = {
  firstString: PropTypes.string.isRequired,
  secondString: PropTypes.string.isRequired,
  LCSOutput: PropTypes.shape().isRequired,
};

export default LCS;
