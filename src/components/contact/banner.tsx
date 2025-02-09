
import Image from "next/image"
const Banner = () => {
    return(
      <div className="relative w-full h-[200px] sm:h-[300px]">
          <Image
            src="/main-banner.jpg"
            alt="Banner"
            fill
            priority
            className="object-cover object-center brightness-75 "
          />   
        </div>
    )
}

export default Banner;


