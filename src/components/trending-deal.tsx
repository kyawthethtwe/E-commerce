
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
const trendingDeals = [
    { id: 1, title: "Vintage Leather Jacket", price: "$45", image: "/jacket.jpg" },
    { id: 2, title: "Refurbished iPhone 11", price: "$299", image: "/iphone11.jpg" },
    { id: 3, title: "Antique Wooden Desk", price: "$150", image: "/desk.jpg" },
    { id: 4, title: "Mountain Bike", price: "$180", image: "/mountain-bike.jpg" },
    { id: 5, title: "Designer Handbag", price: "$95", image: "/bag.jpg" },
]



export default function TrendingDeals() {
  return (
    <section className="container py-8">
      <h2 className="mb-6 text-2xl font-bold text-highlight">Trending Deals</h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {trendingDeals.map((deal) => (
            <CarouselItem key={deal.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="m-1 overflow-hidden transition-all hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src={deal.image}
                      alt={deal.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold line-clamp-1">{deal.title}</h3>
                    <p className="text-xl font-bold text-primary">${deal.price})</p>
                    <Button asChild className="mt-4 w-full ">
                      <Link href={`/deal/${deal.id}`}>View Deal</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
