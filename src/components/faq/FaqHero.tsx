"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import MainPadding from "../theme/MainPadding"
export default function FaqHero() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/faq?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <section className="bg-primary text-white py-16 md:py-24">
      <MainPadding className="text-center">
        <h1 className="text-3xl md:text-5xl 2xl:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
        <p className="text-lg md:text-xl 2xl:text-2xl mb-8 ">
          Find answers to common questions about buying, selling, and using our platform.
        </p>

        <form onSubmit={handleSearch} className="max-w-xl mx-auto relative">
          <Input
            type="text"
            placeholder="Search for questions..."
            className="pl-10 py-6 rounded-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Button type="submit" className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full shadow-none">
            Search
          </Button>
        </form>
      </MainPadding>
    </section>
  )
}

