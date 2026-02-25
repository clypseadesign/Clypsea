"use client";

import { motion } from "framer-motion";
import { useDeviceType } from "@/hooks/useDeviceType";

const services = [
    { id: "01", title: "Creative Design", desc: "Visual identities and digital experiences that leave a lasting impression.", list: ["Branding & Identity", "UI/UX Design", "Social Media Design"], img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop" },
    { id: "02", title: "Digital Marketing", desc: "Data-driven strategies that grow brands, connect, and convert.", list: ["Paid Advertising", "SEO Optimization", "Content Strategy"], img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop" },
    { id: "03", title: "Web Development", desc: "Modern, fast, scalable websites that turn visitors into customers.", list: ["Custom Websites", "E-commerce Stores", "Web Applications"], img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop" },
];

/* ─── DESKTOP: Asymmetric staggered layout ─── */
function DesktopServices() {
    return (
        <section id="services" className="py-32 px-16 bg-surface">
            <div className="mb-20">
                <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-[clamp(4rem,8vw,9rem)] font-black uppercase font-heading leading-none">
                    What <span className="text-accent">We Do</span>
                </motion.h2>
            </div>
            <div className="flex flex-col gap-0">
                {services.map((s, i) => (
                    <motion.div
                        key={s.id}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, delay: i * 0.1 }}
                        className="group grid grid-cols-[80px_1fr_1fr_320px] items-center py-14 border-t border-white/8 last:border-b overflow-hidden"
                    >
                        <span className="font-heading text-lg text-accent/70 font-black">{s.id}</span>
                        <h3 className="text-4xl xl:text-5xl font-black uppercase font-heading group-hover:text-accent transition-colors duration-500">{s.title}</h3>
                        <div className="px-8">
                            <p className="text-foreground/60 text-base leading-relaxed mb-4">{s.desc}</p>
                            <ul className="flex flex-col gap-1">
                                {s.list.map((l, li) => <li key={li} className="flex items-center gap-2 text-sm text-foreground/40"><span className="w-1 h-1 rounded-full bg-accent" />{l}</li>)}
                            </ul>
                        </div>
                        <div className="h-[200px] rounded-2xl overflow-hidden">
                            <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${s.img})` }} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

/* ─── TABLET: 2-col card grid ─── */
function TabletServices() {
    return (
        <section id="services" className="py-20 px-10 bg-surface">
            <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-[clamp(2.5rem,7vw,5rem)] font-black uppercase font-heading mb-12">
                What <span className="text-accent">We Do</span>
            </motion.h2>
            <div className="grid grid-cols-1 gap-6">
                {services.map((s, i) => (
                    <motion.div
                        key={s.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="grid grid-cols-2 gap-6 border-t border-white/10 py-8"
                    >
                        <div className="aspect-[4/3] rounded-xl overflow-hidden">
                            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${s.img})` }} />
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-accent text-sm font-black mb-2">{s.id}</p>
                            <h3 className="text-2xl font-black uppercase font-heading mb-3">{s.title}</h3>
                            <p className="text-sm text-foreground/60 leading-relaxed">{s.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

/* ─── MOBILE: Stacked full-width cards ─── */
function MobileServices() {
    return (
        <section id="services" className="py-16 px-5 bg-surface">
            <h2 className="text-[clamp(2.2rem,10vw,4rem)] font-black uppercase font-heading mb-8">
                What <span className="text-accent">We Do</span>
            </h2>
            <div className="flex flex-col">
                {services.map((s, i) => (
                    <motion.div
                        key={s.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="border-t border-white/10 py-8 first:border-0"
                    >
                        <div className="aspect-[16/9] rounded-xl overflow-hidden mb-5">
                            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${s.img})` }} />
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-accent text-xs font-black">{s.id}</span>
                            <h3 className="text-xl font-black uppercase font-heading">{s.title}</h3>
                        </div>
                        <p className="text-sm text-foreground/60 leading-relaxed">{s.desc}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                            {s.list.map((l, li) => <span key={li} className="text-[10px] text-foreground/50 border border-white/10 px-3 py-1 rounded-full">{l}</span>)}
                        </div>
                    </motion.div>
                ))}
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
