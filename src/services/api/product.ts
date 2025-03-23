import { Product } from "@/types/IProduct"
import axiosInstance from "@/services/axios.config"


export const getProducts = async ()  => {
    const response = await axiosInstance.get<Product[]>(`/products`)
    return response.data
  }
  
export const getSingleProduct = async (id: number) => {
    const response = await axiosInstance.get<Product>(`/products/${id}`)
    return response.data
}

const relatedProducts = [
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
    "image": "https://i.imgur.com/9LFjwpI.jpeg",
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

export const getRelatedProducts = async () => {
    return relatedProducts
}