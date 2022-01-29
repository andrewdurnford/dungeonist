import React from "react";
import { LinkProps } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button<{ $variant: Variant }>`
  display: inline-block;
  border-radius: 4px;
  text-decoration: none;
  /* 
    'box-sizing: border-box' does not work with buttons,
    so the border must be subtracted from the padding.
  */
  padding: calc(0.25em - 1px) 0.5em;

  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  color: ${({ $variant, theme }) =>
    $variant === "primary" ? theme.colors.white : theme.colors.black};
  background: ${({ $variant, theme }) =>
    $variant === "primary" ? theme.colors.blue400 : "none"};
  border: 1px solid
    ${({ $variant, theme }) =>
      $variant === "primary" ? theme.colors.blue600 : theme.colors.black};

  &:hover,
  &:focus {
    background: ${({ $variant, theme }) =>
      $variant === "primary" ? theme.colors.blue500 : theme.colors.gray200};
  }
`;

type Variant = "primary" | "secondary";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  loading?: boolean;
  variant?: Variant;
}

type ButtonProps = Props & Partial<LinkProps>;

function Button({
  as = "button",
  type = "button",
  variant = "primary",
  loading = false,
  disabled = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      as={as}
      type={as === "button" ? type : undefined}
      $variant={variant}
      disabled={loading || disabled}
      {...props}
    >
      {children && loading ? <div>"Loading..."</div> : children}
    </StyledButton>
  );
}

export default Button;
