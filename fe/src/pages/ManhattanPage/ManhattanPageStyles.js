import styled from 'styled-components';
import { StyledInputWrapper } from '../../basic/Input/InputStyles';

export const StyledManhattanPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  flex: 1;

  ${StyledInputWrapper} {
    margin-left: 0;
  }
`;

export const StyledManhattanGetOutputWrapper = styled.div`
  display: flex;
  align-items: center;
`;
