"use client";
import type React from "react"
// import { Swiper, SwiperSlide } from "swiper/react"
// import { Pagination,Navigation } from "swiper/modules"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css"
import ProductCard from "@/components/products/product-card"
// import { ChevronLeft, ChevronRight } from "lucide-react"
import MainPadding from "../theme/MainPadding";
const featuredProducts = [
  {
    "id": 1,
    "title": "Classic Red Jogger Sweatpants",
    "price": 98,
    "description": "Experience ultimate comfort with our red jogger sweatpants, perfect for both workout sessions and lounging around the house. Made with soft, durable fabric, these joggers feature a snug waistband, adjustable drawstring, and practical side pockets for functionality. Their tapered design and elastic cuffs offer a modern fit that keeps you looking stylish on the go.",
    "category": "Clothes",
    "image": "https://i.imgur.com/9LFjwpI.jpeg",
  },
  {
    "id": 2,
    "title": "Magyar tej",
    "slug": "magyar-tej",
    "price": 400000,
    "description": "finom magyar tej",
    "category": "Electronics",
    "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
  },
  {
    "id": 3,
    "title": "Classic Red Jogger Sweatpants",
    "slug": "classic-red-jogger-sweatpants",
    "price": 98,
    "description": "Experience ultimate comfort with our red jogger sweatpants, perfect for both workout sessions and lounging around the house. Made with soft, durable fabric, these joggers feature a snug waistband, adjustable drawstring, and practical side pockets for functionality. Their tapered design and elastic cuffs offer a modern fit that keeps you looking stylish on the go.",
    "category": "Clothes",
    "image": "https://i.imgur.com/p5NdI6n.jpeg",
  },
  {
    "id": 4,
    "title": "Classic Red Jogger Sweatpants",
    "slug": "classic-red-jogger-sweatpants",
    "price": 98,
    "description": "Experience ultimate comfort with our red jogger sweatpants, perfect for both workout sessions and lounging around the house. Made with soft, durable fabric, these joggers feature a snug waistband, adjustable drawstring, and practical side pockets for functionality. Their tapered design and elastic cuffs offer a modern fit that keeps you looking stylish on the go.",
    "category": "Clothes",
    "image": "https://i.imgur.com/9LFjwpI.jpeg",
  },  
]
 
const FeaturedProducts: React.FC = () => {
  return (
    <div className="py-12">
      <MainPadding>
        <h2 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 w-full">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      </MainPadding>
      {/* <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
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
      </div> */}
      
    </div>
  )
}

export default FeaturedProducts