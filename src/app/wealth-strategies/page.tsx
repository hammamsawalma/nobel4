import { Metadata } from "next";
import Image from "next/image";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { StaggeredBlurText } from "@/components/animations/StaggeredBlurText";
import { CopperGlow } from "@/components/animations/CopperGlow";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
    title: "Wealth Strategies | Continental Heritage",
    description: "Comprehensive, institutional-grade wealth strategies for discerning families.",
};

const STRATEGIES = [
    {
        id: "portfolio",
        title: "Portfolio Management",
        description: "Absolute return focus blending traditional assets with exclusive alternative investments, structured for true capital preservation across market cycles.",
        image: "/images/services/portfolio.png"
    },
    {
        id: "estate",
        title: "Estate & Succession",
        description: "Architecting robust frameworks to safely transition wealth, values, and business interests to the next generation without fragmentation.",
        image: "/images/services/planning.png"
    },
    {
        id: "tax",
        title: "Cross-Border Tax Structuring",
        description: "Navigating complex global jurisdictions to optimize the tax efficiency of international assets and corporate holdings.",
        image: "/images/services/tax.png"
    },
    {
        id: "family-office",
        title: "Family Office Services",
        description: "Acting as the centralized operational hub for your family's financial, administrative, and lifestyle requirements.",
        image: "/images/services/real-estate.png"
    },
    {
        id: "protection",
        title: "Wealth Protection",
        description: "Implementing robust legal and structural firewalls to shelter family capital from unforeseen liabilities and geopolitical shifts.",
        image: "/images/services/protection.png"
    },
    {
        id: "philanthropy",
        title: "Endowment & Philanthropy",
        description: "Structuring charitable foundations and endowments to ensure your family's social impact is as enduring as its wealth.",
        image: "/images/services/retirement.png"
    }
];

export default function WealthStrategiesPage() {
    return (
        <main className="min-h-screen bg-forest pt-32 pb-0">

            {/* Page Hero */}
            <section className="container mb-24 lg:mb-32">
                <div className="max-w-4xl text-center mx-auto">
                    <CinematicReveal>
                        <span className="text-copper tracking-widest uppercase text-sm font-medium mb-6 block">Our Expertise</span>
                    </CinematicReveal>

                    <StaggeredBlurText
                        text="Institutional-Grade Strategies for Private Capital."
                        className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.1]"
                    />

                    <CinematicReveal delay={0.6}>
                        <p className="text-xl text-sage max-w-2xl mx-auto leading-relaxed">
                            We apply the rigour and sophistication of institutional asset management to the bespoke needs of private families.
                        </p>
                    </CinematicReveal>
                </div>
            </section>

            {/* Strategies Grid */}
            <section className="section-padding bg-forest-dark relative overflow-hidden rounded-t-[40px] border-t border-copper/10">
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {STRATEGIES.map((strategy, index) => (
                            <CinematicReveal key={strategy.id} delay={index * 0.1} className="h-full">
                                <CopperGlow className="h-full group">
                                    <div id={strategy.id} className="velvet-card h-full p-6">
                                        <div className="relative h-64 mb-8 overflow-hidden rounded-sm border border-copper/20">
                                            <Image
                                                src={strategy.image}
                                                alt={strategy.title}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-forest/40 group-hover:bg-transparent transition-colors duration-700" />
                                        </div>

                                        <h3 className="text-2xl mb-4 text-parchment-light group-hover:text-copper transition-colors duration-300">
                                            {strategy.title}
                                        </h3>

                                        <p className="text-sage leading-relaxed">
                                            {strategy.description}
                                        </p>
                                    </div>
                                </CopperGlow>
                            </CinematicReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Re-use CTA Section */}
            <CTASection />

        </main>
    );
}
