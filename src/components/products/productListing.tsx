"use client"
import React from "react"
// import { useInView } from "react-intersection-observer"
import ProductCard from "./product-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useGetProducts } from "@/services/queries/productQueries"
const ProductListings = () => {
const { data , isLoading } = useGetProducts()
console.log(data)
  return (
    <div className="flex-1">
      <div className="flex justify-end mb-4">
        <Select defaultValue="featured">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-low-high">Price: Low to High</SelectItem>
            <SelectItem value="price-high-low">Price: High to Low</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading && <p>Loading...</p>}
        {data?.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
      </div> 
    </div>
  )
}

export default ProductListings

