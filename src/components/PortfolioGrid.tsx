"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useDeviceType } from "@/hooks/useDeviceType";

const projects = [
    { id: 1, title: 'Aura Branding', category: 'Branding · Web Design', desc: 'Bold visual identity built to convert and scale.', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1400&q=80' },
    { id: 2, title: 'Nexus Web', category: 'Web Dev · SEO', desc: '200% increase in user engagement post-launch.', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1400&q=80' },
    { id: 3, title: 'Zephyr Campaign', category: 'Marketing · Social', desc: 'Brand awareness campaign with exceptional reach.', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1400&q=80' },
    { id: 4, title: 'Nova UI/UX', category: 'App Design · Strategy', desc: 'Frictionless onboarding with modern aesthetics.', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1400&q=80' },
];

/* ── DESKTOP: asymmetric bento grid – 2 large + 2 normal ── */
function DesktopPortfolio() {
    return (
        <section id="work" className="py-24">
            <div className="px-20">
                {/* Header */}
                <div className="mb-14 flex items-end justify-between">
                    <div>
                        <p className="text-xs font-black tracking-[0.4em] text-accent uppercase mb-4">Selected Work</p>
                        <motion.h2
                            initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}
                            className="text-[clamp(3rem,5vw,5.5rem)] font-black uppercase font-heading leading-none"
                        >
                            Our <span className="text-accent">Portfolio</span>
                        </motion.h2>
                    </div>
                    <p className="text-sm text-foreground/60 pb-2">4 featured projects</p>
                </div>

                {/* Asymmetric grid: row 1 = [large | small], row 2 = [small | large] */}
                <div className="grid grid-cols-3 gap-6">
                    {/* Project 1 — large, spans 2 cols */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                        className="col-span-2 group cursor-pointer"
                    >
                        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-surface">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url(${projects[0].image})` }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-7">
                                <p className="text-xs font-black text-accent uppercase tracking-widest mb-2">{projects[0].category}</p>
                                <h3 className="text-2xl font-black font-heading text-white">{projects[0].title}</h3>
                            </div>
                        </div>
                    </motion.div>

                    {/* Project 2 — single col */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                        className="group cursor-pointer"
                    >
                        <div className="relative rounded-2xl overflow-hidden h-full min-h-[240px] bg-surface">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url(${projects[1].image})` }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-6">
                                <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-1.5">{projects[1].category}</p>
                                <h3 className="text-lg font-black font-heading text-white">{projects[1].title}</h3>
                            </div>
                        </div>
                    </motion.div>

                    {/* Project 3 — single col */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
                        className="group cursor-pointer"
                    >
                        <div className="relative rounded-2xl overflow-hidden h-full min-h-[240px] bg-surface">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url(${projects[2].image})` }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-6">
                                <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-1.5">{projects[2].category}</p>
                                <h3 className="text-lg font-black font-heading text-white">{projects[2].title}</h3>
                            </div>
                        </div>
                    </motion.div>

                    {/* Project 4 — large, spans 2 cols */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                        className="col-span-2 group cursor-pointer"
                    >
                        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-surface">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url(${projects[3].image})` }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-7">
                                <p className="text-xs font-black text-accent uppercase tracking-widest mb-2">{projects[3].category}</p>
                                <h3 className="text-2xl font-black font-heading text-white">{projects[3].title}</h3>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

/* ── TABLET: balanced 2-col grid ── */
function TabletPortfolio() {
    return (
        <section id="work" className="py-20">
            <div className="px-10">
                <div className="mb-12">
                    <p className="text-xs font-black tracking-[0.4em] text-accent uppercase mb-3">Selected Work</p>
                    <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-black uppercase font-heading leading-none">
                        Our <span className="text-accent">Portfolio</span>
                    </h2>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    {projects.map((p, i) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="group"
                        >
                            <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-surface">
                                <div className="w-full absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${p.image})` }} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-5">
                                    <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-1">{p.category}</p>
                                    <h3 className="text-lg font-black font-heading text-white">{p.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ── MOBILE: full-width single column ── */
function MobilePortfolio() {
    return (
        <section id="work" className="py-16">
            <div className="px-6">
                <div className="mb-10">
                    <p className="text-xs font-black tracking-[0.4em] text-accent uppercase mb-3">Selected Work</p>
                    <h2 className="text-[clamp(2rem,8vw,3rem)] font-black uppercase font-heading leading-none">
                        Our <span className="text-accent">Portfolio</span>
                    </h2>
                </div>
                <div className="flex flex-col gap-5">
                    {projects.map((p, i) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
                            className="group"
                        >
                            <div className="relative rounded-xl overflow-hidden w-full aspect-[4/3] bg-surface">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-103"
                                    style={{ backgroundImage: `url(${p.image})` }} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-5">
                                    <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-1">{p.category}</p>
                                    <h3 className="text-base font-black font-heading text-white">{p.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function PortfolioGrid() {
    const device = useDeviceType();
    if (device === 'desktop') return <DesktopPortfolio />;
    if (device === 'tablet') return <TabletPortfolio />;
    return <MobilePortfolio />;
}
