import ContactForm from "@/components/contact/contact-form";
import { Banner } from "@/components/share/banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | SHE",
  description: "Get in touch with us for any questions or inquiries. We're here to help!",
};

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen">
            <Banner title="Contact Us" image="/bike.jpg" />
            <ContactForm />
        </div>
    );
}