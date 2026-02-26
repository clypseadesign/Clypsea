"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useDeviceType } from "@/hooks/useDeviceType";

const anim = {
    container: {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 2.4 } },
    },
    item: {
        hidden: { y: 60, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } },
    },
};

export default function HeroSection() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const device = useDeviceType();

    /* ─── DESKTOP ─── */
    if (device === 'desktop') return (
        <section ref={containerRef} className="relative min-h-screen overflow-hidden w-full px-[5vw] pt-40 pb-24 flex flex-col justify-end">
            {/* Background blobs */}
            <motion.div style={{ y: bgY, opacity: bgOpacity }} className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-accent/8 rounded-full blur-[130px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#a920c8]/8 rounded-full blur-[130px]" />
            </motion.div>

            {/* Right-side animated visual */}
            <div className="absolute right-[5vw] top-1/2 -translate-y-1/2 pointer-events-none z-0 flex flex-col items-center gap-6">
                <motion.div
                    animate={{ y: [0, -24, 0], scale: [1, 1.04, 1] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[28vw] h-[28vw] max-w-[420px] max-h-[420px] rounded-full bg-gradient-to-br from-accent/15 via-[#fa2472]/10 to-[#7a15df]/15 blur-[60px]"
                />
                <motion.div
                    animate={{ y: [0, 18, 0], scale: [1, 0.96, 1] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="w-[12vw] h-[12vw] max-w-[180px] max-h-[180px] rounded-full bg-gradient-to-tr from-[#b6e949]/10 to-[#fa2472]/10 blur-[40px] -mt-[8vw]"
                />
                {/* Floating ring accent */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[22vw] h-[22vw] max-w-[340px] max-h-[340px] rounded-full border border-white/5"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[16vw] h-[16vw] max-w-[240px] max-h-[240px] rounded-full border border-accent/8"
                />
            </div>

            {/* Content */}
            <motion.div variants={anim.container} initial="hidden" animate="show" className="relative z-10">
                <motion.p variants={anim.item} className="text-xs tracking-[0.25em] text-lime-400 uppercase font-bold mb-6">
                    Clypsea — Creative Digital Studio
                </motion.p>
                <h1 className="text-[7.5vw] leading-[0.92] font-extrabold tracking-tight uppercase font-heading mb-0 max-w-[90%]">
                    <motion.span variants={anim.item} className="block">We Create Digital</motion.span>
                    <motion.span variants={anim.item} className="block bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent pb-2">
                        Experiences
                    </motion.span>
                    <motion.span variants={anim.item} className="block">That Move People.</motion.span>
                </h1>
                <motion.p variants={anim.item} className="max-w-xl text-lg text-white/70 leading-relaxed mt-8">
                    Blending design, marketing, and technology to build brands that stand out and scale fast.
                </motion.p>
                <motion.p
                    variants={anim.item}
                    className="mt-4 text-xs tracking-[0.3em] uppercase text-white/35 font-semibold"
                >
                    Design. Strategy. Growth. Technology.
                </motion.p>
                <motion.div variants={anim.item} className="mt-10 flex gap-6">
                    <a href="#work" data-cursor-hover className="text-xs tracking-[0.2em] uppercase font-black bg-foreground text-background px-8 py-4 rounded-full hover:bg-accent transition-colors duration-300">
                        View Work
                    </a>
                    <a href="#contact" data-cursor-hover className="text-xs tracking-[0.2em] uppercase font-black border border-white/20 px-8 py-4 rounded-full hover:border-accent hover:text-accent transition-all duration-300">
                        Start Project
                    </a>
                </motion.div>
            </motion.div>

            {/* Decorative watermark */}
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 0.05 }} transition={{ delay: 3, duration: 1.5 }}
                aria-hidden className="absolute bottom-0 right-0 text-[30vw] font-black font-heading leading-none select-none pointer-events-none text-foreground"
            >C</motion.div>
        </section>
    );

    /* ─── TABLET ─── */
    if (device === 'tablet') return (
        <section ref={containerRef} className="relative min-h-screen overflow-hidden w-full px-[6vw] pt-36 pb-24 flex flex-col justify-end">
            <motion.div style={{ y: bgY, opacity: bgOpacity }} className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-accent/8 rounded-full blur-[120px]" />
            </motion.div>
            <motion.div variants={anim.container} initial="hidden" animate="show" className="relative z-10">
                <motion.p variants={anim.item} className="text-xs tracking-[0.3em] text-accent uppercase font-bold mb-6">Creative Digital Studio</motion.p>
                <h1 className="max-w-6xl text-[clamp(3rem,7vw,5.5rem)] leading-[0.92] font-black tracking-tight uppercase font-heading">
                    <motion.span variants={anim.item} className="block">We Create Digital</motion.span>
                    <motion.span variants={anim.item} className="block bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent pb-1">
                        Experiences.
                    </motion.span>
                </h1>
                <motion.p variants={anim.item} className="max-w-2xl text-base text-foreground/75 leading-relaxed mt-8">
                    Design, marketing and technology to build brands that scale fast.
                </motion.p>
                <motion.div variants={anim.item} className="mt-10 flex gap-4">
                    <a href="#work" className="text-xs tracking-[0.2em] uppercase font-black bg-foreground text-background px-7 py-4 rounded-full hover:bg-accent transition-colors">View Work</a>
                    <a href="#contact" className="text-xs tracking-[0.2em] uppercase font-black border border-white/20 px-7 py-4 rounded-full hover:border-accent hover:text-accent transition-all">Start Project</a>
                </motion.div>
            </motion.div>
        </section>
    );

    /* ─── MOBILE ─── */
    return (
        <section ref={containerRef} className="relative min-h-screen overflow-hidden w-full px-5 pt-28 pb-20 flex flex-col justify-end">
            <motion.div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[5%] left-[-15%] w-[80vw] h-[80vw] bg-accent/6 rounded-full blur-[80px]" />
            </motion.div>
            <motion.div variants={anim.container} initial="hidden" animate="show" className="relative z-10 flex flex-col">
                <motion.p variants={anim.item} className="text-[10px] tracking-[0.4em] text-accent uppercase font-bold mb-5">Clypsea — Creative Studio</motion.p>
                <h1 className="max-w-6xl text-[clamp(2.2rem,10vw,3.8rem)] leading-[0.95] font-black tracking-tight uppercase font-heading">
                    <motion.span variants={anim.item} className="block">We Create</motion.span>
                    <motion.span variants={anim.item} className="block bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent pb-1">Digital</motion.span>
                    <motion.span variants={anim.item} className="block">Experiences.</motion.span>
                </h1>
                <motion.p variants={anim.item} className="max-w-2xl text-sm text-foreground/75 leading-relaxed mt-8">
                    Design, marketing &amp; technology — for brands that scale.
                </motion.p>
                <motion.div variants={anim.item} className="mt-10 flex flex-col gap-3">
                    <a href="#work" className="text-xs tracking-[0.2em] uppercase font-black bg-foreground text-background px-8 py-4 rounded-full hover:bg-accent transition-colors text-center">View Work</a>
                    <a href="#contact" className="text-xs tracking-[0.2em] uppercase font-black border border-white/20 px-8 py-4 rounded-full hover:border-accent hover:text-accent transition-all text-center">Start Project</a>
                </motion.div>
            </motion.div>
        </section>
    );
}
