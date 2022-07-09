import styled from 'styled-components';
import { StyledButton } from '../../basic/Button/ButtonStyles';

export const StyledGraphFullScrollWrapper = styled.div`
  max-width: calc(100vw - 420px);
  overflow-x: ${({ shouldScroll }) => shouldScroll && 'scroll'};
  height: ${({ graphHeight }) => `${graphHeight}px` ?? 'auto'};
  position: relative;
  margin-right: 20px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    height: 12px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #1976d2;
  }
`;

export const StyledGraphFullScaleWrapper = styled.div`
  transform-origin: top left;
  transform: scale(${({ scale }) => scale});
  transform-origin: top left;
`;

export const StyledScrollButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
  margin: 10px 20px 10px 0;
  padding-top: 10px;

  box-shadow: rgb(0 0 0 / 35%) 0px 6px 3px -3px;

  ${StyledButton} {
    margin: 10px 0;
  }
`;

export const StyledSlidersWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
    margin: 10px;
  }
`;
