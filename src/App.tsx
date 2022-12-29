import { NavLink, Outlet, Route, Routes } from "react-router-dom"
import { abilities, skills } from "./api/ability"

function App() {
  return (
    <>
      <nav className="bg-gray-800 text-white">
        <div className="mx-auto flex max-w-3xl gap-4 p-4">
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? { textDecoration: "underline" } : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
            to="character"
            style={({ isActive }) =>
              isActive ? { textDecoration: "underline" } : undefined
            }
          >
            Character
          </NavLink>
        </div>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="character" element={<Character />}>
          <Route index element={<CharacterDetails />} />
          <Route path="race" element={<CharacterRace />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

function Home() {
  return (
    <main className="mx-auto max-w-lg p-8">
      <h1 className="text-3xl font-medium">Hello World</h1>
    </main>
  )
}

function Character() {
  return (
    <main className="mx-auto max-w-lg p-4 sm:p-8">
      <h1 className="mb-2 text-3xl font-medium">Character</h1>
      <nav className="flex gap-4 p-1">
        <NavLink
          to=""
          end
          style={({ isActive }) => (isActive ? { fontWeight: 500 } : undefined)}
        >
          Details
        </NavLink>
        <NavLink
          to="race"
          style={({ isActive }) => (isActive ? { fontWeight: 500 } : undefined)}
        >
          Race
        </NavLink>
      </nav>
      <hr className="mb-6 mt-2" />
      <Outlet />
    </main>
  )
}

function CharacterDetails() {
  return (
    <div className="flex gap-8">
      <section>
        <h2 className="mb-2 text-center text-sm font-medium uppercase">
          Abilities
        </h2>
        <div className="rounded-lg bg-gray-200 p-2 pb-5">
          <ul className="flex flex-col gap-5">
            {abilities.map((ability) => (
              <li
                key={ability.id}
                className="flex flex-col items-center rounded-lg border border-black bg-white py-1 px-3"
              >
                <span className="text-xs font-medium uppercase">
                  {ability.name.substring(0, 3)}
                </span>
                <span className="text-xl">+0</span>
                <span className="mb-[-1.125rem] mt-1 rounded-lg border border-black bg-white px-1">
                  10
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <h2 className="mb-2 text-center text-sm font-medium uppercase">
          Skills
        </h2>
        <ul className="flex flex-col gap-1 leading-6">
          {skills.map((skill) => (
            <li key={skill.id} className="flex justify-between gap-4">
              <span>{skill.name}</span>
              <span>+0</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

function CharacterRace() {
  return (
    <div className="flex gap-8">
      <h2 className="text-2xl font-medium">Race</h2>
    </div>
  )
}

function NotFound() {
  return (
    <main className="mx-auto max-w-lg p-8">
      <h1 className="text-3xl font-medium">404 Not Found</h1>
    </main>
  )
}

export default App
