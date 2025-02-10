"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/main-building.jpg",
  "/main-building.jpg",
  "/activity.jpg",
  "/building.jpg",
];

const texts = [
  "T = Teamwork การทำงานเป็นทีม",
  "E = Entrepreneur ความคิดริเริ่ม สร้างสรรค์ ต่อยอดสิ่งใหม่ให้เป็นที่ยอมรับ",
  "A = Accountability ความรับผิดชอบ",
  "M = Morality and Integrity การมีศีลธรรม และความซื่อสัตย์",
  "M = Mastery ความเป็นมืออาชีพที่มีการสั่งสมความรู้และความเชี่ยวชาญในศาสตร์ด้านบริหารธุรกิจ",
  "A = Accomplishment การทำงานที่ทุกคนมุ่งผลสำเร็จตามเป้าหมายอย่างมีประสิทธิภาพ",
  "N = Nurturing การเอาใจใส่ และให้ความสำคัญกับผู้มีส่วนได้เสียทุกระดับสู่การพัฒนาในทุกมิติอย่างต่อเนื่อง",
  "I = Internationalization ความเป็นนานาชาติ",
  "A = Agility and Resilience ความคล่องตัว และความสามารถในการฟื้นตัว",
];

export default function BackgroundSwiper() {
  const [backgroundImage, setBackgroundImage] = useState(images[0]);

  return (
    <div className="relative min-h-[600px] w-full my-8">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full h-full">
        {/* Left Content */}
        <div className="flex-1 p-6 md:p-10">
          {/* Header Decorative Lines */}
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-highlight w-8 h-2" />
            <div className="bg-highlight w-16 h-2" />
          </div>

          {/* Text Content */}
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              คำนิยม B.A. TEAM MANIA
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
              B.A. = Business Administration Faculty คณะบริหารธุรกิจ
            </h2>
            
            {/* Text Items */}
            <div className="space-y-2">
              {texts.map((text, index) => (
                <p key={index} className="text-sm md:text-base text-white">
                  {text}
                </p>
              ))}
            </div>

            <p className="text-sm md:text-base text-white pt-4">
              หมายเหตุ B.A. I am ten = ค่านิยมของคณะบริหารธุรกิจมี 10 ประการ.
            </p>
          </div>
        </div>

        {/* Right Thumbnails */}
        <div className="flex lg:flex-col gap-4 p-6 lg:pr-40 justify-center items-center lg:justify-center">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-20 h-20 md:w-32 md:h-24 lg:w-52 lg:h-24 cursor-pointer transition-transform hover:scale-105"
              onClick={() => setBackgroundImage(image)}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80px, (max-width: 1024px) 128px, 208px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}