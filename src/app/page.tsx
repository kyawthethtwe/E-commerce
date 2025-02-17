 import CategoriesGrid from "@/components/home/category-grid"
import FeaturedProducts from "@/components/home/feature-product"
import Header from "@/components/home/header"
import Hero from "@/components/home/hero"
import TrendingItems from "@/components/home/trending-products"
 export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <CategoriesGrid />
      <FeaturedProducts />
      <TrendingItems />
    </div>
  )
 }
