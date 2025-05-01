"use client"
import "swiper/css"
import "swiper/css/navigation"
import ProductCard from "./product-card"
import { useGetRelaledProducts } from "@/services/queries/productQueries"
// { productId }: { productId: string }
const RelatedProducts = () => {
  const {
    data: relatedProducts,
    isLoading,
    error,
  } = useGetRelaledProducts()

  if (isLoading) return <div>Loading related products...</div>
  if (error) return <div>Error loading related products: {(error as Error).message}</div>

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-1 sm:gap-2 md:gap-5 w-full">
        {relatedProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts

