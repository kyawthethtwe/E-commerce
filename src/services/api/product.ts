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

// Mock function to fetch related products
export const getRelatedProducts = async (id: string) => {
  // In a real application, this would be an API call
  const response = await axiosInstance.get<Product[]>(`/api/products/${id}/related`)
  return response.data
}