import styled from 'styled-components';

export const StyledLCSWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLCSRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledLCS = styled.div`
  margin: 20px;
  transform-origin: top left;
  transform: scale(${({ scale }) => scale});
  transform-origin: top left;
`;

export const StyledLCSOutputStrings = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledLCSOutputLetter = styled.p`
  width: 30px;
  height: 30px;
  font-size: 30px;
  line-height: 30px;
  text-align: center;
  margin: 0;
  color: ${({ active }) => active && '#007FFF'};
  flex: 0 0 30px;
`;

export const StyledLCSOuput = styled.div`
  max-width: calc(100vw - 420px);
  overflow-x: ${({ scroll }) => (scroll ? 'scroll' : 'hidden')};
  overflow-y: hidden;
  position: relative;
  margin-right: 20px;
  scroll-behavior: smooth;
  padding-bottom: 20px;

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
