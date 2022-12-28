import { render, screen } from "@testing-library/react"
import App from "./App"

describe("App", () => {
  test("should render heading", () => {
    render(<App />)

    screen.getByRole("heading", { name: /hello world/i })
  })
})
