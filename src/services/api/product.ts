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
      id: 1,
      title: "Product 1",
      description: "Description for product 1",
      category: "Category 1",
      rating: { rate: 4.5, count: 10 },
      price: 100,
      image: "/product/p1.jpg",
    },
    {
      id: 2,
      title: "Product 2",
      description: "Description for product 2",
      category: "Category 2",
      rating: { rate: 4.5, count: 10 },
      price: 200,
      image: "/product/p2.jpg",
    },
    {
      id: 3,      
      title: "Product 3",
      description: "Description for product 3",
      category: "Category 3",
      rating: { rate: 4.5, count: 10 },
      price: 300,
      image: "/product/p3.jpg",
    },
    {
      id: 4,
      title: "Product 4",   
      description: "Description for product 4",
      category: "Category 4",                       
      rating: { rate: 4.5, count: 10 },
      price: 400,
      image: "/product/p4.jpg",
    },
    {
      id: 5,
      title: "Product 5",
      description: "Description for product 5",
      category: "Category 5",
      rating: { rate: 4.5, count: 10 },
      price: 500,
      image: "/product/p5.jpg",
    },
    {
      id: 6,      
      title: "Product 6", 
      description: "Description for product 6",
      category: "Category 6",
      rating: { rate: 4.5, count: 10 },
      price: 600,
      image: "/product/p6.jpg",
    },
  ]

export const getRelatedProducts = async () => {
    return relatedProducts
}