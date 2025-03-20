"use client"

import { motion } from "framer-motion"
import MainPadding from "../theme/MainPadding"

export default function PolicyHero() {
  return (
    <section className="bg-primary/10 py-16 md:py-24">
      <MainPadding className="text-center">
        <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl 2xl:text-6xl font-bold mb-6">Our Policies</h1>
          <p className="text-lg md:text-xl 2xl:text-2xl mb-4 max-w-3xl 2xl:max-w-4xl mx-auto text-gray-700">
            We&apos;re committed to transparency, fairness, and protecting our community. Our policies are designed to create
            a safe and trustworthy marketplace for everyone.
          </p>
          <p className="text-base 2xl:text-lg text-gray-600 max-w-2xl 2xl:max-w-3xl mx-auto">Last updated: March 15, 2023</p>
        </motion.div>
      </MainPadding>
    </section>
  )
}

