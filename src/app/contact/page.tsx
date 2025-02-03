import ContactBanner from "@/components/contact/contact-banner";
import ContactLocation from "@/components/contact/contact-location";
import ContactForm from "@/components/contact/contact-form";
export default function ContactPage() {
    return (
        <div>
            <ContactBanner />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 mt-4">
                <ContactLocation />
                <ContactForm />
            </div>
            {/* Map Section of bangkok */}
            <div className="w-full h-[500px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.184488888888!2d144.9630583156251!3d-37.81421777974998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e0!2s360%20Collins%20St%2C%20Melbourne%20VIC%203000!5e0!3m2!1sen!2sau!4v1717518888888!5m2!1sen!2sau" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}