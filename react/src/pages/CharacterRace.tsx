import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Box from "../components/Box";
import Container, { Article, Main, Section } from "../components/Container";
import List from "../components/List";
import Loader from "../components/Loader";
import Notification from "../components/Notification";
import Text from "../components/Text";
import CharacterRaceForm from "../forms/CharacterRaceForm";
import {
  useCharacterQuery,
  useRaceLazyQuery,
  useRacesQuery,
  useUpdateCharacterDetailsMutation,
} from "../utils/graphql";
import NotFound from "./404";

/** URL: /characters/:characterId/race */
function CharacterRace() {
  const [raceId, setRaceId] = useState("");
  const navigate = useNavigate();
  const { characterId } = useParams();

  const { data, loading, error } = useCharacterQuery({
    variables: { id: String(characterId) },
  });

  const {
    data: races,
    loading: racesLoading,
    error: racesError,
  } = useRacesQuery();

  const [getRace, { data: raceData, loading: raceLoading, error: raceError }] =
    useRaceLazyQuery();

  // When the data is loaded, set the raceId
  useEffect(() => {
    setRaceId(data?.character?.race?.id ?? "");
  }, [data]);

  // Each time the raceId changes, refetch the races query
  useEffect(() => {
    if (!raceId) return;
    getRace({
      variables: {
        id: raceId,
      },
    });
  }, [raceId]);

  useEffect(() => {
    console.log(raceData?.race);
  }, [raceData]);

  const [
    updateCharacterDetails,
    { loading: updateLoading, error: updateError },
  ] = useUpdateCharacterDetailsMutation({
    onError: (err) => console.error(err),
  });

  if (loading || racesLoading) return <Loader />;

  if (error || racesError || !data?.character || !races)
    return <NotFound message={error?.message} />;

  return (
    <Main>
      <CharacterRaceForm
        raceId={data.character.race?.id}
        races={races.races}
        onChange={(raceId) => setRaceId(raceId)}
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
      {/* TODO: refactor into a separate component RaceDetails? */}
      <Container direction="column" gap="16" mt="16">
        {/* {raceLoading && <p>Loading...</p>} */}
        {raceError && <Notification>Race Not Found</Notification>}
        {raceData?.race && (
          <Container as="article" direction="column" gap="16">
            <Section>
              <Text as="h2" size="24">
                Ability Score Improvements
              </Text>
              <List>
                {raceData.race.abilityScoreIncreases.map((x) => (
                  <li key={x.id}>{`${x.ability.name} ${
                    x.increase >= 0 ? "+" : "-"
                  }${x.increase}`}</li>
                ))}
              </List>
            </Section>
            <Section>
              <Text as="h2" size="24">
                Details
              </Text>
              {raceData.race.description && (
                <Text>{raceData.race.description}</Text>
              )}
              <Box name="Age" description={raceData.race.age} />
              <Box name="Alignment" description={raceData.race.alignment} />
              <Box name="Size" description={raceData.race.size} />
              <Box name="Speed" description={raceData.race.speed} />
            </Section>
          </Container>
        )}
      </Container>
    </Main>
  );
}

export default CharacterRace;
