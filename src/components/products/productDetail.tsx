"use client"

import React, { Suspense } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Button } from "@/components/ui/button"
import ModelViewer from "../Model"
import { useSingleProduct } from "@/services/queries/productQueries"

const images = ["/retro.jpg", "/retro.jpg", "/retro.jpg", "/retro.jpg"]
const ProductDetail = ({ productId }: { productId: number }) => {
  const {
    data: product,
    isLoading,
    error,
  } = useSingleProduct(productId)
  
  const [showAR, setShowAR] = React.useState(false)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {(error as Error).message}</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        {showAR ? (
          <Suspense fallback={<div>Loading AR viewer...</div>}>
            {/* <ModelViewer
              src={product.modelUrl}
              alt={`3D model of ${product.name}`}
              ar
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              shadow-intensity="1"
              auto-rotate
              style={{ width: "100%", height: "400px" }}
            /> */}
            <ModelViewer
              src={product?.image}
              alt={`3D model of ${product?.title}`}
              ar
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              shadow-intensity="1"
              auto-rotate
              style={{ width: "100%", height: "400px" }}
            />
          </Suspense>
        ) : (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="rounded-lg overflow-hidden"
          >
            {images.map((image: string, index: number) => (
              <SwiperSlide key={index}>
                <Image
                  src={image}
                  alt={`Product image ${index + 1}`}
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <Button className="mt-4 w-full" onClick={() => setShowAR(!showAR)}>
          {showAR ? "View Images" : "View in AR"}
        </Button>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">{product?.title}</h1>
        <p className="text-2xl font-semibold text-primary mb-4">${product?.price.toFixed(2)}</p>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-600">{product?.description}</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Seller Information</h2>
          {/* <p className="text-gray-600">{product?.seller.name}</p>
          <p className="text-gray-600">{product?.seller.rating} ⭐️</p> */}
          <p className="text-gray-600">Seller Name</p>
            <p className="text-gray-600">Rating ⭐️</p>
        </div>
        <Button className="w-full mb-4">Add to Cart</Button>
        <Button variant="outline" className="w-full">
          Contact Seller
        </Button>
      </div>
    </div>
  )
}

export default ProductDetail

