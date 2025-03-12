
import OurStory from "@/components/about/OurStory"
import CoreValues from "@/components/about/CoreValues"
import TeamSection from "@/components/about/TeamSection"
import Testimonials from "@/components/about/Testimonials"
import CallToAction from "@/components/about/CallToAction"
import AboutHero from "@/components/about/AboutHero";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <OurStory />
      <CoreValues />
      <TeamSection />
      <Testimonials />
      <CallToAction />
    </div>
  )
}

