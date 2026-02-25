"use client";

import { motion } from "framer-motion";
import { useDeviceType } from "@/hooks/useDeviceType";

export default function AboutSection() {
    const device = useDeviceType();

    const heading = (
        <motion.h2
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="text-[clamp(2rem,5vw,4.5rem)] font-black uppercase font-heading leading-[1.05]"
        >
            We Don't Just Design.<br />
            <span className="bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent">We Build Momentum.</span>
        </motion.h2>
    );

    const manifesto = (
        <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col divide-y divide-white/10 font-heading font-black text-xl uppercase tracking-wide"
        >
            <p className="py-3 hover:text-accent transition-colors cursor-default">We design boldly.</p>
            <p className="py-3 hover:text-accent transition-colors cursor-default">We build smart.</p>
            <p className="py-3 text-accent">We grow brands.</p>
        </motion.div>
    );

    const body = (
        <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5 text-foreground/65 leading-relaxed"
        >
            <p>Clypsea is a multi-service creative agency built for modern brands. We combine strategy, design, and digital marketing to create powerful online experiences.</p>
            <p>Every project is built with purpose, clarity, and measurable growth in mind.</p>
        </motion.div>
    );

    if (device === 'desktop') return (
        <section id="about" className="py-20 lg:py-32 bg-surface">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 gap-16 items-start">
                    <div className="space-y-10">{heading}{body}</div>
                    <div className="space-y-8 pt-2">
                        <p className="text-xl text-foreground/50 leading-relaxed">
                            We believe creativity should not just look good — it should work.
                        </p>
                        {manifesto}
                    </div>
                </div>
            </div>
        </section>
    );

    if (device === 'tablet') return (
        <section id="about" className="py-20 bg-surface">
            <div className="max-w-3xl mx-auto px-8 space-y-10">
                {heading}
                <div className="grid grid-cols-2 gap-8 items-start">
                    <div className="text-base text-foreground/65 leading-relaxed space-y-4">{body}</div>
                    {manifesto}
                </div>
            </div>
        </section>
    );

    return (
        <section id="about" className="py-16 bg-surface">
            <div className="max-w-lg mx-auto px-6 space-y-8">
                {heading}
                <div className="text-sm text-foreground/65 leading-relaxed space-y-4">{body}</div>
                <div className="flex flex-col divide-y divide-white/10 font-heading font-black text-lg uppercase">
                    <p className="py-3">We design boldly.</p>
                    <p className="py-3">We build smart.</p>
                    <p className="py-3 text-accent">We grow brands.</p>
                </div>
            </div>
        </section>
    );
}
