import Image from "next/image";
interface BannerProps {
    title?: string;
    image: string;
}

export const Banner = ( { title, image} : BannerProps) => {
    return (
        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
            <Image 
                src={image}
                alt={title || "Banner"}
                fill
                priority
                className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center text-white">{title}</h1>
            </div>
        </div>
    )
}