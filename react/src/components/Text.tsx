import React from "react";
import styled from "styled-components";

type Size = "16" | "24" | "32";
type Weight = "400" | "600";

const StyledText = styled.span<{ $size: Size; $weight: Weight }>`
  font-size: ${({ $size }) => `${$size}px`};
  font-weight: ${({ $weight }) => $weight};
`;

export interface TextProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  className?: string;
  children?: React.ReactNode;
  size?: Size;
  weight?: Weight;
}

function Text({ size = "16", weight = "400", children, ...props }: TextProps) {
  return (
    <StyledText $size={size} $weight={weight} {...props}>
      {children}
    </StyledText>
  );
}

export default Text;
