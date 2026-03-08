import { HeroSection } from "@/components/sections/HeroSection";
import { MarketTicker } from "@/components/sections/MarketTicker";
import { AboutSection } from "@/components/sections/AboutSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ServicesPreviewSection } from "@/components/sections/ServicesPreviewSection";
import { TrustMarquee } from "@/components/sections/TrustMarquee";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { TrajectoryCalculator } from "@/components/sections/TrajectoryCalculator";
import { FaqSection } from "@/components/sections/FaqSection";
import { CTASection } from "@/components/sections/CTASection";
import { ContactSection } from "@/components/sections/ContactSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-forest">
      <HeroSection />

      {/* Content wrapper rolls over the sticky Hero */}
      <div className="relative z-10 bg-forest rounded-t-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
        <MarketTicker />
        <AboutSection />
        <PhilosophySection />
        <div className="copper-divider-ornate container hidden lg:block"><span className="dot" /></div>
        <ServicesPreviewSection />
        <TrustMarquee />
        <TestimonialsSection />
        <AwardsSection />
        <SecuritySection />
        <TrajectoryCalculator />
        <div className="copper-divider" />
        <FaqSection />
        <CTASection />
        <ContactSection />
        <NewsletterSection />
      </div>
    </main>
  );
}
