import { TopBar, Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { MissionSection } from "@/components/mission-section"
import { ProgramsSection } from "@/components/programs-section"
import { OpportunitiesSection } from "@/components/opportunities-section"
import { PresenceSection } from "@/components/presence-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ArticlesSection } from "@/components/articles-section"
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
      <OpportunitiesSection />
      <PresenceSection />
      <TestimonialsSection />
      <ArticlesSection />
      <PartnersSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
