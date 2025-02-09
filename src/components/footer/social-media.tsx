import Link from "next/link"
import { Facebook } from 'lucide-react';

const socials = [
    {   
        name: "สาขาการบัญชี",
        link: "#",
    },
    {
        name: "สาขาการเงิน",
        link: "#",
    },
    {
        name: "สาขาการตลาด",
        link: "#",
    },
    {
        name: "สาขาการจัดการ",
        link: "#",
    },
    {
        name: "สาขาระบบสารสนเทศ",
        link: "#",
    },
    {
        name: "หลักสูตรปริญญาโท คณะบริหารธุรกิจ",
        link: "#",
    }
]

export default function SocialMedia() {
    return(
        <div>
        <h4 className="font-medium text-primary mb-4">เพจสาขาวิชา</h4>
        <ul className="space-y-2 text-sm text-primary-light1">
            {socials.map((social) => (
                <li key={social.name}>
                    <Link href={social.link} className="flex items-center gap-2 hover:text-highlight">
                        <Facebook size={16} className="flex-shrink-0"/>
                        <span>{social.name}</span>
                    </Link>
                </li>
            ))}
        </ul>
      </div>
    )
}

