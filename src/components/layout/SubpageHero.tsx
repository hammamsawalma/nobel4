"use client";

import Image from "next/image";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { StaggeredBlurText } from "@/components/animations/StaggeredBlurText";

interface SubpageHeroProps {
    title: string;
    subtitle?: string;
    label?: string;
    image: string;
    imageAlt?: string;
    height?: "50vh" | "60vh" | "70vh";
}

const heightMap = {
    "50vh": "h-[50vh]",
    "60vh": "h-[60vh]",
    "70vh": "h-[70vh]",
};

export function SubpageHero({
    title,
    subtitle,
    label,
    image,
    imageAlt,
    height = "50vh",
}: SubpageHeroProps) {
    return (
        <section className="relative mb-24 lg:mb-32">
            {/* Background Image */}
            <div
                className={`relative w-full ${heightMap[height]} overflow-hidden`}
            >
                <Image
                    src={image}
                    alt={imageAlt || title}
                    fill
                    className="object-cover"
                    priority
                />
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-forest/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-forest/50 to-transparent" />

                {/* Content overlay */}
                <div className="absolute inset-0 flex items-end pb-16 md:pb-20">
                    <div className="container">
                        <div className="max-w-4xl">
                            {label && (
                                <CinematicReveal>
                                    <span className="text-copper tracking-widest uppercase text-sm font-medium mb-6 block">
                                        {label}
                                    </span>
                                </CinematicReveal>
                            )}

                            <StaggeredBlurText
                                text={title}
                                className="text-4xl md:text-5xl lg:text-7xl mb-6 leading-[1.1]"
                            />

                            {subtitle && (
                                <CinematicReveal delay={0.6}>
                                    <p className="text-lg md:text-xl text-sage max-w-2xl leading-relaxed">
                                        {subtitle}
                                    </p>
                                </CinematicReveal>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Curved mask at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-forest rounded-t-[40px]" />
        </section>
    );
}
