"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useDeviceType } from "@/hooks/useDeviceType";

const testimonials = [
    { quote: "Clypsea completely transformed our online presence. Design, strategy, and execution beyond expectations.", author: "Tech Startup CEO" },
    { quote: "Their creativity and marketing expertise helped us scale faster than we imagined.", author: "E-Commerce Founder" },
    { quote: "Professional, innovative, and truly dedicated to results.", author: "Marketing Director" },
];

function DesktopTestimonials() {
    return (
        <section id="testimonials" className="py-32 px-16 bg-background overflow-hidden">
            <div className="flex items-start gap-16 mb-20">
                <h2 className="text-[clamp(3rem,7vw,8rem)] font-black uppercase font-heading leading-none flex-shrink-0">
                    What They <span className="text-accent block">Say</span>
                </h2>
                <div className="flex-1 flex flex-col justify-end pb-2">
                    <div className="w-full h-px bg-white/10" />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {testimonials.map((t, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }} className="bg-surface p-10 rounded-2xl border border-white/5 hover:border-accent/30 transition-colors group relative overflow-hidden">
                        <Quote className="absolute top-6 left-6 w-12 h-12 text-white/5 group-hover:text-accent/10 transition-colors" />
                        <div className="pt-10">
                            <p className="text-xl font-medium font-heading leading-relaxed mb-8">"{t.quote}"</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center font-black text-accent text-sm">{t.author.charAt(0)}</div>
                                <p className="text-xs font-black uppercase tracking-widest text-foreground/60">{t.author}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

function TabletTestimonials() {
    return (
        <section id="testimonials" className="py-20 px-10 bg-background">
            <h2 className="text-[clamp(2.5rem,7vw,5rem)] font-black uppercase font-heading mb-12">What They <span className="text-accent">Say</span></h2>
            <div className="grid grid-cols-2 gap-5">
                {testimonials.map((t, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className={`bg-surface p-8 rounded-2xl border border-white/5 ${i === 2 ? 'col-span-2' : ''}`}>
                        <p className="text-lg font-medium font-heading leading-relaxed mb-6">"{t.quote}"</p>
                        <p className="text-xs font-black uppercase tracking-widest text-accent">{t.author}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

function MobileTestimonials() {
    return (
        <section id="testimonials" className="py-16 px-5 bg-background">
            <h2 className="text-[clamp(2rem,10vw,3.5rem)] font-black uppercase font-heading mb-8">What They <span className="text-accent">Say</span></h2>
            <div className="flex flex-col gap-5">
                {testimonials.map((t, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="bg-surface p-6 rounded-xl border border-white/5">
                        <p className="text-base font-medium leading-relaxed mb-4">"{t.quote}"</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-accent">{t.author}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default function TestimonialSection() {
    const device = useDeviceType();
    if (device === 'desktop') return <DesktopTestimonials />;
    if (device === 'tablet') return <TabletTestimonials />;
    return <MobileTestimonials />;
}
