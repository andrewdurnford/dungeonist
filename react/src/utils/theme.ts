import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: sans-serif;
    line-height: 1.5;
    font-size: 16px;
  }
`;

export const colors = {
  black: "#000000",
  white: "#FFFFFF",
};

export const theme = {
  colors,
};
