import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  margin: 2rem auto 0;
  padding: 0 1rem;

  > * + * {
    margin-top: 1rem;
  }
`;

export default Container;
