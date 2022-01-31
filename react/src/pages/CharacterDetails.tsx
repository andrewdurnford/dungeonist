import { useNavigate, useParams } from "react-router-dom";
import { PageContainer } from "../components/Container";
import Notification from "../components/Notification";
import UpdateCharacterDetailsForm from "../forms/UpdateCharacterDetailsForm";
import {
  useCharacterQuery,
  useUpdateCharacterDetailsMutation,
} from "../utils/graphql";

function CharacterEdit() {
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

  if (error || !data?.character)
    return (
      <PageContainer>
        <Notification>
          Error{error ? `: ${error.message}` : ": Character does not exist"}
        </Notification>
      </PageContainer>
    );

  const { character } = data;

  return (
    <>
      {updateError && <Notification>{updateError.message}</Notification>}
      <UpdateCharacterDetailsForm
        name={character.name}
        level={character.level}
        raceId={character.race?.id ?? ""}
        alignmentId={character.alignment?.id ?? ""}
        background={character.background ?? ""}
        traits={character.traits ?? ""}
        ideals={character.ideals ?? ""}
        bonds={character.bonds ?? ""}
        flaws={character.flaws ?? ""}
        loading={updateLoading}
        onCancel={() => navigate(`/characters/${characterId}`)}
        onSubmit={({
          name,
          level,
          raceId,
          background,
          alignmentId,
          traits,
          ideals,
          bonds,
          flaws,
        }) => {
          updateCharacterDetails({
            variables: {
              input: {
                id: String(characterId),
                name: name || undefined,
                level: level || undefined,
                raceId: raceId || undefined,
                background: background || undefined,
                alignmentId: alignmentId || undefined,
                traits: traits || undefined,
                ideals: ideals || undefined,
                bonds: bonds || undefined,
                flaws: flaws || undefined,
              },
            },
          });
          navigate(`/characters/${characterId}`);
        }}
      />
    </>
  );
}

export default CharacterEdit;
