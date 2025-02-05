"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ProtectedRoute({ children} : { children: React.ReactNode }) {
    const user = true // will be replaced with actual user from the user store or context
    const router = useRouter()
    useEffect(() => {
        if (!user) {
            router.push("/login")
        }
    }, [user, router])
    if (!user) {
        return null
    }
    return <>{children}</>
}