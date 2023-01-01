import { useState } from "react"
import { useCharacter } from "../../context"
import ClassForm from "./ClassForm"
import ClassList from "./ClassList"

export function CharacterClass() {
  const { character } = useCharacter()

  const [classId, setClassId] = useState<string | null>(character.class)

  if (!classId) return <ClassList setClassId={setClassId} />

  return <ClassForm setClassId={setClassId} defaultValues={{ id: classId }} />
}

export default CharacterClass
