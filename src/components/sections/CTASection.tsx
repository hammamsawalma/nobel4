"use client";

import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";

export function CTASection() {
    return (
        <section className="relative py-32 overflow-hidden bg-forest z-20">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/sections/cta-bg.png')" }}
            />

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

                <CinematicReveal delay={0.4} className="flex flex-col sm:flex-row gap-6 justify-center">
                    <MagneticButton href="/contact" className="btn btn-primary">
                        Schedule a Private Consultation
                    </MagneticButton>
                    <MagneticButton href="/the-firm" className="btn btn-secondary bg-forest/50 backdrop-blur-sm border-copper/50 text-parchment-light hover:bg-forest/80">
                        Read Our Manifesto
                    </MagneticButton>
                </CinematicReveal>
            </div>

            {/* Ornate border bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/50 to-transparent z-10" />
        </section>
    );
}
