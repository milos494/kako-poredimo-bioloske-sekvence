import { Slider } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import {
  MdFastForward,
  MdFastRewind,
  MdOutlineSpeed,
  MdOutlineZoomIn,
  MdOutlineZoomOut,
  MdPause,
  MdPlayArrow,
} from 'react-icons/md';
import {
  StyledControlsWrapper,
  StyledGraphFullScaleWrapper,
  StyledGraphFullScrollWrapper,
  StyledScrollButtonsWrapper,
  StyledSlidersWrapper,
} from './GraphWrapperStyles';
import Button from '../../basic/Button';

const GraphWrapper = ({
  height,
  width,
  showPauseButton,
  pauseButtonProps,
  showSpeed,
  setSpeed,
  children,
}) => {
  const [shouldScroll, setShouldScroll] = useState(true);
  const [graphHeight, setGraphHeight] = useState(null);
  const [disabledScroll, setDisabledScroll] = useState(false);
  const { paused, pauseDisabled, setPaused } = pauseButtonProps;

  const [scale, setScale] = useState(1);
  const ref = useRef();

  const handleScaleChange = (e) => {
    setScale(e.target.value);
  };

  const handleSpeedChange = (e) => {
    setSpeed(e.target.value);
  };

  const handleScroll = (by) => {
    ref.current.scrollLeft += by;
  };

  useEffect(() => {
    const containerWidth = window.innerWidth - 420;
    const graphWidth = (102 * width + 32) * scale;
    setGraphHeight((102 * (height - 1) + 50) * scale);
    if (graphWidth > containerWidth) {
      setShouldScroll(true);
      setDisabledScroll(false);
    } else {
      setShouldScroll(false);
      setDisabledScroll(true);
    }
  }, [scale]);
  return (
    <div>
      <StyledControlsWrapper>
        <StyledSlidersWrapper>
          <MdOutlineZoomOut />
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
          <MdOutlineZoomIn />
          {showSpeed && (
            <>
              <MdOutlineSpeed />
              <Slider
                label="Zoom in/out"
                size="small"
                defaultValue={300}
                step={100}
                min={100}
                max={600}
                onChange={handleSpeedChange}
                style={{ width: '200px' }}
                marks
                valueLabelDisplay="on"
              />
            </>
          )}
        </StyledSlidersWrapper>
        <StyledScrollButtonsWrapper>
          {showPauseButton && (
            <Button
              label={paused ? <MdPlayArrow /> : <MdPause />}
              onClick={() => setPaused(!paused)}
              disabled={!!pauseDisabled}
            />
          )}
          <Button
            type="button"
            startIcon={<MdFastRewind />}
            onClick={() => handleScroll(-200)}
            disabled={disabledScroll}
          />
          <Button
            type="button"
            startIcon={<MdFastForward />}
            onClick={() => handleScroll(200)}
            disabled={disabledScroll}
          />
        </StyledScrollButtonsWrapper>
      </StyledControlsWrapper>

      <StyledGraphFullScrollWrapper shouldScroll={shouldScroll} graphHeight={graphHeight} ref={ref}>
        <StyledGraphFullScaleWrapper scale={scale}>{children}</StyledGraphFullScaleWrapper>
      </StyledGraphFullScrollWrapper>
    </div>
  );
};

GraphWrapper.defaultProps = {
  showPauseButton: true,
  pauseButtonProps: {},
  showSpeed: true,
  setSpeed: () => {},
};

GraphWrapper.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
  showPauseButton: PropTypes.bool,
  pauseButtonProps: PropTypes.shape({
    paused: PropTypes.bool.isRequired,
    pauseDisabled: PropTypes.bool.isRequired,
    setPaused: PropTypes.func.isRequired,
  }),
  showSpeed: PropTypes.bool,
  setSpeed: PropTypes.func,
};

export default GraphWrapper;
