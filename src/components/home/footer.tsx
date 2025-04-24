import { Facebook, Instagram, Mail, Twitter, Youtube } from "lucide-react"
import Link from "next/link"
import type React from "react"
import MainPadding from "../theme/MainPadding"

// Social media links configuration
const socialLinks = [
  { 
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com/secondhand",
    color: "hover:text-blue-600"
  },
  { 
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/secondhand",
    color: "hover:text-sky-500"
  },
  { 
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/secondhand",
    color: "hover:text-pink-600"
  },
  { 
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/secondhand",
    color: "hover:text-red-600"
  }
]

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-100">
      <MainPadding className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About us */}
          <div>
            <h3 className="text-base lg:text-lg xl:text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm lg:text-base text-gray-600">
              SecondHand is your go-to marketplace for unique, pre-loved items. Shop sustainably and discover hidden
              treasures.
            </p>
            
            {/* Contact info */}
            <div className="mt-4">
              <a 
                href="mailto:contact@secondhand.com" 
                className="flex items-center gap-2 text-sm lg:text-base text-gray-600 hover:text-primary"
              >
                <Mail size={16} />
                <span>contact@secondhand.com</span>
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-base lg:text-lg xl:text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm lg:text-base text-gray-600 hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm lg:text-base text-gray-600 hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm lg:text-base text-gray-600 hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/policy" className="text-sm lg:text-base text-gray-600 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Customer service */}
          <div>
            <h3 className="text-base lg:text-lg xl:text-xl font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="text-sm lg:text-base text-gray-600 hover:text-primary">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm lg:text-base text-gray-600 hover:text-primary">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/payment" className="text-sm lg:text-base text-gray-600 hover:text-primary">
                  Payment Options
                </Link>
              </li>
              <li>
                <Link href="/gift-cards" className="text-sm lg:text-base text-gray-600 hover:text-primary">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Follow us */}
          <div>
            <h3 className="text-base lg:text-lg xl:text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  className={`text-gray-600 ${social.color} transition-colors duration-200`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
            
            {/* Newsletter signup teaser */}
            <div className="mt-6">
              <p className="text-sm text-gray-600 mb-2">Subscribe to our newsletter</p>
              <Link 
                href="/newsletter" 
                className="inline-block bg-primary text-white px-4 py-2 rounded text-sm hover:bg-primary-light1 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary mb-4 md:mb-0">
            &copy; {currentYear} SecondHand. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="/terms" className="text-sm text-gray-600 hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/policy" className="text-sm text-gray-600 hover:text-primary">
              Privacy Policy
            </Link>
          </div>
        </div>
      </MainPadding>
    </footer>
  )
}

export default Footer

