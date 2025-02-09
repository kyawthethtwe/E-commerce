import { Home, Phone, Mail, Clock } from "lucide-react";
interface InfoProps {
    address: string[];
    phone: string;
    email: string;
    hours: string;
} 
const info : InfoProps = {
    address: [
        "คณะบริหารธุรกิจ",
        "มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน",
        "744 ถ.สุรนารายณ์ ต.ในเมือง",
        "อ.เมือง จ.นครราชสีมา 30000"
      ],
      phone: "044233000 ต่อ 3075",
      email: "ba.rmuti@outlook.com",
      hours: "จันทร์ - ศุกร์: 8:00 น. - 16:30 น."
    }

export default function Info() {
    return (
        <div className="text-primary-light1">
              <h4 className="font-medium  mb-4">ข้อมูลติดต่อ</h4>
              <div className="space-y-3 text-sm">
                <div className="flex gap-2 ">
                  <Home className="h-4 w-4 flex-shrink-0" />
                  <div className="space-y-1">
                    {info.address.map((line) => (
                      <p key={line} className="text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0 " />
                  <span>{info.phone}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>{info.email}</span>
                </p>
                <p className="flex items-center gap-2 ">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span>{info.hours}</span>
                </p>
              </div>
            </div>
    )
}