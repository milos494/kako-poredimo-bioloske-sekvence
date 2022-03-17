import styled from 'styled-components';

export const StyledArrowWrapper = styled.div`
  position: absolute;
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
