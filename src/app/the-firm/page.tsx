import { Metadata } from "next";
import Image from "next/image";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { StaggeredBlurText } from "@/components/animations/StaggeredBlurText";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
    title: "The Firm | Continental Heritage",
    description: "Learn about the history, ethos, and generational approach of Continental Heritage Private Wealth.",
};

const HISTORY_TIMELINE = [
    {
        year: "1978",
        title: "The Foundation",
        description: "Established in Sydney by a consortium of distinguished financial professionals to directly manage the complex assets of three prominent Australian families."
    },
    {
        year: "1985",
        title: "European Expansion",
        description: "Opened our first European liaison office in London, providing clients with direct access to Continental markets and cross-border structuring."
    },
    {
        year: "1995",
        title: "Wealth Management Launch",
        description: "Formally launched our integrated wealth management services, consolidating investment, tax, estate, and risk advisory under one fiduciary umbrella."
    },
    {
        year: "2005",
        title: "$5 Billion Milestone",
        description: "Surpassed $5 billion in assets under management, cementing our position as one of the Asia-Pacific region's most trusted private wealth custodians."
    },
    {
        year: "2015",
        title: "Asia-Pacific Expansion",
        description: "Extended operations across Singapore and Hong Kong, bridging traditional wealth management with the region's explosive growth in first-generation fortunes."
    },
    {
        year: "Present",
        title: "Generational Guardianship",
        description: "Currently advising the fourth generation of our founding client families, overseeing more than $12.8B in assets globally across 14 jurisdictions."
    }
];

export default function TheFirmPage() {
    return (
        <main className="min-h-screen bg-forest pt-32 pb-0">

            {/* Page Hero */}
            <section className="container mb-24 lg:mb-32">
                <div className="max-w-4xl">
                    <CinematicReveal>
                        <span className="text-copper tracking-widest uppercase text-sm font-medium mb-6 block">Our Heritage</span>
                    </CinematicReveal>

                    <StaggeredBlurText
                        text="Half a Century of Unwavering Discretion and Generational Foresight."
                        className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.1]"
                    />

                    <CinematicReveal delay={0.6}>
                        <p className="text-xl text-sage max-w-2xl leading-relaxed">
                            We are not a modern financial institution; we are a private partnership built on the aristocratic traditions of patience, extreme confidentiality, and capital preservation over decades, not quarters.
                        </p>
                    </CinematicReveal>
                </div>
            </section>

            {/* Hero Image */}
            <section className="container mb-24 lg:mb-32">
                <CinematicReveal delay={0.8}>
                    <div className="relative w-full h-[50vh] md:h-[70vh] rounded-tr-[80px] rounded-bl-[80px] overflow-hidden border border-copper/20">
                        <Image
                            src="/images/about/main.png"
                            alt="Continental Heritage Boardroom"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Dark gradient overlay for mood */}
                        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent mix-blend-multiply" />
                    </div>
                </CinematicReveal>
            </section>

            {/* History Timeline */}
            <section className="section-padding bg-forest-dark relative overflow-hidden">
                <div className="container relative z-10">
                    <div className="text-center mb-20">
                        <CinematicReveal>
                            <h2 className="mb-6">The Continental Chronology</h2>
                        </CinematicReveal>
                        <CinematicReveal delay={0.2}>
                            <div className="copper-divider-ornate max-w-sm mx-auto">
                                <span className="dot" />
                            </div>
                        </CinematicReveal>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {HISTORY_TIMELINE.map((item, index) => (
                            <CinematicReveal
                                key={item.year}
                                delay={0.3 + (index * 0.2)}
                                direction="up"
                            >
                                <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-16 last:mb-0 group">
                                    {/* Year Column */}
                                    <div className="md:w-1/4 md:text-right shrink-0">
                                        <span className="text-4xl md:text-5xl font-heading text-copper/50 group-hover:text-copper transition-colors duration-500">
                                            {item.year}
                                        </span>
                                    </div>

                                    {/* Content Column */}
                                    <div className="md:w-3/4 relative pb-16 md:pb-0 md:border-l border-copper/20 md:pl-16">
                                        {/* Decorative node on timeline - Desktop only */}
                                        <div className="hidden md:block absolute -left-2 top-3 w-4 h-4 rounded-full bg-forest border-2 border-copper group-hover:bg-copper transition-colors duration-500" />

                                        <h3 className="text-2xl mb-4 text-parchment-light">{item.title}</h3>
                                        <p className="text-sage text-lg leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
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
