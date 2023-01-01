import { useState } from "react"
import ClassForm from "./ClassForm"
import ClassList from "./ClassList"

export function CharacterClass() {
  const [classId, setClassId] = useState<string | null>(null)

  if (!classId) return <ClassList setClassId={setClassId} />

  return <ClassForm setClassId={setClassId} defaultValues={{ id: classId }} />
}

export default CharacterClass
