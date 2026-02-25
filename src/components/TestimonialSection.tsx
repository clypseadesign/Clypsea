"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useDeviceType } from "@/hooks/useDeviceType";

const testimonials = [
    { quote: "Clypsea completely transformed our online presence. Design, strategy, and execution beyond expectations.", author: "Tech Startup CEO" },
    { quote: "Their creativity and marketing expertise helped us scale faster than we thought possible.", author: "E-Commerce Founder" },
    { quote: "Professional, innovative, and genuinely dedicated to delivering real results.", author: "Marketing Director" },
];

function TestimonialCard({ t, i }: { t: typeof testimonials[0]; i: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-surface rounded-2xl border border-white/5 hover:border-accent/20 transition-colors group p-8 flex flex-col justify-between gap-8"
        >
            <Quote className="w-7 h-7 text-accent/25 group-hover:text-accent/40 transition-colors" />
            <p className="text-base leading-relaxed text-foreground/85">"{t.quote}"</p>
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center font-black text-accent text-xs border border-white/10 flex-shrink-0">
                    {t.author.charAt(0)}
                </div>
                <p className="text-xs font-black uppercase tracking-widest text-foreground/65">{t.author}</p>
            </div>
        </motion.div>
    );
}

export default function TestimonialSection() {
    const device = useDeviceType();

    if (device === 'desktop') return (
        <section id="testimonials" className="py-24 bg-background">
            <div className="px-20">
                <div className="mb-14 flex items-end justify-between">
                    <div>
                        <p className="text-xs font-black tracking-[0.4em] text-accent uppercase mb-4">Client Stories</p>
                        <motion.h2
                            initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}
                            className="text-[clamp(3rem,5vw,5.5rem)] font-black uppercase font-heading leading-none"
                        >
                            What Our <span className="text-accent">Clients Say</span>
                        </motion.h2>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    {testimonials.map((t, i) => <TestimonialCard key={i} t={t} i={i} />)}
                </div>
            </div>
        </section>
    );

    if (device === 'tablet') return (
        <section id="testimonials" className="py-20 bg-background">
            <div className="px-10">
                <div className="mb-10">
                    <p className="text-xs font-black tracking-[0.4em] text-accent uppercase mb-3">Client Stories</p>
                    <h2 className="text-[clamp(2.2rem,5vw,3.5rem)] font-black uppercase font-heading leading-none">
                        What Our <span className="text-accent">Clients Say</span>
                    </h2>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    {testimonials.map((t, i) => (
                        <div key={i} className={i === 2 ? 'col-span-2' : ''}>
                            <TestimonialCard t={t} i={i} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

    return (
        <section id="testimonials" className="py-16 bg-background">
            <div className="px-6">
                <div className="mb-8">
                    <p className="text-xs font-black tracking-[0.4em] text-accent uppercase mb-3">Client Stories</p>
                    <h2 className="text-[clamp(2rem,8vw,3rem)] font-black uppercase font-heading leading-none">
                        What Our <span className="text-accent">Clients Say</span>
                    </h2>
                </div>
                <div className="flex flex-col gap-5">
                    {testimonials.map((t, i) => <TestimonialCard key={i} t={t} i={i} />)}
                </div>
            </div>
        </section>
    );
}
