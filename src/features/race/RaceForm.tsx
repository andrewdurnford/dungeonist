import React from "react"
import { useForm } from "react-hook-form"
import { races } from "../../api/race"
import { useCharacter } from "../../context"

export type RaceFormValues = {
  id: string
  age: number
  alignment: string
  height: {
    feet: number
    inches: number
  }
  weight: number
}

type RaceFormProps = {
  setRaceId: React.Dispatch<React.SetStateAction<string | null>>
  defaultValues: RaceFormValues
}

function RaceForm({ defaultValues, setRaceId }: RaceFormProps) {
  const { character, dispatch } = useCharacter()

  const { register, getValues, handleSubmit } = useForm<RaceFormValues>({
    mode: "onSubmit",
    defaultValues,
  })

  const raceId = getValues("id")

  const race = races.find((race) => race.id === raceId)
  if (!race) return <p>Error</p>

  function onSubmit(data: RaceFormValues) {
    console.log(data)
    dispatch({
      type: "setRace",
      payload: {
        race: data.id,
        age: data.age,
        alignment: data.alignment,
        height: {
          feet: data.height.feet,
          inches: data.height.inches,
        },
        weight: data.weight,
      },
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 flex items-center justify-between gap-2">
        <span>
          <h2 className="text-2xl font-medium">{race.name}</h2>
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
            className="rounded-lg border border-blue-700 bg-blue-400 px-2 py-1 text-sm font-medium text-white hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
      {/* <h1 className="mb-2 text-2xl font-medium">{race.name} Traits</h1> */}
      <p className="my-6">{race.description}</p>
      <div className="my-6">
        <h3 className="mb-2 text-xl font-medium">Ability Score Increase</h3>
        <p className="mb-4">{race.details.abilityScoreIncrease}</p>
        {race.abilityScoreIncrease.map((x) => (
          <div
            key={x.ability}
            className="flex w-fit flex-col items-center gap-2 rounded-lg border border-black p-2"
          >
            <span className="text-xl">+{x.increase}</span>
            <span className="text-sm font-medium uppercase">
              {x.ability.slice(0, 3)}
            </span>
          </div>
        ))}
      </div>
      <div className="my-6">
        <h3 className="mb-2 text-xl font-medium">Age</h3>
        <p className="mb-4">{race.details.age}</p>
        <label className="mb-2 block text-xs font-medium uppercase">
          Age (years)
        </label>
        <input
          className="rounded-lg border border-black bg-slate-100 px-3 py-1"
          type="number"
          {...register("age", { valueAsNumber: true })}
        />
      </div>
      <div className="my-6">
        <h3 className="mb-2 text-xl font-medium">Alignment</h3>
        <p className="mb-4">{race.details.alignment}</p>
        <label className="mb-2 block text-xs font-medium uppercase">
          Alignment
        </label>
        <select
          className="rounded-lg border border-black bg-slate-100 px-3 py-1"
          {...register("alignment")}
        >
          <option>Select</option>
          <option value="Lawful Good">Lawful Good</option>
          <option value="Neutral Good">Neutral Good</option>
          <option value="Chaotic Good">Chaotic Good</option>
          <option value="Lawful Neutral">Lawful Neutral</option>
          <option value="Neutral">Neutral</option>
          <option value="Chaotic Neutral">Chaotic Neutral</option>
          <option value="Lawful Evil">Lawful Evil</option>
          <option value="Neutral Evil">Neutral Evil</option>
          <option value="Chaotic Evil">Chaotic Evil</option>
        </select>
      </div>
      <div className="mb-6">
        <h3 className="mb-2 text-xl font-medium">Size</h3>
        <p className="mb-4">{race.details.size}</p>
        <label className="mb-2 block w-1/2 text-xs font-medium uppercase">
          Height (Feet)
        </label>
        <input
          className="mb-4 flex-1 rounded-lg border border-black bg-slate-100 px-3 py-1"
          type="number"
          {...register("height.feet", { valueAsNumber: true })}
        />
        <label className="mb-2 block w-1/2 text-xs font-medium uppercase">
          Height (Inches)
        </label>
        <input
          className="mb-4 rounded-lg border border-black bg-slate-100 px-3 py-1"
          type="number"
          {...register("height.inches", { valueAsNumber: true })}
        />
        <label className="mb-2 block text-xs font-medium uppercase">
          Weight (Lbs.)
        </label>
        <input
          className="rounded-lg border border-black bg-slate-100 px-3 py-1"
          type="number"
          {...register("weight", { valueAsNumber: true })}
        />
      </div>
      <div className="mb-6">
        <h3 className="mb-2 text-xl font-medium">Speed</h3>
        <p className="mb-4">{race.details.speed}</p>
        <div className="flex w-fit flex-col items-center gap-2 rounded-lg border border-black p-2">
          <span className="text-xl">{race.speed}</span>
          <span className="text-sm font-medium uppercase">Speed</span>
        </div>
      </div>
    </form>
  )
}

export default RaceForm
