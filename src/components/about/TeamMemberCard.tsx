import { motion } from "framer-motion";
import Image from "next/image";
import { Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    twitter: string;
    linkedin: string;
    github: string;
  };
}

export default function TeamMemberCard({
  name,
  role,
  image,
  bio,
  social,
}: TeamMember) {
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative h-80">
        <Image
          src={image || "/profile.jpg"}
          alt={name}
          fill
          priority
          sizes="100%"
          className="object-contain w-full h-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl 2xl:text-2xl font-semibold">{name}</h3>
        <p className="text-primary text-base 2xl:text-lg font-medium mb-2">{role}</p>
        <p className="text-gray-600 text-base 2xl:text-lg mb-4">{bio}</p>
        <div className="flex space-x-4">
          <Link
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <Twitter size={20} />
          </Link>
          <Link
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <Github size={20} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
