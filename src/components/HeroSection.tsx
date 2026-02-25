"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useDeviceType } from "@/hooks/useDeviceType";

const anim = {
    container: { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 2.4 } } },
    item: { hidden: { y: 50, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const } } },
};

export default function HeroSection() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const bgO = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const device = useDeviceType();

    // Decorative blobs — same for all
    const blobs = (
        <motion.div style={{ y: bgY, opacity: bgO }} className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-accent/8 rounded-full blur-[140px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#a920c8]/8 rounded-full blur-[140px]" />
        </motion.div>
    );

    /* ── DESKTOP ──────────────────────────────────── */
    if (device === 'desktop') return (
        <section ref={ref} className="relative min-h-screen overflow-hidden">
            {blobs}
            {/* Content anchored bottom-left, full-width padding */}
            <div className="relative z-10 px-20 h-screen flex flex-col justify-end pb-24">
                <motion.div variants={anim.container} initial="hidden" animate="show">
                    <motion.p variants={anim.item} className="text-xs font-black tracking-[0.4em] text-accent uppercase mb-8">
                        Clypsea — Creative Digital Studio
                    </motion.p>
                    <h1 className="max-w-5xl font-black uppercase font-heading leading-[0.9] tracking-[-0.01em] mb-8">
                        <motion.span variants={anim.item} className="block text-[clamp(4rem,8vw,8.5rem)]">We Create</motion.span>
                        <motion.span variants={anim.item} className="block text-[clamp(4rem,8vw,8.5rem)] bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent pb-3">
                            Digital Experiences
                        </motion.span>
                        <motion.span variants={anim.item} className="block text-[clamp(4rem,8vw,8.5rem)]">That Move.</motion.span>
                    </h1>
                    <div className="flex items-end justify-between gap-16 max-w-6xl">
                        <motion.p variants={anim.item} className="text-lg text-foreground/75 max-w-2xl leading-relaxed">
                            Blending design, marketing, and technology to build brands that stand out, connect with audiences, and scale fast.
                        </motion.p>
                        <motion.div variants={anim.item} className="flex gap-4 flex-shrink-0">
                            <a href="#work" data-cursor-hover className="text-xs font-black tracking-[0.2em] uppercase bg-foreground text-background px-8 py-4 rounded-full hover:bg-accent transition-colors duration-300">
                                View Work
                            </a>
                            <a href="#contact" data-cursor-hover className="text-xs font-black tracking-[0.2em] uppercase border border-foreground/30 px-8 py-4 rounded-full hover:border-accent hover:text-accent transition-all duration-300">
                                Start Project
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            {/* Large decorative watermark */}
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 0.03 }} transition={{ delay: 3, duration: 1.5 }}
                aria-hidden className="absolute bottom-0 right-0 pointer-events-none select-none font-black font-heading leading-none text-foreground text-[30vw] translate-y-[15%]"
            >C</motion.div>
        </section>
    );

    /* ── TABLET ──────────────────────────────────── */
    if (device === 'tablet') return (
        <section ref={ref} className="relative min-h-screen overflow-hidden">
            {blobs}
            <div className="relative z-10 px-10 h-screen flex flex-col justify-end pb-20">
                <motion.div variants={anim.container} initial="hidden" animate="show">
                    <motion.p variants={anim.item} className="text-xs font-black tracking-[0.35em] text-accent uppercase mb-6">
                        Creative Digital Studio
                    </motion.p>
                    <h1 className="font-black uppercase font-heading leading-[0.92] mb-8">
                        <motion.span variants={anim.item} className="block text-[clamp(3rem,7vw,5.5rem)]">We Create</motion.span>
                        <motion.span variants={anim.item} className="block text-[clamp(3rem,7vw,5.5rem)] bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent pb-2">Digital.</motion.span>
                        <motion.span variants={anim.item} className="block text-[clamp(3rem,7vw,5.5rem)]">Experiences.</motion.span>
                    </h1>
                    <motion.p variants={anim.item} className="text-base text-foreground/75 leading-relaxed max-w-md mb-8">
                        Design, marketing and technology — for brands that scale.
                    </motion.p>
                    <motion.div variants={anim.item} className="flex gap-4">
                        <a href="#work" className="text-xs font-black tracking-[0.2em] uppercase bg-foreground text-background px-7 py-3.5 rounded-full hover:bg-accent transition-colors">View Work</a>
                        <a href="#contact" className="text-xs font-black tracking-[0.2em] uppercase border border-foreground/30 px-7 py-3.5 rounded-full hover:border-accent hover:text-accent transition-all">Start Project</a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );

    /* ── MOBILE ──────────────────────────────────── */
    return (
        <section ref={ref} className="relative min-h-screen overflow-hidden px-6 pt-28 pb-14 flex flex-col justify-end">
            {blobs}
            <motion.div variants={anim.container} initial="hidden" animate="show" className="relative z-10 flex flex-col gap-5">
                <motion.p variants={anim.item} className="text-[10px] font-black tracking-[0.4em] text-accent uppercase">Clypsea — Creative Studio</motion.p>
                <h1 className="font-black uppercase font-heading leading-[0.95]">
                    <motion.span variants={anim.item} className="block text-[clamp(2.8rem,12vw,4rem)]">We Create</motion.span>
                    <motion.span variants={anim.item} className="block text-[clamp(2.8rem,12vw,4rem)] bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent pb-1">Digital</motion.span>
                    <motion.span variants={anim.item} className="block text-[clamp(2.8rem,12vw,4rem)]">Experiences.</motion.span>
                </h1>
                <motion.p variants={anim.item} className="text-base text-foreground/75 leading-relaxed max-w-[300px]">
                    Design, marketing & technology — for brands that scale.
                </motion.p>
                <motion.div variants={anim.item} className="flex flex-col gap-3">
                    <a href="#work" className="text-xs font-black tracking-[0.2em] uppercase bg-foreground text-background px-8 py-4 rounded-full hover:bg-accent transition-colors">View Work</a>
                    <a href="#contact" className="text-xs font-black tracking-[0.2em] uppercase border border-foreground/30 px-8 py-4 rounded-full hover:border-accent hover:text-accent transition-all">Start Project</a>
                </motion.div>
            </motion.div>
        </section>
    );
}
