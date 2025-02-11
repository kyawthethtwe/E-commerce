import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

interface Social {
    name: string;
    link: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const socials: Social[] = [
    {   
        name: "Facebook",
        link: "https://facebook.com/marketplace",
        icon: Facebook
    },
    {
        name: "Twitter",
        link: "https://twitter.com/marketplace",
        icon: Twitter
    },
    {
        name: "Instagram",
        link: "https://instagram.com/marketplace",
        icon: Instagram
    },
    {
        name: "YouTube",
        link: "https://youtube.com/marketplace",
        icon: Youtube
    },
    {
        name: "LinkedIn",
        link: "https://linkedin.com/company/marketplace",
        icon: Linkedin
    }
]

export default function SocialMedia() {
    return(
        <div>
            <h4 className="font-medium text-primary mb-4 xl:text-xl 2xl:text-xl pl-6">Follow Us</h4>
            <ul className="space-y-2 text-sm text-primary-light1 xl:text-xl 2xl:text-xl">
                {socials.map((social) => (
                    <li key={social.name}>
                        <Link 
                            href={social.link} 
                            className="flex items-center gap-2 hover:text-highlight"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <social.icon className="flex-shrink-0 h-4 w-4 2xl:w-[18px] 2xl:h-[18px] " />
                            <span>{social.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
