"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import MainPadding from "../theme/MainPadding"
export default function AboutHero() {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <Image
        src="/main-banner.jpg"
        alt="People exchanging second-hand items"
        fill
        className="object-cover brightness-[0.7]"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <MainPadding className="text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Mission</h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              We&apos;re building a more sustainable future by giving pre-loved items a second life, reducing waste, and
              making quality goods accessible to everyone. Join us in our journey!
            </p>
          </motion.div>
        </MainPadding>
      </div>
    </section>
  )
}

