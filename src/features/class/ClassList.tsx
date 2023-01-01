import { classes } from "../../api/class"
import { useCharacter } from "../../context"

type ClassListProps = {
  setClassId: React.Dispatch<React.SetStateAction<string | null>>
}

function ClassList({ setClassId }: ClassListProps) {
  const { character } = useCharacter()

  return (
    <ul>
      {classes.map((cls) => (
        <li key={cls.id} className="mb-2 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setClassId(cls.id)}
            className="inline-block text-blue-500 hover:underline"
          >
            {cls.name}
          </button>
          {character.class === cls.id && (
            <span className="text-xs italic">Selected</span>
          )}
        </li>
      ))}
    </ul>
  )
}

export default ClassList
