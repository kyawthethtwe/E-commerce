import AboutHero from "@/components/about/AboutHero"
import CallToAction from "@/components/about/CallToAction"
import CoreValues from "@/components/about/CoreValues"
import OurStory from "@/components/about/OurStory"
import TeamSection from "@/components/about/TeamSection"
import Testimonials from "@/components/about/Testimonials"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AboutHero />
      <OurStory />
      <CoreValues />
      <TeamSection />
      <Testimonials />
      <CallToAction />
    </div>
  )
}

