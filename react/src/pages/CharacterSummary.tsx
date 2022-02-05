import { useParams } from "react-router-dom";
import CharacterAbilities from "../components/CharacterAbilities";
import CharacterSkills from "../components/CharacterSkills";
import Container from "../components/Container";
import { useCharacterQuery } from "../utils/graphql";
import NotFound from "./404";

function CharacterSummary() {
  const { characterId } = useParams();

  const { data, loading, error } = useCharacterQuery({
    variables: { id: String(characterId) },
    skip: !characterId,
  });

  if (loading)
    return (
      <Container direction="column" gap="16" mx="auto" p="32">
        <p>Loading...</p>
      </Container>
    );

  if (error || !data?.character) return <NotFound message={error?.message} />;

  const { character } = data;

  return (
    <Container as="main" direction="column" gap="16" mx="auto" p="32">
      <CharacterAbilities abilities={character.abilities} />
      <CharacterSkills skills={character.skills} />
    </Container>
  );
}

export default CharacterSummary;
