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
`;
