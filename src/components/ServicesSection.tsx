"use client";

import { motion } from "framer-motion";
import { useDeviceType } from "@/hooks/useDeviceType";

const services = [
    { id: "01", title: "Creative Design", desc: "Visual identities and digital experiences that leave a lasting impression.", list: ["Branding & Identity", "UI/UX Design", "Social Media Design"], img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop" },
    { id: "02", title: "Digital Marketing", desc: "Data-driven strategies that grow brands, connect, and convert.", list: ["Paid Advertising", "SEO Optimization", "Content Strategy"], img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop" },
    { id: "03", title: "Web Development", desc: "Modern, fast, scalable websites that turn visitors into customers.", list: ["Custom Websites", "E-commerce Stores", "Web Applications"], img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop" },
];

function DesktopServices() {
    return (
        <section id="services" className="w-full px-12 py-24 bg-surface">
            <motion.h2
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                className="max-w-5xl text-[clamp(2.5rem,5vw,5.5rem)] font-black uppercase font-heading leading-none mb-12"
            >
                What <span className="text-accent">We Do</span>
            </motion.h2>
            <div className="flex flex-col divide-y divide-white/8">
                {services.map((s, i) => (
                    <motion.div
                        key={s.id}
                        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="group grid grid-cols-[3rem_1fr_1.4fr_16rem] items-center gap-10 py-12"
                    >
                        <span className="font-heading text-sm text-accent font-black self-start pt-2">{s.id}</span>
                        <h3 className="text-2xl xl:text-3xl font-black uppercase font-heading group-hover:text-accent transition-colors leading-tight">{s.title}</h3>
                        <div className="space-y-3">
                            <p className="max-w-2xl text-foreground/75 text-base leading-relaxed">{s.desc}</p>
                            <ul className="flex flex-col gap-1.5">
                                {s.list.map((l, li) => (
                                    <li key={li} className="flex items-center gap-2 text-sm text-foreground/60">
                                        <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />{l}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="h-44 rounded-xl overflow-hidden flex-shrink-0">
                            <div className="w-full h-full bg-cover bg-center transition-transform duration-600 group-hover:scale-110" style={{ backgroundImage: `url(${s.img})` }} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

function TabletServices() {
    return (
        <section id="services" className="w-full px-8 py-20 bg-surface">
            <h2 className="max-w-5xl text-[clamp(2rem,5vw,4rem)] font-black uppercase font-heading mb-10">
                What <span className="text-accent">We Do</span>
            </h2>
            <div className="flex flex-col divide-y divide-white/8">
                {services.map((s, i) => (
                    <motion.div
                        key={s.id}
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="grid grid-cols-2 gap-6 py-8 items-center"
                    >
                        <div className="aspect-[4/3] rounded-xl overflow-hidden">
                            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${s.img})` }} />
                        </div>
                        <div className="space-y-3">
                            <p className="text-accent text-xs font-black tracking-widest">{s.id}</p>
                            <h3 className="text-xl font-black uppercase font-heading leading-tight">{s.title}</h3>
                            <p className="max-w-2xl text-sm text-foreground/75 leading-relaxed">{s.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

function MobileServices() {
    return (
        <section id="services" className="w-full px-5 py-16 bg-surface">
            <h2 className="max-w-5xl text-2xl font-black uppercase font-heading mb-6">
                What <span className="text-accent">We Do</span>
            </h2>
            <div className="flex flex-col divide-y divide-white/8">
                {services.map((s, i) => (
                    <motion.div
                        key={s.id}
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
                        className="py-8 space-y-4"
                    >
                        <div className="aspect-[16/9] rounded-xl overflow-hidden">
                            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${s.img})` }} />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <span className="text-accent text-xs font-black tracking-widest">{s.id}</span>
                                <h3 className="text-lg font-black uppercase font-heading leading-tight">{s.title}</h3>
                            </div>
                            <p className="max-w-2xl text-sm text-foreground/75 leading-relaxed">{s.desc}</p>
                            <div className="flex flex-wrap gap-2 pt-1">
                                {s.list.map((l, li) => (
                                    <span key={li} className="text-[10px] text-foreground/65 border border-white/15 px-3 py-1 rounded-full">{l}</span>
                                ))}
                            </div>
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
