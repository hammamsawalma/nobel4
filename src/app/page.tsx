import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ServicesPreviewSection } from "@/components/sections/ServicesPreviewSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

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
        <div className="copper-divider" />
        <TestimonialsSection />
        <CTASection />
      </div>
    </main>
  );
}
