"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
    value: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
    className?: string;
    decimals?: number;
}

export function AnimatedCounter({
    value,
    prefix = "",
    suffix = "",
    duration = 2,
    className = "",
    decimals = 0,
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const spring = useSpring(0, {
        duration: duration * 1000,
        bounce: 0,
    });

    const display = useTransform(spring, (current) => {
        return `${prefix}${current.toFixed(decimals)}${suffix}`;
    });

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, spring, value]);

    return <motion.span ref={ref} className={className}>{display}</motion.span>;
}
