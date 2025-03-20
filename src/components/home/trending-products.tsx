"use client";
import type React from "react"
import ProductCard from "@/components/products/product-card"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

const trendingItems = [
  {
    "id": 1,
    "title": "Classic Red Jogger Sweatpants",
    "price": 98,
    "description": "Experience ultimate comfort with our red jogger sweatpants, perfect for both workout sessions and lounging around the house. Made with soft, durable fabric, these joggers feature a snug waistband, adjustable drawstring, and practical side pockets for functionality. Their tapered design and elastic cuffs offer a modern fit that keeps you looking stylish on the go.",
    "category": "Clothes",
    "image": "https://i.imgur.com/9LFjwpI.jpeg",
  },
  {
    "id": 2,
    "title": "Magyar tej",
    "slug": "magyar-tej",
    "price": 400000,
    "description": "finom magyar tej",
    "category": "Electronics",
    "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
  },
  {
    "id": 3,
    "title": "Classic Red Jogger Sweatpants",
    "slug": "classic-red-jogger-sweatpants",
    "price": 98,
    "description": "Experience ultimate comfort with our red jogger sweatpants, perfect for both workout sessions and lounging around the house. Made with soft, durable fabric, these joggers feature a snug waistband, adjustable drawstring, and practical side pockets for functionality. Their tapered design and elastic cuffs offer a modern fit that keeps you looking stylish on the go.",
    "category": "Clothes",
    "image": "https://i.imgur.com/p5NdI6n.jpeg",
  },
  {
    "id": 4,
    "title": "Classic Red Jogger Sweatpants",
    "slug": "classic-red-jogger-sweatpants",
    "price": 98,
    "description": "Experience ultimate comfort with our red jogger sweatpants, perfect for both workout sessions and lounging around the house. Made with soft, durable fabric, these joggers feature a snug waistband, adjustable drawstring, and practical side pockets for functionality. Their tapered design and elastic cuffs offer a modern fit that keeps you looking stylish on the go.",
    "category": "Clothes",
    "image": "https://i.imgur.com/9LFjwpI.jpeg",
  },  
]

const categories = ["All", "Clothes", "Electronics", "Furniture", "Shoes", "Miscellaneous", "Helm Bogo"]

const EmptyState = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="col-span-full flex flex-col items-center justify-center py-12 text-center"
    >
      <div className="text-gray-400 mb-4">
        <svg
          className="mx-auto h-12 w-12 2xl:h-16 2xl:w-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
      </div>
      <h3 className="text-lg 2xl:text-xl font-medium text-gray-900 mb-1">
        No items found
      </h3>
      <p className="text-gray-500 text-base 2xl:text-lg">
        There are no items available in this category yet.
      </p>
    </motion.div>
  );
  
const TrendingItems: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = trendingItems.filter(item => 
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  return (
    <section className="px-4 py-12">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold">Trending Now</h2>
        
        <Tabs defaultValue="All" className="w-full ">
          <TabsList className="grid w-full grid-cols-7 gap-4">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setSelectedCategory(category)}
                className="data-[state=active]:bg-primary data-[state=active]:text-white text-base lg:text-lg xl:text-xl 2xl:text-2xl"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full"
        >
          <AnimatePresence mode="wait">
          {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={item} />
                </motion.div>
              ))
            ) : (
              <EmptyState />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default TrendingItems;



