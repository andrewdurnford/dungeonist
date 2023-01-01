import { useState } from "react"
import { useCharacter } from "../../context"
import RaceForm from "./RaceForm"
import RaceList from "./RaceList"

export function CharacterRace() {
  const { character } = useCharacter()

  const [raceId, setRaceId] = useState<string | null>(character.race)

  if (!raceId) return <RaceList setRaceId={setRaceId} />

  return <RaceForm defaultValues={{ id: raceId }} setRaceId={setRaceId} />
}

export default CharacterRace
