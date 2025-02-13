'use client';
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Home, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "name is required"),
  phone: z.string().min(10, "phone is required"),
  email: z.string().email("email is required"),
  details: z.string().min(10, "details is required"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      details: "",
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="relative container mx-auto px-4   bg-white shadow-lg rounded-lg">
      <div className="grid gap-6 lg:grid-cols-[1fr,400px] -mt-32 py-4">
        {/* Form Card */}
        <div className="w-full">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-highlight">Contact Us</h1>
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Name
                </label>
                <Input placeholder="กรอกชื่อของคุณ" {...register("name")} />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Phone
                </label>
                <Input
                  placeholder="กรอกเบอร์โทรศัพท์ของคุณ"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                 Email
                </label>
                <Input 
                placeholder="กรอกอีเมลของคุณ" 
                {...register("email")}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Details
                </label>
                <Input 
                placeholder="กรอกรายละเอียด"
                {...register("details")}
                 />
                {errors.details && <p className="text-red-500 text-sm">{errors.details.message}</p>}
              </div>
              <div className="flex justify-center items-center md:col-span-2 mt-4">
                <Button type="submit"  className="rounded-md px-14 py-1 ">
                  <Send className="h-6 w-6 shrink-0" />
                  send
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-primary  text-white shadow-lg rounded-lg relative overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url('/main-building.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: "0.1",
            }}
          />
          <div className="p-6">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-20 w-20">
                <Image
                  src="/favicon.ico"
                  alt="Faculty logo"
                  width={48}
                  height={48}
                  className="w-full h-full"
                />
              </div>
              <div className="bg-white h-14 w-1" />
              <div>
                <h2 className="font-bold">EcoMarket</h2>
                <p className="text-sm">Join With Us To Save The World</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-3">
                <Home className="h-5 w-5 shrink-0" />
                <div className="space-y-1">
                  <p className="font-semibold">Bangkok</p>
                  <p className="text-sm">Muean Ake Pathumthani</p>
                  <p className="text-sm">744 Lakhok</p>
                  <p className="text-sm">Pathum Thani 30000</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0" />
                <div>
                  <p>044233000 </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0" />
                <div>
                  <p>ecomarket@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
