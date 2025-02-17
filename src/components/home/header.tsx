import React from "react"
import Link from "next/link"
import { Search, ShoppingCart, User } from "lucide-react"

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          SecondHand
        </Link>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <Link href="/cart" className="text-gray-600 hover:text-primary">
            <ShoppingCart size={24} />
          </Link>
          <Link href="/account" className="text-gray-600 hover:text-primary">
            <User size={24} />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header

