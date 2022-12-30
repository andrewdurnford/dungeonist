import { Link, useParams } from "react-router-dom"
import { races } from "../api/race"
import { useCharacter } from "../context"

export function CharacterRace() {
  const { character, dispatch } = useCharacter()

  const { raceId } = useParams()
  if (!raceId) return <p className="mb-4 text-red-500">raceId not found</p>

  const race = races.find((x) => x.id === raceId)
  if (!race) {
    return (
      <p className="mb-4 rounded-lg border border-red-400 bg-red-50 p-2 text-red-700">
        Error: race not found
      </p>
    )
  }

  return (
    <div>
      <Link to=".." className="mb-4 inline-block text-blue-500 hover:underline">
        Back
      </Link>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="mb-2 text-2xl font-medium">{race.name}</h2>
        {character.race === raceId ? (
          <span className="text-sm font-medium italic">Selected</span>
        ) : (
          <button
            className="rounded-lg border border-gray-300 bg-white px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50"
            onClick={() =>
              dispatch({
                type: "setRace",
                payload: { race: raceId },
              })
            }
          >
            Save
          </button>
        )}
      </div>
      <p className="mb-4">{race.description}</p>
    </div>
  )
}

export default CharacterRace
