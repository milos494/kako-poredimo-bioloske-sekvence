/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Element from './Element';
import manhattan from '../utils/manhattan';
import { StyledManhattanRowWrapper, StyledManhattanWrapper } from './ManhattanStyles';
import Button from '../basic/Button';

const Manhattan = ({ width, height }) => {
  const [manhattanInput, setManhattanInput] = useState({});
  const [manhattanOutput, setManhattanOutput] = useState(null);
  const hArray = Array.from(Array(height));
  const wArray = Array.from(Array(width));
  const submit = () => {
    const output = manhattan(manhattanInput, width, height);
    setManhattanOutput(output);
  };
  return (
    <StyledManhattanWrapper>
      {hArray.map((_, hIndex) => (
        <StyledManhattanRowWrapper key={hIndex} className="row-wrapper">
          {wArray.map((_, wIndex) => (
            <Element
              key={wIndex}
              height={height}
              width={width}
              coordindates={{ i: hIndex, j: wIndex }}
              hasInputs={true}
              manhattanInput={manhattanInput}
              setManhattanInput={setManhattanInput}
            />
          ))}
        </StyledManhattanRowWrapper>
      ))}
      <Button type="button" onClick={submit} label="Get Manhattan" />
      {manhattanOutput && (
        <>
          {hArray.map((_, hIndex) => (
            <StyledManhattanRowWrapper key={hIndex} className="row-wrapper">
              {wArray.map((_, wIndex) => (
                <Element
                  key={wIndex}
                  height={height}
                  width={width}
                  coordindates={{ i: hIndex, j: wIndex }}
                  hasInputs={false}
                  label={manhattanOutput.S[`${hIndex};${wIndex}`]}
                  edges={manhattanOutput.track[`${hIndex};${wIndex}`]}
                  edgeLabels={manhattanInput[`${hIndex};${wIndex}`]}
                />
              ))}
            </StyledManhattanRowWrapper>
          ))}
        </>
      )}
    </StyledManhattanWrapper>
  );
};

Manhattan.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default Manhattan;
