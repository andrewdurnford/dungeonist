import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import App from "../App"

describe("App", () => {
  test("should render navbar", () => {
    render(<App />, { wrapper: MemoryRouter })

    const home = screen.getByRole("link", { name: /home/i })
    expect(home).toHaveAttribute("href", "/")

    const character = screen.getByRole("link", { name: /character/i })
    expect(character).toHaveAttribute("href", "/character")
  })

  test("should render 404 page", () => {
    render(
      <MemoryRouter initialEntries={["/bad-route"]}>
        <App />
      </MemoryRouter>
    )

    screen.getByRole("heading", { name: /404 not found/i })
  })
})
