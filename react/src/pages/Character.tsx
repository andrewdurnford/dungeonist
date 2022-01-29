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
      <h1>{character.name}</h1>
      <List>
        <li>Level {character.level}</li>
        <li>Experience {character.experience}</li>
      </List>
      <CharacterAbilities abilities={character.abilities} />
      <CharacterSkills skills={character.skills} />
    </PageContainer>
  );
}

export default Character;
