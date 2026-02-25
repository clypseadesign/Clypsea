"use client";

import { motion } from "framer-motion";
import { useDeviceType } from "@/hooks/useDeviceType";

const steps = [
    { num: "01", title: "Discover", desc: "We start by understanding your brand, audience, and business goals inside out." },
    { num: "02", title: "Design", desc: "Strategy becomes powerful visuals and well-crafted digital experiences." },
    { num: "03", title: "Develop", desc: "We build scalable, high-performance digital products that stand the test of time." },
    { num: "04", title: "Grow", desc: "We launch, measure, and continuously optimize for real, measurable results." },
];

export default function ProcessSection() {
    const device = useDeviceType();

    if (device === 'desktop') return (
        <section id="process" className="py-24 bg-surface">
            <div className="px-20">
                <div className="grid grid-cols-[1fr_1.8fr] gap-20 items-start">
                    {/* Sticky left */}
                    <div className="sticky top-28">
                        <p className="text-xs font-black tracking-[0.4em] text-accent uppercase mb-4">Our Process</p>
                        <motion.h2
                            initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}
                            className="text-[clamp(2.5rem,4vw,4.5rem)] font-black uppercase font-heading leading-none mb-5"
                        >
                            How We <span className="text-accent">Work</span>
                        </motion.h2>
                        <p className="text-base text-foreground/70 leading-relaxed">
                            A clear, repeatable process designed to deliver exceptional results every time.
                        </p>
                    </div>
                    {/* Scrolling steps */}
                    <div className="flex flex-col divide-y divide-white/6">
                        {steps.map((s, i) => (
                            <motion.div
                                key={s.num}
                                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="flex items-start gap-8 py-10"
                            >
                                <span className="text-4xl font-black font-heading text-accent/35 leading-none w-12 flex-shrink-0 pt-1">{s.num}</span>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-black font-heading">{s.title}</h3>
                                    <p className="text-base text-foreground/75 leading-relaxed">{s.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );

    if (device === 'tablet') return (
        <section id="process" className="py-20 bg-surface">
            <div className="px-10">
                <div className="mb-12">
                    <p className="text-xs font-black tracking-[0.4em] text-accent uppercase mb-3">Our Process</p>
                    <h2 className="text-[clamp(2.2rem,5vw,3.5rem)] font-black uppercase font-heading leading-none">
                        How We <span className="text-accent">Work</span>
                    </h2>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    {steps.map((s, i) => (
                        <motion.div
                            key={s.num}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="bg-background rounded-2xl p-8 border border-white/5 space-y-3"
                        >
                            <p className="text-2xl font-black font-heading text-accent/35">{s.num}</p>
                            <h3 className="text-base font-black font-heading">{s.title}</h3>
                            <p className="text-sm text-foreground/75 leading-relaxed">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );

    return (
        <section id="process" className="py-16 bg-surface">
            <div className="px-6">
                <div className="mb-8">
                    <p className="text-xs font-black tracking-[0.4em] text-accent uppercase mb-3">Our Process</p>
                    <h2 className="text-[clamp(2rem,8vw,3rem)] font-black uppercase font-heading leading-none">
                        How We <span className="text-accent">Work</span>
                    </h2>
                </div>
                <div className="flex flex-col divide-y divide-white/6">
                    {steps.map((s) => (
                        <motion.div
                            key={s.num}
                            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
                            className="flex items-start gap-5 py-6"
                        >
                            <span className="text-2xl font-black font-heading text-accent/35 w-10 flex-shrink-0">{s.num}</span>
                            <div className="space-y-1">
                                <h3 className="text-base font-black font-heading">{s.title}</h3>
                                <p className="text-sm text-foreground/75 leading-relaxed">{s.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
