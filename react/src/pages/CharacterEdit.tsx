import { Link, useNavigate, useParams } from "react-router-dom";
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

  if (loading)
    return (
      <PageContainer>
        <p>Loading...</p>
      </PageContainer>
    );

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
    <PageContainer>
      <Link to={`/characters/${characterId}`}>Back</Link>
      {updateError && <Notification>{updateError.message}</Notification>}
      <UpdateCharacterDetailsForm
        name={character.name}
        level={character.level}
        alignmentId={character.alignment?.id ?? ""}
        background={character.background ?? ""}
        traits={character.personality?.traits ?? ""}
        ideals={character.personality?.ideals ?? ""}
        bonds={character.personality?.bonds ?? ""}
        flaws={character.personality?.flaws ?? ""}
        loading={updateLoading}
        onSubmit={({
          name,
          level,
          alignmentId,
          background,
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
                alignmentId: alignmentId || undefined,
                background: background || undefined,
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
    </PageContainer>
  );
}

export default CharacterEdit;
