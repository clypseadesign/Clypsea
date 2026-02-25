"use client";

import { motion } from "framer-motion";
import { useDeviceType } from "@/hooks/useDeviceType";

const reasons = [
    { num: "01", title: "Strategy First", desc: "Every creative decision has purpose." },
    { num: "02", title: "Design With Impact", desc: "We create bold, memorable visuals." },
    { num: "03", title: "Results Focused", desc: "Growth and performance matter." },
    { num: "04", title: "Collaborative", desc: "We work with you, not just for you." },
];

export default function WhySection() {
    const device = useDeviceType();

    const sectionHeading = (
        <div className="space-y-4">
            <motion.h2
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                className="text-[clamp(2rem,5vw,5rem)] font-black uppercase font-heading leading-[1]"
            >
                Why Choose{" "}
                <span className="bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent block">
                    Clypsea?
                </span>
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base font-bold text-foreground/50 leading-tight max-w-xs"
            >
                We don't follow trends. We create experiences that lead them.
            </motion.p>
        </div>
    );

    const cards = reasons.map((r, i) => (
        <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-background rounded-2xl p-6 border border-white/5 hover:border-accent/30 transition-colors group space-y-2"
        >
            <p className="text-3xl font-black font-heading text-accent/20">{r.num}</p>
            <h3 className="text-lg font-black font-heading group-hover:text-accent transition-colors">{r.title}</h3>
            <p className="text-sm text-foreground/55 leading-relaxed">{r.desc}</p>
        </motion.div>
    ));

    if (device === 'desktop') return (
        <section id="why-us" className="py-20 lg:py-32 bg-surface border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-[2fr_3fr] gap-16 items-start">
                    <div className="sticky top-32">{sectionHeading}</div>
                    <div className="grid grid-cols-2 gap-5">{cards}</div>
                </div>
            </div>
        </section>
    );

    if (device === 'tablet') return (
        <section id="why-us" className="py-20 bg-surface border-y border-white/5">
            <div className="max-w-3xl mx-auto px-8 space-y-10">
                {sectionHeading}
                <div className="grid grid-cols-2 gap-5">{cards}</div>
            </div>
        </section>
    );

    return (
        <section id="why-us" className="py-16 bg-surface border-y border-white/5">
            <div className="max-w-lg mx-auto px-6 space-y-8">
                {sectionHeading}
                <div className="flex flex-col gap-4">{cards}</div>
            </div>
        </section>
    );
}
