import { Banner } from "@/components/share/banner";
import ContactForm from "@/components/contact/contact-form";

export default function Contact() {
    return (
        <div>
            <Banner title="Contact Us" image="/bike.jpg" />
            <ContactForm />
        </div>
    )
}