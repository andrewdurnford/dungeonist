import { Outlet, useParams } from "react-router-dom";
import CharacterHeader from "../components/CharacterHeader";
import Container, { Main } from "../components/Container";
import Loader from "../components/Loader";
import { useCharacterQuery } from "../utils/graphql";
import NotFound from "./404";

function Character() {
  const { characterId } = useParams();

  const { data, loading, error } = useCharacterQuery({
    variables: { id: String(characterId) },
  });

  if (loading) return <Loader />;

  if (error || !data?.character) return <NotFound message={error?.message} />;

  const { character } = data;

  return (
    <>
      <CharacterHeader name={character.name} />
      <Outlet />
    </>
  );
}

export default Character;
