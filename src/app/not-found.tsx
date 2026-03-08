import Link from "next/link";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { StaggeredBlurText } from "@/components/animations/StaggeredBlurText";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-forest flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
            {/* Decorative Texture Overlay */}
            <div className="absolute inset-0 bg-paper-grain mix-blend-overlay opacity-10 pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
                <CinematicReveal>
                    <div className="copper-divider-vertical h-16 mx-auto mb-6 opacity-50" />
                </CinematicReveal>

                <StaggeredBlurText
                    text="404"
                    className="text-8xl md:text-9xl font-heading text-copper/30 mb-8 tracking-widest"
                />

                <CinematicReveal delay={0.4}>
                    <h2 className="text-3xl md:text-5xl font-heading mb-6 text-parchment-light">
                        Page Not Found
                    </h2>
                    <p className="text-sage text-lg md:text-xl mb-12 max-w-md mx-auto leading-relaxed">
                        The requested page is unavailable. Please check the URL or navigate back to the homepage.
                    </p>

                    <Link
                        href="/"
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-sm bg-copper/10 px-8 py-4 text-parchment-light border border-copper/30 transition-all hover:bg-copper hover:text-forest"
                    >
                        <span className="relative z-10 font-heading tracking-wider uppercase text-sm">
                            Return to Homepage
                        </span>
                    </Link>
                </CinematicReveal>

                <CinematicReveal delay={0.8}>
                    <div className="copper-divider-vertical h-16 mx-auto mt-16 opacity-50" />
                </CinematicReveal>
            </div>
        </main>
    );
}
