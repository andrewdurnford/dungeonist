import styled from "styled-components";
import CharacterBreadcrumb from "./CharacterBreadcrumb";
import CharacterMenu from "./CharacterMenu";
import Container from "./Container";

const Header = styled(Container).attrs({
  as: "header",
  direction: "column",
  gap: "16px",
})`
  padding-top: 2rem;
  padding-right: 2rem;
  padding-left: 2rem;

  display: flex;
  flex-direction: column;
  gap: 16px;
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
