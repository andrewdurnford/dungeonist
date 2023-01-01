import { useState } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { classes } from "../api/class"
import { races } from "../api/race"
import { useCharacter } from "../context"
import CharacterClass from "../features/class/CharacterClass"
import CharacterRace from "../features/race/CharacterRace"
import Modal from "./Modal"

function Character() {
  const { character } = useCharacter()
  const [modal, setModal] = useState<"race" | "class" | null>(null)

  return (
    <>
      <nav className="mx-auto mt-4 max-w-lg px-4 sm:px-8">
        <div className="mb-4 flex items-center gap-4">
          <NavLink to="" end className="inline-block text-xl font-medium">
            {character.name}
          </NavLink>
          <div className="flex gap-2">
            <button type="button" onClick={() => setModal("race")}>
              {character.race
                ? races.find((x) => x.id === character.race)?.name ?? "Race*"
                : "Race*"}
            </button>
            <button type="button" onClick={() => setModal("class")}>
              {character.class
                ? classes.find((x) => x.id === character.class)?.name ??
                  "Class*"
                : "Class*"}
            </button>
          </div>
        </div>
        <hr className="mt-2 mb-4" />
      </nav>
      <main className="mx-auto max-w-lg px-4 pb-4 sm:px-8 sm:pb-8">
        <Outlet />
      </main>
      {modal === "race" && (
        <Modal name="Race" onClose={() => setModal(null)}>
          <CharacterRace />
        </Modal>
      )}
      {modal === "class" && (
        <Modal name="Class" onClose={() => setModal(null)}>
          <CharacterClass />
        </Modal>
      )}
    </>
  )
}

export default Character
