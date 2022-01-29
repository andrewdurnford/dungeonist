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

const StyledSelect = styled.select<{ $error: boolean }>`
  display: inline-block;
  padding: 5px 2rem 5px 8px;
  border-radius: 4px;
  border: 1px solid
    ${({ $error, theme }) =>
      $error ? theme.colors.red500 : theme.colors.black};

  /* Custom arrow */
  color: ${({ theme }) => theme.colors.black};
  /* TODO: refactor to use SVG/Icon component */
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  appearance: none;

  font-family: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  text-decoration: inherit;
`;

interface SelectProps extends React.ComponentPropsWithoutRef<"select"> {
  label: string;
  error?: string;
  required?: boolean;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ name, label, error, required = false, children, ...props }, ref) => (
    <Container>
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      {error && <ErrorText>{error}</ErrorText>}
      <StyledSelect
        id={name}
        name={name}
        aria-label={label}
        aria-required={required}
        $error={!!error}
        ref={ref}
        {...props}
      >
        {children}
      </StyledSelect>
    </Container>
  )
);

export default Select;
