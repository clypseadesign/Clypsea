"use client";

import { motion } from "framer-motion";
import { useDeviceType } from "@/hooks/useDeviceType";

/* ── Shared data ─────────────────────────────────────────────────────── */

const services = [
    {
        id: "01",
        title: "Creative Design",
        desc: "Visual identities and digital experiences that leave a lasting impression on every touchpoint.",
        list: ["Branding & Identity", "UI/UX Design", "Social Media Design"],
        img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: "02",
        title: "Digital Marketing",
        desc: "Data-driven strategies that grow brands, build audiences, and convert attention into revenue.",
        list: ["Paid Advertising", "SEO Optimization", "Content Strategy"],
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: "03",
        title: "Web Development",
        desc: "Modern, fast, scalable websites engineered to turn visitors into loyal customers.",
        list: ["Custom Websites", "E-commerce Stores", "Web Applications"],
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop"
    },
];

/* ── Section label — consistent typographic element ─────────────────── */
function SectionLabel({ text }: { text: string }) {
    return <p className="text-xs font-black tracking-[0.4em] text-accent uppercase mb-4">{text}</p>;
}

/* ── Desktop — asymmetric row list ──────────────────────────────────── */
function DesktopServices() {
    return (
        <section id="services" className="py-24 lg:py-32 bg-surface">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-14">
                    <SectionLabel text="Our Services" />
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                        className="text-[clamp(2.5rem,5vw,5rem)] font-black uppercase font-heading leading-none"
                    >
                        What <span className="text-accent">We Do</span>
                    </motion.h2>
                </div>
                <div className="flex flex-col divide-y divide-white/8">
                    {services.map((s, i) => (
                        <motion.div
                            key={s.id}
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: i * 0.08 }}
                            className="group grid grid-cols-[2.5rem_1fr_1.6fr_14rem] items-start gap-8 py-10"
                        >
                            <span className="text-sm font-black text-accent font-heading pt-1">{s.id}</span>
                            <h3 className="text-2xl lg:text-3xl font-black uppercase font-heading leading-tight group-hover:text-accent transition-colors duration-300 pt-0.5">
                                {s.title}
                            </h3>
                            <div className="space-y-4">
                                <p className="text-base text-foreground/75 leading-relaxed">{s.desc}</p>
                                <ul className="space-y-1.5">
                                    {s.list.map((l, li) => (
                                        <li key={li} className="flex items-center gap-2.5 text-sm text-foreground/65">
                                            <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />{l}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="h-40 lg:h-44 rounded-xl overflow-hidden flex-shrink-0">
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${s.img})` }} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ── Tablet — image left + text right rows ───────────────────────────── */
function TabletServices() {
    return (
        <section id="services" className="py-20 bg-surface">
            <div className="max-w-3xl mx-auto px-8">
                <div className="mb-12">
                    <SectionLabel text="Our Services" />
                    <h2 className="text-[clamp(2.2rem,6vw,3.5rem)] font-black uppercase font-heading leading-none">
                        What <span className="text-accent">We Do</span>
                    </h2>
                </div>
                <div className="flex flex-col divide-y divide-white/8">
                    {services.map((s, i) => (
                        <motion.div
                            key={s.id}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="grid grid-cols-2 gap-6 py-8 items-center"
                        >
                            <div className="aspect-[4/3] rounded-xl overflow-hidden">
                                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${s.img})` }} />
                            </div>
                            <div className="space-y-3">
                                <p className="text-xs font-black text-accent uppercase tracking-widest">{s.id}</p>
                                <h3 className="text-xl font-black uppercase font-heading leading-tight">{s.title}</h3>
                                <p className="text-sm text-foreground/75 leading-relaxed">{s.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ── Mobile — full-width stacked cards ───────────────────────────────── */
function MobileServices() {
    return (
        <section id="services" className="py-16 bg-surface">
            <div className="px-6">
                <div className="mb-10">
                    <SectionLabel text="Our Services" />
                    <h2 className="text-[clamp(2rem,9vw,3rem)] font-black uppercase font-heading leading-none">
                        What <span className="text-accent">We Do</span>
                    </h2>
                </div>
                <div className="flex flex-col divide-y divide-white/8">
                    {services.map((s, i) => (
                        <motion.div
                            key={s.id}
                            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
                            className="py-8 space-y-4"
                        >
                            <div className="aspect-[16/9] rounded-xl overflow-hidden">
                                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${s.img})` }} />
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-black text-accent uppercase tracking-widest">{s.id}</span>
                                    <h3 className="text-lg font-black uppercase font-heading leading-tight">{s.title}</h3>
                                </div>
                                <p className="text-sm text-foreground/75 leading-relaxed">{s.desc}</p>
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {s.list.map((l, li) => (
                                        <span key={li} className="text-xs text-foreground/65 border border-white/10 px-3 py-1 rounded-full">{l}</span>
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

export default function ServicesSection() {
    const device = useDeviceType();
    if (device === 'desktop') return <DesktopServices />;
    if (device === 'tablet') return <TabletServices />;
    return <MobileServices />;
}
