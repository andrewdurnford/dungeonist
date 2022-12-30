import { Character } from "./context"

export type Action =
  // | { type: "setName"; payload: { name: string } }
  // | { type: "setLevel"; payload: { level: number } }
  { type: "setRace"; payload: { race: string } }

export const reducer = (state: Character, action: Action): Character => {
  switch (action.type) {
    // case "setName":
    //   return {
    //     ...state,
    //     name: action.payload.name,
    //   }
    // case "setLevel":
    //   return {
    //     ...state,
    //     level: action.payload.level,
    //   }
    case "setRace":
      return {
        ...state,
        race: action.payload.race,
      }
    // default:
    //   return state
  }
}
