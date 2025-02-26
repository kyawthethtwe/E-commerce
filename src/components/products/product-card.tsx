import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { Badge } from "../ui/badge"

interface Product {
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
  return (
    <Link href={`/products/${product.id}`}>
      <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow-md flex flex-col ">
        <div className="relative w-full 2xl:h-[430px]  h-[280px]  overflow-hidden ">
          <Image 
          src={product.image} 
          alt={product.title} 
          fill
          priority
          className="object-center w-full h-full"
          />
        </div>
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
          <button className="mt-4 w-full bg-primary text-white py-2 rounded-md hover:bg-primary-light1 transition duration-300">
            Add to Cart
          </button>
        </div>
      </motion.div>
    </Link>
  )
}

export default ProductCard

{/* <Link href={`/facultynews/news/${id}`}>
  <div className="flex flex-col items-center ">
      <div className="relative w-full 2xl:h-[477px] h-[360px]  overflow-hidden  ">
          <Image
              src={imageUrl}
              alt="Activity"
              fill
              priority
              className="w-full h-full object-cover object-center"
          />
      </div>
      <div className=" w-full text-black mt-2">
          <p className=" text-sm  xl:text-base 2xl:text-xl">{date}</p>
          <h1 className="text-base  md:text-lg xl:text-lg 2xl:text-2xl h-[5.7rem] overflow-hidden font-semibold mt-3">
              <span className="line-clamp-3">{title}</span>
          </h1>
          <p className="text-sm  xl:text-base 2xl:text-xl line-clamp-2">{description}</p>
      </div>
  </div>
  </Link> */}
