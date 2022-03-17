import styled from 'styled-components';

export const StyledInput = styled.input`
  text-align: center;
  border: 1px solid;
  border-color: ${({ hasError }) => (hasError ? 'red' : 'lightgray')};
  height: 30px;
  width: 100px;
  border-radius: 5px;
`;
