"use client";

import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { GlowOrb } from "@/components/animations/GlowOrb";
import { ParallaxImage } from "@/components/animations/ParallaxImage";

export function CTASection() {
    return (
        <section className="relative py-32 overflow-hidden bg-forest z-20">
            {/* Background Image with Parallax */}
            <div className="absolute inset-0 z-0 opacity-20 hidden md:block">
                <ParallaxImage src="/images/sections/cta-bg.png" alt="Background" className="w-full h-full" speed={0.15} />
            </div>
            {/* Fallback for smaller screens / simplified rendering */}
            <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat md:hidden" style={{ backgroundImage: "url('/images/sections/cta-bg.png')" }} />
            
            <GlowOrb color="copper" size={800} blur={250} opacity={0.3} className="top-1/2 left-0 -translate-y-1/2 -translate-x-1/2" />
            <GlowOrb color="copper" size={600} blur={200} opacity={0.2} className="top-[10%] right-[10%]" delay={1.5} />

            {/* Heavy gradient overlay to ensure text readability */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-forest via-forest/80 to-forest/40 mix-blend-multiply" />
            <div className="absolute inset-0 z-0 bg-forest/40" />

            {/* Ornate border top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/50 to-transparent z-10" />

            <div className="container relative z-10 text-center max-w-4xl mx-auto px-6">
                <CinematicReveal>
                    <span className="text-copper font-medium tracking-widest uppercase text-sm mb-4 block">
                        The Next Chapter
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight text-white drop-shadow-lg">
                        Preserve Your Heritage for Generations to Come.
                    </h2>
                </CinematicReveal>

                <CinematicReveal delay={0.2}>
                    <p className="text-lg md:text-xl text-parchment-light/90 mb-12 max-w-2xl mx-auto drop-shadow-md">
                        We invite you to a confidential dialogue to discuss how Continental Heritage can serve as the unwavering guardian of your family's enduring legacy.
                    </p>
                </CinematicReveal>

                <CinematicReveal delay={0.4} className="flex flex-col sm:flex-row gap-6 justify-center z-30 relative">
                    <MagneticButton href="/contact" className="btn btn-glow font-heading tracking-wider w-full sm:w-auto text-sm">
                        Schedule a Private Consultation
                    </MagneticButton>
                    <MagneticButton href="/the-firm" className="btn btn-ghost font-heading tracking-wider w-full sm:w-auto text-sm px-6 group">
                        <span>Read Our Manifesto</span>
                    </MagneticButton>
                </CinematicReveal>
            </div>

            {/* Ornate border bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/50 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-copper-light to-transparent -translate-x-full animate-[shimmer-sweep_3s_ease-in-out_infinite]" />
        </section>
    );
}
