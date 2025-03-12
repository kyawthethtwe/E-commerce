"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Twitter, Linkedin, Github } from "lucide-react"
import MainPadding from "../theme/MainPadding"
import Link from "next/link"

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "/profile.jpg",
    bio: "Former sustainability consultant with a passion for circular economy.",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "/profile.jpg",
    bio: "Full-stack developer with 10+ years experience building marketplace platforms.",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    name: "Aisha Patel",
    role: "Head of Operations",
    image: "/profile.jpg",
    bio: "Supply chain expert focused on creating efficient and sustainable processes.",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    name: "David Rodriguez",
    role: "Lead Designer",
    image: "/profile.jpg",
    bio: "UX/UI specialist with a background in sustainable product design.",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    name: "Emma Wilson",
    role: "Marketing Director",
    image: "/profile.jpg",
    bio: "Digital marketing strategist with expertise in community building.",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    name: "James Taylor",
    role: "Customer Success",
    image: "/profile.jpg",
    bio: "Dedicated to creating exceptional user experiences and building trust.",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
]

export default function TeamSection() {
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
      <MainPadding >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl 2xl:max-w-3xl mx-auto">
            The passionate individuals behind our mission to create a more sustainable marketplace.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-80">
                <Image src={member.image || "/profile.jpg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <Link
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <Twitter size={20} />
                  </Link>
                  <Link
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <Linkedin size={20} />
                  </Link>
                  <Link
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </MainPadding>
    </section>
  )
}

