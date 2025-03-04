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
import { Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import { useSingleProduct } from "@/services/queries/productQueries"
import { cn } from "@/lib/utils"
import { useCartStore } from "@/services/stores/cart"
import { toast } from "sonner"
const images = ["/retro.jpg", "/retro.jpg", "/retro.jpg", "/retro.jpg"]
const ProductDetail = ({productId} : {productId : string}) => {
  const [showAR, setShowAR] = React.useState(false)
  const [quantity, setQuantity] = React.useState(1)
  const Id = parseInt(productId)
  
  const addItem = useCartStore((state) => state.addItem)



  const {
    data: product,
    isLoading,
  } = useSingleProduct(Id)
  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      <div className=""> 
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
            className="rounded-lg overflow-hidden h-[500px]"
          >
            {images.map((image: string, index: number) => (
              <SwiperSlide key={index}>
                <Image
                  src={image}
                  alt={`Product image ${index + 1}`}
                  fill
                  priority
                  sizes="100%"
                  className="object-cover w-full object-center "
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
        <div className=" border-primary-light2 border rounded-lg h-12 max-lg:h-10 flex justify-between items-center mt-2">
          <button
            className=" w-16 h-full flex justify-center items-center disabled:opacity-40"
            disabled={quantity <= 1}
            onClick={() => {
              if (quantity <= 1) {
                return;
              }
              setQuantity((prev) => prev - 1);
            }}
          >
            <Minus className=" w-6 h-6" />
          </button>
          <input
            type="text"
            value={quantity}
            min={0}
            onChange={(e) => {
              // check if input is number
              if (isNaN(+e.target.value)) {
                return;
              }
              setQuantity(+e.target.value);
            }}
            onBlur={(e) => {
              if (+e.target.value <= 0) {
                setQuantity(1);
              }

              setQuantity(+e.target.value);
            }}
            className="w-full h-full text-center"
          />
          <button
            className=" w-16 h-full flex justify-center items-center"
            onClick={() => {
              setQuantity((prev) => prev + 1);
            }}
          >
            <Plus className=" w-6 h-6" />
          </button>
        </div>
        <div className="flex gap-4 mt-4">
          <button
            className=" bg-primary  w-full rounded-lg h-12 max-lg:h-10 text-white disabled:opacity-40  hover:bg-primary-light2 disabled:cursor-not-allowed"
            onClick={() => {
              if (quantity === 0) {
                // notifyAlert("quantity must be greater than 0");
                return;
              }
            }}
            // disabled={product?.quantity === 0 || value === 0}
            disabled={quantity === 0}
          >
          Buy
          </button>
          <button
            className=" border border-primary text-primary  w-full rounded-lg h-12 max-lg:h-10 flex justify-center gap-4 max-md:gap-2  max-375:text-xs max-md:text-sm items-center disabled:opacity-40 disabled:cursor-not-allowed disabled:text-[#707070] disabled:border-[#707070]"
            onClick={() => {
              if (quantity <= 0) {
                return;
              }
              if (!product) {
                return;
              }
              addItem({
                id: product.id.toString(),
                name: product.title,
                price: product.price,
                image: product.image,
                quantity
              })
              toast.success("Product added to cart  🛒")
              setQuantity(0);
            }}
            // product?.quantity === 0
            disabled={quantity === 0 }
          >
            <ShoppingCart className=" max-md:w-5 max-md:h-5 w-6 h-6" />
            add to cart
          </button>
          <button
            className=" border border-primary text-primary  w-full rounded-lg h-12 max-lg:h-10 flex justify-center gap-4  max-lg:gap-2 max-lg:text-sm max-375:text-xs max-375:gap-1 items-center"
            onClick={() => {
              // handleAddFavorite();
            }}
          >
            <Heart
              className={cn(
                " w-6 h-6 max-lg:w-5 max-lg:h-5  text-primary",
                "",
                // {
                //   "fill-primary  ": FavoriteItemList?.includes(
                //     product?.id ?? ""
                //   ),
                // }
              )}
            />
            {/* {FavoriteItemList?.includes(product?.id ?? "")
              ? "remove from wishlist" : "add to wishlist"} */}
            add to wishlist
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

