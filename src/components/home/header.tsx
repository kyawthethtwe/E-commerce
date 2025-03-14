"use client";
import { Search, ShoppingCart, User } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import MainPadding from "../theme/MainPadding";
const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <MainPadding className="py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl xl:text-3xl 2xl:text-4xl font-bold text-primary hover:scale-105 transition duration-300">
          SecondHand
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

