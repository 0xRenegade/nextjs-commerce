export const useRouter = () => ({
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
})
export const usePathname = () => "/login"
export const useSearchParams = () => new URLSearchParams()
