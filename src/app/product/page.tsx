import FilterSidebar from "@/components/products/filterSidebar";
import ProductListings from "@/components/products/productListing";

export default function ProductPage() {
    return (
        <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Product Listings</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <FilterSidebar />
        <ProductListings />
      </div>
    </div>
    )
}