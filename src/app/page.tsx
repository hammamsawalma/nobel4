import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ServicesPreviewSection } from "@/components/sections/ServicesPreviewSection";
import { TrustMarquee } from "@/components/sections/TrustMarquee";
import dynamic from "next/dynamic";

/* ── Lazy-loaded sections (below-fold, code-split) ── */
const TestimonialsSection = dynamic(
  () => import("@/components/sections/TestimonialsSection").then(m => ({ default: m.TestimonialsSection }))
);
const AwardsSection = dynamic(
  () => import("@/components/sections/AwardsSection").then(m => ({ default: m.AwardsSection }))
);
const SecuritySection = dynamic(
  () => import("@/components/sections/SecuritySection").then(m => ({ default: m.SecuritySection }))
);
const TrajectoryCalculator = dynamic(
  () => import("@/components/sections/TrajectoryCalculator").then(m => ({ default: m.TrajectoryCalculator }))
);
const FaqSection = dynamic(
  () => import("@/components/sections/FaqSection").then(m => ({ default: m.FaqSection }))
);
const CTASection = dynamic(
  () => import("@/components/sections/CTASection").then(m => ({ default: m.CTASection }))
);
const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection").then(m => ({ default: m.ContactSection }))
);
const NewsletterSection = dynamic(
  () => import("@/components/sections/NewsletterSection").then(m => ({ default: m.NewsletterSection }))
);

export default function Home() {
  return (
    <main className="min-h-screen bg-forest">
      <HeroSection />

      {/* Content wrapper rolls over the sticky Hero */}
      <div className="relative z-10 bg-forest rounded-t-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden">

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
