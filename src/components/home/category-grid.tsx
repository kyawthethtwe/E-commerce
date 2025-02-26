'use client';
import Link from "next/link"
import { motion } from "framer-motion"
import { Laptop, Shirt, Home, BookOpen, Dumbbell, Trophy } from "lucide-react"

const categories = [
  { 
    id: 1, 
    name: "Clothing", 
    icon: Shirt,
    color: "bg-pink-100 hover:bg-pink-200",
    textColor: "text-pink-600"
  },
  { 
    id: 2, 
    name: "Electronics", 
    icon: Laptop,
    color: "bg-blue-100 hover:bg-blue-200",
    textColor: "text-blue-600"
  },
  { 
    id: 3, 
    name: "Furniture", 
    icon: Home,
    color: "bg-yellow-100 hover:bg-yellow-200",
    textColor: "text-yellow-600"
  },
  { 
    id: 4, 
    name: "Books", 
    icon: BookOpen,
    color: "bg-purple-100 hover:bg-purple-200",
    textColor: "text-purple-600"
  },
  { 
    id: 5, 
    name: "Sports", 
    icon: Dumbbell,
    color: "bg-green-100 hover:bg-green-200",
    textColor: "text-green-600"
  },
  { 
    id: 6, 
    name: "Collectibles", 
    icon: Trophy,
    color: "bg-red-100 hover:bg-red-200",
    textColor: "text-red-600"
  },
]
const shakeAnimation = {
    initial : { rotate : 0 } ,
    animate : {
        rotate : [0, -10, 10, -10, 10, 0],
        transition: {
            duration : 0.5,
            repeat : Infinity,
            repeatDelay : 2.5
        }
    }
}

const CategoriesGrid: React.FC = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link href={`/category/${category.id}`} key={category.id}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`${category.color} rounded-xl p-6 transition-all duration-300 cursor-pointer`}
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
                <span className="font-semibold text-gray-800">{category.name}</span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategoriesGrid