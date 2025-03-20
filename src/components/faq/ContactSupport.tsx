"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, PhoneCall } from "lucide-react"
import MainPadding from "../theme/MainPadding"

export default function ContactSupport() {
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
    <section className="py-16 bg-gray-50">
      <MainPadding>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl 2xl:max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl 2xl:text-4xl font-bold mb-4">
            Still Have Questions?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg 2xl:text-xl text-gray-600 mb-8">
            Our support team is here to help. Reach out to us through any of these channels.
          </motion.p>

          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <MessageCircle className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl 2xl:text-2xl font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4 text-base 2xl:text-lg">Chat with our support team in real-time.</p>
              <Button className="w-full">Start Chat</Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl 2xl:text-2xl font-semibold mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4 text-base 2xl:text-lg">Get a response within 24 hours.</p>
              <Button asChild className="w-full">
                <Link href="/contact">Send Email</Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <PhoneCall className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl 2xl:text-2xl font-semibold mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4 text-base 2xl:text-lg">Available Mon-Fri, 9am-5pm.</p>
              <Button asChild className="w-full">
                <a href="tel:+18001234567">Call Us</a>
              </Button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <h3 className="text-xl 2xl:text-2xl font-semibold mb-2">Community Forum</h3>
            <p className="text-gray-600 mb-4 text-base 2xl:text-lg">
              Join our community forum to connect with other users, share tips, and find answers to common questions.
            </p>
            <Button asChild variant="secondary">
              <Link href="/community">Visit Forum</Link>
            </Button>
          </motion.div>
        </motion.div>
      </MainPadding>
    </section>
  )
}

