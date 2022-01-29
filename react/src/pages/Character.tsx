import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import CharacterAbilities from "../components/CharacterAbilities";
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
      <h3>Skills</h3>
      <List>
        {character.skills.map(({ id, name, modifier, ability }) => (
          // TODO: bold if 'isProficient'
          <li key={id}>
            {name} {modifier >= 0 ? "+" : "-"}
            {modifier} ({ability.name.slice(0, 3).toUpperCase()})
          </li>
        ))}
      </List>
    </PageContainer>
  );
}

export default Character;
