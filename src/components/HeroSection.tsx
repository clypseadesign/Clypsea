"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useDeviceType } from "@/hooks/useDeviceType";

const anim = {
    container: {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 2.4 } },
    },
    item: {
        hidden: { y: 40, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
    },
};

const gradient = "bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent";

export default function HeroSection() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
    const bgOp = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const device = useDeviceType();

    /* ─────────────────────────────────────────
       DESKTOP  (≥ 1024 px)
    ───────────────────────────────────────── */
    if (device === "desktop") return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full overflow-hidden px-[5vw] pt-40 pb-24 flex items-end"
        >
            {/* Ambient background */}
            <motion.div style={{ y: bgY, opacity: bgOp }} className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[55vw] h-[55vw] bg-accent/6 rounded-full blur-[160px]" />
                <div className="absolute bottom-0 left-[-10%] w-[45vw] h-[45vw] bg-[#a920c8]/6 rounded-full blur-[140px]" />
            </motion.div>

            {/* 2-column: text 55% | visual 45% */}
            <div className="relative z-10 w-full grid grid-cols-[55fr_45fr] gap-16 items-end">

                {/* LEFT — content */}
                <motion.div variants={anim.container} initial="hidden" animate="show">
                    <motion.p variants={anim.item} className="text-[10px] tracking-[0.25em] text-lime-400 uppercase font-bold mb-5">
                        Clypsea — Creative Digital Studio
                    </motion.p>

                    <h1 className="text-[clamp(2.5rem,5vw,5.5rem)] leading-[1.05] font-extrabold tracking-tight uppercase font-heading">
                        <motion.span variants={anim.item} className="block">We Create Digital</motion.span>
                        <motion.span variants={anim.item} className={`block pb-1 ${gradient}`}>Experiences</motion.span>
                        <motion.span variants={anim.item} className="block">That Move People.</motion.span>
                    </h1>

                    <motion.p variants={anim.item} className="mt-6 text-base text-white/70 leading-relaxed max-w-lg">
                        Blending design, marketing, and technology to build brands that stand out and scale fast.
                    </motion.p>

                    <motion.p variants={anim.item} className="mt-3 text-[10px] tracking-[0.3em] uppercase text-white/35 font-semibold">
                        Design. Strategy. Growth. Technology.
                    </motion.p>

                    <motion.div variants={anim.item} className="mt-8 flex gap-4">
                        <a href="#work" className="text-[10px] tracking-[0.2em] uppercase font-black bg-foreground text-background px-7 py-3.5 rounded-full hover:bg-accent transition-colors duration-300">
                            View Work
                        </a>
                        <a href="#contact" className="text-[10px] tracking-[0.2em] uppercase font-black border border-white/20 px-7 py-3.5 rounded-full hover:border-accent hover:text-accent transition-all duration-300">
                            Start Project
                        </a>
                    </motion.div>
                </motion.div>

                {/* RIGHT — animated orbs */}
                <div className="relative flex items-center justify-center h-[52vh] pointer-events-none">
                    <motion.div
                        animate={{ y: [0, -20, 0], scale: [1, 1.06, 1] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute w-[65%] h-[65%] rounded-full bg-gradient-to-br from-accent/20 via-[#fa2472]/12 to-[#7a15df]/18 blur-[70px]"
                    />
                    <motion.div
                        animate={{ y: [0, 18, 0], scale: [1, 0.94, 1] }}
                        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute w-[38%] h-[38%] rounded-full bg-gradient-to-tr from-[#b6e949]/12 to-[#fa2472]/10 blur-[50px] translate-y-[25%]"
                    />
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[55%] h-[55%] rounded-full border border-white/6"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[36%] h-[36%] rounded-full border border-accent/10"
                    />
                </div>
            </div>

            {/* Watermark C */}
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 0.04 }} transition={{ delay: 3.5, duration: 2 }}
                aria-hidden
                className="absolute bottom-0 right-0 text-[28vw] font-black font-heading leading-none select-none pointer-events-none text-foreground"
            >C</motion.div>
        </section>
    );

    /* ─────────────────────────────────────────
       TABLET  (768 – 1023 px)
    ───────────────────────────────────────── */
    if (device === "tablet") return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full overflow-hidden px-8 pt-36 pb-20 flex flex-col justify-end"
        >
            <motion.div style={{ y: bgY, opacity: bgOp }} className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[-5%] right-[-10%] w-[65vw] h-[65vw] bg-accent/7 rounded-full blur-[120px]" />
            </motion.div>

            <motion.div variants={anim.container} initial="hidden" animate="show" className="relative z-10">
                <motion.p variants={anim.item} className="text-[10px] tracking-[0.25em] text-lime-400 uppercase font-bold mb-5">
                    Clypsea — Creative Digital Studio
                </motion.p>

                <h1 className="text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.05] font-extrabold tracking-tight uppercase font-heading">
                    <motion.span variants={anim.item} className="block">We Create Digital</motion.span>
                    <motion.span variants={anim.item} className={`block pb-1 ${gradient}`}>Experiences</motion.span>
                    <motion.span variants={anim.item} className="block">That Move People.</motion.span>
                </h1>

                <motion.p variants={anim.item} className="mt-6 text-sm text-white/70 leading-relaxed max-w-md">
                    Design, marketing, and technology — for brands that scale fast.
                </motion.p>

                <motion.div variants={anim.item} className="mt-8 flex gap-4">
                    <a href="#work" className="text-[10px] tracking-[0.2em] uppercase font-black bg-foreground text-background px-6 py-3 rounded-full hover:bg-accent transition-colors">
                        View Work
                    </a>
                    <a href="#contact" className="text-[10px] tracking-[0.2em] uppercase font-black border border-white/20 px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-all">
                        Start Project
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );

    /* ─────────────────────────────────────────
       MOBILE  (< 768 px)
    ───────────────────────────────────────── */
    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full overflow-hidden px-5 pt-24 pb-14 flex flex-col justify-end"
        >
            <motion.div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-[-20%] w-[80vw] h-[80vw] bg-accent/7 rounded-full blur-[90px]" />
            </motion.div>

            <motion.div variants={anim.container} initial="hidden" animate="show" className="relative z-10">
                <motion.p variants={anim.item} className="text-[9px] tracking-[0.25em] text-lime-400 uppercase font-bold mb-4">
                    Clypsea — Creative Studio
                </motion.p>

                {/* Fixed px size — safe on all phones (390px+) */}
                <h1 className="text-[2rem] leading-[1.1] font-extrabold tracking-tight uppercase font-heading">
                    <motion.span variants={anim.item} className="block">We Create</motion.span>
                    <motion.span variants={anim.item} className="block">Digital</motion.span>
                    <motion.span variants={anim.item} className={`block pb-1 ${gradient}`}>Experiences</motion.span>
                    <motion.span variants={anim.item} className="block">That Move</motion.span>
                    <motion.span variants={anim.item} className="block">People.</motion.span>
                </h1>

                <motion.p variants={anim.item} className="mt-5 text-sm text-white/70 leading-relaxed max-w-xs">
                    Design, marketing &amp; technology — for brands that scale.
                </motion.p>

                <motion.div variants={anim.item} className="mt-7 flex flex-col gap-3">
                    <a href="#work" className="text-[10px] tracking-[0.2em] uppercase font-black bg-foreground text-background px-6 py-3.5 rounded-full hover:bg-accent transition-colors text-center">
                        View Work
                    </a>
                    <a href="#contact" className="text-[10px] tracking-[0.2em] uppercase font-black border border-white/20 px-6 py-3.5 rounded-full hover:border-accent hover:text-accent transition-all text-center">
                        Start Project
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
