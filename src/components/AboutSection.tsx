"use client";

import { motion } from "framer-motion";
import { useDeviceType } from "@/hooks/useDeviceType";

function DesktopAbout() {
    return (
        <section id="about" className="py-32 px-16 bg-surface">
            <div className="flex gap-20 items-start">
                <div className="w-5/12">
                    <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-[clamp(2.5rem,5vw,5rem)] font-black uppercase font-heading leading-[1] mb-0">
                        We Don't Just Design.<br />
                        <span className="bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent">We Build Momentum.</span>
                    </motion.h2>
                </div>
                <div className="w-7/12 pt-4">
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl text-foreground/70 leading-relaxed mb-8">
                        Clypsea is a multi-service creative agency built for modern brands. We combine strategy, design, and digital marketing to create powerful online experiences.
                    </motion.p>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.35 }} className="text-xl text-foreground/70 leading-relaxed mb-16">
                        We believe creativity should not just look good — it should work. Every project we take is built with purpose, clarity, and measurable growth.
                    </motion.p>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }} className="flex flex-col gap-3 font-heading font-black text-2xl uppercase tracking-wide">
                        <p className="border-b border-white/10 pb-3 hover:text-accent transition-colors cursor-default">We design boldly.</p>
                        <p className="border-b border-white/10 pb-3 hover:text-accent transition-colors cursor-default">We build smart.</p>
                        <p className="text-accent">We grow brands.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function TabletAbout() {
    return (
        <section id="about" className="py-20 px-10 bg-surface">
            <h2 className="text-[clamp(2.2rem,6vw,4rem)] font-black uppercase font-heading leading-[1.05] mb-10">
                We Don't Just Design.<br /><span className="bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent">We Build Momentum.</span>
            </h2>
            <div className="grid grid-cols-2 gap-8 text-base text-foreground/70 leading-relaxed">
                <p>Clypsea is a multi-service creative agency built for modern brands. We combine strategy, design, and digital marketing to create powerful online experiences.</p>
                <div className="flex flex-col gap-3 font-heading font-black text-xl uppercase">
                    <p className="border-b border-white/10 pb-3">We design boldly.</p>
                    <p className="border-b border-white/10 pb-3">We build smart.</p>
                    <p className="text-accent">We grow brands.</p>
                </div>
            </div>
        </section>
    );
}

function MobileAbout() {
    return (
        <section id="about" className="py-16 px-5 bg-surface">
            <h2 className="text-[clamp(1.9rem,9vw,3rem)] font-black uppercase font-heading leading-[1.05] mb-6">
                We Build <span className="bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent">Momentum.</span>
            </h2>
            <p className="text-sm text-foreground/65 leading-relaxed mb-8">Creative agency for modern brands. Strategy, design, and marketing — all in one place.</p>
            <div className="flex flex-col gap-2 font-heading font-black text-lg uppercase">
                <p className="border-b border-white/10 pb-2">We design boldly.</p>
                <p className="border-b border-white/10 pb-2">We build smart.</p>
                <p className="text-accent py-1">We grow brands.</p>
            </div>
        </section>
    );
}

export default function AboutSection() {
    const device = useDeviceType();
    if (device === 'desktop') return <DesktopAbout />;
    if (device === 'tablet') return <TabletAbout />;
    return <MobileAbout />;
}
