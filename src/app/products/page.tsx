import FilterSidebar from "@/components/products/filterSidebar";
import ProductListings from "@/components/products/productListing";
import MainPadding from "@/components/theme/MainPadding";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | SecondHand Marketplace",
  description: "Browse our collection of high-quality second-hand products at great prices. Find clothing, electronics, furniture and more.",
}

interface SearchParams {
  q?: string;
  category?: string;
  sort?: string;
  minPrice?: string;
  maxPrice?: string;
}

export default function ProductPage({ 
  searchParams 
}: { 
  searchParams: SearchParams 
}) {
  const { q, category } = searchParams;

  return (
    <>
      <MainPadding className="py-8">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            {category 
              ? `${category} Products` 
              : q 
                ? `Search Results for "${q}"` 
                : "All Products"}
          </h1>
          <p className="text-gray-600">
            {category 
              ? `Browse our collection of ${category.toLowerCase()} items` 
              : "Find unique treasures at affordable prices"}
          </p>
        </div>
      </MainPadding>
      
      <MainPadding className="pb-12 flex flex-col md:flex-row gap-8">
        <FilterSidebar 
          initialCategory={category} 
          initialQuery={q}
        />
        <ProductListings 
          searchQuery={q} 
          categoryFilter={category}
        />
      </MainPadding>
    </>
  )
}