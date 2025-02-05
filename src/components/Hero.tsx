"use client";

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const searchPhrases = [
  "Search for vintage cameras...",
  "Find eco-friendly products...",
  "Discover unique antiques...",
  "Shop pre-loved fashion...",
]

export default function Hero() {
  const [searchPhrase, setSearchPhrase] = useState("")
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < searchPhrases[phraseIndex].length) {
        setSearchPhrase((prev) => prev + searchPhrases[phraseIndex][charIndex])
        setCharIndex(charIndex + 1)
      } else {
        clearInterval(typingInterval)
        setTimeout(() => {
          setSearchPhrase("")
          setCharIndex(0)
          setPhraseIndex((phraseIndex + 1) % searchPhrases.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [charIndex, phraseIndex])

  return (
    <section className="container flex flex-col items-center text-center py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
        <span className="block text-highlight">Buy Preloved,</span>
        <span className="block text-action">Save the Planet</span>
      </h1>
      <p className="mt-3 text-base text-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
        Find amazing deals on second-hand items and make a positive impact on the environment. Join thousands of
        eco-conscious shoppers and sellers on EcoMarket today!
      </p>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center w-full max-w-md">
        <div className="mt-3 sm:mt-0 sm:ml-3 w-full">
          <Input type="text" placeholder={searchPhrase} className="w-full bg-white" />
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <Button type="submit" className="cursor-pointer">Search Deals</Button>
        </div>
      </div>
      <div className="mt-8">
        <Link href="/categories">
          <Button size="lg" className="cursor-pointer"> 
            Explore Categories
          </Button>
        </Link>
      </div>
    </section>
  )
}

