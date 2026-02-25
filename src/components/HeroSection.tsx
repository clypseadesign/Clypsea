"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useDeviceType } from "@/hooks/useDeviceType";

export default function HeroSection() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
    const device = useDeviceType();

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 2.4 } },
    };
    const item = {
        hidden: { y: 80, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } },
    };

    /* ─── DESKTOP ─── Cinematic, layered, asymmetric */
    if (device === 'desktop') return (
        <section ref={containerRef} className="relative min-h-screen flex items-end pb-20 px-16 overflow-hidden">
            {/* Parallax background blobs */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[-15%] right-[-8%] w-[55vw] h-[55vw] bg-accent/8 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-15%] left-[-15%] w-[45vw] h-[45vw] bg-[#a920c8]/8 rounded-full blur-[140px]" />
            </motion.div>

            {/* EYEBROW — floats top-right */}
            <motion.p
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.5, duration: 0.8 }}
                className="absolute top-32 right-16 text-xs tracking-[0.4em] text-foreground/40 uppercase font-semibold rotate-90 origin-right"
            >
                Creative Digital Studio — Est. 2024
            </motion.p>

            {/* Main content — bottom-left */}
            <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 max-w-[900px]">
                <motion.div variants={item} className="overflow-hidden mb-4">
                    <p className="text-sm tracking-[0.35em] text-accent uppercase font-bold">Clypsea</p>
                </motion.div>
                <h1 className="text-[clamp(4rem,9vw,9rem)] leading-[0.9] font-black tracking-[-0.02em] uppercase font-heading">
                    <motion.div variants={item} className="overflow-hidden">
                        <span className="block">We Create</span>
                    </motion.div>
                    <motion.div variants={item} className="overflow-hidden">
                        <span className="block bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent">Digital</span>
                    </motion.div>
                    <motion.div variants={item} className="overflow-hidden">
                        <span className="block">Experiences.</span>
                    </motion.div>
                </h1>
                <motion.div variants={item} className="mt-12 flex items-end justify-between">
                    <p className="text-xl text-foreground/60 max-w-sm leading-relaxed">
                        Blending design, marketing, and technology to build brands that stand out and scale fast.
                    </p>
                    <div className="flex gap-5 ml-16">
                        <a href="#work" data-cursor-hover className="group flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-black bg-foreground text-background px-8 py-4 rounded-full hover:bg-accent transition-colors duration-300">
                            View Work
                        </a>
                        <a href="#contact" data-cursor-hover className="group flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-black border border-white/20 px-8 py-4 rounded-full hover:border-accent hover:text-accent transition-all duration-300">
                            Start Project
                        </a>
                    </div>
                </motion.div>
            </motion.div>

            {/* Large decorative number */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.03 }}
                transition={{ delay: 3, duration: 1.5 }}
                className="absolute bottom-0 right-0 text-[30vw] font-black font-heading leading-none select-none pointer-events-none text-foreground"
            >
                C
            </motion.div>
        </section>
    );

    /* ─── TABLET ─── Structured two-column */
    if (device === 'tablet') return (
        <section ref={containerRef} className="relative min-h-screen grid grid-cols-2 pt-28 pb-16 px-10 overflow-hidden">
            <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-accent/8 rounded-full blur-[120px]" />
            </motion.div>

            {/* Left: big headline */}
            <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 flex flex-col justify-end pb-4">
                <motion.p variants={item} className="text-xs tracking-[0.3em] text-accent uppercase font-bold mb-6">Creative Digital Studio</motion.p>
                <h1 className="text-[clamp(3.5rem,8vw,6rem)] leading-[0.92] font-black uppercase font-heading">
                    <motion.div variants={item}><span className="block">We</span></motion.div>
                    <motion.div variants={item}><span className="block">Create</span></motion.div>
                    <motion.div variants={item}>
                        <span className="block bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent">Digital.</span>
                    </motion.div>
                </h1>
            </motion.div>

            {/* Right: description + CTA */}
            <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 flex flex-col justify-end pb-4 pl-10">
                <motion.p variants={item} className="text-lg text-foreground/70 leading-relaxed mb-10 max-w-xs">
                    Blending design, marketing, and technology to build brands that scale fast.
                </motion.p>
                <motion.div variants={item} className="flex flex-col gap-4">
                    <a href="#work" className="flex items-center justify-center text-xs tracking-[0.2em] uppercase font-black bg-foreground text-background px-8 py-4 rounded-full hover:bg-accent transition-colors duration-300">
                        View Work
                    </a>
                    <a href="#contact" className="flex items-center justify-center text-xs tracking-[0.2em] uppercase font-black border border-white/20 px-8 py-4 rounded-full hover:border-accent hover:text-accent transition-all duration-300">
                        Start Project
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );

    /* ─── MOBILE ─── Bold, centered, impactful */
    return (
        <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center text-center pt-24 pb-12 px-5 overflow-hidden">
            <motion.div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[10%] left-[-20%] w-[80vw] h-[80vw] bg-accent/6 rounded-full blur-[80px]" />
                <div className="absolute bottom-[5%] right-[-20%] w-[70vw] h-[70vw] bg-[#a920c8]/6 rounded-full blur-[80px]" />
            </motion.div>

            <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 flex flex-col items-center gap-6">
                <motion.p variants={item} className="text-[10px] tracking-[0.4em] text-accent uppercase font-bold">Clypsea — Creative Studio</motion.p>
                <h1 className="text-[clamp(2.8rem,14vw,5rem)] leading-[0.95] font-black uppercase font-heading">
                    <motion.div variants={item}><span className="block">We Create</span></motion.div>
                    <motion.div variants={item}>
                        <span className="block bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent">Digital</span>
                    </motion.div>
                    <motion.div variants={item}><span className="block">Experiences.</span></motion.div>
                </h1>
                <motion.p variants={item} className="text-base text-foreground/60 leading-relaxed max-w-[280px]">
                    Design, marketing & technology — for brands that scale.
                </motion.p>
                <motion.div variants={item} className="flex flex-col gap-3 w-full">
                    <a href="#work" className="flex items-center justify-center text-xs tracking-[0.2em] uppercase font-black bg-foreground text-background px-8 py-4 rounded-full hover:bg-accent transition-colors">
                        View Work
                    </a>
                    <a href="#contact" className="flex items-center justify-center text-xs tracking-[0.2em] uppercase font-black border border-white/20 px-8 py-4 rounded-full hover:border-accent hover:text-accent transition-all">
                        Start Project
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
