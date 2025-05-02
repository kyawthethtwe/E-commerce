"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, X } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import MainPadding from "../theme/MainPadding"

export default function FaqHero() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams.get("q")

  // Set search input to match URL query parameter when component mounts
  useEffect(() => {
    if (query) {
      setSearchQuery(query)
    }
  }, [query])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/faq?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const clearSearch = () => {
    setSearchQuery("")
    router.push("/faq")
  }

  return (
    <section className="bg-primary text-white py-16 md:py-20 lg:py-24">
      <MainPadding className="text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
          Find answers to common questions about buying, selling, and using our platform.
        </p>

        <form onSubmit={handleSearch} className="max-w-xl mx-auto relative">
          <Input
            type="text"
            placeholder="Search for questions..."
            className="pl-10 pr-24 py-6 rounded-full text-base md:text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search FAQs"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          
          {searchQuery && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-24 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}
          
          <Button 
            type="submit" 
            className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full shadow-none"
            disabled={!searchQuery.trim()}
          >
            Search
          </Button>
        </form>
      </MainPadding>
    </section>
  )
}

