import { getProducts, getSingleProduct, getRelatedProducts } from "@/services/api/product";
import { useQuery } from "@tanstack/react-query";

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  })
};

export const useSingleProduct = (id: number) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getSingleProduct(id),
  })
}

export const useGetRelaledProducts = () => {
  return useQuery({
    queryKey: ["relatedProducts"],
    queryFn: () => getRelatedProducts(),
  })
}