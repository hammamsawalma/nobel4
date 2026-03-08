import { Metadata } from "next";
import Image from "next/image";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { StaggeredBlurText } from "@/components/animations/StaggeredBlurText";
import { CopperGlow } from "@/components/animations/CopperGlow";
import { CTASection } from "@/components/sections/CTASection";
import { BarChart3, TrendingUp, PieChart, Shield } from "lucide-react";

export const metadata: Metadata = {
    title: "Portfolio Management | Continental Heritage",
    description: "Absolute return portfolio management blending traditional assets with exclusive alternative investments for true capital preservation.",
};

const PILLARS = [
    { icon: BarChart3, title: "Absolute Return Focus", description: "Targeting consistent, positive returns regardless of market direction through disciplined asset allocation and hedging." },
    { icon: TrendingUp, title: "Alternative Access", description: "Direct co-investment in private equity, venture capital, and real asset opportunities typically reserved for sovereign funds." },
    { icon: PieChart, title: "Dynamic Rebalancing", description: "Continuous portfolio monitoring with systematic rebalancing triggered by both market signals and fundamental shifts." },
    { icon: Shield, title: "Downside Protection", description: "Integrated tail-risk hedging ensures capital preservation during black-swan events and systemic market dislocations." },
];

const PROCESS = [
    { step: "01", title: "Discovery", description: "A comprehensive assessment of your family's financial landscape, risk tolerance, and multi-generational objectives." },
    { step: "02", title: "Architecture", description: "Design of a bespoke portfolio structure with optimal asset allocation across geographies, sectors, and instruments." },
    { step: "03", title: "Implementation", description: "Disciplined execution through our institutional trading desk, ensuring best-in-class pricing and minimal market impact." },
    { step: "04", title: "Stewardship", description: "Ongoing monitoring, quarterly reporting, and proactive adjustments aligned with evolving market conditions." },
];

export default function PortfolioManagement() {
    return (
        <main className="min-h-screen bg-forest">
            {/* Hero */}
            <section className="relative h-[50vh] overflow-hidden">
                <Image src="/images/services/portfolio.png" alt="Portfolio Management" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-forest/30" />
                <div className="absolute inset-0 flex items-end pb-16 md:pb-20">
                    <div className="container">
                        <CinematicReveal><span className="text-copper tracking-widest uppercase text-sm font-medium mb-4 block">Wealth Strategy</span></CinematicReveal>
                        <StaggeredBlurText text="Portfolio Management" className="text-4xl md:text-6xl lg:text-7xl mb-4 leading-[1.1]" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-forest rounded-t-[40px]" />
            </section>

            {/* Philosophy */}
            <section id="philosophy" className="section-padding">
                <div className="container max-w-4xl">
                    <CinematicReveal>
                        <p className="text-xl md:text-2xl text-sage leading-relaxed font-accent italic">
                            &ldquo;We do not chase returns. We architect portfolios that compound wealth quietly and relentlessly across decades, indifferent to the noise of quarterly markets.&rdquo;
                        </p>
                    </CinematicReveal>
                    <CinematicReveal delay={0.2}>
                        <div className="copper-divider-ornate max-w-sm mt-10"><span className="dot" /></div>
                    </CinematicReveal>
                </div>
            </section>

            {/* Strategic Pillars */}
            <section id="pillars" className="section-padding bg-forest-dark rounded-t-[40px] border-t border-copper/10">
                <div className="container">
                    <CinematicReveal><h2 className="text-center mb-16">Strategic Pillars</h2></CinematicReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {PILLARS.map((p, i) => (
                            <CinematicReveal key={i} delay={i * 0.1}>
                                <CopperGlow className="h-full">
                                    <div className="velvet-card p-6 h-full flex gap-5">
                                        <div className="shrink-0 w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center border border-copper/20">
                                            <p.icon className="w-5 h-5 text-copper" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl text-parchment-light mb-2 font-heading">{p.title}</h3>
                                            <p className="text-sage text-sm leading-relaxed">{p.description}</p>
                                        </div>
                                    </div>
                                </CopperGlow>
                            </CinematicReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section id="process" className="section-padding">
                <div className="container max-w-4xl">
                    <CinematicReveal><h2 className="text-center mb-16">Our Process</h2></CinematicReveal>
                    <div className="space-y-8">
                        {PROCESS.map((p, i) => (
                            <CinematicReveal key={i} delay={i * 0.1}>
                                <div className="flex gap-6 md:gap-10 group">
                                    <span className="text-4xl md:text-5xl font-heading text-copper/30 group-hover:text-copper transition-colors shrink-0">{p.step}</span>
                                    <div className="border-l border-copper/20 pl-6 md:pl-10 pb-8">
                                        <h3 className="text-xl text-parchment-light mb-2">{p.title}</h3>
                                        <p className="text-sage leading-relaxed">{p.description}</p>
                                    </div>
                                </div>
                            </CinematicReveal>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
