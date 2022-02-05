import { useParams } from "react-router-dom";
import styled from "styled-components";
import Container from "./Container";
import { Tab } from "./Link";

const TabList = styled(Container).attrs({})`
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

function CharacterMenu() {
  const { characterId } = useParams();

  if (!characterId) return null;

  return (
    <TabList>
      <Container as="nav">
        <Tab to="" end>Summary</Tab>
        <Tab to="details">Details</Tab>
        <Tab to="race">Race</Tab>
      </Container>
    </TabList>
  );
}

export default CharacterMenu;
