import Image from "next/image";


export default function ContactBanner() {
    return (
        
        <div className="relative w-full h-[200px] lg:h-[300px] rounded-lg">
            <Image
                src="/contact-banner.jpg"
                alt="Contact Banner"
                fill
                priority
                className="object-cover object-center brightness-75 rounded-lg"
            />
            <div className="absolute inset-0 bg-black/40" />
            <h1 className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-bold text-white">
                Contact
            </h1>
        </div>
        
    )
}