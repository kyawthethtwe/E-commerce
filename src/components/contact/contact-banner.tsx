import Image from "next/image";

export default function ContactBanner() {
    return (
        <div className="w-full h-64 p-4 bg-background ">
            <Image
                src="/contact-banner.jpg"
                alt="Contact Banner"
                width={1920}
                height={1080}
                objectFit="cover"
                objectPosition="center"
                className="w-full h-full"
            />
        </div>
    )
}