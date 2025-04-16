"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, Scrollbar, Mousewheel} from 'swiper/modules';

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import Image from "next/image"
import { Star } from "lucide-react"
import MainPadding from "../theme/MainPadding"
import "./custom.css"
const testimonials = [
  {
    name: "Jessica M.",
    location: "New York, NY",
    image: "/profile.jpg",
    rating: 5,
    text: "I've been able to furnish my entire apartment with quality second-hand items at a fraction of the cost. The platform is so easy to use and the community is incredibly helpful!",
  },
  {
    name: "Marcus T.",
    location: "Portland, OR",
    image: "/profile.jpg",
    rating: 5,
    text: "As someone who cares deeply about sustainability, this marketplace has been a game-changer. I've sold items I no longer need and found unique pieces that have stories behind them.",
  },
  {
    name: "Sophia L.",
    location: "Austin, TX",
    image: "/profile.jpg",
    rating: 4,
    text: "The AR feature is incredible! Being able to see how furniture would look in my space before purchasing has saved me from making mistakes. The secure payment system gives me peace of mind.",
  },
  {
    name: "Raj P.",
    location: "Chicago, IL",
    image: "/profile.jpg",
    rating: 5,
    text: "I've been both a buyer and seller on this platform for over a year. The process is seamless, and I love knowing that I'm contributing to a more sustainable future.",
  },
  {
    name: "Elena K.",
    location: "Miami, FL",
    image: "/profile.jpg",
    rating: 5,
    text: "The customer service is exceptional. When I had an issue with a purchase, the team resolved it quickly and professionally. I recommend this marketplace to everyone I know!",
  },
]

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20">
      <MainPadding>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold mb-4">What Our Community Says</h2>
          <p className="text-lg md:text-xl 2xl:text-2xl text-gray-600 max-w-2xl xl:max-w-4xl mx-auto">
            Real stories from people who are making a difference through sustainable shopping.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Pagination, Autoplay, Scrollbar, Mousewheel]}
            spaceBetween={30}
            slidesPerView={1}
            loop = {true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{ clickable: true }}
            scrollbar = {{ draggable: true}}
            mousewheel = {{ forceToAxis: true}}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg p-8 shadow-md h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="relative w-14 2xl:w-16 h-14 2xl:h-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base 2xl:text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500 2xl:text-base">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 2xl:w-6 2xl:h-6 ${
                          i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 flex-grow line-clamp-3 text-base 2xl:text-lg">{testimonial.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </MainPadding>
    </section>
  )
}

