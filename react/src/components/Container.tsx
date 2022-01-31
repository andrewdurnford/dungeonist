import React from "react";
import styled, { css } from "styled-components";

type FlexDirection = "row" | "column";
type FlexWrap = "wrap" | "nowrap" | "wrap-reverse";
type JustifyContent = "flex-start" | "flex-end" | "center" | "space-between";
type AlignItems = "stretch" | "center" | "flex-start" | "flex-end";

const StyledContainer = styled.div<{
  $flexDirection: FlexDirection;
  $flexWrap: FlexWrap;
  $justifyContent: JustifyContent;
  $alignItems: AlignItems;
  $gap: string;
}>`
  display: flex;
  flex-direction: ${({ $flexDirection: $direction }) => $direction};
  flex-wrap: ${({ $flexWrap }) => $flexWrap};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  ${({ $gap }) =>
    $gap &&
    css`
      gap: ${$gap};
    `};
  max-width: 768px;
  margin-left: 0;
  margin-right: 0;
  padding: 0;
`;

interface ContainerProps {
  children?: React.ReactNode;
  direction?: FlexDirection;
  wrap?: FlexWrap;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  gap?: string;
}

function Container({
  direction = "row",
  wrap = "wrap",
  justifyContent = "flex-start",
  alignItems = "stretch",
  gap = "none",
  children,
}: ContainerProps) {
  return (
    <StyledContainer
      $flexDirection={direction}
      $flexWrap={wrap}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $gap={gap}
    >
      {children}
    </StyledContainer>
  );
}

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  max-width: 768px;
`;

export default Container;
