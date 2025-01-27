import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { StarIcon } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah L.",
    avatar: "/placeholder.svg",
    content: "I've found so many unique items on EcoMarket. It's my go-to place for sustainable shopping!",
    rating: 5,
  },
  {
    name: "Michael R.",
    avatar: "/placeholder.svg",
    content: "The quality of pre-loved items here is amazing. I've saved money and reduced waste!",
    rating: 4,
  },
  {
    name: "Emily T.",
    avatar: "/placeholder.svg",
    content: "EcoMarket has made it so easy to sell items I no longer need. Great community!",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="container">
      <h2 className="text-3xl font-bold mb-6 text-center">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{testimonial.name}</CardTitle>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{testimonial.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

