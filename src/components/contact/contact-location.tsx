import { Mail, MapPin, Phone } from "lucide-react";


const contact = [{
    icon : <MapPin />,
    description: "1234 Elm Street, Toronto, ON"
    },
    {
    icon : <Phone />,
    description: "(123) 456-7890"
    },
    {
    icon : <Mail />,
    description: "Storesales@gmail.com"
    }
]

export default function ContactLocation() {
    return (
        <div className="flex flex-col justify-center ml-16 gap-4 p-4">
            {contact.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                    <div className="bg-highlight p-2 flex items-center rounded-full">{item.icon}</div>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    )
}