import { useQuery } from "@tanstack/react-query"
import { getListing } from "../api/listing"

export const useGetLising = () => {
    return useQuery({
        queryKey: ["my-listings"],
        queryFn: getListing
    })
}
