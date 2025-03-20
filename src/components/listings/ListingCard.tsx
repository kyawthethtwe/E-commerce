import type React from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ListingProps {
  listing: {
    id: string
    title: string
    price: number
    image: string
    status: "active" | "sold" | "draft"
  }
  actions?: React.ReactNode
}

export default function ListingCard({ listing, actions }: ListingProps) {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image
            src={listing.image || "/placeholder.svg"}
            alt={listing.title}
            fill
            className="object-cover rounded-t-lg"
          />
          <div className="absolute top-2 right-2">
            <span
              className={`
              px-2 py-1 text-xs font-semibold rounded-full
              ${listing.status === "active" ? "bg-green-500 text-white" : ""}
              ${listing.status === "sold" ? "bg-gray-500 text-white" : ""}
              ${listing.status === "draft" ? "bg-yellow-500 text-white" : ""}
            `}
            >
              {listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}
            </span>
          </div>
        </div>
      </CardContent>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-2">{listing.title}</h3>
        <p className="text-primary font-bold">${listing.price.toFixed(2)}</p>
      </CardContent>
      {actions && <CardFooter className="p-4 pt-0">{actions}</CardFooter>}
    </Card>
  )
}

