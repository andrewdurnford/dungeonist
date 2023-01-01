import { NavLink, Route, Routes } from "react-router-dom"
import Character from "./Character"
import CharacterDetails from "./CharacterDetails"
import Home from "./Home"

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
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
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
