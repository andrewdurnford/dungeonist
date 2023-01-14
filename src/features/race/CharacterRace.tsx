import { useState } from "react"
import { useCharacter } from "../../context"
import RaceForm from "./RaceForm"
import RaceList from "./RaceList"

export function CharacterRace() {
  const { character } = useCharacter()

  const [raceId, setRaceId] = useState<string | null>(character.race)

  console.log(character)

  if (!raceId) return <RaceList setRaceId={setRaceId} />

  return (
    <RaceForm
      defaultValues={{
        id: raceId,
        age: character.age,
        alignment: character.alignment,
        weight: character.weight,
        height: character.height,
      }}
      setRaceId={setRaceId}
    />
  )
}

export default CharacterRace
