import { useParams } from "react-router-dom";
import { useCharacterQuery } from "../utils/graphql";

function CharacterUpdateClass() {
  const { characterId } = useParams();

  const { data, loading, error } = useCharacterQuery({
    variables: { id: characterId! },
    skip: !characterId,
  });

  if (error) return null;

  return (
    <main>
      <h2>Character Class</h2>
      {loading ? <div>Loading...</div> : <div>Class</div>}
    </main>
  );
}

export default CharacterUpdateClass;
