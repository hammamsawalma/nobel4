"use client";

import { useState, useMemo } from "react";
import { CinematicReveal } from "@/components/animations/CinematicReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Area,
    AreaChart,
} from "recharts";

function formatCurrency(value: number): string {
    if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
    if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`;
    return `$${value.toFixed(0)}`;
}

export function TrajectoryCalculator() {
    const [initial, setInitial] = useState(500000);
    const [monthly, setMonthly] = useState(5000);
    const [rate, setRate] = useState(7);
    const [years, setYears] = useState(20);

    const data = useMemo(() => {
        const points = [];
        let balance = initial;
        const monthlyRate = rate / 100 / 12;

        for (let year = 0; year <= years; year++) {
            points.push({
                year: `Year ${year}`,
                value: Math.round(balance),
            });
            for (let m = 0; m < 12; m++) {
                balance = (balance + monthly) * (1 + monthlyRate);
            }
        }
        return points;
    }, [initial, monthly, rate, years]);

    const finalValue = data[data.length - 1]?.value || 0;
    const totalContributed = initial + monthly * 12 * years;
    const growthMultiple = totalContributed > 0 ? (finalValue / totalContributed).toFixed(1) : "0";

    return (
        <section className="section-padding relative overflow-hidden bg-forest-dark">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-16">
                    <CinematicReveal>
                        <span className="text-copper tracking-widest uppercase text-sm font-medium mb-4 block">
                            Projection Tool
                        </span>
                    </CinematicReveal>
                    <CinematicReveal delay={0.1}>
                        <h2 className="mb-4">Wealth Trajectory Calculator</h2>
                    </CinematicReveal>
                    <CinematicReveal delay={0.2}>
                        <p className="text-sage max-w-lg mx-auto">
                            Illustrative projection based on compound growth. Past performance
                            is not indicative of future results.
                        </p>
                    </CinematicReveal>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Controls */}
                    <CinematicReveal delay={0.3}>
                        <div className="velvet-card p-6 space-y-6">
                            <div>
                                <label className="text-copper text-xs tracking-widest uppercase mb-2 block">
                                    Initial Investment
                                </label>
                                <input
                                    type="range"
                                    min={100000}
                                    max={5000000}
                                    step={50000}
                                    value={initial}
                                    onChange={(e) => setInitial(Number(e.target.value))}
                                    className="w-full range-slider"
                                />
                                <span className="text-parchment-light text-lg font-heading">
                                    {formatCurrency(initial)}
                                </span>
                            </div>

                            <div>
                                <label className="text-copper text-xs tracking-widest uppercase mb-2 block">
                                    Monthly Contribution
                                </label>
                                <input
                                    type="range"
                                    min={0}
                                    max={50000}
                                    step={500}
                                    value={monthly}
                                    onChange={(e) => setMonthly(Number(e.target.value))}
                                    className="w-full range-slider"
                                />
                                <span className="text-parchment-light text-lg font-heading">
                                    {formatCurrency(monthly)}
                                </span>
                            </div>

                            <div>
                                <label className="text-copper text-xs tracking-widest uppercase mb-2 block">
                                    Expected Annual Return
                                </label>
                                <input
                                    type="range"
                                    min={2}
                                    max={15}
                                    step={0.5}
                                    value={rate}
                                    onChange={(e) => setRate(Number(e.target.value))}
                                    className="w-full range-slider"
                                />
                                <span className="text-parchment-light text-lg font-heading">
                                    {rate}%
                                </span>
                            </div>

                            <div>
                                <label className="text-copper text-xs tracking-widest uppercase mb-2 block">
                                    Time Horizon
                                </label>
                                <input
                                    type="range"
                                    min={5}
                                    max={40}
                                    step={1}
                                    value={years}
                                    onChange={(e) => setYears(Number(e.target.value))}
                                    className="w-full range-slider"
                                />
                                <span className="text-parchment-light text-lg font-heading">
                                    {years} years
                                </span>
                            </div>

                            {/* Summary Stats */}
                            <div className="border-t border-copper/20 pt-4 space-y-3 mt-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-sage text-sm">Total Contributed</span>
                                    <span className="text-parchment-light font-heading">
                                        <AnimatedCounter
                                            value={totalContributed / 1000}
                                            prefix="$"
                                            suffix="K"
                                            decimals={0}
                                        />
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sage text-sm">Projected Value</span>
                                    <span className="text-copper font-heading text-lg">
                                        <AnimatedCounter
                                            value={finalValue / 1000000}
                                            prefix="$"
                                            suffix="M"
                                            decimals={2}
                                        />
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sage text-sm">Growth Multiple</span>
                                    <span className="text-copper font-heading">
                                        <AnimatedCounter
                                            value={Number(growthMultiple)}
                                            suffix="×"
                                            decimals={1}
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </CinematicReveal>

                    {/* Chart */}
                    <CinematicReveal delay={0.4} className="lg:col-span-2">
                        <div className="velvet-card p-6 h-full flex items-center">
                            <ResponsiveContainer width="100%" height={380}>
                                <AreaChart data={data}>
                                    <defs>
                                        <linearGradient id="copperGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#B07D4B" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#B07D4B" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#1A3D2B" />
                                    <XAxis
                                        dataKey="year"
                                        tick={{ fill: "#6B7C6E", fontSize: 11 }}
                                        axisLine={{ stroke: "#1A3D2B" }}
                                        interval={Math.floor(years / 5)}
                                    />
                                    <YAxis
                                        tick={{ fill: "#6B7C6E", fontSize: 11 }}
                                        axisLine={{ stroke: "#1A3D2B" }}
                                        tickFormatter={(v) => formatCurrency(v)}
                                        width={70}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "#0D2818",
                                            border: "1px solid rgba(176,125,75,0.3)",
                                            borderRadius: "4px",
                                            color: "#F2EBD9",
                                        }}
                                        formatter={(v) => [formatCurrency(Number(v)), "Value"]}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#B07D4B"
                                        strokeWidth={2}
                                        fill="url(#copperGrad)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CinematicReveal>
                </div>

                {/* Post-Calculation CTA */}
                <CinematicReveal delay={0.5} className="mt-12 max-w-6xl mx-auto">
                    <div className="relative rounded-[16px] overflow-hidden border border-copper/20 bg-forest-light/60 backdrop-blur-sm p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Left shimmer line */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/40 to-transparent" />

                        <div className="text-center md:text-left">
                            <p className="text-copper text-xs tracking-widest uppercase mb-2">
                                {Number(growthMultiple) >= 3
                                    ? "Exceptional Growth Potential"
                                    : Number(growthMultiple) >= 2
                                    ? "Strong Wealth Trajectory"
                                    : "Steady Capital Building"}
                            </p>
                            <p className="text-parchment-light text-lg font-heading">
                                Your projection shows a{" "}
                                <span className="text-copper">{growthMultiple}×</span> growth multiple over{" "}
                                <span className="text-copper">{years} years</span>.
                            </p>
                            <p className="text-sage text-sm mt-1">
                                Discuss how Continental Heritage can optimise this trajectory for your family.
                            </p>
                        </div>

                        <a
                            href="/contact"
                            className="btn btn-glow shrink-0 text-sm tracking-wider px-8 py-3 whitespace-nowrap"
                        >
                            Discuss With an Advisor
                        </a>

                        {/* Bottom shimmer line */}
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />
                    </div>
                </CinematicReveal>

            </div>
        </section>
    );
}
