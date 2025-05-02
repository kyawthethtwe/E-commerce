"use client"

import { motion } from "framer-motion"
import { DollarSign, Leaf, Recycle, Shield, Users } from "lucide-react"
import { useInView } from "react-intersection-observer"
import MainPadding from "../theme/MainPadding"

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We're committed to reducing waste and promoting a circular economy through second-hand commerce.",
  },
  {
    icon: Shield,
    title: "Trust",
    description: "We build trust through transparent transactions, secure payments, and verified user profiles.",
  },
  {
    icon: DollarSign,
    title: "Affordability",
    description: "We believe quality products should be accessible to everyone at fair and reasonable prices.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We foster a supportive community of conscious consumers who share our values.",
  },
  {
    icon: Recycle,
    title: "Circularity",
    description:
      "We extend the lifecycle of products, reducing the need for new manufacturing and its environmental impact.",
  },
]

export default function CoreValues() {
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
    <section className="py-24">
      <MainPadding>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold mb-6">Our Core Values</h2>
          <p className="text-lg md:text-xl 2xl:text-2xl text-gray-600 max-w-3xl mx-auto">
            These principles guide everything we do, from how we build our platform to how we interact with our
            community.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl 2xl:text-2xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600 text-base 2xl:text-lg">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </MainPadding>
    </section>
  )
}

