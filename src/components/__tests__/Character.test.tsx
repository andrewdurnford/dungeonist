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
