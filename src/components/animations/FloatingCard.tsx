"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface FloatingCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    offsetY?: number;
}

export function FloatingCard({
    children,
    className = "",
    delay = 0,
    offsetY = 50,
}: FloatingCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-offsetY, offsetY]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.16, 1, 0.3, 1]
            }}
            className={className}
            style={{ y }}
        >
            <div className="velvet-card bg-opacity-90 backdrop-blur-md">
                {children}
            </div>
        </motion.div>
    );
}
