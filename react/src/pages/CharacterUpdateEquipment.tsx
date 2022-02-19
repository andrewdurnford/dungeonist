import { useParams } from "react-router-dom";
import { useCharacterQuery } from "../utils/graphql";

function CharacterUpdateEquipment() {
  const { characterId } = useParams();

  const { data, loading, error } = useCharacterQuery({
    variables: { id: characterId! },
    skip: !characterId,
  });

  if (error) return null;

  return (
    <main>
      <h2>Character Equipment</h2>
      {loading ? <div>"Loading..."</div> : <div>Equipment</div>}
    </main>
  );
}

export default CharacterUpdateEquipment;
