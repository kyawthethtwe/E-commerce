import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
//import { useProductStore } from "@/store/productStore"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
const mockProducts = [
    { id: "1", title: "Vintage Camera", price: 89, image: "/vintage-camera.jpg" },
    { id: "2", title: "Antique Clock", price: 120, image: "/clock.jpg" },
    { id: "3", title: "Retro Radio", price: 65, image: "/retro.jpg" },
    { id: "4", title: "Classic Typewriter", price: 95, image: "/typewriter.jpg" },
    { id: "5", title: "Vintage Leather Jacket", price: 150, image: "/jacket.jpg" },
]



export default function FeatureProducts() {
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
          {mockProducts.map((deal) => (
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
                    <Button asChild className="mt-4 w-full bg-action hover:bg-action/90 text-white">
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

