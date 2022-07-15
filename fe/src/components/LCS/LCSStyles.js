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
