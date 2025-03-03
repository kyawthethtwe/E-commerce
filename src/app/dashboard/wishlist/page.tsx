"use client"

import ProductCard, { Product } from "@/components/products/product-card"
import { useQuery } from "@tanstack/react-query"


export default function WishlistPage() {
  const { data: wishlist, isLoading, error } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const response = await fetch("/api/wishlist")
      return response.json()
    },
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Loading your wishlist...</p>
        </div>
      </div>
    )
  }
  
  if (error) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4 text-red-600">Error</h2>
        <p className="text-muted-foreground">Failed to load wishlist. Please try again later.</p>
      </div>
    )
  }

  if (!wishlist?.length) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">Your Wishlist is Empty</h2>
        <p className="text-muted-foreground">Browse our products and add items to your wishlist!</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">My Wishlist</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.map((item: Product) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  )
}

