import { Link } from "react-router-dom"
import { races } from "../api/race"

function Races() {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-medium">Race</h2>
      <ul className="list-disc pl-5">
        {races.map((race) => (
          <li key={race.id}>
            <Link
              to={race.id}
              className="mb-2 inline-block text-blue-500 hover:underline"
            >
              {race.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Races
