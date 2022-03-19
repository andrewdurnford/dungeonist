import { useParams } from "react-router-dom";
import { useCharacterQuery } from "../utils/graphql";

function CharacterUpdateAbilities() {
  const { characterId } = useParams();

  const { data, loading, error } = useCharacterQuery({
    variables: { id: characterId! },
    skip: !characterId,
  });

  if (error) return null

  return (
    <main>
      <h2>Character Abilities</h2>
      {loading ? <div>Loading...</div> : <div>Abilities</div>}
    </main>
  );
}

export default CharacterUpdateAbilities;
