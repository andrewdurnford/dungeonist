import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    font-size: 16px;
  }
`;

export const colors = {
  black: "#000000",
  white: "#FFFFFF",
  blue400: "#60A5FA",
  blue500: "#3B82F6",
  blue600: "#2563EB",
  gray200: "#E5E7EB",
  gray600: "#4B5563",
  gray700: "#374151",
  red500: "#EF4444",
};

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const theme = {
  colors,
  breakpoints,
};
