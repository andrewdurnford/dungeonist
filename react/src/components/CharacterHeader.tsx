import styled from "styled-components";
import CharacterBreadcrumb from "./CharacterBreadcrumb";
import CharacterMenu from "./CharacterMenu";
import Container from "./Container";

const Header = styled(Container).attrs({
  forwardedAs: "header",
  direction: "column",
  gap: "16px",
  fluid: true,
})`
  padding-top: 1rem;
  background: ${({ theme }) => theme.colors.gray100};
`;

function CharacterHeader({ name }: { name?: string }) {
  return (
    <Header>
      <CharacterBreadcrumb name={name} />
      <CharacterMenu />
    </Header>
  );
}

export default CharacterHeader;
