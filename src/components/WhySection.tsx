"use client";

import { motion } from "framer-motion";
import { useDeviceType } from "@/hooks/useDeviceType";

const reasons = [
    { num: "01", title: "Strategy First", desc: "Every creative decision has purpose and direction." },
    { num: "02", title: "Design With Impact", desc: "We create bold, memorable visuals that convert." },
    { num: "03", title: "Results Focused", desc: "Growth and performance are always the priority." },
    { num: "04", title: "Collaborative", desc: "We work with you, not just for you." },
];

export default function WhySection() {
    const device = useDeviceType();

    const cards = reasons.map((r, i) => (
        <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-background rounded-2xl p-7 border border-white/5 hover:border-accent/30 transition-colors group space-y-2"
        >
            <p className="text-2xl font-black font-heading text-accent/30">{r.num}</p>
            <h3 className="text-lg font-black font-heading group-hover:text-accent transition-colors">{r.title}</h3>
            <p className="max-w-2xl text-sm text-foreground/70 leading-relaxed">{r.desc}</p>
        </motion.div>
    ));

    if (device === 'desktop') return (
        <section id="why-us" className="w-full px-12 py-24 bg-surface border-y border-white/5">
            <div className="grid grid-cols-[1fr_2fr] gap-16 items-start">
                <div className="sticky top-32 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                        className="max-w-5xl text-[clamp(2rem,4vw,5rem)] font-black uppercase font-heading leading-[1]"
                    >
                        Why Choose{" "}
                        <span className="bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent block">
                            Clypsea?
                        </span>
                    </motion.h2>
                    <p className="max-w-2xl text-base text-foreground/70 leading-relaxed">
                        We don't follow trends. We create experiences that lead them.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-5">{cards}</div>
            </div>
        </section>
    );

    if (device === 'tablet') return (
        <section id="why-us" className="w-full px-8 py-20 bg-surface border-y border-white/5 space-y-10">
            <div className="space-y-4">
                <h2 className="max-w-5xl text-[clamp(2rem,5vw,4rem)] font-black uppercase font-heading leading-[1]">
                    Why Choose <span className="bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent">Clypsea?</span>
                </h2>
                <p className="max-w-2xl text-base text-foreground/70 leading-relaxed">We don't follow trends. We create experiences that lead them.</p>
            </div>
            <div className="grid grid-cols-2 gap-5">{cards}</div>
        </section>
    );

    return (
        <section id="why-us" className="w-full px-5 py-16 bg-surface border-y border-white/5 space-y-8">
            <div className="space-y-3">
                <h2 className="max-w-5xl text-2xl font-black uppercase font-heading">
                    Why Choose <span className="text-accent">Clypsea?</span>
                </h2>
                <p className="max-w-2xl text-sm text-foreground/70 leading-relaxed">We don't follow trends. We create experiences that lead them.</p>
            </div>
            <div className="flex flex-col gap-4">{cards}</div>
        </section>
    );
}
