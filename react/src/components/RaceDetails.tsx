import { useRaceQuery } from "../utils/graphql";
import Notification from "./Notification";

interface RaceDetailsProps {
  raceId?: string;
}

function RaceDetails({ raceId }: RaceDetailsProps) {
  const { data, loading, error } = useRaceQuery({
    variables: {
      id: raceId!,
    },
    skip: !raceId,
  });

  if (!raceId) return null;

  if (error) return <Notification>{error.message}</Notification>;

  const { race } = data || {};

  return (
    <div>
      <h3>Ability Score Improvements</h3>
      <ul>
        {loading ? (
          <li>Loading...</li>
        ) : (
          race?.abilityScoreIncreases.map((x) => (
            <li key={x.id}>{`${x.ability.name} ${x.increase >= 0 ? "+" : "-"}${
              x.increase
            }
          `}</li>
          ))
        )}
      </ul>
      <h3>Details</h3>
      <p>{loading ? "Loading..." : race?.description}</p>
      <label>
        <strong>Age</strong>
      </label>
      <p>{loading ? "Loading..." : race?.age ?? ""}</p>
      <label>
        <strong>Alignment</strong>
      </label>
      <p>{loading ? "Loading..." : race?.alignment ?? ""}</p>
      <label>
        <strong>Size</strong>
      </label>
      <p>{loading ? "Loading..." : race?.size ?? ""}</p>
      <label>
        <strong>Speed</strong>
      </label>
      <p>{loading ? "Loading..." : race?.speed ?? ""}</p>
    </div>
  );
}

export default RaceDetails;
