"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
  backTo?: {
    label: string
    href: string
  }
}

export default function AuthLayout({ children, title, subtitle, backTo }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Branding */}
      <div className="hidden md:flex md:w-1/2 bg-primary p-8 text-white flex-col justify-between">
        <div>
          <Link href="/" className="text-2xl font-bold">
            SecondHand
          </Link>
          <h2 className="mt-12 text-4xl font-bold">Welcome to SecondHand</h2>
          <p className="mt-4 text-xl">
            Join our community of conscious consumers and give pre-loved items a second life.
          </p>
        </div>
        <div className="relative h-64 w-full">
          <Image src="/auth-illustration.svg" alt="Authentication illustration" fill className="object-contain" />
        </div>
      </div>

      {/* Right side - Auth form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-gray-600 mt-2">{subtitle}</p>
          </div>

          {children}

          {backTo && (
            <div className="text-center mt-6">
              <Link href={backTo.href} className="text-primary hover:underline">
                {backTo.label}
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

