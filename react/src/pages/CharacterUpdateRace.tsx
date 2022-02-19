import { useParams } from "react-router-dom";
import Notification from "../components/Notification";
import CharacterRaceForm, {
  CharacterRaceFormValues,
} from "../forms/CharacterRaceForm";
import {
  useCharacterQuery,
  useRaceLazyQuery,
  useRaceQuery,
  useUpdateCharacterDetailsMutation,
} from "../utils/graphql";

function CharacterUpdateRace() {
  const { characterId } = useParams();

  const [getRace, { data: raceData, loading: raceLoading, error: raceError }] =
    useRaceLazyQuery({
      // TODO: this doesn't seem to work with 'cache-first' fetchPolicy
      // fetchPolicy: "cache-first",
    });

  const { data, loading, error } = useCharacterQuery({
    variables: { id: characterId! },
    skip: !characterId,
    onCompleted: ({ character }) =>
      character?.race && getRace({ variables: { id: character.race.id } }),
  });

  const [updateCharacter, { error: updateError }] =
    useUpdateCharacterDetailsMutation({
      onError: (err) => console.error(err.message),
    });

  if (error) return null;

  const { character } = data || {};

  const defaultValues: CharacterRaceFormValues = {
    raceId: character?.race?.id ?? "",
  };

  return (
    <main>
      <h2>Character Race</h2>
      {loading ? (
        <div>"Loading..."</div>
      ) : (
        <>
          {updateError && <Notification>{updateError.message}</Notification>}
          <CharacterRaceForm
            defaultValues={defaultValues}
            onChange={(raceId) => {
              if (raceId !== "") getRace({ variables: { id: raceId } });
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
          {/* TODO: refactor into a new component? */}
          {raceError && <Notification>{raceError.message}</Notification>}
          <div>
            <h3>Ability Score Improvements</h3>
            <ul>
              {raceLoading ? (
                <li>Loading...</li>
              ) : (
                raceData?.race?.abilityScoreIncreases.map((x) => (
                  <li key={x.id}>{`${x.ability.name} ${
                    x.increase >= 0 ? "+" : "-"
                  }${x.increase}
                `}</li>
                ))
              )}
            </ul>
            <h3>Details</h3>
            <p>{raceLoading ? "Loading..." : raceData?.race?.description}</p>
            <label>Age</label>
            <textarea
              rows={4}
              disabled
              defaultValue={
                raceLoading ? "Loading..." : raceData?.race?.age ?? ""
              }
            ></textarea>
            <label>Alignment</label>
            <textarea
              rows={4}
              disabled
              defaultValue={
                raceLoading ? "Loading..." : raceData?.race?.alignment ?? ""
              }
            ></textarea>
            <label>Size</label>
            <textarea
              rows={4}
              disabled
              defaultValue={
                raceLoading ? "Loading..." : raceData?.race?.size ?? ""
              }
            ></textarea>
            <label>Speed</label>
            <textarea
              rows={4}
              disabled
              defaultValue={
                raceLoading ? "Loading..." : raceData?.race?.speed ?? ""
              }
            ></textarea>
          </div>
        </>
      )}
    </main>
  );
}

export default CharacterUpdateRace;
