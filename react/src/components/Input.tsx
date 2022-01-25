import React from "react";
import styled, { css } from "styled-components";
import ErrorText from "./ErrorText";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 0.25rem;
  }
`;

const Label = styled.label<{ $required: boolean }>`
  display: block;

  ${({ $required }) =>
    $required &&
    css`
      ::after {
        content: "*";
      }
    `};
`;

const StyledInput = styled.input<{ $error: boolean }>`
  display: inline-block;
  padding: 0.25em 0.5em;
  border-radius: 4px;
  border: 1px solid
    ${({ $error, theme }) =>
      $error ? theme.colors.red500 : theme.colors.black};

  font-family: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  text-decoration: inherit;

  &:hover {
    cursor: text;
  }
`;

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  error?: string;
  required?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ name, label, type, error, required = false, ...props }, ref) => (
    <Container>
      <Label htmlFor={name} $required={required}>
        {label}
      </Label>
      {error && <ErrorText>{error}</ErrorText>}
      <StyledInput
        id={name}
        name={name}
        type={type}
        aria-label={label}
        aria-required={required}
        $error={!!error}
        ref={ref}
        {...props}
      />
    </Container>
  )
);

export default Input;
