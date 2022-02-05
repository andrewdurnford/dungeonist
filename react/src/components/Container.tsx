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
    $gap !== "none" &&
    css`
      gap: ${$gap};
    `};
  max-width: 768px;
  margin-left: 0;
  margin-right: 0;
  padding: 0;
`;

interface ContainerProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  className?: string;
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
  ...props
}: ContainerProps) {
  return (
    <StyledContainer
      $flexDirection={direction}
      $flexWrap={wrap}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $gap={gap}
      {...props}
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
  /* padding: 1rem; */
  max-width: 768px;
`;

export default Container;
