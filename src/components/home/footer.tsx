import type React from "react"
import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"
import MainPadding from "../theme/MainPadding"
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100">
      <MainPadding className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* about us  */}
          <div>
            <h3 className="text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold mb-4">About Us</h3>
            <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-600">
              SecondHand is your go-to marketplace for unique, pre-loved items. Shop sustainably and discover hidden
              treasures.
            </p>
          </div>
          {/* quick links */}
          <div>
            <h3 className="text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-600 hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-600 hover:text-primary ">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-600 hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-600 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          {/* customer service */}
          <div>
            <h3 className="text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-600 hover:text-primary">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-600 hover:text-primary">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/payment" className="text-sm lg:text-base xl:text-lg 2xl:text-2xl text-gray-600 hover:text-primary">
                  Payment Options
                </Link>
              </li>
              <li>
                <Link href="/gift-cards" className="text-sm lg:text-base xl:text-lg 2xl:text-2xl text-gray-600 hover:text-primary">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>
          {/* follow us */}
          <div>
            <h3 className="text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        {/* copy right */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm lg:text-base xl:text-xl text-gray-600">&copy; 2025 SecondHand. All rights reserved.</p>
        </div>
      </MainPadding>
    </footer>
  )
}

export default Footer

