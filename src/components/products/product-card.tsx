"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import type React from "react"
import { Badge } from "../ui/badge"
import { useCartStore } from "@/services/stores/cart"
import { useWishlistStore } from "@/services/stores/wishlist"
import { toast } from "sonner"
import { Heart } from "lucide-react"
// import { cn } from "@/lib/utils"
import { Product } from "@/types/IProduct"

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
      <motion.div  className="bg-white rounded-lg shadow-md flex flex-col ">
        <Link 
          href={`/products/${product.id}`}
          className="relative w-full h-[280px] sm:h-[300px] md:h-[340px] lg:h-[380px] 2xl:h-[420px] overflow-hidden ">
          <Image 
          src={product.image} 
          alt={product.title} 
          fill
          priority
          className="object-center w-full h-full hover:scale-105 transition duration-300"
          />
        </Link>
        <div className="p-4">
          <h3 className="text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold mb-2 line-clamp-1">{product.title}</h3>
          <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-600 mb-2 line-clamp-2">{product.description}</p>
          <div className="flex justify-between items-center">
            <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl text-primary font-semibold">${product.price.toFixed(2)}</p>
            <div className="flex items-center text-sm lg:text-base xl:text-lg 2xl:text-xl">
              <span className="text-primary">{product.rating.rate || 0}</span>
              <span className="text-gray-600 ml-1">({product.rating.count})</span>
            </div>
          </div>
          <div className="flex justify-end mt-2">
            <Badge className="text-sm lg:text-base xl:text-lg 2xl:text-xl" >{product.category}</Badge>
          </div>
          <div className="flex gap-4 mt-4">
          <button 
            onClick={handleAddToCart}
            className="mt-4 w-full bg-primary text-white py-2 rounded-md hover:bg-primary-light1 transition duration-300 text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            Add to Cart
          </button>
          <button 
            onClick={() => isWishlisted(product.id) ? handleRemoveFromWishlist() : handleAddToWithlist()}
            className={`mt-4  bg-white text-primary py-2 rounded-md  transition duration-300`}>
            <Heart 
            size={25} 
            fill={product && isWishlisted(product.id) ? "currentColor" : "none" }
            />
          </button>
        </div>
        </div>
      </motion.div>
  )
}
export default ProductCard

