import styled from 'styled-components';
import Input from '../../basic/Input';

export const StyledElementFullWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const StyledElementLightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  align-items: center;
`;

export const StyledNode = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: transparent;
  position: relative;
  border: 1px solid yellowgreen;
  background-color: lightgray;
  z-index: 1;
`;

export const StyledRightEdge = styled.div`
  position: relative;
  width: 100px;
  height: 6px;
  background: ${({ color }) => (color ? 'lightgreen' : 'lightgray')};
  z-index: 1;
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    height: 6px;
    width: 15px;
    transform: translateY(-50%) rotate(45deg);
    z-index: 20;
    transform-origin: right;
    background: inherit;
    border-radius: 5px;
  }
  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    height: 6px;
    width: 15px;
    transform: translateY(-50%) rotate(-45deg);
    z-index: 20;
    transform-origin: right;
    background: inherit;
    border-radius: 5px;
  }
`;

export const StyledDownEdge = styled.div`
  position: relative;
  width: 6px;
  height: 100px;
  margin-left: 12px;
  background: ${({ color }) => (color ? 'lightgreen' : 'lightgray')};
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0%;
    width: 6px;
    height: 15px;
    transform: translateX(-50%) rotate(45deg);
    z-index: 20;
    transform-origin: bottom;
    background: inherit;
    border-radius: 5px;
  }
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0%;
    width: 6px;
    height: 15px;
    transform: translateX(-50%) rotate(-45deg);
    z-index: 20;
    transform-origin: bottom;
    background: inherit;
    border-radius: 5px;
  }
`;

export const StyledInput = styled(Input)`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledLabel = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
`;

export const StyledDiagonalEdge = styled.div`
  position: absolute;
  width: 100px;
  height: 6px;
  background-color: lightgreen;
  transform: rotate(45deg) scaleX(1.75);
  transform-origin: top left;
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    height: 6px;
    width: 15px;
    transform: translateY(-50%) rotate(45deg);
    z-index: 20;
    transform-origin: right;
    background: inherit;
    border-radius: 5px;
  }
  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    height: 6px;
    width: 15px;
    transform: translateY(-50%) rotate(-45deg);
    z-index: 20;
    transform-origin: right;
    background: inherit;
    border-radius: 5px;
  }
`;
