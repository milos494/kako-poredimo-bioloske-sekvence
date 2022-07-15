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
  dispatchManhattanInput,
  edges,
  showDiagonalEdge,
  finalPath,
}) => {
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

  useEffect(() => {
    const newEdges = typeof edges !== 'object' ? edges?.split('--') : edges;
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
    if (edgeLabels && !hasInputs) {
      Object.keys(edgeLabels).forEach((node) => {
        if (parseInt(node.split(';')[0], 10) === i) {
          setRightLabel(edgeLabels[node]);
        } else {
          setDownLabel(edgeLabels[node]);
        }
      });
    }
  }, [edgeLabels, hasInputs]);

  const rightInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value || value === 0) {
      setRightError(false);
      dispatchManhattanInput({ type: 'right', i, j, value });
    } else {
      setRightError(true);
    }
  };
  const downInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value || value === 0) {
      setDownError(false);
      dispatchManhattanInput({ type: 'down', i, j, value });
    } else {
      setDownError(true);
    }
  };

  return (
    <StyledElementFullWrapper>
      <StyledElementLightWrapper>
        <StyledNode finalNode={label && !hasRightEdge && !hasDownEdge && !hasDiagonalEdge}>
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
  dispatchManhattanInput: () => {},
  edges: null,
  showDiagonalEdge: false,
  finalPath: '',
};

Element.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  i: PropTypes.number.isRequired,
  j: PropTypes.number.isRequired,

  hasInputs: PropTypes.bool.isRequired,
  edgeLabels: PropTypes.shape(),
  edges: PropTypes.string,
  label: PropTypes.string,
  dispatchManhattanInput: PropTypes.func,
  showDiagonalEdge: PropTypes.bool,
  finalPath: PropTypes.string,
};

export default memo(Element);
