import Register from "@/app/register/page"
import { useSession } from "next-auth/react"
import { render } from "@testing-library/react"

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(),
  signIn: jest.fn(),
}))

describe("register page", () => {
  it("should render correctly when user is not authenticated", () => {
    useSession.mockReturnValue({ data: null, status: "unauthenticated" })
    render(<Register />)
  })
})
