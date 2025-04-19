import { render, screen, fireEvent } from "@testing-library/react"
import { useSession, signIn } from "next-auth/react"
import Login from "../src/app/login/page"

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(),
  signIn: jest.fn(),
}))
jest.mock("next/navigation")

describe("AuthComponent", () => {
  it("should render correctly when user is not authenticated", () => {
    useSession.mockReturnValue({ data: null, status: "unauthenticated" })
    render(<Login />)
  })

  it("should signIn when login button is clicked", async () => {
    signIn.mockReturnValue({
      error: null,
      ok: true,
      status: 200,
      url: null
    })

    render(<Login />)

    const button = screen.getByRole("button", { name: /login/i })
    fireEvent.click(button)

    expect(signIn).toHaveBeenCalledWith("credentials", expect.any(Object))
  })
})
