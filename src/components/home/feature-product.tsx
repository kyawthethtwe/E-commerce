"use client";
import type React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import { Pagination, Mousewheel } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import ProductCard from "@/components/products/product-card"

const swiperStyles = {
    paddingBottom: "3rem", // Add padding to make room for pagination
    "& .swiper-pagination": {
      bottom: "0 !important", // Position bullets at the bottom
    },
    "& .swiper-pagination-bullet": {
      background: "#113B70", // Use your primary color
      opacity: 0.5,
    },
    "& .swiper-pagination-bullet-active": {
      background: "#113B70",
      opacity: 1,
    },
  }
const FeaturedProducts: React.FC = () => {
  const featuredProducts = [
    { id: 1, name: "Vintage Leather Jacket", price: 89.99, image: "/retro.jpg" },
    { id: 2, name: "Retro Camera", price: 129.99, image: "/retro.jpg" },
    { id: 3, name: "Antique Wooden Chair", price: 59.99, image: "/retro.jpg" },
    { id: 4, name: "Classic Vinyl Record", price: 24.99, image: "/retro.jpg" },
    { id: 5, name: "Vintage Typewriter", price: 79.99, image: "/retro.jpg" },
  ]

  return (
    <section className="container mx-auto  py-12">
      <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
      <Swiper
        modules={[Mousewheel, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        mousewheel
        pagination={{ 
            clickable: true,
            }}
        style={swiperStyles}
        breakpoints={{
          640: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 3.5,
          },
          1024: {
            slidesPerView: 3.5,
          },
        }}
      >
        {featuredProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default FeaturedProducts

