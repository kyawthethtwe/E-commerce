"use client";
import { useCartStore } from "@/services/stores/cart";
import { motion } from "framer-motion";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MainPadding from "../theme/MainPadding";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const cartItems = useCartStore((state) => state.items);
  const cartItemsCount = cartItems.length;
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery(""); // Clear the search input after submitting
    }
  };
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <MainPadding className="py-4 flex items-center justify-between">
        <Link href="/" className="hover:scale-105 transition duration-300 ">
          <Image 
            src="/logo.jpeg" 
            alt="SecondHand Logo" 
            className="h-8 md:h-10 lg:h-12 2xl:h-14 w-8 md:w-10 lg:w-12 2xl:w-14 rounded-full"
            width={200}
            height={80}
            priority
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block text-base xl:text-lg 2xl:text-xl">
          <ul className="flex space-x-4">
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="/" className="text-gray-600 hover:text-primary hover:underline underline-offset-2 decoration-2 decoration-primary">
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
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="/contact" className="text-gray-600 hover:text-primary hover:underline underline-offset-2 decoration-2 decoration-primary">
                Contact
              </Link>
            </motion.li>
          </ul>
        </nav>
        
        <div className="flex items-center space-x-4">
          {/* Search Form - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:block relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-base xl:text-lg 2xl:text-xl pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              aria-label="Search products"
            />
            <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search size={20} />
            </button>
          </form>
          
          {/* Cart with Item Count */}
          <Link href="/cart" className="text-gray-600 hover:text-primary hover:scale-105 transition duration-300 relative">
            <ShoppingCart size={24} />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </Link>
          
          <Link href="/dashboard/listings" className="text-gray-600 hover:text-primary hover:scale-105 transition duration-300">
            <User size={24} />
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </MainPadding>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <MainPadding className="py-4">
            <form onSubmit={handleSearch} className="relative mb-4">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search size={20} />
              </button>
            </form>
            
            <nav className="text-base">
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link 
                    href="/" 
                    className="text-gray-600 hover:text-primary block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/products" 
                    className="text-gray-600 hover:text-primary block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="text-gray-600 hover:text-primary block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="text-gray-600 hover:text-primary block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </MainPadding>
        </div>
      )}
    </header>
  )
}

export default Header

