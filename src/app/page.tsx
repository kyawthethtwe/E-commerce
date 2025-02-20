 import CategoriesGrid from "@/components/home/category-grid"
import FeaturedProducts from "@/components/home/feature-product"
import Hero from "@/components/home/hero"
import TrendingItems from "@/components/home/trending-products"
 export default function Home() {
  return (
    <div>
      
      <Hero />
      <CategoriesGrid />
      <FeaturedProducts />
      <TrendingItems />
    </div>
  )
 }
