import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`  
  :root {
    font-size: 62.5%;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
    background: ${({ theme }) => theme.color.background};
  }
`;
