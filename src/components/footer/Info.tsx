import { Home, Phone, Mail, Clock } from "lucide-react";
interface InfoProps {
    address: string[];
    phone: string;
    email: string;
    hours: string;
} 
const info : InfoProps = {
    address: [
      "1234 Street Name",
      "City, Country",
      "12345",
      ],
      phone: "044233000",
      email: "sample@gmail.com",
      hours: "open 08:00-16:00"
    }

export default function Info() {
    return (
        <div className="text-primary-light1">
              <h4 className="font-medium  mb-4 xl:text-xl 2xl:text-xl pl-6">Contact</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2 ">
                  <Home className="h-4 w-4 xl:w-[18px] xl:h-[18px] 2xl:w-[18px] 2xl:h-[18px] flex-shrink-0 mt-1.5" />
                  <div className="space-y-1">
                    {info.address.map((line) => (
                      <p key={line} className="text-sm xl:text-xl 2xl:text-xl">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 xl:w-[18px] xl:h-[18px] 2xl:w-[18px] 2xl:h-[18px] flex-shrink-0 " />
                  <span className="xl:text-xl 2xl:text-xl">{info.phone}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 xl:w-[18px] xl:h-[18px] 2xl:w-[18px] 2xl:h-[18px] flex-shrink-0" />
                  <span className=" xl:text-xl 2xl:text-xl">{info.email}</span>
                </p>
                <p className="flex items-center gap-2 ">
                  <Clock className="w-4 h-4 xl:w-[18px] xl:h-[18px] 2xl:w-[18px] 2xl:h-[18px]  flex-shrink-0" />
                  <span className=" xl:text-xl 2xl:text-xl">{info.hours}</span>
                </p>
              </div>
            </div>
    )
}