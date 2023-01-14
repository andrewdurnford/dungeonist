import { classes } from "../api/class"
import { races } from "../api/race"
import { Character } from "./context"

export type Action =
  | { type: "setName"; payload: { name: string } }
  | { type: "setLevel"; payload: { level: number } }
  | {
      type: "setRace"
      payload: {
        race: string
        age: number
        alignment: string
        height: { feet: number; inches: number }
        weight: number
      }
    }
  | { type: "setClass"; payload: { class: string } }

export const reducer = (state: Character, action: Action): Character => {
  if (action.type === "setName") {
    return {
      ...state,
      name: action.payload.name,
    }
  }

  if (action.type === "setLevel") {
    return {
      ...state,
      level: action.payload.level,
    }
  }

  if (action.type === "setRace") {
    const race = races.find((x) => x.id === action.payload.race)
    if (!race) return state

    return {
      ...state,
      race: action.payload.race,
      alignment: action.payload.alignment,
      age: action.payload.age,
      height: action.payload.height,
      weight: action.payload.weight,
    }
  }

  if (action.type === "setClass") {
    const cls = classes.find((x) => x.id === action.payload.class)
    if (!cls) return state

    return {
      ...state,
      class: action.payload.class,
    }
  }

  return state
}
