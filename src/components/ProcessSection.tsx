"use client";

import { motion } from "framer-motion";
import { useDeviceType } from "@/hooks/useDeviceType";

const steps = [
    { num: "01", title: "Discover", desc: "We start by understanding your brand, audience, and goals." },
    { num: "02", title: "Design", desc: "We transform strategy into powerful visuals and digital experiences." },
    { num: "03", title: "Develop", desc: "We build scalable, high-performance digital products." },
    { num: "04", title: "Grow", desc: "We launch, optimize, and continuously improve for measurable results." },
];

export default function ProcessSection() {
    const device = useDeviceType();

    if (device === 'desktop') return (
        <section id="process" className="w-full px-12 py-24 bg-surface">
            <div className="grid grid-cols-[1fr_2fr] gap-16 items-start">
                <div className="sticky top-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                        className="max-w-5xl text-[clamp(2rem,4vw,4.5rem)] font-black uppercase font-heading leading-[1] mb-4"
                    >
                        How We <span className="text-accent block">Work</span>
                    </motion.h2>
                    <p className="max-w-2xl text-foreground/70 text-base leading-relaxed">A proven process for exceptional results.</p>
                </div>
                <div className="flex flex-col divide-y divide-white/6">
                    {steps.map((s, i) => (
                        <motion.div
                            key={s.num}
                            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="flex items-start gap-8 py-10"
                        >
                            <span className="text-4xl font-black font-heading text-accent/30 leading-none select-none w-16 flex-shrink-0">{s.num}</span>
                            <div className="space-y-2">
                                <h3 className="text-xl font-black font-heading">{s.title}</h3>
                                <p className="max-w-2xl text-foreground/75 text-base leading-relaxed">{s.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );

    if (device === 'tablet') return (
        <section id="process" className="w-full px-8 py-20 bg-surface">
            <h2 className="max-w-5xl text-[clamp(2rem,5vw,4rem)] font-black uppercase font-heading mb-10">
                How We <span className="text-accent">Work</span>
            </h2>
            <div className="grid grid-cols-2 gap-5">
                {steps.map((s, i) => (
                    <motion.div
                        key={s.num}
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="bg-background/50 rounded-2xl p-7 border border-white/5 space-y-3"
                    >
                        <p className="text-2xl font-black font-heading text-accent/30">{s.num}</p>
                        <h3 className="text-lg font-black font-heading">{s.title}</h3>
                        <p className="max-w-2xl text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );

    return (
        <section id="process" className="w-full px-5 py-16 bg-surface">
            <h2 className="max-w-5xl text-2xl font-black uppercase font-heading mb-6">
                How We <span className="text-accent">Work</span>
            </h2>
            <div className="flex flex-col divide-y divide-white/6">
                {steps.map((s, i) => (
                    <motion.div
                        key={s.num}
                        initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
                        className="flex items-start gap-5 py-6"
                    >
                        <span className="text-2xl font-black font-heading text-accent/35 w-10 flex-shrink-0">{s.num}</span>
                        <div className="space-y-1">
                            <h3 className="text-base font-black font-heading">{s.title}</h3>
                            <p className="max-w-2xl text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
