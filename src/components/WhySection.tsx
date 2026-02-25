"use client";

import { motion } from "framer-motion";
import { useDeviceType } from "@/hooks/useDeviceType";

const reasons = [
    { title: "Strategy First", desc: "Every creative decision has purpose." },
    { title: "Design With Impact", desc: "We create bold, memorable visuals." },
    { title: "Results Focused", desc: "Growth and performance matter." },
    { title: "Collaborative", desc: "We work with you, not just for you." },
];

function DesktopWhySection() {
    return (
        <section id="why-us" className="py-32 px-16 bg-background border-y border-white/5">
            <div className="flex gap-20 items-start">
                <div className="w-5/12 sticky top-32 h-fit">
                    <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-[clamp(2.5rem,5vw,5rem)] font-black uppercase font-heading leading-[1] mb-6">
                        Why Choose <span className="bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent block">Clypsea?</span>
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl font-heading font-bold text-foreground/60 leading-tight">
                        We don't follow trends.<br />We create experiences that lead them.
                    </motion.p>
                </div>
                <div className="w-7/12 flex flex-col gap-5">
                    {reasons.map((r, i) => (
                        <motion.div key={r.title} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-surface p-10 rounded-2xl border border-white/5 hover:border-accent/40 transition-colors group flex items-center gap-8">
                            <span className="text-4xl font-black font-heading text-accent/20 w-12 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                            <div>
                                <h3 className="text-2xl font-black font-heading mb-1 group-hover:text-accent transition-colors">{r.title}</h3>
                                <p className="text-foreground/50">{r.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function TabletWhySection() {
    return (
        <section id="why-us" className="py-20 px-10 bg-background border-y border-white/5">
            <h2 className="text-[clamp(2.5rem,7vw,5rem)] font-black uppercase font-heading mb-4">
                Why <span className="text-accent">Clypsea?</span>
            </h2>
            <p className="text-lg font-bold text-foreground/60 mb-10">We don't follow trends. We lead them.</p>
            <div className="grid grid-cols-2 gap-5">
                {reasons.map((r, i) => (
                    <motion.div key={r.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-surface p-7 rounded-2xl border border-white/5 hover:border-accent/40 transition-colors group">
                        <h3 className="text-xl font-black font-heading mb-2 group-hover:text-accent transition-colors">{r.title}</h3>
                        <p className="text-sm text-foreground/55">{r.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

function MobileWhySection() {
    return (
        <section id="why-us" className="py-16 px-5 bg-background border-y border-white/5">
            <h2 className="text-[clamp(2rem,10vw,3.5rem)] font-black uppercase font-heading mb-3">
                Why <span className="text-accent">Clypsea?</span>
            </h2>
            <p className="text-sm text-foreground/55 mb-8">We create experiences that lead trends.</p>
            <div className="flex flex-col gap-4">
                {reasons.map((r, i) => (
                    <motion.div key={r.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="flex items-center gap-4 bg-surface p-5 rounded-xl border border-white/5">
                        <span className="text-2xl font-black font-heading text-accent/30">{String(i + 1).padStart(2, '0')}</span>
                        <div>
                            <h3 className="text-base font-black font-heading">{r.title}</h3>
                            <p className="text-xs text-foreground/50 mt-0.5">{r.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default function WhySection() {
    const device = useDeviceType();
    if (device === 'desktop') return <DesktopWhySection />;
    if (device === 'tablet') return <TabletWhySection />;
    return <MobileWhySection />;
}
