import React, {
  createContext,
  useContext,
  useMemo,
  useReducer,
  PropsWithChildren,
} from "react"
import { Action, reducer } from "./reducer"

export type Character = {
  name: string
  level: number
  race: string | null
}

const initialState: Character = {
  name: "Untitled",
  level: 1,
  race: null,
}

type CharacterContextType = {
  character: Character
  dispatch: React.Dispatch<Action>
}

const CharacterContext = createContext({} as CharacterContextType)

export function CharacterProvider({ children }: PropsWithChildren) {
  const [character, dispatch] = useReducer(reducer, initialState)

  const value = useMemo(() => ({ character, dispatch }), [character, dispatch])

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  )
}

export function useCharacter() {
  return useContext(CharacterContext)
}
