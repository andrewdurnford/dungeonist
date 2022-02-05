import { useParams } from "react-router-dom";
import styled from "styled-components";
import Container, { FluidContainer } from "./Container";
import { Tab } from "./Link";

const TabList = styled(FluidContainer)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

function CharacterMenu() {
  const { characterId } = useParams();

  if (!characterId) return null;

  return (
    <TabList>
      <Container forwardedAs="nav" gap="8" px="16" mx="auto">
        <Tab to="" end>
          Summary
        </Tab>
        <Tab to="details">Details</Tab>
        <Tab to="race">Race</Tab>
      </Container>
    </TabList>
  );
}

export default CharacterMenu;
