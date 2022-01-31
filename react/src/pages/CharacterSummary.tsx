import styled from "styled-components";
import CharacterAbilities from "../components/CharacterAbilities";
import CharacterSkills from "../components/CharacterSkills";
import { CharacterQuery } from "../utils/graphql";

const List = styled.ul`
  margin-left: 1rem;
`;

interface CharacterSummaryProps {
  character: CharacterQuery["character"];
}

function CharacterSummary({ character }: CharacterSummaryProps) {
  if (!character) return <div>error</div>;

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
