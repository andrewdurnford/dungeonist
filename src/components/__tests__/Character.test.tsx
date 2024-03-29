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
})

// TODO: should display race name when selected
// TODO: should open race modal
// TODO: should display class name when selected
// TODO: should open class modal
