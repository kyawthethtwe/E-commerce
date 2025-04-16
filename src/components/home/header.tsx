"use client";
import { Search, ShoppingCart, User } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import MainPadding from "../theme/MainPadding";
import Image from "next/image";
const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <MainPadding className="py-4 flex items-center justify-between">
        <Link href="/" className="hover:scale-105 transition duration-300 ">
          <Image 
            src="/logo.jpeg" 
            alt="SecondHand Logo" 
            className="h-8 md:h-10 lg:h-12 2xl:h-14 w-8 md:w-10 lg:w-12 2xl:w-14 rounded-full "
            width={200}
            height={80}
            priority
          />
        </Link>
        <nav className="text-base xl:text-lg 2xl:text-xl">
          <ul className="flex space-x-4">
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="/" className="text-gray-600 hover:text-primary hover:underline underline-offset-2 decoarion-2 decoration-primary">
                Home
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="/products" className="text-gray-600 hover:text-primary hover:underline underline-offset-2 decoration-2 decoration-primary">
                Products
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="/about" className="text-gray-600 hover:text-primary hover:underline underline-offset-2 decoration-2 decoration-primary">
                About
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
              <Link href="/contact" className="text-gray-600 hover:text-primary hover:underline underline-offset-2 decoration-2 decoration-primary">
                Contact
              </Link>
            </motion.li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className=" text-base xl:text-lg 2xl:text-xl pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <Link href="/cart" className="text-gray-600 hover:text-primary hover:scale-105 transition duration-300">
            <ShoppingCart size={24} />
          </Link>
          <Link href="/dashboard/listings" className="text-gray-600 hover:text-primary hover:scale-105 transition duration-300">
            <User size={24} />
          </Link>
        </div>
      </MainPadding>
    </header>
  )
}

export default Header

