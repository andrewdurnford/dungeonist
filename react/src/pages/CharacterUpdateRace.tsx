import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Notification from "../components/Notification";
import RaceDetails from "../components/RaceDetails";
import CharacterRaceForm, {
  CharacterRaceFormValues,
} from "../forms/CharacterRaceForm";
import {
  useCharacterQuery,
  useUpdateCharacterDetailsMutation,
} from "../utils/graphql";

function CharacterUpdateRace() {
  const [raceId, setRaceId] = useState("");

  const { characterId } = useParams();

  const { data, loading, error } = useCharacterQuery({
    variables: { id: characterId! },
    skip: !characterId,
    onCompleted: ({ character }) =>
      character?.race && setRaceId(character.race.id),
  });

  const [updateCharacter, { error: updateError }] =
    useUpdateCharacterDetailsMutation({
      onError: (err) => console.error(err.message),
    });

  useEffect(() => {
    setRaceId(data?.character?.race?.id ?? "");
  }, [data]);

  if (error) return null;

  const { character } = data || {};

  const defaultValues: CharacterRaceFormValues = {
    raceId: character?.race?.id ?? "",
  };

  return (
    <main>
      <h2>Character Race</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {updateError && <Notification>{updateError.message}</Notification>}
          <CharacterRaceForm
            defaultValues={defaultValues}
            onChange={(raceId) => {
              if (raceId !== "") setRaceId(raceId);
            }}
            onSubmit={(data) => {
              updateCharacter({
                variables: {
                  input: {
                    id: characterId!,
                    ...data,
                  },
                },
              });
            }}
          />
          <RaceDetails raceId={raceId} />
        </>
      )}
    </main>
  );
}

export default CharacterUpdateRace;
