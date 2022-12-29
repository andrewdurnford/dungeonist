import { createContext, PropsWithChildren, useContext } from "react"

type Character = {
  name: string
  level: number
}

const character: Character = {
  name: "Untitled",
  level: 1,
}

const CharacterContext = createContext<Character>(character)

export function CharacterProvider({ children }: PropsWithChildren) {
  return (
    <CharacterContext.Provider value={character}>
      {children}
    </CharacterContext.Provider>
  )
}

export function useCharacter() {
  return useContext(CharacterContext)
}
