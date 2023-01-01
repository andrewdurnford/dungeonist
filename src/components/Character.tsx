import { NavLink, Outlet } from "react-router-dom"
import { races } from "../api/race"
import { useCharacter } from "../context"

function Character() {
  const { character } = useCharacter()

  return (
    <>
      <nav className="mx-auto mt-4 max-w-lg px-4 sm:px-8">
        <div className="mb-4 flex items-center gap-4">
          <NavLink to="" end className="inline-block text-xl font-medium">
            {character.name}
          </NavLink>
          <div className="flex gap-2">
            <NavLink to="race" className="text-sm">
              {character.race
                ? races.find((x) => x.id === character.race)?.name ?? "Race*"
                : "Race*"}
            </NavLink>
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
    </>
  )
}

export default Character
