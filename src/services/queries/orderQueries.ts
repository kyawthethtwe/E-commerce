import { getOrders } from "../api/orders";
import { useQuery } from "@tanstack/react-query";

export const useGetOrders = () => {
    return useQuery({
        queryKey: ["my-orders"],
        queryFn: getOrders,
    });
};