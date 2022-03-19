import { useParams } from "react-router-dom";
import CharacterClassForm, {
  CharacterClassFormValues,
} from "../forms/CharacterClassForm";
import { useCharacterQuery } from "../utils/graphql";

function CharacterUpdateClass() {
  const { characterId } = useParams();

  const { data, loading, error } = useCharacterQuery({
    variables: { id: characterId! },
    skip: !characterId,
  });

  if (error) return null;

  const { character } = data || {};

  const defaultValues: CharacterClassFormValues = {
    classId: character?.classes[0]?.id ?? "",
  };

  return (
    <main>
      <h2>Character Class</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <CharacterClassForm
            defaultValues={defaultValues}
            onChange={(classId) => {
              console.log(classId);
            }}
            onSubmit={(data) => {
              console.log(data);
            }}
          />
        </>
      )}
    </main>
  );
}

export default CharacterUpdateClass;
