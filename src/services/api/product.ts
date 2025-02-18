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