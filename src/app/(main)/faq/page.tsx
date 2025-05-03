import ContactSupport from "@/components/faq/ContactSupport";
import FaqAccordions from "@/components/faq/FaqAccordion";
import FaqHero from "@/components/faq/FaqHero";

export const metadata = {
  title: "Frequently Asked Questions - SHE",
  description: "Find answers to common questions about our platform, buying, selling, payments, shipping, and account security.",
};

export default function Faq() {
    return (
        <div className="min-h-screen flex flex-col">
            <FaqHero />
            <FaqAccordions />
            <ContactSupport />
        </div>
    );
}