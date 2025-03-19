"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const timelineItems = [
  {
    year: "2018",
    title: "The Beginning",
    description: "Started as a small community marketplace in a college dorm room with just 50 listings.",
  },
  {
    year: "2019",
    title: "Growing Community",
    description: "Expanded to 10,000 users across three major cities with a focus on clothing and electronics.",
  },
  {
    year: "2020",
    title: "Going Digital",
    description: "Launched our first mobile app and implemented secure payment processing for safer transactions.",
  },
  {
    year: "2021",
    title: "Sustainability Focus",
    description: "Introduced carbon footprint tracking and partnered with environmental organizations.",
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Reached 1 million users across 15 countries and expanded into furniture and collectibles.",
  },
  {
    year: "2023",
    title: "Today",
    description:
      "Building the future of sustainable commerce with AR features and a thriving community of conscious consumers.",
  },
]

export default function OurStory() {
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
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From humble beginnings to a thriving marketplace, our journey has been driven by a passion for
            sustainability and community.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary opacity-20"></div>
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col  mb-12 md:flex-row`}
            >

              <div className="md:w-1/2 md:pr-12 md:text-right">  
                {index % 2 === 0 ? (
                  <div className="hidden md:block">
                    <div className="mb-2 text-primary font-bold text-xl">{item.year}</div>
                    <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ) : (
                  <div className="md:hidden">
                    <div className="mb-2 text-primary font-bold text-xl">{item.year}</div>
                    <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                )}
              </div>

              <div className="my-4 md:my-0 z-10 hidden md:block">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  {item.year.substring(2)}
                </div>
              </div>

              <div className="md:w-1/2 md:pl-12">
                {index % 2 !== 0 ? (
                  <div className="hidden md:block">
                    <div className="mb-2 text-primary font-bold text-xl">{item.year}</div>
                    <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ) : (
                  <div className="md:hidden">
                    <div className="mb-2 text-primary font-bold text-xl">{item.year}</div>
                    <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

