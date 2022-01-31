import { useParams } from "react-router-dom";
import CharacterAbilities from "../components/CharacterAbilities";
import CharacterSkills from "../components/CharacterSkills";
import Container, { PageContainer } from "../components/Container";
import Col from "../components/Col";
import List from "../components/List";
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
      <PageContainer>
        <p>Loading...</p>
      </PageContainer>
    );

  if (error || !data?.character) return <NotFound message={error?.message} />;

  const { character } = data;

  return (
    <>
      <h1>{character.name}</h1>
      <List>
        <li>
          <strong>Level:</strong> {character.level}
        </li>
        <li>
          <strong>Experience:</strong> {character.experience}
        </li>
        {character.background && (
          <li>
            <strong>Background:</strong> {character.background}
          </li>
        )}
        {character.alignment && (
          <li>
            <strong>Alignment:</strong> {character.alignment.name}
          </li>
        )}
        {character.race && (
          <li>
            <strong>Race:</strong> {character.race.name}
          </li>
        )}
      </List>
      <hr />

      <CharacterAbilities abilities={character.abilities} />

      <Container justifyContent="space-between">
        <Col width="4">
          <CharacterSkills skills={character.skills} />
        </Col>
        <Col width="6">
          <List>
            <li>
              <strong>Traits:</strong> {character.traits}
            </li>
            <li>
              <strong>Ideals:</strong> {character.ideals}
            </li>
            <li>
              <strong>Bonds:</strong> {character.bonds}
            </li>
            <li>
              <strong>Flaws:</strong> {character.flaws}
            </li>
          </List>
        </Col>
      </Container>
    </>
  );
}

export default CharacterSummary;
