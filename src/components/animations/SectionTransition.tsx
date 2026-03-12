"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionTransitionProps {
    children: ReactNode;
    className?: string;
}

export function SectionTransition({ children, className = "" }: SectionTransitionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1], // Cinematic ease
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
