import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { MdArrowForwardIos } from 'react-icons/md';
import {
  StyledDownEdge,
  StyledElementFullWrapper,
  StyledElementLightWrapper,
  StyledNode,
  StyledRightEdge,
  StyledInput,
  StyledLabel,
  StyledDiagonalEdge,
} from './ElementStyles';

const Element = ({
  height,
  width,
  i,
  j,
  hasInputs,
  edgeLabels,
  label,
  setManhattanInput,
  manhattanInput,
  edges,
  showDiagonalEdge,
  finalPath,
}) => {
  // const { i, j } = coordindates;

  const hasRightEdge = j + 1 !== width;
  const hasDownEdge = i + 1 !== height;
  const hasDiagonalEdge = showDiagonalEdge && hasRightEdge && hasDownEdge;
  const [rightError, setRightError] = useState(false);
  const [downError, setDownError] = useState(false);
  const [colorRight, setColorRight] = useState(null);
  const [colorDown, setColorDown] = useState(null);
  const [colorDiagonal, setColorDiagonal] = useState(null);

  const [rightLabel, setRightLabel] = useState(null);
  const [downLabel, setDownLabel] = useState(null);
  // const { i, j } = coordindates;
  // useEffect(() => {
  // if (i === 0 && j === 0) {
  //   console.log(
  //     'rerender element',
  //     hasInputs,
  //     edgeLabels,
  //     label,
  //     setManhattanInput,
  //     manhattanInput,
  //     edges,
  //     showDiagonalEdge,
  //     finalPath,
  //     i,
  //     j,
  //   );
  // }
  useEffect(() => {
    const newEdges = edges?.split('--');
    if (newEdges) {
      newEdges.forEach((edge) => {
        if (showDiagonalEdge && +edge.split(';')[0] === i + 1 && +edge.split(';')[1] === j + 1) {
          const finalPathIsDiagonal = finalPath?.split('?')?.[1];
          if (finalPathIsDiagonal) {
            setColorDiagonal('red');
          } else if (finalPath === edge) {
            setColorDiagonal('blueviolet');
          } else {
            setColorDiagonal('lightGreen');
          }
        } else if (+edge.split(';')[1] === j + 1) {
          if (finalPath === edge) {
            setColorRight('aqua');
          } else {
            setColorRight('lightGreen');
          }
        } else if (+edge.split(';')[0] === i + 1) {
          // eslint-disable-next-line no-debugger
          // debugger;
          if (finalPath === edge) {
            setColorDown('aqua');
          } else {
            setColorDown('lightGreen');
          }
        }
      });
    }
  }, [edges, showDiagonalEdge, finalPath]);

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
        [`${i};${j}`]: {
          ...manhattanInput[`${i};${j}`],
          [`${i};${j + 1}`]: value,
        },
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
        [`${i};${j}`]: {
          ...manhattanInput[`${i};${j}`],
          [`${i + 1};${j}`]: value,
        },
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
            <MdArrowForwardIos />
          </StyledRightEdge>
        )}
        {hasDiagonalEdge && (
          <StyledDiagonalEdge color={colorDiagonal}>
            <MdArrowForwardIos />
          </StyledDiagonalEdge>
        )}
      </StyledElementLightWrapper>
      {hasDownEdge && (
        <StyledDownEdge color={colorDown}>
          {hasInputs && <StyledInput onChange={downInputChange} hasError={downError} />}
          {downLabel && <StyledLabel>{downLabel}</StyledLabel>}
          <MdArrowForwardIos />
        </StyledDownEdge>
      )}
    </StyledElementFullWrapper>
  );
};

Element.defaultProps = {
  edgeLabels: null,
  label: '',
  manhattanInput: {},
  setManhattanInput: () => {},
  edges: null,
  showDiagonalEdge: false,
  finalPath: '',
};

Element.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  // coordindates: PropTypes.shape({ i: PropTypes.number, j: PropTypes.number }).isRequired,
  i: PropTypes.number.isRequired,
  j: PropTypes.number.isRequired,

  hasInputs: PropTypes.bool.isRequired,
  edgeLabels: PropTypes.shape(),
  edges: PropTypes.string,
  label: PropTypes.string,
  setManhattanInput: PropTypes.func,
  manhattanInput: PropTypes.shape(),
  showDiagonalEdge: PropTypes.bool,
  finalPath: PropTypes.string,
};

export default memo(Element);
