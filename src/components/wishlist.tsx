"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWishlist } from "./wishlist-provider"

export function Wishlist() {
  const [isOpen, setIsOpen] = useState(false)
  const { items, removeItem } = useWishlist()

  return (
    <div className="relative">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
        <Heart className="h-6 w-6" />
        {items.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
            {items.length}
          </span>
        )}
      </Button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-background shadow-xl rounded-lg z-50">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Your Wishlist</h3>
            {items.length === 0 ? (
              <p>Your wishlist is empty</p>
            ) : (
              <>
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center mb-2">
                    <span>{item.name}</span>
                    <span>${item.price.toFixed(2)}</span>
                    <Button size="sm" variant="ghost" onClick={() => removeItem(item.id)}>
                      Remove
                    </Button>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

