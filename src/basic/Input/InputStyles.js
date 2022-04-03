import styled from '@emotion/styled';
import { Input } from '@mui/material';

export const StyledInput = styled(Input)`
  text-align: center;
  border: 1px solid;
  border-color: ${({ hasError }) => (hasError ? 'red' : 'lightgray')};
  height: 50px;
  width: 200px;
  border-radius: 5px;
  padding: 5px;
`;
