"use client";
import ProductCard from "@/components/products/product-card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useGetProducts } from "@/services/queries/productQueries";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Loading } from "../theme/Loading";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 }
  }
}

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
  
const TrendingItems = () => {
  const { data: products, isLoading } = useGetProducts()
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  // Extract unique categories from products
  const productCategories = products 
    ? ["All", ...new Set(products.map(p => p.category))]
    : ["All"]
  
  // Get trending products (could use different criteria like newest, most viewed, etc.)
  const trendingProducts = products?.slice(0, 6) || []
  
  const filteredItems = selectedCategory === "All" 
    ? trendingProducts 
    : trendingProducts.filter(item => item.category === selectedCategory)

  if (isLoading) {
    return (
      <section className="py-12">
        <h2 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold mb-8">Trending Now</h2>
        <div className="h-[400px] flex items-center justify-center">
          <Loading />
        </div>
      </section>
    )
  }

  return (
    <section className="py-12">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold">Trending Now</h2>
        
        {/* Responsive tabs with overflow scrolling on small screens */}
        <div className="w-full overflow-x-auto scrollbar-hide">
          <Tabs defaultValue="All" className="w-full min-w-max">
            <TabsList className={cn(
              "flex w-full",
              productCategories.length > 5 ? "justify-start" : "justify-center"
            )}>
              {productCategories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setSelectedCategory(category)}
                  className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-2"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <AnimatePresence mode="wait">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: 20 }}
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



