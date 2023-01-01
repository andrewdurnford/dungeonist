import { useState } from "react"
import RaceForm from "./RaceForm"
import RaceList from "./RaceList"

export function CharacterRace() {
  const [raceId, setRaceId] = useState<string | null>(null)

  if (!raceId) return <RaceList setRaceId={setRaceId} />

  return <RaceForm defaultValues={{ id: raceId }} setRaceId={setRaceId} />
}

export default CharacterRace
