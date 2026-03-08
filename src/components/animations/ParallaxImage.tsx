"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ParallaxImageProps {
    src: string;
    alt: string;
    className?: string;
    imageClassName?: string;
    speed?: number;
    priority?: boolean;
}

export function ParallaxImage({
    src,
    alt,
    className = "",
    imageClassName = "",
    speed = 0.5,
    priority = false,
}: ParallaxImageProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Convert scroll progress (0 to 1) to y displacement
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.div
                className="absolute inset-0 z-0 h-[120%] -top-[10%]"
                style={{ y: `calc(${speed} * ${y})` as any }}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    priority={priority}
                    className={`object-cover ${imageClassName}`}
                    sizes="(max-width: 768px) 100vw, 100vw"
                />
            </motion.div>
        </div>
    );
}
