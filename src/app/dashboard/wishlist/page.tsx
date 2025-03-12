"use client"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Trash2 } from "lucide-react"
// import { useQuery } from "@tanstack/react-query"
import { useWishlistStore } from "@/services/stores/wishlist"
export default function WishlistPage() {
  const wishlist = useWishlistStore((state) => state.wishlist)
  const removeWishlist = useWishlistStore((state) => state.removeWishlist)
  // const { data: wishlist, isLoading, error } = useQuery({
  //   queryKey: ["wishlist"],
  //   queryFn: async () => {
  //     const response = await fetch("/api/wishlist")
  //     return response.json()
  //   },
  // })

  // if (isLoading) {
  //   return (
  //     <div className="flex items-center justify-center py-12">
  //       <div className="text-center">
  //         <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
  //         <p>Loading your wishlist...</p>
  //       </div>
  //     </div>
  //   )
  // }
  
  // if (error) {
  //   return (
  //     <div className="text-center py-12">
  //       <h2 className="text-2xl font-semibold mb-4 text-red-600">Error</h2>
  //       <p className="text-muted-foreground">Failed to load wishlist. Please try again later.</p>
  //     </div>
  //   )
  // }

  if (wishlist.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">Your Wishlist is Empty</h2>
        <p className="text-muted-foreground">Browse our products and add items to your wishlist!</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <AnimatePresence>
            {wishlist.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-4 border-b py-4"
              >
                <Image
                  src={item.image}
                  alt={item.name || "Product Image"}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-primary">${item.price.toFixed(2)}</p>
                </div>
                <Button  
                  size="icon" 
                  onClick={() => {
                    removeWishlist(item.id)
                    toast.info("Product removed from wishlist")
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

