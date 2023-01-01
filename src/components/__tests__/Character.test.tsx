import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { CharacterProvider } from "../../context"
import App from "../App"

test("should render character header", () => {
  render(
    <MemoryRouter initialEntries={["/character"]}>
      <App />
    </MemoryRouter>,
    { wrapper: CharacterProvider }
  )

  expect(screen.getByRole("link", { name: /Untitled/i })).toHaveAttribute(
    "href",
    "/character"
  )
  expect(screen.getByRole("link", { name: /race/i })).toHaveAttribute(
    "href",
    "/character/race"
  )
  expect(screen.getByRole("link", { name: /class/i })).toHaveAttribute(
    "href",
    "/character/class"
  )
})

// TODO: should display race name when selected
