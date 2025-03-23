"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { z } from "zod";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const ContactFormSchema = z.object({
    name: z.string().nonempty("Name is required"),
    email: z.string().email("Invalid email address"),
    subject: z.string().nonempty("Subject is required"),
    message: z.string().nonempty("Message is required"),
})
type ContactFormValues = z.infer<typeof ContactFormSchema>

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        }
    })
    const onSubmit = (data: ContactFormValues) => {
        console.log(data)
    }
  return (
    <main className="w-full max-w-4xl 2xl:max-w-6xl mx-auto py-12 md:py-24">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl 2xl:text-5xl">Get in Touch</h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400 text-base md:text-lg xl:text-xl">
            Have a question, suggestion, or issue to report? Fill out the form below and we&apos;ll get back to you as soon
            as possible.
          </p>
        </div>
        <Card>
          <CardContent className="space-y-4 pt-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm lg:text-base 2xl:text-lg">
                    Name <span className="text-red-500">*</span>
                </Label>
                <Input id="name" placeholder="Enter your name" {...register("name")} />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm lg:text-base 2xl:text-lg">
                    Email <span className="text-red-500">*</span>
                </Label>
                <Input id="email" type="email" placeholder="Enter your email address" {...register("email")}/>
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-sm lg:text-base 2xl:text-lg">
                Subject <span className="text-red-500">*</span>
              </Label>
              <Input id="subject" placeholder="Enter a subject" {...register("subject")} />
              {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm lg:text-base 2xl:text-lg">
                Message <span className="text-red-500">*</span>
              </Label>
              <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" {...register("message")} />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button 
            type="submit" 
            className="px-4 xl:px-6 text-sm lg:text-base 2xl:text-lg"
            onClick={handleSubmit(onSubmit)}
            >
                Submit
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}