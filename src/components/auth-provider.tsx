"use client"

import { createContext, useContext, type ReactNode } from "react"
import { useAuthStore } from "@/stores/authStore"

const AuthContext = createContext<ReturnType<typeof useAuthStore> | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  return <AuthContext.Provider value={useAuthStore()}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

