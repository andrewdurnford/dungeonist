import React from "react";
import styled from "styled-components";
import Label from "./Label";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

// TODO: refactor into Text component
const ErrorText = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.red500};
`;

const StyledTextArea = styled.textarea`
  display: inline-block;
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.black};

  font-family: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  text-decoration: inherit;

  &:hover {
    cursor: text;
  }
`;

interface TextAreaProps extends React.ComponentPropsWithoutRef<"textarea"> {
  label: string;
  error?: string;
  required?: boolean;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ name, label, error, rows = 4, required = false, ...props }, ref) => (
    <Container>
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      {error && <ErrorText>{error}</ErrorText>}
      <StyledTextArea
        id={name}
        name={name}
        rows={rows}
        aria-label={label}
        aria-required={required}
        ref={ref}
        {...props}
      />
    </Container>
  )
);

export default TextArea;
