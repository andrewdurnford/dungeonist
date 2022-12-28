import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import App from "./App"

describe("App", () => {
  test("should render navbar", () => {
    render(<App />, { wrapper: MemoryRouter })

    const home = screen.getByRole("link", { name: /home/i })
    expect(home).toHaveAttribute("href", "/")

    const character = screen.getByRole("link", { name: /character/i })
    expect(character).toHaveAttribute("href", "/character")
  })

  test("should render home page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    )

    screen.getByRole("heading", { name: /hello world/i })
  })

  test("should render character page", () => {
    render(
      <MemoryRouter initialEntries={["/character"]}>
        <App />
      </MemoryRouter>
    )

    screen.getByRole("heading", { name: /character/i })
  })

  test("should render character 404 page", () => {
    render(
      <MemoryRouter initialEntries={["/bad-route"]}>
        <App />
      </MemoryRouter>
    )

    screen.getByRole("heading", { name: /404 not found/i })
  })
})
