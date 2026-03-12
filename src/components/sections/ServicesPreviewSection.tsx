"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CinematicReveal } from "@/components/animations/CinematicReveal";

const SERVICES = [
    {
        number: "01",
        title: "Portfolio Management",
        tagline: "Capital Preserved Across Market Cycles",
        description:
            "Bespoke asset allocation strategies designed to navigate market cycles and preserve purchasing power across generations. We manage complexity so your legacy endures.",
        image: "/images/services/portfolio.png",
        href: "/wealth-strategies/portfolio-management",
        stat: { value: "47+", label: "Years of Experience" },
    },
    {
        number: "02",
        title: "Wealth Protection",
        tagline: "Your Greatest Asset: Confidentiality",
        description:
            "Robust structural planning to shield your family's assets from unnecessary taxation, litigation, and economic turbulence. Swiss-standard discretion, institutional precision.",
        image: "/images/services/protection.png",
        href: "/wealth-strategies/wealth-protection",
        stat: { value: "98.7%", label: "Client Retention" },
    },
    {
        number: "03",
        title: "Estate & Succession",
        tagline: "Legacy by Design, Not by Default",
        description:
            "Careful orchestration of wealth transfer, ensuring your legacy is passed on according to your exact wishes with minimal friction and maximum clarity.",
        image: "/images/services/planning.png",
        href: "/wealth-strategies#estate-planning",
        stat: { value: "$12.8B", label: "Assets Managed" },
    },
];

function ServicePanel({
    service,
    index,
}: {
    service: (typeof SERVICES)[0];
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    // Gentle parallax inside the framed image
    const imageY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
    const isEven = index % 2 === 0;

    return (
        <div ref={ref} className="container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center mb-20 lg:mb-32 last:mb-16">
            
            {/* ── IMAGE COLUMN (Framed) ── */}
            <div className={`relative w-full h-[320px] sm:h-[400px] lg:h-[600px] rounded-2xl lg:rounded-[40px] overflow-hidden shadow-2xl border border-copper/10 ${isEven ? "lg:order-1" : "lg:order-2"} order-1`}>
                <motion.div style={{ y: imageY }} className="absolute inset-0 scale-[1.08]">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </motion.div>
                {/* Standardised image tone overlay */}
                <div className="img-tone" />
                {/* Whisper number on image */}
                <div className="whisper absolute bottom-4 right-6 text-[5rem]" aria-hidden="true">
                    {service.number}
                </div>
            </div>

            {/* ── TEXT COLUMN (Breathing space) ── */}
            <div className={`flex flex-col justify-center py-4 ${isEven ? "lg:order-2 lg:pl-4" : "lg:order-1 lg:pr-4"} order-2`}>
                <CinematicReveal>
                    <p className="eyebrow mb-5">{service.tagline}</p>
                    <h2 className="heading-card mb-6">{service.title}</h2>
                    <div className="copper-rule mb-6" />
                    <p className="body-luxury mb-10">{service.description}</p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8 mt-2">
                        <Link
                            href={service.href}
                            className="group/btn inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] uppercase text-parchment hover:text-copper transition-colors duration-300"
                        >
                            <span>Explore Strategy</span>
                            <span className="w-6 h-px bg-current inline-block transition-all duration-500 group-hover/btn:w-12" />
                            <ArrowRight size={12} className="shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </Link>
                        <div className="border-l border-copper/20 pl-6 mt-4 sm:mt-0">
                            <div className="font-heading text-2xl text-copper">{service.stat.value}</div>
                            <div className="eyebrow mt-1" style={{ color: "rgba(107,124,110,0.7)" }}>{service.stat.label}</div>
                        </div>
                    </div>
                </CinematicReveal>
            </div>

        </div>
    );
}

export function ServicesPreviewSection() {
    return (
        <section className="bg-forest overflow-hidden">
            {/* Section header */}
            <div className="container pt-32 pb-20">
                <CinematicReveal>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="max-w-xl">
                            <div className="copper-rule mb-5" />
                            <h2 className="heading-section">
                                Bespoke{" "}
                                <span className="text-gradient-copper italic">Wealth Strategies</span>
                            </h2>
                        </div>
                        <Link
                            href="/wealth-strategies"
                            className="inline-flex items-center gap-3 eyebrow text-sage hover:text-copper transition-colors duration-300 group shrink-0"
                        >
                            <span>View All Capabilities</span>
                            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </CinematicReveal>
            </div>

            <div className="pb-16">
                {SERVICES.map((service, index) => (
                    <ServicePanel key={service.number} service={service} index={index} />
                ))}
            </div>

            {/* Section separator */}
            <div className="section-sep" />
        </section>
    );
}
