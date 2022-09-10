import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar {
      width: 12px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #1976d2;
    }

    h1, h2, h3, h4, h5, p, a, input, li {
      font-family: Roboto;
      color: #1a1a1a;
    }

    p, li {
      font-size: 14px;
      line-height: 18px;
    }
    a {
      font-size: 18px;
      line-height: 20px;
    }

    .content-wrapper {
      margin: 20px;

      img {
        margin: 20px 0;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
      }

    }

  }
`;

export const StyledAppWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 100vw;
`;

export const StyledTitle = styled.h1`
  text-align: center;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const StyledGlobalAppWrapper = styled.div`
  width: 100%;
`;
