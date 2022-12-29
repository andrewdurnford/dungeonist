import { Link, useParams } from "react-router-dom"
import { races } from "../api/race"

export function CharacterRace() {
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
      <h2 className="mb-2 text-2xl font-medium">{race.name}</h2>
      <p className="mb-4">{race.description}</p>
    </div>
  )
}

export default CharacterRace
