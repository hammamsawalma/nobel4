"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CinematicRevealProps {
    children: ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "scale" | "rotate" | "none";
    className?: string;
}

export function CinematicReveal({
    children,
    delay = 0,
    direction = "up",
    className = "",
}: CinematicRevealProps) {
    const transformStyles = {
        up: { y: 40, x: 0, scale: 1, rotate: 0 },
        down: { y: -40, x: 0, scale: 1, rotate: 0 },
        left: { x: 40, y: 0, scale: 1, rotate: 0 },
        right: { x: -40, y: 0, scale: 1, rotate: 0 },
        scale: { x: 0, y: 0, scale: 0.9, rotate: 0 },
        rotate: { x: 0, y: 40, scale: 1, rotate: 5 },
        none: { x: 0, y: 0, scale: 1, rotate: 0 },
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...transformStyles[direction]
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                rotate: 0
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.16, 1, 0.3, 1], // cinematic ease curve
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
