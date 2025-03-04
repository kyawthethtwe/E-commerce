import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import type React from "react"
import { Badge } from "../ui/badge"
import { useCartStore } from "@/services/stores/cart"
import { toast } from "sonner"
export interface Product {
  id: number
  title: string,
  description: string
  category : string
  rating: {
    rate : number
    count : number
  }
  price: number
  image: string
}

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addToCart = useCartStore(state => state.addItem) 
  const handleAddToCart = () => {
    addToCart({id: product.id.toString(), name: product.title, price: product.price, image: product.image, quantity: 1})
    toast.success("Product added to cart  🛒")
  }
  return (
    
      <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow-md flex flex-col ">
        <Link 
          href={`/products/${product.id}`}
          className="relative w-full 2xl:h-[430px]  h-[280px]  overflow-hidden ">
          <Image 
          src={product.image} 
          alt={product.title} 
          fill
          priority
          className="object-center w-full h-full"
          />
        </Link>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 line-clamp-1">{product.title}</h3>
          <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
          <div className="flex justify-between items-center">
            <p className="text-primary font-semibold">${product.price.toFixed(2)}</p>
            <div className="flex items-center">
              <span className="text-primary">{product.rating.rate || 0}</span>
              <span className="text-gray-600 ml-1">({product.rating.count})</span>
            </div>
          </div>
          <div className="flex justify-end mt-2">
            <Badge >{product.category}</Badge>
          </div>
          <button 
            onClick={handleAddToCart}
            className="mt-4 w-full bg-primary text-white py-2 rounded-md hover:bg-primary-light1 transition duration-300">
            Add to Cart
          </button>
        </div>
      </motion.div>
  )
}
export default ProductCard

