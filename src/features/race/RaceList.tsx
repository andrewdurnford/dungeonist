import { races } from "../../api/race"
import { useCharacter } from "../../context"

type RaceListProps = {
  setRaceId: React.Dispatch<React.SetStateAction<string | null>>
}

function RaceList({ setRaceId }: RaceListProps) {
  const { character } = useCharacter()

  return (
    <div>
      <h2 className="mb-4 text-2xl font-medium">Race</h2>
      <ul className="">
        {races.map((race) => (
          <li key={race.id} className="mb-2 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setRaceId(race.id)}
              className="inline-block text-blue-500 hover:underline"
            >
              {race.name}
            </button>
            {character.race === race.id && (
              <span className="text-xs italic">Selected</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RaceList
