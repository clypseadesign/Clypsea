"use client";

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const dotX = useMotionValue(-100);
    const dotY = useMotionValue(-100);

    const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    const isHovering = useRef(false);
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            dotX.set(e.clientX - 3);
            dotY.set(e.clientY - 3);
        };

        const handleEnter = () => {
            if (cursorRef.current) cursorRef.current.style.transform += ' scale(2)';
        };
        const handleLeave = () => {
            if (cursorRef.current) cursorRef.current.style.transform = cursorRef.current.style.transform.replace(' scale(2)', '');
        };

        const addListeners = () => {
            document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
                el.addEventListener('mouseenter', handleEnter);
                el.addEventListener('mouseleave', handleLeave);
            });
        };

        window.addEventListener('mousemove', moveCursor);
        addListeners();

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <>
            {/* Outer ring */}
            <motion.div
                ref={cursorRef}
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent/60 pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
                style={{ x: springX, y: springY, transition: 'transform 0.15s ease' }}
            />
            {/* Dot */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-accent pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
                style={{ x: dotX, y: dotY }}
            />
        </>
    );
}
