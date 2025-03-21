import FilterSidebar from "@/components/products/filterSidebar";
import ProductListings from "@/components/products/productListing";
import MainPadding from "@/components/theme/MainPadding";

export default function ProductPage() {
    return (
      <MainPadding className="py-8">
        <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-8 ">Product Listings</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <FilterSidebar />
          <ProductListings />
        </div>
    </MainPadding>
    )
}