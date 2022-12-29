import { NavLink, Outlet } from "react-router-dom"

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

export default Character
