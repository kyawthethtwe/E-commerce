"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import MainPadding from "../theme/MainPadding"
import TeamMemberCard from "./TeamMemberCard"
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

  return (
    <section className="py-24 bg-gray-50">
      <MainPadding>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-lg md:text-xl 2xl:text-2xl text-gray-600 max-w-3xl mx-auto">
            The passionate individuals behind our mission to create a more sustainable marketplace.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {team.map((member, index) => (
            <TeamMemberCard 
            key={index} 
            name={member.name} 
            role={member.role} 
            image={member.image} 
            bio={member.bio} 
            social={member.social} 
            />
          ))}
        </motion.div>
      </MainPadding>
    </section>
  )
}

