import { useParams } from "react-router-dom";
import CharacterAbilities from "../components/CharacterAbilities";
import CharacterSkills from "../components/CharacterSkills";
import Container, { PageContainer } from "../components/Container";
import Col from "../components/Col";
import List from "../components/List";
import { useCharacterQuery } from "../utils/graphql";
import NotFound from "./404";
import styled from "styled-components";
import Text from "../components/Text";

const Main = styled(Container).attrs({ forwardedAs: "main" })`
  padding: 2rem;
`;

function CharacterSummary() {
  const { characterId } = useParams();

  const { data, loading, error } = useCharacterQuery({
    variables: { id: String(characterId) },
    skip: !characterId,
  });

  if (loading)
    return (
      <PageContainer>
        <p>Loading...</p>
      </PageContainer>
    );

  if (error || !data?.character) return <NotFound message={error?.message} />;

  const { character } = data;

  return (
    <Main direction="column" gap="16px">
      <CharacterAbilities abilities={character.abilities} />
      <CharacterSkills skills={character.skills} />
    </Main>
  );
}

export default CharacterSummary;
