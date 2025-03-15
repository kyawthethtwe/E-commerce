"use client";
import type React from "react"
import ProductCard from "@/components/products/product-card"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

const trendingItems = [
    { id: 1, title: "Vintage Denim Jacket", price: 69.99, image: "/product/p1.jpg", category: "Fashion", rating: { rate: 4.5, count: 20 }, description: "This is a vintage denim jacket" },
    { id: 2, title: "Retro Polaroid Camera", price: 89.99, image: "/product/p2.jpg", category: "Electronics", rating: { rate: 4.5, count: 20 }, description: "This is a retro polaroid camera" },
    { id: 3, title: "Mid-Century Modern Chair", price: 129.99, image: "/product/p3.jpg", category: "Furniture", rating: { rate: 4.5, count: 20 }, description: "This is a mid-century modern chair" },
    { id: 4, title: "Classic Vinyl Collection", price: 199.99, image: "/product/p4.jpg", category: "Collectibles", rating: { rate: 4.5, count: 20 }, description: "This is a classic vinyl collection" },
    { id: 5, title: "Vintage Typewriter", price: 79.99, image: "/product/p5.jpg", category: "Collectibles", rating: { rate: 4.5, count: 20 }, description: "This is a vintage typewriter" },
    { id: 6, title: "Handmade Leather Bag", price: 159.99, image: "/product/p6.jpg", category: "Fashion", rating: { rate: 4.5, count: 20 }, description: "This is a handmade leather bag" },
    { id: 7, title: "Wooden Bookshelf", price: 89.99, image: "/retro.jpg", category: "Furniture", rating: { rate: 4.5, count: 20 }, description: "This is a wooden bookshelf" },
    { id: 8, title: "Antique Brass Camera", price: 69.99, image: "/product/p3.jpg", category: "Electronics", rating: { rate: 4.5, count: 20 }, description: "This is an antique brass camera" },
]

const categories = ["All", "Fashion", "Electronics", "Furniture", "Collectibles", "Books", "Sports"]

const EmptyState = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="col-span-full flex flex-col items-center justify-center py-12 text-center"
    >
      <div className="text-gray-400 mb-4">
        <svg
          className="mx-auto h-12 w-12"
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
      <h3 className="text-lg font-medium text-gray-900 mb-1">
        No items found
      </h3>
      <p className="text-gray-500">
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



