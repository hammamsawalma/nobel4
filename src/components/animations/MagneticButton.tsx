"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef, useState, useEffect } from "react";

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    href?: string;
}

export function MagneticButton({
    children,
    className = "",
    onClick,
    type = "button",
    href,
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        // Only apply magnetic effect on desktop
        setIsDesktop(window.innerWidth > 768 && window.matchMedia("(pointer: fine)").matches);
    }, []);

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current || !isDesktop) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const handleMouseEnter = () => setIsHovered(true);

    const handleMouseLeave = () => {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
    };

    const Component = href ? motion.a : motion.button;
    const props = href ? { href, className } : { type, onClick, className };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative inline-block ${className}`}
        >
            <Component
                {...(props as any)}
                animate={{ x: position.x, y: position.y }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            >
                <motion.span
                    className="inline-block relative z-10"
                    animate={{ x: position.x * 0.3, y: position.y * 0.3 }}
                    transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                >
                    {children}
                </motion.span>
            </Component>
        </div>
    );
}
