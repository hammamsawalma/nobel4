import { Metadata } from "next";
import Image from "next/image";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { StaggeredBlurText } from "@/components/animations/StaggeredBlurText";
import { CopperGlow } from "@/components/animations/CopperGlow";
import { CTASection } from "@/components/sections/CTASection";
import { Sunset, Heart, Target, Wallet } from "lucide-react";

export const metadata: Metadata = {
    title: "Retirement Planning | Continental Heritage",
    description: "Constructing robust retirement frameworks that ensure financial independence with dignity and flexibility.",
};

const PILLARS = [
    { icon: Target, title: "Income Certainty", description: "Building diversified income streams from bonds, property, dividends, and annuities to ensure predictable cash flow throughout retirement." },
    { icon: Wallet, title: "Drawdown Strategy", description: "Optimal sequencing of asset drawdowns to minimise tax and maximise the longevity of your retirement capital." },
    { icon: Heart, title: "Healthcare Provisioning", description: "Funding strategies for private healthcare, aged care, and long-term support needs, including insurance and self-funding models." },
    { icon: Sunset, title: "Legacy Integration", description: "Ensuring your retirement strategy dovetails with your estate plan, so wealth transitions smoothly to the next generation." },
];

const PROCESS = [
    { step: "01", title: "Lifestyle Mapping", description: "Defining your desired retirement lifestyle and translating it into precise income and capital requirements." },
    { step: "02", title: "Gap Analysis", description: "Identifying shortfalls between your current trajectory and your retirement goals, with modelling for multiple scenarios." },
    { step: "03", title: "Strategy Build", description: "Constructing a portfolio specifically designed for the decumulation phase — balancing income, growth, and capital protection." },
    { step: "04", title: "Living Plan", description: "Annual reviews ensuring your plan adapts to health changes, market conditions, and evolving personal priorities." },
];

export default function RetirementPlanning() {
    return (
        <main className="min-h-screen bg-forest">
            <section className="relative h-[50vh] overflow-hidden">
                <Image src="/images/services/retirement.png" alt="Retirement Planning" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-forest/30" />
                <div className="absolute inset-0 flex items-end pb-16 md:pb-20">
                    <div className="container">
                        <CinematicReveal><span className="text-copper tracking-widest uppercase text-sm font-medium mb-4 block">Wealth Strategy</span></CinematicReveal>
                        <StaggeredBlurText text="Retirement Planning" className="text-4xl md:text-6xl lg:text-7xl mb-4 leading-[1.1]" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-forest rounded-t-[40px]" />
            </section>

            <section className="section-padding"><div className="container max-w-4xl">
                <CinematicReveal><p className="text-xl md:text-2xl text-sage leading-relaxed font-accent italic">&ldquo;Retirement is not a withdrawal from life — it is a transition to a chapter where your capital works as hard for you as you once worked for it.&rdquo;</p></CinematicReveal>
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
