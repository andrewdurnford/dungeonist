import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import App from "../App"

test("should render character header", () => {
  render(
    <MemoryRouter initialEntries={["/character"]}>
      <App />
    </MemoryRouter>
  )

  screen.getByRole("heading", { name: /character/i })
  expect(screen.getByRole("link", { name: /details/i })).toHaveAttribute(
    "href",
    "/character"
  )
  expect(screen.getByRole("link", { name: /race/i })).toHaveAttribute(
    "href",
    "/character/race"
  )
})

test("should render character details page", () => {
  render(
    <MemoryRouter initialEntries={["/character"]}>
      <App />
    </MemoryRouter>
  )

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

test("should render character race page", () => {
  render(
    <MemoryRouter initialEntries={["/character/race"]}>
      <App />
    </MemoryRouter>
  )

  screen.getByRole("heading", { name: /race/i })
})
