import React from "react";
import styled, { css } from "styled-components";

type ColSpan =
  | "auto"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";

const StyledCol = styled.div<{ $colSpan: ColSpan }>`
  /* Calculate how much width the column should take of the parent */
  ${({ $colSpan }) =>
    $colSpan !== "auto" &&
    css`
      flex-basis: ${(Number.parseFloat($colSpan) / 12) * 100}%;
    `}
`;

interface ColProps {
  children?: React.ReactNode;
  width?: ColSpan;
}

export function Col({ width = "auto", children }: ColProps) {
  return <StyledCol $colSpan={width}>{children}</StyledCol>;
}

export default Col;
