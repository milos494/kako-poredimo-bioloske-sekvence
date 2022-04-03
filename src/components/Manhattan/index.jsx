/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { generate } from 'randomstring';
import Element from '../Element';
import { StyledManhattanRowWrapper, StyledManhattanWrapper } from './ManhattanStyles';

const Manhattan = ({ width, height, manhattanInput, setManhattanInput, manhattanOutput }) => {
  // const [manhattanInput, setManhattanInput] = useState({});
  // const [manhattanOutput, setManhattanOutput] = useState(null);
  const hArray = Array.from(Array(height)).map(() =>
    generate({ length: 12, charset: 'alphabetic' }),
  );
  const wArray = Array.from(Array(width)).map(() =>
    generate({ length: 12, charset: 'alphabetic' }),
  );
  // const submit = () => {
  //   const output = manhattan(manhattanInput, width, height);
  //   setManhattanOutput(output);
  // };
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
      {/* {manhattanOutput && (
        <>
          {hArray.map((_, hIndex) => (
            <StyledManhattanRowWrapper key={hIndex} className='row-wrapper'>
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
      )} */}
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
