import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import CharacterAbilities from "../components/CharacterAbilities";
import CharacterSkills from "../components/CharacterSkills";
import { PageContainer } from "../components/Container";
import Notification from "../components/Notification";
import { useCharacterQuery } from "../utils/graphql";

const List = styled.ul`
  margin-left: 1rem;
`;

function Character() {
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
    <PageContainer>
      <Link to={"/characters"}>Back</Link>
      <Link to={`/characters/${characterId}/edit`}>Edit</Link>
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
    </PageContainer>
  );
}

export default Character;
