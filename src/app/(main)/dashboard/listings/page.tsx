"use client"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import ListingCard from "@/components/listings/ListingCard"
import { useGetLising } from "@/services/queries/listingQueries"
interface Listing{
    id: string
    title: string
    price: number
    image: string
    status: "active" | "sold" | "draft"
}
export default function ListingsPage() {
  const router = useRouter()
  const{ data, isLoading, error } = useGetLising()


  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Loading your wishlist...</p>
        </div>
      </div>
    )
  }
  if (error) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4 text-red-600">Error</h2>
        <p className="text-muted-foreground">Failed to load listings. Please try again later.</p>
      </div>
    )
  }
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">My Listings</h2>
        <Button onClick={() => router.push("/dashboard/listings/new")}>
          <Plus className="w-4 h-4 mr-2" />
          Create New Listing
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((listing: Listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            actions={
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => router.push(`/dashboard/listings/${listing.id}/edit`)}
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => {
                    // Handle delete
                  }}
                >
                  Delete
                </Button>
              </div>
            }
          />
        ))}
      </div>
    </div>
  )
}

