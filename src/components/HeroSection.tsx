"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 2.4 },
        },
    };

    const item = {
        hidden: { y: 100, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } },
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center pt-20 pb-10 md:pt-24 md:pb-12 lg:pt-28 px-5 md:px-10 lg:px-16 overflow-hidden"
        >
            {/* Background blobs */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 pointer-events-none z-0"
            >
                <div className="absolute top-[-20%] right-[-10%] w-[60vw] md:w-[50vw] h-[60vw] md:h-[50vw] bg-accent/10 rounded-full blur-[100px] md:blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-20%] w-[50vw] md:w-[40vw] h-[50vw] md:h-[40vw] bg-[#a920c8]/10 rounded-full blur-[100px] md:blur-[120px]" />
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative z-10 w-full flex flex-col items-center text-center mt-8 md:mt-12"
            >
                <div className="mb-5 md:mb-8 overflow-hidden inline-block">
                    <motion.p variants={item} className="text-xs md:text-sm lg:text-base tracking-[0.25em] md:tracking-[0.3em] text-foreground/60 uppercase font-semibold">
                        Creative Digital Studio
                    </motion.p>
                </div>

                {/* Heading: significantly smaller on mobile to prevent overflow */}
                <h1 className="text-[clamp(2.2rem,8vw,5rem)] leading-[1.05] font-black tracking-tight uppercase font-heading max-w-xs sm:max-w-xl md:max-w-4xl lg:max-w-6xl mx-auto">
                    <motion.div variants={item}>We Create Digital</motion.div>
                    <motion.div variants={item} className="bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent pb-3 md:pb-4">
                        Experiences That Move.
                    </motion.div>
                </h1>

                <div className="mt-8 md:mt-12 lg:mt-16 flex flex-col items-center gap-6 md:gap-8">
                    <motion.p
                        variants={item}
                        className="max-w-xs sm:max-w-md md:max-w-2xl text-base md:text-lg lg:text-xl text-foreground/70 font-medium leading-relaxed px-2"
                    >
                        Clypsea is a creative digital studio blending design, marketing, and technology to build brands that stand out and scale fast.
                    </motion.p>

                    {/* Mobile: full-width stacked buttons; sm+: side by side */}
                    <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 md:gap-6 mt-2 md:mt-4 w-full sm:w-auto px-4 sm:px-0">
                        <a
                            href="#work"
                            className="flex items-center justify-center gap-4 text-xs md:text-sm tracking-[0.15em] md:tracking-[0.2em] uppercase font-bold bg-foreground text-background px-6 md:px-8 py-4 rounded-full hover:bg-accent transition-colors duration-300"
                        >
                            Explore Our Work
                        </a>
                        <a
                            href="#contact"
                            className="flex items-center justify-center gap-4 text-xs md:text-sm tracking-[0.15em] md:tracking-[0.2em] uppercase font-bold border border-white/20 px-6 md:px-8 py-4 rounded-full hover:border-accent hover:text-accent transition-colors duration-300"
                        >
                            Start a Project
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
