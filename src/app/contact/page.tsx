import ContactBanner from "@/components/contact/contact-banner";
import ContactLocation from "@/components/contact/contact-location";
import ContactForm from "@/components/contact/contact-form";
export default function ContactPage() {
    return (
        <div>
            <ContactBanner />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                <ContactLocation />
                <ContactForm />
            </div>
        </div>
    )
}