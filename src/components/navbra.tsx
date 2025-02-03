"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
//import { ModeToggle } from "@/components/mode-toggle"
import { Search, Bell, User, LogOut, MessageSquare } from "lucide-react"
//import Cart from "./cart"
//import { Wishlist } from "./wishlist"
//import { useAuth } from "./auth-provider"
import { useState } from "react"
export default function Navbar() {
  const router = useRouter()
  //const { user, logout } = useAuth()
  const [user , setUser] = useState(true)
  const logout = () => {
    setUser(false)
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-4 flex items-center space-x-2">
          <span className="text-xl font-bold text-highlight">EcoMarket</span>
        </Link>
        <Link href="/categories" className="mr-4 text-sm font-medium text-foreground hover:text-highlight">
          Categories
        </Link>
        <Link href="/about" className="mr-4 text-sm font-medium text-foreground hover:text-highlight">
          About
        </Link>
        <Link href="/faq" className="mr-4 text-sm font-medium text-foreground hover:text-highlight">
          FAQ
        </Link>
        <Link href="/contact" className="mr-4 text-sm font-medium text-foreground hover:text-highlight">
          Contact
        </Link>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            const searchTerm = (e.target as HTMLFormElement).search.value
            router.push(`/search?q=${encodeURIComponent(searchTerm)}`)
          }}
          className="flex flex-1 items-center space-x-2"
        >
          <Input type="search" placeholder="Search..." name="search" className="md:w-[300px] lg:w-[400px] bg-white" />
          <Button type="submit" size="icon" variant="ghost" className="bg-white">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </form>
        <div className="flex items-center space-x-4">
          {/*<Wishlist /> */}
          <Button variant="ghost" size="icon">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>
          {user ? (
            <>
              <Button variant="ghost" size="icon" onClick={() => router.push("/messages")}>
                <MessageSquare className="h-4 w-4" />
                <span className="sr-only">Messages</span>
              </Button>
              <Button variant="ghost" size="icon" onClick={() => router.push("/profile")}>
                <User className="h-4 w-4" />
                <span className="sr-only">Profile</span>
              </Button>
              <Button variant="ghost" size="icon" onClick={logout}>
                <LogOut className="h-4 w-4" />
                <span className="sr-only">Logout</span>
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" onClick={() => router.push("/login")}>
                Login
              </Button>
              <Button variant="ghost" onClick={() => router.push("/register")}>
                Register
              </Button>
            </>
          )}
         { /*<Cart />
          <ModeToggle /> */}
        </div>
      </div>
    </nav>
  )
}

