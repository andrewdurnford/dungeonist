import React from "react";
import styled, { css } from "styled-components";

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

const StyledInput = styled.input`
  display: inline-block;
  padding: 0.25em 0.5em;
  border-radius: 4px;

  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  text-decoration: inherit;

  &:hover {
    cursor: text;
  }
`;

// TODO: refactor into a Text component
const ErrorText = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.red500};
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
      {/* TODO: error */}
      <StyledInput
        id={name}
        name={name}
        type={type}
        aria-label={label}
        aria-required={required}
        ref={ref}
        {...props}
      />
    </Container>
  )
);

export default Input;
