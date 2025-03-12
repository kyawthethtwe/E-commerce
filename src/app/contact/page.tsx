import { Banner } from "@/components/home/banner";
import ContactForm from "@/components/contact/contact-form";

export default function Contact() {
    return (
        <div>
            <Banner title="Contact Us" image="/bike.jpg" />
            <ContactForm />
        </div>
    )
}