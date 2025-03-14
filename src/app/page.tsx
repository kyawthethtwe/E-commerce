"use client"
import CategoriesGrid from "@/components/home/category-grid"
import FeaturedProducts from "@/components/home/feature-product"
import Hero from "@/components/home/hero"
import TrendingItems from "@/components/home/trending-products"
import MainPadding from "@/components/theme/MainPadding"
 export default function Home() {
  return (
    <div>
      <Hero />
      <MainPadding>
        <CategoriesGrid />
      </MainPadding>
        <FeaturedProducts />
      <MainPadding>
        <TrendingItems />
      </MainPadding>
    </div>
  )
 }
