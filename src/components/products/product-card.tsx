import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Product } from "@/types/IProduct"
import { useCartStore } from "@/services/stores/cart"
import { toast } from "sonner"
import { useWishlistStore } from "@/services/stores/wishlist"
import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
export default function ProductCard({product} : { product: Product }) {
  const addToCart = useCartStore(state => state.addItem) 
  const wishlist = useWishlistStore(state => state.wishlist)
  const addToWishlist = useWishlistStore(state => state.addWishlist)
  const removeFromWishlist = useWishlistStore(state => state.removeWishlist)
  const isWishlisted = (id: number) => wishlist.some(item => item.id === id);
  const handleAddToCart = () => {
    addToCart({id: product.id, title: product.title, price: product.price, image: product.image, quantity: 1})
    toast.success("Product added to cart  🛒")
  }

  const handleAddToWithlist = () => {
    addToWishlist({id: product.id, title: product.title, price: product.price, image: product.image})
    toast.success("Product added to wishlist ❤️")
  }

  const handleRemoveFromWishlist = () => {
    removeFromWishlist(product.id)
    toast.success("Product removed from wishlist 💔")
  }
  return (
      <Card className="w-full overflow-hidden">
          <div className="relative w-full h-[280px] sm:h-[300px] md:h-[340px]  2xl:h-[360px] overflow-hidden">
            <Link href={`/products/${product.id}`} className="block w-full h-full">
              <Image
                src={product.image || "/retro.jpg"}
                alt={product.title}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </Link>
            <Button
              onClick={() => isWishlisted(product.id) ? handleRemoveFromWishlist() : handleAddToWithlist()}
              className={cn(
                "absolute top-4 right-4 z-10",
                isWishlisted(product.id) ? "text-red-500" : "text-white"
              )}
            >
              <Heart size={24} fill={product && isWishlisted(product.id) ? "currentColor" : "none" } />
            </Button>
          </div>

          <div className="space-y-3 p-4">
            <h2 className="text-xl font-semibold tracking-tight">{product.title}</h2>
            <p className="text-zinc-400 line-clamp-2">{product.description}</p>
            <div className="pt-2">
              <Badge variant="outline" className="rounded-full px-6 py-1.5 text-sm border-zinc-700 bg-transparent">
                {product.category}
              </Badge>
            </div>

            <div className="flex items-center justify-between pt-3">
              <div>
                <p className="text-zinc-400 text-sm">Price</p>
                <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
              </div>
              <Button onClick={handleAddToCart}>
                Add To Cart
              </Button>
            </div>
          </div>
      </Card>

  )
}

