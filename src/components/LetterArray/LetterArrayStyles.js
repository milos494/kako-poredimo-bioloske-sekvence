import { styled } from '@mui/system';

export const StyledLetterArrayWrapper = styled('div')`
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};
  margin-left: ${({ horizontal }) => horizontal && '120px'};
  justify-content: ${({ horizontal }) => !horizontal && 'center'};
`;

export const StyledLetterElement = styled('p')`
  width: 102px;
  height: 102px;
  font-size: 30px;
  padding: 35px;
  box-sizing: border-box;
  margin: 0;
  flex: 0 0 102px;
`;
