import { useParams } from "react-router-dom";
import CharacterAbilities from "../components/CharacterAbilities";
import CharacterSkills from "../components/CharacterSkills";
import { Main } from "../components/Container";
import Loader from "../components/Loader";
import { useCharacterQuery } from "../utils/graphql";
import NotFound from "./404";

function CharacterSummary() {
  const { characterId } = useParams();

  const { data, loading, error } = useCharacterQuery({
    variables: { id: String(characterId) },
    skip: !characterId,
  });

  if (loading) return <Loader />;

  if (error || !data?.character) return <NotFound message={error?.message} />;

  const { character } = data;

  return (
    <Main>
      <CharacterAbilities abilities={character.abilities} />
      <CharacterSkills skills={character.skills} />
    </Main>
  );
}

export default CharacterSummary;
