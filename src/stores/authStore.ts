import { create } from "zustand"

interface User {
  id: string
  name: string
  email: string
}

interface AuthState {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: async (email: string, password: string) => {
    // In a real application, you would make an API call here
    // For now, we'll just simulate a successful login
    const user: User = { id: "1", name: "John Doe", email: email }
    set({ user })
  },
  logout: () => {
    set({ user: null })
  },
}))

