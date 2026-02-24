import { TopBar, Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { MissionSection } from "@/components/mission-section"
import { ProgramsSection } from "@/components/programs-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { VideosSection } from "@/components/videos-section"
import { PartnersSection } from "@/components/partners-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <TopBar />
      <Navigation />
      <HeroSection />
      <StatsSection />
      <MissionSection />
      <ProgramsSection />
      <TestimonialsSection />
      <VideosSection />
      <PartnersSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
