import FilterSidebar from "@/components/products/filterSidebar";
import ProductListings from "@/components/products/productListing";
import MainPadding from "@/components/theme/MainPadding";

export default function ProductPage() {
    return (
      <MainPadding className="py-8 flex flex-col md:flex-row gap-8">
        <FilterSidebar />
        <ProductListings />
    </MainPadding>
    )
}