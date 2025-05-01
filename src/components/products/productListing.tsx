"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useGetProducts } from "@/services/queries/productQueries"
import { useSearchParams } from "next/navigation"
import React, { useEffect, useState } from "react"
import RenderPagination from "../pagination"
import { Loading } from "../theme/Loading"
import ProductCard from "./product-card"

interface ProductListingsProps {
  searchQuery?: string;
  categoryFilter?: string;
}

const ProductListings: React.FC<ProductListingsProps> = ({ searchQuery, categoryFilter }) => {
  const searchParams = useSearchParams()
  const [currentPage, setCurrentPage] = useState(1)
  const [sortOrder, setSortOrder] = useState("featured")
  const { data: allProducts, isLoading, isError } = useGetProducts()
  
  // Get price range from URL if available
  const minPrice = searchParams.get('minPrice') ? parseInt(searchParams.get('minPrice') || "0") : 0
  const maxPrice = searchParams.get('maxPrice') ? parseInt(searchParams.get('maxPrice') || "1000") : 1000

  // Filter products based on search query, category, and price range
  const filteredProducts = React.useMemo(() => {
    if (!allProducts) return [];
    
    let result = [...allProducts];
    
    // Filter by category if provided
    if (categoryFilter) {
      result = result.filter(product => 
        product.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    }
    
    // Filter by search query if provided
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.title.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
      );
    }
    
    // Filter by price range
    result = result.filter(product => 
      product.price >= minPrice && product.price <= maxPrice
    );
    
    // Sort products
    switch (sortOrder) {
      case "price-low-high":
        return result.sort((a, b) => a.price - b.price);
      case "price-high-low":
        return result.sort((a, b) => b.price - a.price);
      case "newest":
        return result.sort((a, b) => b.id - a.id); // Assuming higher id = newer
      default: // "featured"
        return result;
    }
  }, [allProducts, categoryFilter, searchQuery, sortOrder, minPrice, maxPrice]);
  
  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, categoryFilter, sortOrder, minPrice, maxPrice]);
  
  // Calculate pagination
  const ITEMS_PER_PAGE = 12;
  const totalPages = Math.ceil((filteredProducts?.length ?? 0) / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE, 
    currentPage * ITEMS_PER_PAGE
  );

  if(isLoading) {
    return <Loading/>
  }
  
  if(isError){
    return <div className="flex flex-grow justify-center items-center text-center text-4xl text-primary ">
      Something went wrong! Please try again!
    </div>
  }
  
  if(filteredProducts.length === 0) {
    return <div className="flex-1 flex flex-col items-center justify-center py-16">
      <h3 className="text-xl font-semibold mb-2">No products found</h3>
      <p className="text-gray-500">Try adjusting your search or filter criteria</p>
    </div>
  }
  
  return (
    <div className="flex-1">
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-gray-500">
          Showing {paginatedProducts.length} of {filteredProducts.length} products
        </p>
        <Select 
          defaultValue="featured"
          value={sortOrder} 
          onValueChange={setSortOrder}
        >
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
      
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-2 md:gap-5 w-full">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div> 
      
      {totalPages > 1 && (
        <RenderPagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
          nextPage={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          prevPage={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="my-16"
        />
      )}
    </div>
  )
}

export default ProductListings

