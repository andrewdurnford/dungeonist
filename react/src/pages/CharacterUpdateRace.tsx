import { useParams } from "react-router-dom";
import { useCharacterQuery } from "../utils/graphql";

function CharacterUpdateRace() {
  const { characterId } = useParams();

  const { data, loading, error } = useCharacterQuery({
    variables: { id: characterId! },
    skip: !characterId,
  });

  if (error) return null;

  return (
    <main>
      <h2>Character Race</h2>
      {loading ? <div>"Loading..."</div> : <div>Race</div>}
    </main>
  );
}

export default CharacterUpdateRace;
