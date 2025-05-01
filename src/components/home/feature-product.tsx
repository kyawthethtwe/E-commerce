"use client";
import ProductCard from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import { useGetProducts } from "@/services/queries/productQueries";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Loading } from "../theme/Loading";
import MainPadding from "../theme/MainPadding";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};
 
const FeaturedProducts: React.FC = () => {
  const router = useRouter()
  const { data, isLoading, error } = useGetProducts()
  
  // Take just the first 3 products for the featured section
  const featuredProducts = data?.slice(0, 4) || []

  if (isLoading) {
    return (
      <div className="py-12">
        <MainPadding>
          <h2 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold mb-8">Featured Products</h2>
          <div className="gap-10 w-full min-h-[400px] flex items-center justify-center">
            <Loading />
          </div>
        </MainPadding>
      </div>
    )
  }
  
  if (error) {
    return (
      <div className="py-12">
        <MainPadding>
          <h2 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold mb-8">Featured Products</h2>
          <div className="text-center py-12 text-gray-500">
            Unable to load featured products
          </div>
        </MainPadding>
      </div>
    )
  }

  return (
    <div className="py-12">
      <MainPadding>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold">Featured Products</h2>
          <Button 
            variant="ghost" 
            className="text-primary hover:text-primary-light1 hover:bg-inherit hover:underline group flex items-center gap-1"
            onClick={() => router.push("/products")}
          >
            View All
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-1 sm:gap-2 md:gap-5 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </MainPadding>
    </div>
  )
}

export default FeaturedProducts