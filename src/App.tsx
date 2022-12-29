import { NavLink, Route, Routes } from "react-router-dom"
import { abilities, skills } from "./api/ability"

const activeStyle = (isActive: boolean) => ({
  textDecoration: isActive ? "underline" : "none",
})

function App() {
  return (
    <>
      <nav className="bg-gray-800 text-white">
        <div className="mx-auto flex max-w-3xl gap-4 p-4">
          <NavLink to="/" style={({ isActive }) => activeStyle(isActive)}>
            Home
          </NavLink>
          <NavLink
            to="character"
            style={({ isActive }) => activeStyle(isActive)}
          >
            Character
          </NavLink>
        </div>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="character" element={<Character />} />
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
      <h1 className="mb-4 text-3xl font-medium">Character</h1>
      <nav className="mb-6 flex gap-4">
        <span>Details</span>
        <span>Race</span>
      </nav>
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
    </main>
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
