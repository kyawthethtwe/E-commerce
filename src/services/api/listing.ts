// async () => {
//     const response = await fetch("/api/listings/my-listings")
//     return response.json()

import axiosInstance from "../axios.config"

export async function getListing() {
    const response = await axiosInstance.get(`/api/listings/my-listings`)
    return response.data
}