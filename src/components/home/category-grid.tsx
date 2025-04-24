'use client';
import Link from "next/link"
import { motion } from "framer-motion"
import { Laptop, Shirt, Home, BookOpen, Dumbbell, Trophy } from "lucide-react"

const categories = [
  { 
    id: 1, 
    name: "Clothing", 
    slug: "clothing",
    icon: Shirt,
    color: "bg-pink-100 hover:bg-pink-200",
    textColor: "text-pink-600"
  },
  { 
    id: 2, 
    name: "Electronics", 
    slug: "electronics",
    icon: Laptop,
    color: "bg-blue-100 hover:bg-blue-200",
    textColor: "text-blue-600"
  },
  { 
    id: 3, 
    name: "Furniture", 
    slug: "furniture",
    icon: Home,
    color: "bg-yellow-100 hover:bg-yellow-200",
    textColor: "text-yellow-600"
  },
  { 
    id: 4, 
    name: "Books", 
    slug: "books",
    icon: BookOpen,
    color: "bg-purple-100 hover:bg-purple-200",
    textColor: "text-purple-600"
  },
  { 
    id: 5, 
    name: "Sports", 
    slug: "sports",
    icon: Dumbbell,
    color: "bg-green-100 hover:bg-green-200",
    textColor: "text-green-600"
  },
  { 
    id: 6, 
    name: "Collectibles", 
    slug: "collectibles",
    icon: Trophy,
    color: "bg-red-100 hover:bg-red-200",
    textColor: "text-red-600"
  },
]

// Animation variants for the shaking effect
const shakeAnimation = {
    initial: { rotate: 0 },
    animate: {
        rotate: [0, -10, 10, -10, 10, 0],
        transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 2.5
        }
    }
}

// Animation variants for container
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

// Animation variants for items
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const CategoriesGrid: React.FC = () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold mb-8">Shop by Category</h2>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {categories.map((category) => (
          <motion.div key={category.id} variants={itemVariants}>
            <Link href={`/products?category=${category.slug}`} className="block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`${category.color} rounded-xl p-6 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md`}
              >
                <div className="flex flex-col items-center gap-4">
                  <motion.div
                    variants={shakeAnimation}
                    initial="initial"
                    animate="animate"
                    className={`${category.textColor}`}
                  >
                    <category.icon size={40} />
                  </motion.div>
                  <span className="font-semibold text-gray-800 text-base xl:text-lg 2xl:text-xl">{category.name}</span>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default CategoriesGrid