"use client"

import FilterSidebar from "@/components/products/filterSidebar";
import ProductListings from "@/components/products/productListing";
import MainPadding from "@/components/theme/MainPadding";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function ProductPage() {
  const [filterOpen, setFilterOpen] = useState(false);
  const searchParams = useSearchParams();
  
  // Get search parameters
  const query = searchParams.get('q') || undefined;
  const category = searchParams.get('category') || undefined;
  
  return (
    <>
      <MainPadding className="py-8">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            {category 
              ? `${category} Products` 
              : query 
                ? `Search Results for "${query}"` 
                : "All Products"}
          </h1>
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              {category 
                ? `Browse our collection of ${category.toLowerCase()} items` 
                : "Find unique treasures at affordable prices"}
            </p>
            
            {/* Mobile filter toggle button */}
            <Button
              size="sm"
              onClick={() => setFilterOpen(true)}
              className="lg:hidden flex items-center gap-2"
            >
              <SlidersHorizontal size={16} />
              <span>Filters</span>
            </Button>
          </div>
        </div>
      </MainPadding>
      
      <MainPadding className="pb-12 flex flex-col lg:flex-row gap-8">
        <FilterSidebar 
          initialCategory={category} 
          initialQuery={query}
          isOpen={filterOpen}
          onClose={() => setFilterOpen(false)}
        />
        <ProductListings 
          searchQuery={query} 
          categoryFilter={category}
        />
      </MainPadding>
    </>
  )
}

export default function Page() {
  return (
    <Suspense>
      <ProductPage />
    </Suspense>
  )
}