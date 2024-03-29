import React from "react"
import { useForm } from "react-hook-form"
import { classes } from "../../api/class"
import { useCharacter } from "../../context"

export type ClassFormValues = {
  id: string
}

type ClassFormProps = {
  setClassId: React.Dispatch<React.SetStateAction<string | null>>
  defaultValues: ClassFormValues
}

export function ClassForm({ defaultValues, setClassId }: ClassFormProps) {
  const { character, dispatch } = useCharacter()

  const { getValues, handleSubmit } = useForm<ClassFormValues>({
    mode: "onSubmit",
    defaultValues,
  })

  const classId = getValues("id")

  const cls = classes.find((x) => x.id === classId)
  if (!cls) return <p>Error</p>

  function onSubmit(data: ClassFormValues) {
    dispatch({
      type: "setClass",
      payload: { class: data.id },
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 flex items-center justify-between gap-2">
        <span>
          <h2 className="text-xl font-medium">{cls.name}</h2>
          {character.class === classId && (
            <span className="text-xs italic">Selected</span>
          )}
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setClassId(null)}
            className="text-gray-600 hover:underline"
          >
            {character.class === classId ? "Change" : "Back"}
          </button>
          <button
            type="submit"
            className="rounded-lg border border-gray-300 bg-white px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Save
          </button>
        </div>
      </div>
      <h1 className="mb-2 text-2xl font-medium">{cls.name} Features</h1>
      <p className="mb-4">
        As a {cls.name}, you gain the following class features.
      </p>
      <h2 className="mb-2 text-xl font-medium">Hit Points</h2>
      <p>
        <strong>Hit Dice:</strong> 1d{cls.hitDice} per {cls.name.toLowerCase()}{" "}
        level.
      </p>
      <p>
        <strong>Hit Points at 1st Level:</strong> {cls.hitDice} + your
        Consitution modifier.
      </p>
      <p>
        <strong>Hit Points at Higher Levels:</strong> 1d{cls.hitDice} (or{" "}
        {cls.hitDice / 2 + 1}) + your Consitution modifier per{" "}
        {cls.name.toLowerCase()} level after first.
      </p>
    </form>
  )
}

export default ClassForm
