"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface Product {
  id: string
  title: string
  price: number
  image: string
}
const mockResults: Product[] = [
    { id: "1", title: "Vintage Camera", price: 89.99, image: "/clock.jpg" },
    { id: "2", title: "Retro Radio", price: 59.99, image: "/clock.jpg" },
    { id: "3", title: "Antique Clock", price: 129.99, image: "/clock.jpg" },
    { id: "4", title: "Classic Typewriter", price: 149.99, image: "/clock.jpg" },
  ]

export default function SearchResults({ query, category }: { query: string, category: string }) {
  const [results, setResults] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setResults(mockResults)
      setLoading(false)
    }, 1000)
  }, [query, category])

  if (loading) {
    return <div className="text-center py-8">Loading...</div>
  }

  if (results.length === 0) {
    return <div className="text-center py-8">No results found</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {results.map((product) => (
        <Card key={product.id} className="overflow-hidden h-[470px]">
          <CardContent className="p-0">
            <div className="relative h-[300px]">
              <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover object-center w-full h-full" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{product.title}</h3>
              <p className="text-xl font-bold mt-2">${product.price.toFixed(2)}</p>
            </div>
          </CardContent>
          <CardFooter className="p-4">
            <Link href={`/product/${product.id}`} passHref>
              <Button className="w-full">View Details</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

