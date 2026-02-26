"use client";

import { motion } from "framer-motion";
import { useDeviceType } from "@/hooks/useDeviceType";

export default function AboutSection() {
    const device = useDeviceType();

    if (device === 'desktop') return (
        <section id="about" className="w-full px-12 py-24 bg-surface">
            <div className="grid grid-cols-2 gap-16 items-start">
                <div className="space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                        className="max-w-5xl text-[clamp(2rem,4vw,4rem)] font-black uppercase font-heading leading-[1.05]"
                    >
                        We Don't Just Design.<br />
                        <span className="bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent">We Build Momentum.</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-2xl space-y-4 text-foreground/75 leading-relaxed text-base"
                    >
                        <p>Clypsea is a multi-service creative agency built for modern brands. We combine strategy, design, and digital marketing to create powerful online experiences.</p>
                        <p>Every project is built with purpose, clarity, and measurable growth in mind.</p>
                    </motion.div>
                </div>
                <div className="space-y-8 pt-2">
                    <motion.p
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                        className="max-w-2xl text-lg text-foreground/70 leading-relaxed"
                    >
                        We believe creativity should not just look good — it should work.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col divide-y divide-white/10 font-heading font-black text-lg uppercase tracking-wide"
                    >
                        <p className="py-3 hover:text-accent transition-colors cursor-default">We design boldly.</p>
                        <p className="py-3 hover:text-accent transition-colors cursor-default">We build smart.</p>
                        <p className="py-3 text-accent">We grow brands.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );

    if (device === 'tablet') return (
        <section id="about" className="w-full px-8 py-20 bg-surface">
            <motion.h2
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                className="max-w-5xl text-[clamp(1.8rem,4vw,3.5rem)] font-black uppercase font-heading leading-[1.05] mb-10"
            >
                We Don't Just Design.<br />
                <span className="bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent">We Build Momentum.</span>
            </motion.h2>
            <div className="grid grid-cols-2 gap-10 items-start">
                <div className="max-w-2xl space-y-4 text-base text-foreground/75 leading-relaxed">
                    <p>Clypsea is a multi-service creative agency built for modern brands. We combine strategy, design, and digital marketing to create powerful online experiences.</p>
                    <p>Every project is built with purpose, clarity, and measurable growth in mind.</p>
                </div>
                <div className="flex flex-col divide-y divide-white/10 font-heading font-black text-lg uppercase">
                    <p className="py-3">We design boldly.</p>
                    <p className="py-3">We build smart.</p>
                    <p className="py-3 text-accent">We grow brands.</p>
                </div>
            </div>
        </section>
    );

    return (
        <section id="about" className="w-full px-5 py-16 bg-surface">
            <motion.h2
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                className="max-w-5xl text-2xl font-black uppercase font-heading leading-[1.05] mb-6"
            >
                We Don't Just Design.<br />
                <span className="bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent">We Build Momentum.</span>
            </motion.h2>
            <div className="max-w-2xl space-y-4 text-sm text-foreground/75 leading-relaxed mb-8">
                <p>Clypsea is a multi-service creative agency built for modern brands.</p>
                <p>Every project is built with purpose, clarity, and measurable growth in mind.</p>
            </div>
            <div className="flex flex-col divide-y divide-white/10 font-heading font-black text-lg uppercase">
                <p className="py-3">We design boldly.</p>
                <p className="py-3">We build smart.</p>
                <p className="py-3 text-accent">We grow brands.</p>
            </div>
        </section>
    );
}
