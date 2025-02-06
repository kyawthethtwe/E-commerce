import Image from "next/image";

interface BannerProps {
  title?: string;
  image: string;
}

export default function Banner({ title, image }: BannerProps) {
  return (
    <div className="relative w-full h-[200px] lg:h-[300px]">
      <Image
        src={image}
        alt={title || "Banner"}
        fill
        priority
        className="object-cover object-center brightness-75 w-full h-full"
      />
      {title && (
        <>
          <div className="absolute inset-0 bg-black/40" />
          <h1 className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-bold text-white">
            {title}
          </h1>
        </>
      )}
    </div>
  );
}
