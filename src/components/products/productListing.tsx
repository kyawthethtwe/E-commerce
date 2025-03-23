"use client"
import React from "react"
import ProductCard from "./product-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useGetProducts } from "@/services/queries/productQueries"
import RenderPagination from "../pagination"
import { Loading } from "../theme/Loading"
const ProductListings = () => {
  const [currentPage, setCurrentPage] = React.useState(1)
  const { data , isLoading } = useGetProducts()
  const totalPages = Math.ceil((data?.length?? 0) / 12)
  return (
    <div className="flex-1">
      <div className="flex justify-end mb-4 ">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {isLoading && <Loading />}
        {data?.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
      </div> 
      <RenderPagination 
       currentPage= {currentPage}
       totalPages= {totalPages}
       onPageChange={(page) => setCurrentPage(page)}
       nextPage={() => setCurrentPage((prev) => prev + 1)}
       prevPage={() => setCurrentPage((prev) => prev - 1)}
       className="my-16"
       />
    </div>
  )
}

export default ProductListings

