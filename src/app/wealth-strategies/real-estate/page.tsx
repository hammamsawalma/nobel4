import { Metadata } from "next";
import Image from "next/image";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { StaggeredBlurText } from "@/components/animations/StaggeredBlurText";
import { CopperGlow } from "@/components/animations/CopperGlow";
import { CTASection } from "@/components/sections/CTASection";
import { Building, MapPin, TrendingUp, Key } from "lucide-react";

export const metadata: Metadata = {
    title: "Real Estate Investment | Continental Heritage",
    description: "Direct access to trophy real estate and institutional-grade property investments across global markets.",
};

const PILLARS = [
    { icon: Building, title: "Trophy Asset Acquisition", description: "Sourcing and acquiring premium commercial and residential properties in London, Sydney, Singapore, and select European capitals." },
    { icon: MapPin, title: "Global Diversification", description: "Building geographically diversified real estate portfolios that mitigate single-market concentration risk." },
    { icon: TrendingUp, title: "Value Enhancement", description: "Active asset management strategies including refurbishment, repositioning, and yield optimisation to drive capital growth." },
    { icon: Key, title: "Family Residences", description: "Advising on the acquisition, structuring, and management of primary and secondary family residences across jurisdictions." },
];

const PROCESS = [
    { step: "01", title: "Opportunity Scan", description: "Continuous monitoring of off-market and pre-market opportunities through our proprietary network of agents and developers." },
    { step: "02", title: "Due Diligence", description: "Institutional-grade analysis covering legal, structural, environmental, and financial dimensions of each opportunity." },
    { step: "03", title: "Optimal Structuring", description: "Tax-efficient ownership structures tailored to the asset's jurisdiction, including SPVs, trusts, and nominee arrangements." },
    { step: "04", title: "Active Management", description: "Hands-on property administration, tenant management, and capital expenditure oversight to maximise total return." },
];

export default function RealEstate() {
    return (
        <main className="min-h-screen bg-forest">
            <section className="relative h-[50vh] overflow-hidden">
                <Image src="/images/services/real-estate.webp" alt="Real Estate Investment" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-forest/30" />
                <div className="absolute inset-0 flex items-end pb-16 md:pb-20">
                    <div className="container">
                        <CinematicReveal><span className="text-copper tracking-widest uppercase text-sm font-medium mb-4 block">Wealth Strategy</span></CinematicReveal>
                        <StaggeredBlurText text="Real Estate Investment" className="text-4xl md:text-6xl lg:text-7xl mb-4 leading-[1.1]" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-forest rounded-t-[40px]" />
            </section>

            <section className="section-padding"><div className="container max-w-4xl">
                <CinematicReveal><p className="text-xl md:text-2xl text-sage leading-relaxed font-accent italic">&ldquo;Real estate is the cornerstone of old money. We source, structure, and steward property holdings with the patience and discretion that trophy assets demand.&rdquo;</p></CinematicReveal>
                <CinematicReveal delay={0.2}><div className="copper-divider-ornate max-w-sm mt-10"><span className="dot" /></div></CinematicReveal>
            </div></section>

            <section className="section-padding bg-forest-dark rounded-t-[40px] border-t border-copper/10"><div className="container">
                <CinematicReveal><h2 className="text-center mb-16">Strategic Pillars</h2></CinematicReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {PILLARS.map((p, i) => (<CinematicReveal key={i} delay={i * 0.1}><CopperGlow className="h-full"><div className="velvet-card p-6 h-full flex gap-5"><div className="shrink-0 w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center border border-copper/20"><p.icon className="w-5 h-5 text-copper" /></div><div><h3 className="text-xl text-parchment-light mb-2 font-heading">{p.title}</h3><p className="text-sage text-sm leading-relaxed">{p.description}</p></div></div></CopperGlow></CinematicReveal>))}
                </div>
            </div></section>

            <section className="section-padding"><div className="container max-w-4xl">
                <CinematicReveal><h2 className="text-center mb-16">Our Process</h2></CinematicReveal>
                <div className="space-y-8">
                    {PROCESS.map((p, i) => (<CinematicReveal key={i} delay={i * 0.1}><div className="flex gap-6 md:gap-10 group"><span className="text-4xl md:text-5xl font-heading text-copper/30 group-hover:text-copper transition-colors shrink-0">{p.step}</span><div className="border-l border-copper/20 pl-6 md:pl-10 pb-8"><h3 className="text-xl text-parchment-light mb-2">{p.title}</h3><p className="text-sage leading-relaxed">{p.description}</p></div></div></CinematicReveal>))}
                </div>
            </div></section>

            <CTASection />
        </main>
    );
}
