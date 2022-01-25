import styled from "styled-components";

// TODO: refactor into a Text component
const ErrorText = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.red500};
`;

export default ErrorText;
