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
        <div className="flex flex-col  ml-16 gap-4 p-4 bg-background rounded-lg">
            {contact.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                    <div className="">{item.icon}</div>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    )
}