"use client";

import { motion } from "framer-motion";

interface StaggeredBlurTextProps {
    text: string;
    className?: string;
    delay?: number;
}

export function StaggeredBlurText({
    text,
    className = "",
    delay = 0,
}: StaggeredBlurTextProps) {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: delay },
        },
    };

    const item = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(10px)"
        },
        show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as const,
            },
        },
    };

    return (
        <motion.span
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`inline-block ${className}`}
        >
            {words.map((word, i) => (
                <motion.span key={i} variants={item} className="inline-block mr-[0.25em]">
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
}
