import { useForm } from "react-hook-form"
import { races } from "../../api/race"
import { useCharacter } from "../../context"

export type RaceFormValues = {
  id: string
}

type RaceFormProps = {
  setRaceId: React.Dispatch<React.SetStateAction<string | null>>
  defaultValues: RaceFormValues
}

function RaceForm({ defaultValues, setRaceId }: RaceFormProps) {
  const { character, dispatch } = useCharacter()

  const { getValues, handleSubmit } = useForm<RaceFormValues>({
    mode: "onSubmit",
    defaultValues,
  })

  const raceId = getValues("id")

  const race = races.find((race) => race.id === raceId)
  if (!race) return <p>Error</p>

  function onSubmit(data: RaceFormValues) {
    dispatch({
      type: "setRace",
      payload: { race: data.id },
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 flex items-center justify-between gap-2">
        <span>
          <h2 className="text-xl font-medium">{race.name}</h2>
          {character.race === raceId && (
            <span className="text-xs italic">Selected</span>
          )}
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setRaceId(null)}
            className="text-gray-600 hover:underline"
          >
            {character.race === raceId ? "Change" : "Back"}
          </button>
          <button
            type="submit"
            className="rounded-lg border border-gray-300 bg-white px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Save
          </button>
        </div>
      </div>
      <h1 className="mb-2 text-2xl font-medium">{race.name} Traits</h1>
      <p className="mb-4">{race.description}</p>
    </form>
  )
}

export default RaceForm
