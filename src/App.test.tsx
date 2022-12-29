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

    screen.getByRole("heading", { name: /abilities/i })
    screen.getAllByText("+0")
    screen.getAllByText("10")
    screen.getAllByText(/str/i)
    screen.getAllByText(/dex/i)
    screen.getAllByText(/con/i)
    screen.getAllByText(/int/i)
    screen.getAllByText(/wis/i)
    screen.getAllByText(/cha/i)

    screen.getAllByRole("heading", { name: /skills/i })
    screen.getAllByText("+0")
    screen.getAllByText(/acrobatics/i)
    screen.getAllByText(/animal handling/i)
    screen.getAllByText(/arcana/i)
    screen.getAllByText(/athletics/i)
    screen.getAllByText(/deception/i)
    screen.getAllByText(/history/i)
    screen.getAllByText(/insight/i)
    screen.getAllByText(/intimidation/i)
    screen.getAllByText(/investigation/i)
    screen.getAllByText(/medicine/i)
    screen.getAllByText(/nature/i)
    screen.getAllByText(/perception/i)
    screen.getAllByText(/performance/i)
    screen.getAllByText(/persuasion/i)
    screen.getAllByText(/religion/i)
    screen.getAllByText(/sleight of hand/i)
    screen.getAllByText(/stealth/i)
    screen.getAllByText(/survival/i)
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
