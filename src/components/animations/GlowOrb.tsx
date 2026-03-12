"use client";

import { useEffect, useState } from "react";

interface GlowOrbProps {
    color?: "copper" | "forest";
    size?: number;
    blur?: number;
    opacity?: number;
    className?: string;
    delay?: number;
}

export function GlowOrb({
    color = "copper",
    size = 400,
    blur = 100,
    opacity = 0.15,
    className = "",
    delay = 0,
}: GlowOrbProps) {
    const bgColor = color === "copper" ? "var(--color-copper)" : "var(--color-forest-light)";
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    // Reduce blur on mobile for GPU performance
    const effectiveBlur = isMobile ? Math.min(blur, 60) : blur;
    const effectiveSize = isMobile ? Math.min(size, 300) : size;

    return (
        <div
            className={`absolute rounded-full pointer-events-none glow-orb-float ${className}`}
            style={{
                width: effectiveSize,
                height: effectiveSize,
                background: `radial-gradient(circle, ${bgColor} 0%, transparent 70%)`,
                filter: `blur(${effectiveBlur}px)`,
                opacity: opacity,
                zIndex: 0,
                willChange: "transform",
                animationDelay: `${delay}s`,
            }}
        />
    );
}
