"use client";

import { motion } from "framer-motion";

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
    
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: opacity, scale: 1 }}
            transition={{ duration: 2, delay }}
            className={`absolute rounded-full pointer-events-none ${className}`}
            style={{
                width: size,
                height: size,
                background: `radial-gradient(circle, ${bgColor} 0%, transparent 70%)`,
                filter: `blur(${blur}px)`,
                zIndex: 0,
            }}
        >
            <motion.div 
                className="w-full h-full rounded-full"
                animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </motion.div>
    );
}
