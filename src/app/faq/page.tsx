import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
const faq = [
    {
        question: "What is the purpose of this website?",
        answer: "This website is a platform for people to find and share information about the best places to visit in Bangkok."
    }, 
    {
        question: "What is the purpose of this website?",
        answer: "This website is a platform for people to find and share information about the best places to visit in Bangkok."
    },
    {
        question: "How to cancel my order?",
        answer: "You can cancel your order by clicking the cancel button on the order page."
    },
    {
        question: "How to return my order?",
        answer: "You can return your order by clicking the return button on the order page."
    },
    {
        question: "How to track my order?",
        answer: "You can track your order by clicking the track button on the order page."
    },
    {
        question: "How to contact the support team?",
        answer: "You can contact the support team by clicking the contact button on the website."
    }
]


export default function FAQPage() {
    return (
        <div>
            {/* banner*/}
            <div className="bg-gray-100 h-[200px] sm:h-[300px] ">
                <Image
                src="/home-banner.jpg"
                alt="banner"
                width={1024}
                height={1000}
                className="w-full h-full object-cover object-center rounded-md"
                />
            </div>
            <div className="container px-4 mx-auto mb-8 mt-10">
                <div className="flex justify-center items-center mb-4 gap-2">
                    <Input type="text" placeholder="Search" className="w-60 h-10" /> 
                    <Button className="w-20 h-10">Search</Button>
                </div>
                <h1 className="text-2xl font-bold">FAQ</h1>
                <Accordion type="single" collapsible>
                {faq.map((item, index) => (
                    <AccordionItem key={index} value={item.question}>
                        <AccordionTrigger>{item.question}</AccordionTrigger>
                        <AccordionContent>{item.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}