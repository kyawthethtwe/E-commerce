"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface WishlistItem {
  id: string
  name: string
  price: number
}

interface WishlistContextType {
  items: WishlistItem[]
  addItem: (item: WishlistItem) => void
  removeItem: (id: string) => void
  clearWishlist: () => void
}

const WishlistContext = createContext<WishlistContextType | null>(null)

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([])

  const addItem = (item: WishlistItem) => {
    setItems((prevItems) => {
      if (!prevItems.some((i) => i.id === item.id)) {
        return [...prevItems, item]
      }
      return prevItems
    })
  }

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const clearWishlist = () => {
    setItems([])
  }

  return (
    <WishlistContext.Provider value={{ items, addItem, removeItem, clearWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}

