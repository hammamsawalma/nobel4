"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { CopperGlow } from "@/components/animations/CopperGlow";

const SERVICES = [
    {
        title: "Portfolio Management",
        description: "Bespoke asset allocation strategies designed to navigate market cycles and preserve purchasing power across generations.",
        image: "/images/services/portfolio.png",
        href: "/wealth-strategies#portfolio-management"
    },
    {
        title: "Wealth Protection",
        description: "Robust structural planning to shield your family's assets from unnecessary taxation, litigation, and economic turbulence.",
        image: "/images/services/protection.png",
        href: "/wealth-strategies#wealth-protection"
    },
    {
        title: "Estate & Succession",
        description: "Careful orchestration of wealth transfer, ensuring your legacy is passed on according to your exact wishes with minimal friction.",
        image: "/images/services/planning.png",
        href: "/wealth-strategies#estate-planning"
    }
];

export function ServicesPreviewSection() {
    return (
        <section className="section-padding bg-forest">
            <div className="container">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <CinematicReveal>
                            <h2 className="mb-4">Bespoke Wealth Strategies</h2>
                        </CinematicReveal>
                        <CinematicReveal delay={0.2}>
                            <p className="text-sage text-lg">
                                We provide comprehensive counsel across every dimension of your financial life, tailored precisely to the complexities of significant wealth.
                            </p>
                        </CinematicReveal>
                    </div>
                    <CinematicReveal delay={0.3} className="shrink-0">
                        <Link href="/wealth-strategies" className="btn btn-secondary inline-flex items-center gap-2">
                            Explore All Services <ArrowRight size={16} />
                        </Link>
                    </CinematicReveal>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <CinematicReveal key={service.title} delay={0.4 + (index * 0.2)} className="h-full">
                            <CopperGlow className="h-full block">
                                <Link href={service.href} className="group block h-full velvet-card overflow-hidden p-0">
                                    {/* Image Container */}
                                    <div className="relative h-64 w-full overflow-hidden border-b border-copper/10">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 1024px) 100vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-forest/40 group-hover:bg-forest/10 transition-colors duration-500" />
                                    </div>

                                    {/* Content Container */}
                                    <div className="p-8">
                                        <h3 className="text-2xl mb-4 group-hover:text-copper transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-sage mb-6 line-clamp-3">
                                            {service.description}
                                        </p>
                                        <span className="inline-flex items-center gap-2 text-sm font-medium tracking-wide border-b border-copper/30 pb-1 text-parchment-light group-hover:text-copper transition-colors duration-300">
                                            Learn More <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                                        </span>
                                    </div>
                                </Link>
                            </CopperGlow>
                        </CinematicReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
