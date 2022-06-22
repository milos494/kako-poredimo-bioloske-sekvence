import styled from 'styled-components';

export const StyledLCSWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
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

export const StyledFullLCSWrapper = styled.div`
  max-width: calc(100vw - 380px);
`;
