"use client"
import { useQuery } from "@tanstack/react-query"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import ProductCard from "./product-card"
import { useGetRelaledProducts } from "@/services/queries/productQueries"

//mock realted products 


const RelatedProducts = ({ productId }: { productId: string }) => {

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
      {/* <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {relatedProducts?.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
        {relatedProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts

