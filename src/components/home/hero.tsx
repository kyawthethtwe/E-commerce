"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
const Hero = () => {
  const router = useRouter()
  return (
    <section className="relative h-[600px] overflow-hidden">
      <Image src="/bike.jpg" alt="Second-hand marketplace" layout="fill" objectFit="cover" priority />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Unique Treasures</h1>
          <p className="text-xl md:text-2xl mb-8">Shop sustainable. Shop second-hand.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-light1 transition duration-300"
            onClick={() => router.push("/products")}
          >
            Start Shopping
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

