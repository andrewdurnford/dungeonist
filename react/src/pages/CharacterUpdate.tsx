import { Outlet, useParams } from "react-router-dom";
import CharacterUpdateHeader from "../components/CharacterUpdateHeader";
import CharacterUpdateMenu from "../components/CharacterUpdateMenu";
import Container from "../components/Container";
import { useCharacterQuery } from "../utils/graphql";

function CharacterUpdate() {
  const { characterId } = useParams();

  const { data, error } = useCharacterQuery({
    variables: { id: characterId! },
    skip: !characterId,
  });

  if (error) return <div>Error</div>;

  if (data && !data.character) return <div>404: Not Found</div>;

  return (
    <Container direction="column" p="32">
      <CharacterUpdateHeader />
      <CharacterUpdateMenu />
      <Outlet />
    </Container>
  );
}

export default CharacterUpdate;
