"use client";

import { motion } from "framer-motion";
import { useDeviceType } from "@/hooks/useDeviceType";

const services = [
    {
        id: "01",
        title: "Creative Design",
        desc: "Visual identities and digital experiences built to leave a lasting impression on every touchpoint.",
        list: ["Branding & Identity", "UI/UX Design", "Social Media Design"],
        img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    },
    {
        id: "02",
        title: "Digital Marketing",
        desc: "Data-driven strategies that grow audiences, build brand authority, and convert attention into revenue.",
        list: ["Paid Advertising", "SEO Optimization", "Content Strategy"],
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    },
    {
        id: "03",
        title: "Web Development",
        desc: "Modern, fast, scalable websites and applications engineered to turn visitors into loyal customers.",
        list: ["Custom Websites", "E-commerce Stores", "Web Applications"],
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop",
    },
];

export default function ServicesSection() {
    const device = useDeviceType();

    /* ── DESKTOP: 3-column card grid ── */
    if (device === 'desktop') return (
        <section id="services" className="py-24 bg-surface">
            <div className="px-20">
                {/* Section header */}
                <div className="mb-14 flex items-end justify-between">
                    <div>
                        <p className="text-xs font-black tracking-[0.4em] text-accent uppercase mb-4">Our Services</p>
                        <motion.h2
                            initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}
                            className="text-[clamp(3rem,5vw,5.5rem)] font-black uppercase font-heading leading-none"
                        >
                            What <span className="text-accent">We Do</span>
                        </motion.h2>
                    </div>
                    <p className="text-sm text-foreground/60 max-w-xs leading-relaxed pb-2">
                        Three core disciplines. One integrated approach.
                    </p>
                </div>

                {/* 3-column card grid */}
                <div className="grid grid-cols-3 gap-6">
                    {services.map((s, i) => (
                        <motion.div
                            key={s.id}
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, delay: i * 0.1 }}
                            className="group bg-background rounded-2xl border border-white/5 hover:border-accent/25 transition-all duration-300 overflow-hidden flex flex-col"
                        >
                            {/* Image */}
                            <div className="aspect-[4/3] overflow-hidden">
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${s.img})` }}
                                />
                            </div>
                            {/* Content */}
                            <div className="p-8 flex flex-col flex-1 gap-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-black uppercase font-heading group-hover:text-accent transition-colors leading-tight">{s.title}</h3>
                                    <span className="text-xs font-black text-accent/60 font-heading ml-4 flex-shrink-0">{s.id}</span>
                                </div>
                                <p className="text-sm text-foreground/75 leading-relaxed flex-1">{s.desc}</p>
                                <ul className="space-y-2 pt-2 border-t border-white/6">
                                    {s.list.map((l, li) => (
                                        <li key={li} className="flex items-center gap-2.5 text-xs text-foreground/65">
                                            <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />{l}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );

    /* ── TABLET: 2-column grid ── */
    if (device === 'tablet') return (
        <section id="services" className="py-20 bg-surface">
            <div className="px-10">
                <div className="mb-12">
                    <p className="text-xs font-black tracking-[0.4em] text-accent uppercase mb-3">Our Services</p>
                    <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-black uppercase font-heading leading-none">
                        What <span className="text-accent">We Do</span>
                    </h2>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    {services.map((s, i) => (
                        <motion.div
                            key={s.id}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="group bg-background rounded-2xl border border-white/5 hover:border-accent/20 transition-all overflow-hidden flex flex-col"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${s.img})` }} />
                            </div>
                            <div className="p-8 flex flex-col gap-3 flex-1">
                                <p className="text-xs font-black text-accent uppercase tracking-widest">{s.id}</p>
                                <h3 className="text-lg font-black uppercase font-heading group-hover:text-accent transition-colors">{s.title}</h3>
                                <p className="text-sm text-foreground/75 leading-relaxed">{s.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );

    /* ── MOBILE: single column ── */
    return (
        <section id="services" className="py-16 bg-surface">
            <div className="px-6">
                <div className="mb-10">
                    <p className="text-xs font-black tracking-[0.4em] text-accent uppercase mb-3">Our Services</p>
                    <h2 className="text-[clamp(2rem,8vw,3rem)] font-black uppercase font-heading leading-none">
                        What <span className="text-accent">We Do</span>
                    </h2>
                </div>
                <div className="flex flex-col gap-6">
                    {services.map((s, i) => (
                        <motion.div
                            key={s.id}
                            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
                            className="bg-background rounded-2xl border border-white/5 overflow-hidden"
                        >
                            <div className="aspect-[16/9] overflow-hidden">
                                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${s.img})` }} />
                            </div>
                            <div className="p-6 space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-black text-accent uppercase tracking-widest">{s.id}</span>
                                    <h3 className="text-base font-black uppercase font-heading">{s.title}</h3>
                                </div>
                                <p className="text-sm text-foreground/75 leading-relaxed">{s.desc}</p>
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {s.list.map((l, li) => (
                                        <span key={li} className="text-xs text-foreground/60 border border-white/10 px-3 py-1 rounded-full">{l}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
