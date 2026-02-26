"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useDeviceType } from "@/hooks/useDeviceType";

const testimonials = [
    { quote: "Clypsea completely transformed our online presence. Design, strategy, and execution beyond expectations.", author: "Tech Startup CEO" },
    { quote: "Their creativity and marketing expertise helped us scale faster than we imagined.", author: "E-Commerce Founder" },
    { quote: "Professional, innovative, and truly dedicated to results.", author: "Marketing Director" },
];

function TestimonialCard({ t, i, large = false }: { t: typeof testimonials[0], i: number, large?: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`bg-surface rounded-2xl border border-white/5 hover:border-accent/25 transition-colors group relative overflow-hidden ${large ? 'p-10' : 'p-7'}`}
        >
            <Quote className={`absolute top-5 left-5 text-white/5 group-hover:text-accent/10 transition-colors ${large ? 'w-14 h-14' : 'w-10 h-10'}`} />
            <div className={`relative z-10 flex flex-col gap-5 ${large ? 'pt-12' : 'pt-8'}`}>
                <p className={`leading-relaxed text-foreground/90 ${large ? 'text-lg' : 'text-base'}`}>"{t.quote}"</p>
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-background rounded-full flex items-center justify-center font-black text-accent text-sm border border-white/10 flex-shrink-0">
                        {t.author.charAt(0)}
                    </div>
                    <p className="text-xs font-black uppercase tracking-widest text-foreground/70">{t.author}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default function TestimonialSection() {
    const device = useDeviceType();

    if (device === 'desktop') return (
        <section id="testimonials" className="w-full px-12 py-24 bg-background">
            <motion.h2
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                className="max-w-5xl text-[clamp(2.5rem,5vw,5rem)] font-black uppercase font-heading leading-[1.05] mb-12"
            >
                What Our <span className="text-accent">Clients Say</span>
            </motion.h2>
            <div className="grid grid-cols-3 gap-6">
                {testimonials.map((t, i) => <TestimonialCard key={i} t={t} i={i} large />)}
            </div>
        </section>
    );

    if (device === 'tablet') return (
        <section id="testimonials" className="w-full px-8 py-20 bg-background space-y-10">
            <h2 className="max-w-5xl text-[clamp(2rem,5vw,4rem)] font-black uppercase font-heading leading-[1.05]">
                What Our <span className="text-accent">Clients Say</span>
            </h2>
            <div className="grid grid-cols-2 gap-5">
                {testimonials.map((t, i) => (
                    <div key={i} className={i === 2 ? 'col-span-2' : ''}>
                        <TestimonialCard t={t} i={i} />
                    </div>
                ))}
            </div>
        </section>
    );

    return (
        <section id="testimonials" className="w-full px-5 py-16 bg-background space-y-8">
            <h2 className="max-w-5xl text-2xl font-black uppercase font-heading">
                What Our <span className="text-accent">Clients Say</span>
            </h2>
            <div className="flex flex-col gap-5">
                {testimonials.map((t, i) => <TestimonialCard key={i} t={t} i={i} />)}
            </div>
        </section>
    );
}
