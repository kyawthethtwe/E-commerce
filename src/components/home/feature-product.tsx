"use client";
import type React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination,Navigation } from "swiper/modules"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css"
import ProductCard from "@/components/products/product-card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import MainPadding from "../theme/MainPadding";
const featuredProducts = [
  { id: '1', title: "Vintage Leather Jacket", price: 89.99, image: "/retro.jpg", description: "This is a vintage leather jacket", category: "Jacket", rating: { rate: 4.5, count: 20 } },
  { id: '2', title: "Retro Camera", price: 129.99, image: "/retro.jpg", description: "This is a retro camera", category: "Camera", rating: { rate: 4.5, count: 20 } },
  { id: '3', title: "Antique Wooden Chair", price: 59.99, image: "/retro.jpg", description: "This is an antique wooden chair", category: "Chair", rating: { rate: 4.5, count: 20 } },
  { id: '4', title: "Classic Vinyl Record", price: 24.99, image: "/retro.jpg", description: "This is a classic vinyl record", category: "Vinyl", rating: { rate: 4.5, count: 20 } },
  { id: '5', title: "Vintage Typewriter", price: 79.99, image: "/retro.jpg", description: "This is a vintage typewriter", category: "Typewriter", rating: { rate: 4.5, count: 20 } },
]

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-12 relative">
      <MainPadding>
        <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-8">Featured Products</h2>
      </MainPadding>
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            
          }}
          className="!px-0"
        >
          {featuredProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
        
        <button className="swiper-button-prev  top-1/2 -translate-y-1/2 z-10    w-16 h-16 flex items-center justify-center">
          <ChevronLeft className="w-12 h-12 text-primary" />
        </button>
        <button className="swiper-button-next  -translate-y-1/2 z-10  w-16 h-16 flex items-center justify-center">
          <ChevronRight className="w-12 h-12 text-primary" />
        </button>
      </div>
    </section>
  )
}

export default FeaturedProducts