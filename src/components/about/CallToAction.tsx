"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, UserPlus, Upload } from "lucide-react"

export default function CallToAction() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl 2xl:text-5xl font-bold mb-4">
            Join Our Sustainable Marketplace
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl 2xl:text-2xl max-w-2xl xl:max-w-4xl mx-auto mb-12 text-white/80">
            Whether you&apos;re looking to find unique items, declutter your space, or simply make more sustainable choices,
            we&apos;re here to help.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="flex items-center gap-2 text-base 2xl:text-lg">
              <Link href="/products">
                <ShoppingBag className="w-5 h-5" />
                Explore Marketplace
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="flex items-center text-base 2xl:text-lg gap-2 bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              <Link href="/auth/register">
                <UserPlus className="w-5 h-5" />
                Create Account
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="flex items-center text-base 2xl:text-lg gap-2 bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              <Link href="/dashboard/listings/new">
                <Upload className="w-5 h-5" />
                Sell Your Items
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

