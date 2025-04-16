import FaqAccordions from "@/components/faq/FaqAccordion";
import FaqHero from "@/components/faq/FaqHero";
import ContactSupport from "@/components/faq/ContactSupport";

export default function Faq() {
    return (
        <div>
            <FaqHero />
            <FaqAccordions />
            <ContactSupport />
        </div>
    );
}