import React from "react";
import styled, { css } from "styled-components";

const Spacing = {
  none: "0",
  xs: "0.25rem",
  s: "0.5rem",
  m: "1rem",
  l: "1.5rem",
  xl: "2rem",
};

const StyledContainer = styled.div<{
  $px: keyof typeof Spacing;
  $py: keyof typeof Spacing;
  $mt: keyof typeof Spacing;
}>`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  margin: ${({ $mt }) => `${Spacing[$mt]} auto 0`};
  padding: ${({ $px, $py }) => `${Spacing[$py]} ${Spacing[$px]}`};

  /* TODO: Use margin as flex gap fallback for Safari */
  /* > * + * { */
  /* margin-top: 1rem; */
  /* } */
  gap: 1rem;
`;

interface ContainerProps {
  children: React.ReactNode;
  px?: keyof typeof Spacing;
  py?: keyof typeof Spacing;
  mt?: keyof typeof Spacing;
}

/**
 * Flexbox container
 *
 * @param px horizontal padding
 * @param py vertical padding
 * @param mx horizontal margin
 * @param my vertical margin
 */
function Container({
  children,
  px = "none",
  py = "none",
  mt = "none",
}: ContainerProps) {
  return (
    <StyledContainer $px={px} $py={py} $mt={mt}>
      {children}
    </StyledContainer>
  );
}

function PageContainer({ children, ...props }: ContainerProps) {
  return (
    <Container px="m" mt="xl" {...props}>
      {children}
    </Container>
  );
}

export default Container;
export { PageContainer };
