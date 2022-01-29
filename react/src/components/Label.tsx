import React from "react";
import styled, { css } from "styled-components";

const StyledLabel = styled.label<{ $required: boolean }>`
  display: block;

  ${({ $required }) =>
    $required &&
    css`
      ::after {
        content: "*";
      }
    `};
`;

interface LabelProps extends React.ComponentPropsWithoutRef<"label"> {
  required?: boolean;
}

function Label({ required = false, children, ...props }: LabelProps) {
  return (
    <StyledLabel $required={required} {...props}>
      {children}
    </StyledLabel>
  );
}

export default Label;
