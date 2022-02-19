import { useParams } from "react-router-dom";
import Notification from "../components/Notification";
import CharacterDetailsForm, {
  CharacterDetailsFormValues,
} from "../forms/CharacterDetailsForm";
import {
  useCharacterQuery,
  useUpdateCharacterDetailsMutation,
} from "../utils/graphql";

function CharacterUpdateDetails() {
  const { characterId } = useParams();

  const { data, loading, error } = useCharacterQuery({
    variables: { id: characterId! },
    skip: !characterId,
  });

  const [updateCharacter, { error: updateError }] =
    useUpdateCharacterDetailsMutation({
      onError: (err) => console.error(err.message),
    });

  if (error) return null;

  const { character } = data || {};

  const defaultValues: CharacterDetailsFormValues = {
    name: character?.name !== "Untitled" ? character?.name : "",
    level: character?.level ?? 1,
    alignmentId: character?.alignment?.id ?? "",
    background: character?.background ?? "",
    traits: character?.traits ?? "",
    ideals: character?.ideals ?? "",
    bonds: character?.bonds ?? "",
    flaws: character?.flaws ?? "",
  };

  return (
    <main>
      <h2>Character Details</h2>
      {loading ? (
        <div>"Loading..."</div>
      ) : (
        <>
          {updateError && <Notification>{updateError.message}</Notification>}
          <CharacterDetailsForm
            defaultValues={defaultValues}
            onSubmit={(data) =>
              updateCharacter({
                variables: {
                  input: {
                    id: characterId!,
                    ...data,
                  },
                },
              })
            }
          />
        </>
      )}
    </main>
  );
}

export default CharacterUpdateDetails;
