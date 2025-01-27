import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Laptop, Shirt, Home, Car, Gift, Camera, Book, Music, Utensils, Dumbbell } from "lucide-react"

const categories = [
  { name: "Electronics", icon: Laptop, color: "bg-blue-500" },
  { name: "Fashion", icon: Shirt, color: "bg-pink-500" },
  { name: "Home & Garden", icon: Home, color: "bg-green-500" },
  { name: "Vehicles", icon: Car, color: "bg-yellow-500" },
  { name: "Toys & Hobbies", icon: Gift, color: "bg-purple-500" },
  { name: "Sporting Goods", icon: Camera, color: "bg-red-500" },
  { name: "Books & Media", icon: Book, color: "bg-indigo-500" },
  { name: "Music Instruments", icon: Music, color: "bg-orange-500" },
  { name: "Food & Beverages", icon: Utensils, color: "bg-teal-500" },
  { name: "Health & Beauty", icon: Dumbbell, color: "bg-pink-400" },
]

export default function CategoryGrid() {
  return (
    <section className="container">
      <h2 className="text-3xl font-bold mb-6">Browse Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.map((category) => (
          <Link key={category.name} href={`/search?category=${category.name.toLowerCase()}`}>
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className={`rounded-full p-3 ${category.color}`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <span className="mt-2 text-sm font-medium text-center">{category.name}</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

