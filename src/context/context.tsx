import React, {
  createContext,
  useContext,
  useMemo,
  useReducer,
  PropsWithChildren,
} from "react"
import { abilities } from "../api/ability"
import { classes } from "../api/class"
import { races } from "../api/race"
import { Action, reducer } from "./reducer"

export type Character = {
  name: string
  level: number
  race: string | null
  class: string | null
  armorClass: number
  hitPoints: number
  abilities: Array<{
    id: string
    name: string
    score: number
    modifier: number
  }>
  alignment: string
  age: number
  height: {
    feet: number
    inches: number
  }
  weight: number
}

const initialState: Character = {
  name: "Untitled",
  level: 1,
  armorClass: 0,
  hitPoints: 0,
  race: null,
  class: null,
  abilities: abilities.map((ability) => ({
    id: ability.id,
    name: ability.name,
    score: 10,
    modifier: 0,
  })),
  alignment: "",
  age: 0,
  height: {
    feet: 0,
    inches: 0,
  },
  weight: 0,
}

type CharacterContextType = {
  character: Character
  dispatch: React.Dispatch<Action>
}

const CharacterContext = createContext({} as CharacterContextType)

function getAbilityScores(character: Character) {
  return abilities.map((ability) => {
    const increase =
      races
        .find((x) => x.id === character.race)
        ?.abilityScoreIncrease.find((x) => x.ability === ability.id)
        ?.increase ?? 0
    const score = 10 + increase
    const modifier = Math.floor((score - 10) / 2)

    return {
      id: ability.name,
      name: ability.name,
      score,
      modifier,
    }
  })
}

export function CharacterProvider({ children }: PropsWithChildren) {
  const [character, dispatch] = useReducer(reducer, initialState)

  const value = useMemo(
    () => ({
      character: {
        ...character,
        armorClass: 10 + getAbilityScores(character)[1].modifier ?? 0,
        hitPoints: classes.find((x) => x.id === character.class)?.hitDice ?? 0,
        abilities: abilities.map((ability) => {
          const increase =
            races
              .find((x) => x.id === character.race)
              ?.abilityScoreIncrease.find((x) => x.ability === ability.id)
              ?.increase ?? 0
          const score = 10 + increase
          const modifier = Math.floor((score - 10) / 2)

          return {
            id: ability.name,
            name: ability.name,
            score,
            modifier,
          }
        }),
      },
      dispatch,
    }),
    [character, dispatch]
  )

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  )
}

export function useCharacter() {
  return useContext(CharacterContext)
}
