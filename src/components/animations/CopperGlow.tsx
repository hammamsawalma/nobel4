"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CopperGlowProps {
    children: ReactNode;
    className?: string;
    intensity?: "light" | "medium" | "strong";
}

export function CopperGlow({
    children,
    className = "",
    intensity = "medium",
}: CopperGlowProps) {
    const glowValues = {
        light: "0px 4px 20px rgba(176, 125, 75, 0.15)",
        medium: "0px 8px 30px rgba(176, 125, 75, 0.25)",
        strong: "0px 12px 40px rgba(176, 125, 75, 0.4)",
    };

    return (
        <motion.div
            whileHover={{
                boxShadow: glowValues[intensity],
                y: -4,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`relative rounded-lg ${className}`}
        >
            {children}
        </motion.div>
    );
}
