import { useParams } from "react-router-dom";
import CharacterAbilities from "../components/CharacterAbilities";
import CharacterSkills from "../components/CharacterSkills";
import { PageContainer } from "../components/Container";
import List from "../components/List";
import Notification from "../components/Notification";
import { useCharacterQuery } from "../utils/graphql";

function CharacterSummary() {
  const { characterId } = useParams();

  const { data, loading, error } = useCharacterQuery({
    variables: { id: String(characterId) },
  });

  if (loading)
    return (
      <PageContainer>
        <p>Loading...</p>
      </PageContainer>
    );

  if (error || !data?.character)
    return (
      <PageContainer>
        <Notification>
          Error{error ? `: ${error.message}` : ": Character does not exist"}
        </Notification>
      </PageContainer>
    );

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
      <List>
        <li>
          <strong>Personality Traits:</strong> {character.traits}
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
      <CharacterAbilities abilities={character.abilities} />
      <CharacterSkills skills={character.skills} />
    </>
  );
}

export default CharacterSummary;
