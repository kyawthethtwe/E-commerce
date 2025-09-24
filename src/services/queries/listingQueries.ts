import { useQuery } from "@tanstack/react-query"
import { getListings } from "../api/listing"

export const useGetListings = () => {
    return useQuery({
        queryKey: ["my-listings"],
        queryFn: getListings
    })
}
