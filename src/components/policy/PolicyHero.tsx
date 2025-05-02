"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import MainPadding from "../theme/MainPadding"

export default function PolicyHero() {
  return (
    <section className="py-16 md:py-24">
      <MainPadding className="flex flex-col-reverse md:flex-row items-center gap-8">
        <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center md:text-left md:flex-1"
        >
          <h1 className="text-3xl md:text-5xl 2xl:text-6xl font-bold mb-6">Our Policies</h1>
          <p className="text-lg md:text-xl 2xl:text-2xl mb-4 max-w-3xl 2xl:max-w-4xl mx-auto md:mx-0 text-gray-700">
            We&apos;re committed to transparency, fairness, and protecting our community. Our policies are designed to create
            a safe and trustworthy marketplace for everyone.
          </p>
          <p className="text-base 2xl:text-lg text-gray-600 max-w-2xl 2xl:max-w-3xl mx-auto md:mx-0">Last updated: May 2, 2025</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:flex-1 w-full md:w-auto"
        >
          <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/privacy.jpg" 
              alt="Privacy Policy" 
              fill
              
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </MainPadding>
    </section>
  )
}

