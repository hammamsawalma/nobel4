import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { StaggeredBlurText } from "@/components/animations/StaggeredBlurText";
import { CopperGlow } from "@/components/animations/CopperGlow";
import { CTASection } from "@/components/sections/CTASection";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
    title: "Insights | Continental Heritage",
    description: "Curated external perspectives on global markets, wealth management, and the macro-economic landscape.",
};

const EXTERNAL_ARTICLES = [
    {
        title: "The Future of Family Offices in Asia-Pacific",
        source: "Financial Times",
        description: "An in-depth analysis of the rapidly growing family office sector across Asia-Pacific, driven by first-generation wealth creation and regulatory innovation.",
        url: "#",
        date: "March 2026",
    },
    {
        title: "Why Ultra-High-Net-Worth Investors Are Turning to Art",
        source: "Bloomberg Wealth",
        description: "Art as an asset class is gaining institutional credibility. This report explores valuation frameworks and portfolio integration strategies.",
        url: "#",
        date: "February 2026",
    },
    {
        title: "Central Bank Digital Currencies: Impact on Private Banking",
        source: "The Economist",
        description: "Central bank digital currencies could reshape the private banking landscape. Understanding the implications for capital flows and privacy.",
        url: "#",
        date: "January 2026",
    },
    {
        title: "Philanthropy & Impact: The New Wealth Imperative",
        source: "Harvard Business Review",
        description: "How the next generation of wealthy families is redefining philanthropy through measurable impact frameworks and mission-aligned investing.",
        url: "#",
        date: "January 2026",
    },
    {
        title: "Global Real Estate Outlook 2026",
        source: "Knight Frank",
        description: "Prime residential and commercial property markets are diverging. This report identifies pockets of value and emerging risk across 30 global cities.",
        url: "#",
        date: "December 2025",
    },
];

export default function InsightsPage() {
    return (
        <main className="min-h-screen bg-forest">
            {/* Hero */}
            <section className="relative h-[50vh] overflow-hidden">
                <Image
                    src="/images/blog/insights-hero.webp"
                    alt="Insights & External Perspectives"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-forest/30" />
                <div className="absolute inset-0 flex items-end pb-16 md:pb-20">
                    <div className="container">
                        <CinematicReveal>
                            <span className="text-copper tracking-widest uppercase text-sm font-medium mb-4 block">
                                External Perspectives
                            </span>
                        </CinematicReveal>
                        <StaggeredBlurText
                            text="Curated Insights"
                            className="text-4xl md:text-6xl lg:text-7xl mb-4 leading-[1.1]"
                        />
                        <CinematicReveal delay={0.5}>
                            <p className="text-xl text-sage max-w-2xl">
                                A curated selection of external analysis and commentary from
                                publications we respect.
                            </p>
                        </CinematicReveal>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-forest rounded-t-[40px]" />
            </section>

            {/* Articles Grid */}
            <section className="section-padding">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {EXTERNAL_ARTICLES.map((article, i) => (
                            <CinematicReveal key={i} delay={i * 0.1}>
                                <CopperGlow className="h-full block">
                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="heritage-card p-6 h-full flex flex-col group block pointer-events-auto"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="px-3 py-1 bg-gradient-to-r from-copper/10 to-transparent border border-copper/20 rounded-full text-copper text-xs tracking-widest group-hover:border-copper/50 transition-colors duration-300">
                                                {article.source}
                                            </span>
                                            <ExternalLink className="w-4 h-4 text-sage/40 group-hover:text-copper transition-colors" />
                                        </div>

                                        <h3 className="text-xl text-parchment-light mb-3 font-heading group-hover:text-copper transition-colors leading-snug">
                                            {article.title}
                                        </h3>

                                        <p className="text-sage text-sm leading-relaxed flex-1 mb-4">
                                            {article.description}
                                        </p>

                                        <span className="text-sage/50 text-xs">{article.date}</span>
                                    </a>
                                </CopperGlow>
                            </CinematicReveal>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
