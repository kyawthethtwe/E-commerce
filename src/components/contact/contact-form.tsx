"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

const ContactFormSchema = z.object({
    name: z.string().nonempty("Name is required"),
    email: z.string().email("Invalid email address"),
    subject: z.string().nonempty("Subject is required"),
    message: z.string().nonempty("Message is required"),
})
type ContactFormValues = z.infer<typeof ContactFormSchema>

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        }
    })
    
    const onSubmit = async (data: ContactFormValues) => {
        setIsSubmitting(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log(data);
            reset();
            toast.success("Your message has been sent successfully!");
        } catch (error) {
            console.error(error);
            toast.error("There was an error sending your message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }
    
  return (
    <main className="w-full max-w-4xl 2xl:max-w-6xl mx-auto py-16 md:py-24 px-4 sm:px-6">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl 2xl:text-5xl">Get in Touch</h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400 text-base md:text-lg xl:text-xl max-w-2xl mx-auto">
            Have a question, suggestion, or issue to report? Fill out the form below and we&apos;ll get back to you as soon
            as possible.
          </p>
        </div>
        <Card className="shadow-md">
          <CardContent className="space-y-6 pt-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm lg:text-base 2xl:text-lg font-medium">
                    Name <span className="text-red-500">*</span>
                </Label>
                <Input 
                  id="name" 
                  placeholder="Enter your name" 
                  className="h-11"
                  {...register("name")} 
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm lg:text-base 2xl:text-lg font-medium">
                    Email <span className="text-red-500">*</span>
                </Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="h-11"
                  {...register("email")}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-sm lg:text-base 2xl:text-lg font-medium">
                Subject <span className="text-red-500">*</span>
              </Label>
              <Input 
                id="subject" 
                placeholder="Enter a subject" 
                className="h-11"
                {...register("subject")} 
              />
              {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm lg:text-base 2xl:text-lg font-medium">
                Message <span className="text-red-500">*</span>
              </Label>
              <Textarea 
                id="message" 
                placeholder="Enter your message" 
                className="min-h-[150px] resize-y" 
                {...register("message")} 
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
            </div>
          </CardContent>
          <CardFooter className="flex justify-center pb-6">
            <Button 
              type="submit" 
              className="px-8 py-2.5 text-sm lg:text-base 2xl:text-lg font-medium transition-all"
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting}
            >
                {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}