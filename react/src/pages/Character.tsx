import { Outlet, useParams } from "react-router-dom";
import CharacterHeader from "../components/CharacterHeader";
import { PageContainer } from "../components/Container";
import { useCharacterQuery } from "../utils/graphql";
import NotFound from "./404";

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

  if (error || !data?.character) return <NotFound message={error?.message} />;

  const { character } = data;

  return (
    <PageContainer>
      <CharacterHeader name={character.name} />
      <Outlet />
    </PageContainer>
  );
}

export default Character;
