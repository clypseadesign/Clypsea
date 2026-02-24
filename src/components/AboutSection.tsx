"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className="py-32 px-6 md:px-12 bg-surface">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-[clamp(2rem,4vw,4.5rem)] leading-[1.1] font-black uppercase font-heading mb-16 break-words"
                >
                    We Don't Just Design.<br />
                    <span className="bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent pb-2 block">We Build Momentum.</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg md:text-xl text-foreground/80 leading-relaxed"
                >
                    <div>
                        <p className="mb-6">
                            Clypsea is a multi-service creative agency built for modern brands. We combine strategy, design, and digital marketing to create powerful online experiences.
                        </p>
                        <p>
                            We believe creativity should not just look good — it should work. Every project we take is built with purpose, clarity, and measurable growth in mind.
                        </p>
                    </div>
                    <div className="flex flex-col justify-end font-heading font-bold text-2xl md:text-3xl text-foreground uppercase tracking-wide gap-4">
                        <p className="border-b border-white/10 pb-4">We design boldly.</p>
                        <p className="border-b border-white/10 pb-4">We build smart.</p>
                        <p className="text-accent">We grow brands.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
