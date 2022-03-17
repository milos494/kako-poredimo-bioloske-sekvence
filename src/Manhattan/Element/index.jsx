import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledDownEdge,
  StyledElementFullWrapper,
  StyledElementLightWrapper,
  StyledNode,
  StyledRightEdge,
  StyledInput,
  StyledLabel,
  // StyledDiagonalEdge,
} from './ElementStyles';

function Element({
  height,
  width,
  coordindates: { i, j },
  hasInputs,
  edgeLabels,
  label,
  setManhattanInput,
  manhattanInput,
  edges,
}) {
  const hasRightEdge = j + 1 !== width;
  const hasDownEdge = i + 1 !== height;
  const [rightError, setRightError] = useState(false);
  const [downError, setDownError] = useState(false);
  const [colorRight, setColorRight] = useState(null);
  const [colorDown, setColorDown] = useState(null);

  const [rightLabel, setRightLabel] = useState(null);
  const [downLabel, setDownLabel] = useState(null);

  useEffect(() => {
    if (edges) {
      edges.forEach((edge) => {
        if (parseInt(edge.split(';')[0], 10) === i) {
          setColorRight(true);
        } else {
          setColorDown(true);
        }
      });
    }
  }, [edges]);
  useEffect(() => {
    if (edgeLabels) {
      Object.keys(edgeLabels).forEach((node) => {
        if (parseInt(node.split(';')[0], 10) === i) {
          setRightLabel(edgeLabels[node]);
        } else {
          setDownLabel(edgeLabels[node]);
        }
      });
    }
  }, [edgeLabels]);

  const rightInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value) {
      setRightError(false);
      setManhattanInput({
        ...manhattanInput,
        [`${i};${j}`]: { ...manhattanInput[`${i};${j}`], [`${i};${j + 1}`]: value },
      });
    } else {
      setRightError(true);
    }
  };
  const downInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value) {
      setDownError(false);
      setManhattanInput({
        ...manhattanInput,
        [`${i};${j}`]: { ...manhattanInput[`${i};${j}`], [`${i + 1};${j}`]: value },
      });
    } else {
      setDownError(true);
    }
  };

  return (
    <StyledElementFullWrapper>
      <StyledElementLightWrapper>
        <StyledNode>
          <StyledLabel>{label}</StyledLabel>
        </StyledNode>
        {hasRightEdge && (
          <StyledRightEdge color={colorRight}>
            {hasInputs && <StyledInput onChange={rightInputChange} hasError={rightError} />}
            {rightLabel && <StyledLabel>{rightLabel}</StyledLabel>}
          </StyledRightEdge>
        )}
        {/* <StyledDiagonalEdge /> */}
      </StyledElementLightWrapper>
      {hasDownEdge && (
        <StyledDownEdge color={colorDown}>
          {hasInputs && <StyledInput onChange={downInputChange} hasError={downError} />}
          {downLabel && <StyledLabel>{downLabel}</StyledLabel>}
        </StyledDownEdge>
      )}
    </StyledElementFullWrapper>
  );

  // return (
  //   <div className='cvor-wrapper'>
  //     <div className='hotizontal'>
  //       <div className='cvor'></div>
  //       <div className={`horizontal-edge-${desnoActive}`}>23</div>
  //     </div>
  //     <div className={`vertical-edge-${doleActive}`}>32</div>
  //   </div>
  // );
}

Element.defaultProps = {
  edgeLabels: null,
  label: '',
  manhattanInput: {},
  setManhattanInput: () => {},
  edges: null,
};

Element.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  coordindates: PropTypes.shape({ i: PropTypes.number, j: PropTypes.number }).isRequired,
  hasInputs: PropTypes.bool.isRequired,
  edgeLabels: PropTypes.shape(),
  edges: PropTypes.shape(),
  label: PropTypes.string,
  setManhattanInput: PropTypes.func,
  manhattanInput: PropTypes.shape(),
};

export default Element;
