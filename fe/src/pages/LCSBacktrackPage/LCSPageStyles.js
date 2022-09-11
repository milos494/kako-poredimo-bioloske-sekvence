import styled from 'styled-components';
import { StyledInputWrapper } from '../../basic/Input/InputStyles';

export const StyledLCSPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  max-width: calc(100vw - 420px);
`;

export const StyledInputOutputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${StyledInputWrapper} {
    &:first-child {
      margin-left: 0;
    }
  }
`;
