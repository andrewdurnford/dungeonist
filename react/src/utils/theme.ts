import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    /* padding: 0; */
    /* margin: 0; */
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    font-size: 16px;
    margin: 0;
  }

  header {
    padding: 1rem 2rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 1024px;
  }

  main {
    display: flex;
    flex-direction: column;
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 2rem 2rem;
  }

  label {
    display: inline-block;
    margin-top: 1rem;
    width: 100%;
  }

  input[type=text],
  input[type=number] {
    display: inline-block;
    padding: 3px 8px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.black};
    width: 100%;
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    text-decoration: inherit;
  }

  select {
    display: inline-block;
    padding: 3px 8px;
    border-radius: 4px;
    border: 1px solid black;
    width: 100%;

    /* Custom arrow */
    color: black;
    background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 16px 12px;
    appearance: none;

    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    text-decoration: inherit;
  }

  textarea {
    display: inline-block;
    padding: 3px 8px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.black};
    resize: none;
    width: 100%;
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    text-decoration: inherit;
  }
`;

export const colors = {
  black: "#000000",
  white: "#FFFFFF",
  blue400: "#60A5FA",
  blue500: "#3B82F6",
  blue600: "#2563EB",
  gray100: "#F3F4F6",
  gray200: "#E5E7EB",
  gray500: "#9CA3AF",
  gray600: "#4B5563",
  gray700: "#374151",
  red50: "#FEF2F2",
  red200: "#FECACA",
  red400: "#F87171",
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
