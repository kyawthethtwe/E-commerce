import axios from "axios";
export const BASE_URL = "https://fakestoreapi.com";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "Content-Encoding": "gzip",
  },
});

export default axiosInstance;
