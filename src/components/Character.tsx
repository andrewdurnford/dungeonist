import { useState } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { races } from "../api/race"
import { useCharacter } from "../context"
import CharacterRace from "../features/race/CharacterRace"
import Modal from "./Modal"

function Character() {
  const { character } = useCharacter()
  const [modal, setModal] = useState(false)

  return (
    <>
      <nav className="mx-auto mt-4 max-w-lg px-4 sm:px-8">
        <div className="mb-4 flex items-center gap-4">
          <NavLink to="" end className="inline-block text-xl font-medium">
            {character.name}
          </NavLink>
          <div className="flex gap-2">
            <button type="button" onClick={() => setModal(true)}>
              {character.race
                ? races.find((x) => x.id === character.race)?.name ?? "Race*"
                : "Race*"}
            </button>

            <NavLink to="class" className="text-sm">
              {character.class
                ? `${character.class}(${character.level})`
                : "Class*"}
            </NavLink>
          </div>
        </div>
        <hr className="mt-2 mb-4" />
      </nav>
      <main className="mx-auto max-w-lg px-4 pb-4 sm:px-8 sm:pb-8">
        <Outlet />
      </main>
      {modal && (
        <Modal name="Race" onClose={() => setModal(false)}>
          <CharacterRace />
        </Modal>
      )}
    </>
  )
}

export default Character
