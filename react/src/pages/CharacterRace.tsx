import { useNavigate, useParams } from "react-router-dom";
import { Main } from "../components/Container";
import CharacterRaceForm from "../forms/CharacterRaceForm";
import {
  useCharacterQuery,
  useUpdateCharacterDetailsMutation,
} from "../utils/graphql";
import NotFound from "./404";

/** URL: /characters/:characterId/race */
function CharacterRace() {
  const navigate = useNavigate();
  const { characterId } = useParams();

  const { data, loading, error } = useCharacterQuery({
    variables: { id: String(characterId) },
  });

  const [
    updateCharacterDetails,
    { loading: updateLoading, error: updateError },
  ] = useUpdateCharacterDetailsMutation({
    onError: (err) => console.error(err),
  });

  if (error || !data?.character) return <NotFound message={error?.message} />;

  const { character } = data;

  return (
    <Main>
      <CharacterRaceForm
        raceId={character.race?.id}
        onCancel={() => navigate(`/characters/${characterId}`)}
        onSubmit={({ raceId }) => {
          updateCharacterDetails({
            variables: {
              input: {
                id: String(characterId),
                raceId: raceId || undefined,
              },
            },
          });
          navigate(`/characters/${characterId}`);
        }}
      />
    </Main>
  );
}

export default CharacterRace;
