import { styled } from '@mui/system';
import Input from '../../basic/Input';

export const StyledElementFullWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const StyledElementLightWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  align-items: center;
`;

export const StyledNode = styled('div')`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: transparent;
  position: relative;
  border: 1px solid yellowgreen;
  background-color: lightgray;
  z-index: 1;
`;

export const StyledRightEdge = styled('div')`
  position: relative;
  width: 70px;
  height: 6px;
  background: ${({ color }) => color ?? 'lightgray'};
  z-index: 1;

  svg {
    position: absolute;
    right: 0;
    top: 50%;
    z-index: 10;
    height: 30px;
    width: 30px;
    transform: translate(10px, -50%);
    color: ${({ color }) => color ?? 'lightgray'};
  }
  /* &::after {
    content: "";
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
    content: "";
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
  } */
`;

export const StyledDownEdge = styled('div')`
  position: relative;
  width: 6px;
  height: 70px;
  margin-left: 12px;
  background: ${({ color }) => (color ? 'lightgreen' : 'lightgray')};
  z-index: 1;

  svg {
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: 10;
    height: 30px;
    width: 30px;
    transform: translate(-50%, 10px) rotate(90deg);
    color: ${({ color }) => (color ? 'lightgreen' : 'lightgray')};
  }
  /* &::after {
    content: "";
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
    content: "";
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
  } */
`;

export const StyledInput = styled(Input)`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 2;
  input {
    text-align: center;
  }
`;

export const StyledLabel = styled('p')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  z-index: 1;
`;

export const StyledDiagonalEdge = styled(StyledRightEdge)`
  position: absolute;
  transform: rotate(45deg) scaleX(1.85);
  transform-origin: top left;
  z-index: 0;

  /* svg {
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: 10;
    height: 30px;
    width: 30px;
    transform: translate(-50%, 10px) rotate(90deg);
    color: ${({ color }) => (color ? 'lightgreen' : 'lightgray')};
  } */
  /* &::after {
    content: "";
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
    content: "";
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
  } */
`;
