import "@testing-library/jest-dom"

jest.mock("next-auth/react", () => ({ 
  useSession: jest.fn(() => ({
    data: null,
    status: "unauthenticated",
  })),
  getSession: jest.fn(),
  signIn: jest.fn(),
  signOut: jest.fn(),
}))
