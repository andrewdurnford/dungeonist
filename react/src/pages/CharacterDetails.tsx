import { useNavigate, useParams } from "react-router-dom";
import { Main } from "../components/Container";
import Notification from "../components/Notification";
import CharacterDetailsForm from "../forms/CharacterDetailsForm";
import {
  useAlignmentsQuery,
  useCharacterQuery,
  useUpdateCharacterDetailsMutation,
} from "../utils/graphql";
import NotFound from "./404";

function CharacterEdit() {
  const navigate = useNavigate();
  const { characterId } = useParams();

  const { data, loading, error } = useCharacterQuery({
    variables: { id: String(characterId) },
  });

  const {
    data: alignments,
    loading: alignmentsLoading,
    error: alignmentsError,
  } = useAlignmentsQuery();

  const [
    updateCharacterDetails,
    { loading: updateLoading, error: updateError },
  ] = useUpdateCharacterDetailsMutation({
    onError: (err) => console.error(err),
  });

  if (error || alignmentsError || !data?.character || !alignments)
    return <NotFound message={error?.message} />;

  const { character } = data;

  return (
    <Main>
      {updateError && <Notification>{updateError.message}</Notification>}
      <CharacterDetailsForm
        name={character.name}
        level={character.level}
        alignmentId={character.alignment?.id ?? ""}
        background={character.background ?? ""}
        traits={character.traits ?? ""}
        ideals={character.ideals ?? ""}
        bonds={character.bonds ?? ""}
        flaws={character.flaws ?? ""}
        alignments={alignments.alignments}
        loading={updateLoading}
        onSubmit={({
          name,
          level,
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
    </Main>
  );
}

export default CharacterEdit;
