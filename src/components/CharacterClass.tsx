import { Link, useParams } from "react-router-dom"
import { classes } from "../api/class"
import { useCharacter } from "../context"

export function CharacterClass() {
  const { character, dispatch } = useCharacter()

  const { classId } = useParams()
  if (!classId) return <p className="mb-4 text-red-500">classId not found</p>

  const cls = classes.find((x) => x.id === classId)
  if (!cls) {
    return (
      <p className="mb-4 rounded-lg border border-red-400 bg-red-50 p-2 text-red-700">
        Error: class not found
      </p>
    )
  }

  return (
    <div>
      <Link to=".." className="mb-4 inline-block text-blue-500 hover:underline">
        Back
      </Link>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="mb-2 text-2xl font-medium">{cls.name}</h2>
        {character.class === classId ? (
          <span className="text-sm font-medium italic">Selected</span>
        ) : (
          <button
            className="rounded-lg border border-gray-300 bg-white px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50"
            onClick={() =>
              dispatch({
                type: "setClass",
                payload: { class: classId },
              })
            }
          >
            Save
          </button>
        )}
      </div>
    </div>
  )
}

export default CharacterClass
