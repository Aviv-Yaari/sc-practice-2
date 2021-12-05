import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle<{ theme: any }>`
  ${reset}

  body {
      font-family: 'Red Hat Display', sans-serif;
      line-height: 1.5;
      color: ${(props) => props.theme.colors.textPrimary};
  }
  
  h1 {
    color: #000;
    font-weight: 900;
    font-size: 1.5em;
  }
`;
