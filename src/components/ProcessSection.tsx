"use client";

import { motion } from "framer-motion";
import { useDeviceType } from "@/hooks/useDeviceType";

function SectionLabel({ text }: { text: string }) {
    return <p className="text-xs font-black tracking-[0.4em] text-accent uppercase mb-4">{text}</p>;
}

const steps = [
    { num: "01", title: "Discover", desc: "We start by understanding your brand, audience, and business goals." },
    { num: "02", title: "Design", desc: "Strategy becomes powerful visuals and well-crafted digital experiences." },
    { num: "03", title: "Develop", desc: "We build scalable, high-performance digital products that last." },
    { num: "04", title: "Grow", desc: "We launch, measure, optimize, and continuously improve for real results." },
];

export default function ProcessSection() {
    const device = useDeviceType();

    if (device === 'desktop') return (
        <section id="process" className="py-24 lg:py-32 bg-surface">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-[1fr_2fr] gap-16 items-start">
                    <div className="sticky top-28">
                        <SectionLabel text="Our Process" />
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                            className="text-[clamp(2.5rem,4vw,4.5rem)] font-black uppercase font-heading leading-none mb-5"
                        >
                            How We <span className="text-accent block">Work</span>
                        </motion.h2>
                        <p className="text-base text-foreground/70 leading-relaxed max-w-xs">
                            A clear process designed for exceptional results every time.
                        </p>
                    </div>
                    <div className="flex flex-col divide-y divide-white/6">
                        {steps.map((s, i) => (
                            <motion.div
                                key={s.num}
                                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="flex items-start gap-8 py-10"
                            >
                                <span className="text-4xl font-black font-heading text-accent/35 leading-none w-14 flex-shrink-0">{s.num}</span>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-black font-heading">{s.title}</h3>
                                    <p className="text-base text-foreground/75 leading-relaxed max-w-sm">{s.desc}</p>
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
            <div className="max-w-3xl mx-auto px-8">
                <div className="mb-12">
                    <SectionLabel text="Our Process" />
                    <h2 className="text-[clamp(2.2rem,5vw,3.5rem)] font-black uppercase font-heading leading-none">
                        How We <span className="text-accent">Work</span>
                    </h2>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    {steps.map((s, i) => (
                        <motion.div
                            key={s.num}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="bg-background/50 rounded-2xl p-6 border border-white/5 space-y-3"
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
                    <SectionLabel text="Our Process" />
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
