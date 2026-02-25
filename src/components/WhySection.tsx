"use client";

import { motion } from "framer-motion";
import { useDeviceType } from "@/hooks/useDeviceType";

const reasons = [
    { num: "01", title: "Strategy First", desc: "Every creative decision is rooted in clear strategy and business goals." },
    { num: "02", title: "Design With Impact", desc: "Bold, memorable visuals that make brands impossible to ignore." },
    { num: "03", title: "Results Focused", desc: "We measure success in real metrics — traffic, leads, and revenue." },
    { num: "04", title: "Collaborative", desc: "We work alongside you, not just for you — full transparency always." },
];

export default function WhySection() {
    const device = useDeviceType();

    const cards = reasons.map((r, i) => (
        <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }}
            className="bg-background rounded-2xl p-8 border border-white/5 hover:border-accent/25 transition-colors group space-y-3"
        >
            <p className="text-xl font-black font-heading text-accent/40">{r.num}</p>
            <h3 className="text-base font-black font-heading uppercase group-hover:text-accent transition-colors">{r.title}</h3>
            <p className="text-sm text-foreground/70 leading-relaxed">{r.desc}</p>
        </motion.div>
    ));

    if (device === 'desktop') return (
        <section id="why-us" className="py-24 bg-surface border-y border-white/5">
            <div className="px-20">
                <div className="grid grid-cols-[1fr_2fr] gap-20 items-start">
                    <div className="sticky top-28">
                        <p className="text-xs font-black tracking-[0.4em] text-accent uppercase mb-4">Why Us</p>
                        <motion.h2
                            initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}
                            className="text-[clamp(2.5rem,4vw,4.5rem)] font-black uppercase font-heading leading-none mb-5"
                        >
                            Why Choose <span className="bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent block">Clypsea?</span>
                        </motion.h2>
                        <p className="text-base text-foreground/70 leading-relaxed">
                            We don't just deliver projects — we build partnerships that drive lasting growth.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-5">{cards}</div>
                </div>
            </div>
        </section>
    );

    if (device === 'tablet') return (
        <section id="why-us" className="py-20 bg-surface border-y border-white/5">
            <div className="px-10 space-y-10">
                <div>
                    <p className="text-xs font-black tracking-[0.4em] text-accent uppercase mb-3">Why Us</p>
                    <h2 className="text-[clamp(2.2rem,5vw,3.5rem)] font-black uppercase font-heading leading-none">
                        Why <span className="text-accent">Clypsea?</span>
                    </h2>
                </div>
                <div className="grid grid-cols-2 gap-5">{cards}</div>
            </div>
        </section>
    );

    return (
        <section id="why-us" className="py-16 bg-surface border-y border-white/5">
            <div className="px-6 space-y-8">
                <div>
                    <p className="text-xs font-black tracking-[0.4em] text-accent uppercase mb-3">Why Us</p>
                    <h2 className="text-[clamp(2rem,8vw,3rem)] font-black uppercase font-heading leading-none">
                        Why <span className="text-accent">Clypsea?</span>
                    </h2>
                </div>
                <div className="flex flex-col gap-4">{cards}</div>
            </div>
        </section>
    );
}
