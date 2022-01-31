import { Link, useParams } from "react-router-dom";
import { PageContainer } from "../components/Container";
import Notification from "../components/Notification";
import { useCharacterQuery } from "../utils/graphql";
import CharacterSummary from "./CharacterSummary";

function Character() {
  const { characterId } = useParams();

  const { data, loading, error } = useCharacterQuery({
    variables: { id: String(characterId) },
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
      <Link to={"/characters"}>Back</Link>
      <Link to={`/characters/${characterId}/edit`}>Edit</Link>
      <CharacterSummary character={character} />
    </PageContainer>
  );
}

export default Character;
