"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
// import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Card, CardContent } from "@/components/ui/card";

interface MissionItem {
  id: number
  title: string
  content: string
  image: string
}
const missions: MissionItem[] = [
  {
    id: 1,
    title: "พันธกิจ",
    content:
      "1.ด้านการจัดการเรียนการสอน เป็นที่ยอมรับมนระดับชาติและนานาชาติ 2.ด้านการวิจัย ยกระดับงานวิจัยด้านบริหารธุรกิจขึ้นสู่ระดับสากล ด้วยการบูรณาการข้ามศาสตร์ 3.ด้านการบริการวิชาการ ผสานความร่วมมือกับภาครัฐและเอกชนทั้งในและต่างประเทศ เพื่อพัฒนา. ศักยภาพองค์กรร่วมกัน",
    image: "/main-building.jpg",
  },
  {
    id: 2,
    title: "Mission",
    content:
      "1.ด้านการจัดการเรียนการสอน เป็นที่ยอมรับมนระดับชาติและนานาชาติ 2.ด้านการวิจัย ยกระดับงานวิจัยด้านบริหารธุรกิจขึ้นสู่ระดับสากล ด้วยการบูรณาการข้ามศาสตร์ 3.ด้านการบริการวิชาการ ผสานความร่วมมือกับภาครัฐและเอกชนทั้งในและต่างประเทศ เพื่อพัฒนา. ศักยภาพองค์กรร่วมกัน",
    image: "/main-building.jpg",
  },
  {
    id: 3,
    title: "พันธกิจ",
    content:
      "1.ด้านการจัดการเรียนการสอน เป็นที่ยอมรับมนระดับชาติและนานาชาติ 2.ด้านการวิจัย ยกระดับงานวิจัยด้านบริหารธุรกิจขึ้นสู่ระดับสากล ด้วยการบูรณาการข้ามศาสตร์ 3.ด้านการบริการวิชาการ ผสานความร่วมมือกับภาครัฐและเอกชนทั้งในและต่างประเทศ เพื่อพัฒนา. ศักยภาพองค์กรร่วมกัน",
    image: "/main-building.jpg",
  },
  {
    id: 4,
    title: "พันธกิจ",
    content:
      "1.ด้านการจัดการเรียนการสอน เป็นที่ยอมรับมนระดับชาติและนานาชาติ 2.ด้านการวิจัย ยกระดับงานวิจัยด้านบริหารธุรกิจขึ้นสู่ระดับสากล ด้วยการบูรณาการข้ามศาสตร์ 3.ด้านการบริการวิชาการ ผสานความร่วมมือกับภาครัฐและเอกชนทั้งในและต่างประเทศ เพื่อพัฒนา. ศักยภาพองค์กรร่วมกัน",
    image: "/main-building.jpg",
  },
];


export default function AboutSwiper() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)
  const middleIndex = Math.floor(missions.length / 2)

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(middleIndex, 0)
    }
  }, [swiper, middleIndex])

  return (
    <div className="w-full py-6 my-6">
      <div className="">
        <div className="space-y-1 px-8 md:px-14">
          <h2 className="text-2xl font-bold tracking-tight">เกี่ยวกับคณะ</h2>
          <nav className="flex items-center space-x-2 text-sm ">
            <span>หน้าหลัก</span>
            <span>/</span>
            <span>เกี่ยวกับคณะ</span>
          </nav>
        </div>

        <div className="relative px-8">
          <Swiper
            onSwiper={setSwiper}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={30}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 0.2,
            }}
            modules={[ Mousewheel]}
            className="w-full !py-8 "
          >
            {missions.map((mission) => (
              <SwiperSlide key={mission.id} className=" max-w-full !w-[300px] sm:!w-[450px] md:!w-[600px] lg:!w-[750px]">
                <Card className="overflow-hidden transition-transform duration-300 rounded-none border-none shadow-none">
                  <CardContent className="p-0 flex flex-col sm:flex-row h-[300px] sm:h-[300px] md:h-[350px] lg:h-[400px]  "> 
                    <div className="relative sm:w-1/2 h-1/2 w-full  sm:h-full ">
                      <Image
                        src={mission.image || "/placeholder.svg"}
                        alt={mission.title}
                        className="object-cover"
                        fill
                        sizes="(max-width: 600px) 100vw, 600px"
                      />
                    </div>
                    <div className="sm:w-1/2 md:p-6 sm:p-4 p-2 flex flex-col sm:justify-center justify-start w-full h-1/2 sm:h-full">
                      <h3 className="font-bold md:text-4xl sm:text-3xl md:mb-4 sm:mb-2 my-2  text-xl">{mission.title}</h3>
                      <p className="sm:text-sm leading-relaxed text-xs ">{mission.content}</p>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
            {/* <div className="swiper-pagination"></div> */}
          </Swiper>
        </div>
      </div>

      {/* <style jsx global>{`
       

        .swiper-slide {
          transition: transform 0.3s;
        }

        .swiper::before,
        .swiper::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 100px;
          z-index: 2;
          pointer-events: none;
        }

        .swiper::before {
          left: 0;
          background: linear-gradient(to right, hsl(var(--background)), transparent);
        }

        .swiper::after {
          right: 0;
          background: linear-gradient(to left, hsl(var(--background)), transparent);
        }

        @media (max-width: 768px) {
          .swiper::before,
          .swiper::after {
            width: 50px;
          }
        }
      `}</style> */}
    </div>
  )
}

// .swiper-pagination-bullet {
//     width: 8px;
//     height: 8px;
//     background: ;
//     opacity: 0.5;
//   }

// .swiper-pagination-bullet-active {
//     background: hsl(var(--primary));
//     opacity: 1;
//   }