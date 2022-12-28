import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"

const activeStyle = (isActive: boolean) => ({
  textDecoration: isActive ? "underline" : "none",
})

function App() {
  return (
    <BrowserRouter>
      <nav className="mx-auto flex max-w-3xl gap-2 p-4">
        <NavLink to="/" style={({ isActive }) => activeStyle(isActive)}>
          Home
        </NavLink>
        <NavLink to="character" style={({ isActive }) => activeStyle(isActive)}>
          Character
        </NavLink>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="character" element={<Character />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
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
    <main className="mx-auto max-w-lg p-8">
      <h1 className="text-3xl font-medium">Character</h1>
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
