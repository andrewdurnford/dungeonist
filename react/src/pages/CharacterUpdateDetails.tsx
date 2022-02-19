import { useParams } from "react-router-dom";
import { useCharacterQuery } from "../utils/graphql";

function CharacterUpdateDetails() {
  const { characterId } = useParams();

  const { data, loading, error } = useCharacterQuery({
    variables: { id: characterId! },
    skip: !characterId,
  });

  if (error) return null;

  return (
    <main>
      <h2>Character Details</h2>
      {loading ? <div>"Loading..."</div> : <div>Details</div>}
    </main>
  );
}

export default CharacterUpdateDetails;
