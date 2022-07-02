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

export const StyledFullLCSWrapper = styled.div`
  max-width: calc(100vw - 380px);
`;

export const StyledTopWrapper = styled.div`
  display: flex;
  width: 550px;
  align-items: center;
  justify-content: space-between;
`;
