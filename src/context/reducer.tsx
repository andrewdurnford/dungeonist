import { races } from "../api/race"
import { Character } from "./context"

export type Action =
  | { type: "setName"; payload: { name: string } }
  | { type: "setLevel"; payload: { level: number } }
  | { type: "setRace"; payload: { race: string } }

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
    }
  }

  return state
}
