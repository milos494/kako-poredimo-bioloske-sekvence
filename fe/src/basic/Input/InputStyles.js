import { Input } from '@mui/material';
import styled from 'styled-components';

export const StyledInput = styled(Input)`
  text-align: center;
  border: 1px solid;
  border-color: ${({ hasError }) => (hasError ? 'red' : 'lightgray')};
  height: 50px;
  width: 200px;
  border-radius: 5px;
  padding: 5px;
`;

export const StyledInputWrapper = styled.div`
  margin-left: 20px;
`;
