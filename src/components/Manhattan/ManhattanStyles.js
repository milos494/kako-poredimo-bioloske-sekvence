import styled from "styled-components";
import { StyledButton } from "../../basic/Button/ButtonStyles";

export const StyledManhattanRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledManhattanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${StyledButton} {
    margin: 40px 0;
  }
`;
