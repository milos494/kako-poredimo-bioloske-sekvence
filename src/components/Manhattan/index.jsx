/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Element from '../Element';
import { StyledManhattanRowWrapper, StyledManhattanWrapper } from './ManhattanStyles';

const Manhattan = ({ width, height, manhattanInput, setManhattanInput, manhattanOutput }) => {
  const hString = 'a'.repeat(height);
  const wString = 'b'.repeat(width);
  const hArray = Array.from(Array(height)).map((_, index) => hString.substring(index));
  const wArray = Array.from(Array(width)).map((_, index) => wString.substring(index));

  return (
    <StyledManhattanWrapper>
      {hArray.map((hElement, hIndex) => (
        <StyledManhattanRowWrapper key={hElement} className="row-wrapper">
          {wArray.map((wElement, wIndex) => (
            <Element
              key={`${hElement}-${wElement}`}
              height={height}
              width={width}
              coordindates={{ i: hIndex, j: wIndex }}
              hasInputs={!manhattanOutput}
              manhattanInput={manhattanInput}
              setManhattanInput={setManhattanInput}
              label={manhattanOutput?.S[`${hIndex};${wIndex}`]}
              edges={manhattanOutput?.track[`${hIndex};${wIndex}`]}
              edgeLabels={manhattanInput?.[`${hIndex};${wIndex}`]}
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
