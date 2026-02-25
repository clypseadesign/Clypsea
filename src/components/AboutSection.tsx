"use client";

import { motion } from "framer-motion";
import { useDeviceType } from "@/hooks/useDeviceType";

export default function AboutSection() {
    const device = useDeviceType();
    const px = device === 'desktop' ? 'px-20' : device === 'tablet' ? 'px-10' : 'px-6';
    const py = device === 'desktop' ? 'py-24' : device === 'tablet' ? 'py-20' : 'py-16';

    const manifesto = (
        <div className="flex flex-col divide-y divide-white/10 font-heading font-black text-base uppercase tracking-wider">
            <p className="py-4 hover:text-accent transition-colors cursor-default">We design boldly.</p>
            <p className="py-4 hover:text-accent transition-colors cursor-default">We build smart.</p>
            <p className="py-4 text-accent">We grow brands.</p>
        </div>
    );

    if (device === 'desktop') return (
        <section id="about" className="py-24 bg-surface">
            <div className="px-20">
                <div className="grid grid-cols-2 gap-24 items-start">
                    {/* Left: heading + body */}
                    <div className="space-y-8">
                        <div>
                            <p className="text-xs font-black tracking-[0.4em] text-accent uppercase mb-4">About Clypsea</p>
                            <motion.h2
                                initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}
                                className="text-[clamp(2.5rem,4.5vw,5rem)] font-black uppercase font-heading leading-[1.02] max-w-xl"
                            >
                                We Don't Just Design.{" "}
                                <span className="bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent">
                                    We Build Momentum.
                                </span>
                            </motion.h2>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
                            className="space-y-4 text-base text-foreground/75 leading-relaxed max-w-lg"
                        >
                            <p>Clypsea is a multi-service creative agency built for modern brands. We combine strategy, design, and digital marketing to create powerful online experiences.</p>
                            <p>Every project is built with purpose, clarity, and measurable growth in mind.</p>
                        </motion.div>
                    </div>
                    {/* Right: pullquote + manifesto */}
                    <div className="space-y-10 pt-14">
                        <motion.p
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-xl text-foreground/70 leading-relaxed max-w-md font-heading font-black uppercase"
                        >
                            Creativity should not just look good — it should work.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {manifesto}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );

    if (device === 'tablet') return (
        <section id="about" className="py-20 bg-surface">
            <div className="px-10 space-y-10">
                <div>
                    <p className="text-xs font-black tracking-[0.4em] text-accent uppercase mb-3">About Clypsea</p>
                    <h2 className="text-[clamp(2.2rem,5vw,3.5rem)] font-black uppercase font-heading leading-[1.05]">
                        We Don't Just Design.{" "}
                        <span className="bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent">We Build Momentum.</span>
                    </h2>
                </div>
                <div className="grid grid-cols-2 gap-12 items-start">
                    <div className="space-y-4 text-sm text-foreground/75 leading-relaxed">
                        <p>Clypsea is a multi-service creative agency combining strategy, design, and marketing for modern brands.</p>
                        <p>Every project is built with purpose, clarity, and measurable growth in mind.</p>
                    </div>
                    {manifesto}
                </div>
            </div>
        </section>
    );

    return (
        <section id="about" className="py-16 bg-surface">
            <div className="px-6 space-y-8">
                <div>
                    <p className="text-xs font-black tracking-[0.4em] text-accent uppercase mb-3">About Us</p>
                    <h2 className="text-[clamp(2rem,8vw,3rem)] font-black uppercase font-heading leading-[1.05]">
                        We Build <span className="text-accent">Momentum.</span>
                    </h2>
                </div>
                <div className="space-y-3 text-sm text-foreground/75 leading-relaxed">
                    <p>Clypsea is a creative agency combining design, marketing, and technology for modern brands.</p>
                    <p>Every project is built with purpose and measurable growth in mind.</p>
                </div>
                {manifesto}
            </div>
        </section>
    );
}
