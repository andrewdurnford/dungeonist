import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCharacterQuery } from "../utils/graphql";

function CharacterUpdateHeader() {
  const { characterId } = useParams();

  const { data, loading } = useCharacterQuery({
    variables: { id: characterId! },
    skip: !characterId,
  });

  const { character } = data || {};

  return (
    <>
      <nav>
        <Link to="/characters">Characters</Link> <span>/</span>{" "}
        <span>{loading ? "Loading..." : character?.name}</span>
      </nav>
      <h1>{loading ? "Loading..." : character?.name}</h1>
    </>
  );
}

export default CharacterUpdateHeader;
