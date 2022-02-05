import { Outlet, useParams } from "react-router-dom";
import CharacterHeader from "../components/CharacterHeader";
import Container from "../components/Container";
import { useCharacterQuery } from "../utils/graphql";
import NotFound from "./404";

function Character() {
  const { characterId } = useParams();

  const { data, loading, error } = useCharacterQuery({
    variables: { id: String(characterId) },
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
    <>
      <CharacterHeader name={character.name} />
      <Outlet />
    </>
  );
}

export default Character;
