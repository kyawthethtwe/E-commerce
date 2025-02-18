import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface Product {
  id: number
  title: string
  price: number
  image: string
}

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image src={product.image || "/placeholder.svg"} alt={product.title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-primary font-bold">${product.price.toFixed(2)}</p>
        <button className="mt-4 w-full bg-primary text-white py-2 rounded-md hover:bg-primary-light1 transition duration-300">
          Add to Cart
        </button>
      </div>
    </motion.div>
  )
}

export default ProductCard

