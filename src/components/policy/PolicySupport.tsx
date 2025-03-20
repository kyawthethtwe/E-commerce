"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HelpCircle, Mail, FileText } from "lucide-react"
import MainPadding from "../theme/MainPadding"

export default function PolicySupport() {
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
      <MainPadding >
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl 2xl:max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl 2xl:text-4xl font-bold mb-4">
            Need Further Clarification?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg 2xl:text-xl text-gray-600 mb-8">
            If you have any questions about our policies or need assistance, our support team is here to help.
          </motion.p>

          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <HelpCircle className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl 2xl:text-2xl font-semibold mb-2">FAQ</h3>
              <p className="text-gray-600 mb-4 text-base 2xl:text-lg">Find answers to common questions in our FAQ section.</p>
              <Button  className="w-full">
                <Link href="/faq">View FAQ</Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl 2xl:text-2xl font-semibold mb-2">Contact Support</h3>
              <p className="text-gray-600 mb-4 text-base 2xl:text-lg">Reach out to our support team for personalized assistance.</p>
              <Button asChild className="w-full">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <FileText className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl 2xl:text-2xl font-semibold mb-2">Legal Resources</h3>
              <p className="text-gray-600 mb-4 text-base 2xl:text-lg">Access additional legal resources and documentation.</p>
              <Button className="w-full">
                <Link href="/legal">View Resources</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <h3 className="text-xl 2xl:text-2xl font-semibold mb-2">Policy Updates</h3>
            <p className="text-gray-600 mb-4 text-base 2xl:text-lg">
              We regularly update our policies to improve our services and comply with regulations. Subscribe to our
              newsletter to stay informed about policy changes.
            </p>
            <Button asChild variant="secondary">
              <Link href="/newsletter">Subscribe to Updates</Link>
            </Button>
          </motion.div>
        </motion.div>
      </MainPadding>
    </section>
  )
}

