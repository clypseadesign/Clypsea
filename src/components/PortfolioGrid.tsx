"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useDeviceType } from "@/hooks/useDeviceType";

const projects = [
    { id: 1, title: 'Aura Branding', category: 'Branding | Web', desc: 'Bold visual identity built to convert and scale.', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80' },
    { id: 2, title: 'Nexus Web', category: 'Web Dev | SEO', desc: '200% increase in user engagement after overhaul.', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80' },
    { id: 3, title: 'Zephyr Campaign', category: 'Marketing | Social', desc: 'Brand awareness campaign with exceptional reach.', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80' },
    { id: 4, title: 'Nova UI/UX', category: 'App Design', desc: 'Frictionless onboarding with modern aesthetics.', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1200&q=80' },
];

/* ─── DESKTOP: Pinned horizontal scroll ─── */
function DesktopPortfolio() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
    // Scroll the track left as user scrolls down the pinned container
    const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(projects.length - 1) * 100 / projects.length * 1.1}%`]);

    return (
        <section id="work">
            {/* Tall container to create scroll space */}
            <div ref={containerRef} style={{ height: `${projects.length * 100}vh` }} className="relative">
                {/* Sticky viewport */}
                <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
                    {/* Header */}
                    <div className="px-16 pt-24 pb-8 flex items-end justify-between flex-shrink-0">
                        <h2 className="text-[clamp(3rem,6vw,7rem)] font-black uppercase font-heading leading-none">
                            Selected <span className="text-accent">Work</span>
                        </h2>
                        <p className="text-sm text-foreground/40 uppercase tracking-[0.3em] font-bold">→ Scroll to explore</p>
                    </div>
                    {/* Horizontal track */}
                    <div className="flex-1 overflow-hidden flex items-stretch">
                        <motion.div style={{ x }} className="flex h-full" style={{ x, width: `${projects.length * 85}vw` }}>
                            {projects.map((project, i) => (
                                <motion.div
                                    key={project.id}
                                    className="relative flex-shrink-0 group cursor-pointer"
                                    style={{ width: `calc(${projects.length * 85}vw / ${projects.length})`, paddingRight: '2rem', paddingLeft: i === 0 ? '4rem' : '0' }}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: i * 0.1 }}
                                >
                                    {/* Image */}
                                    <div className="relative h-[70%] rounded-2xl overflow-hidden">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                            style={{ backgroundImage: `url(${project.image})` }}
                                        />
                                        {/* Number overlay */}
                                        <div className="absolute top-6 left-6 text-[6rem] font-black font-heading text-white/5 leading-none select-none">
                                            {String(i + 1).padStart(2, '0')}
                                        </div>
                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-black uppercase tracking-widest border border-white px-6 py-3 rounded-full">
                                                View Case
                                            </span>
                                        </div>
                                    </div>
                                    {/* Info */}
                                    <div className="mt-6 flex items-start justify-between">
                                        <div>
                                            <h3 className="text-2xl font-black font-heading mb-1 group-hover:text-accent transition-colors">{project.title}</h3>
                                            <p className="text-xs text-accent uppercase tracking-[0.2em] font-bold">{project.category}</p>
                                        </div>
                                        <p className="text-sm text-foreground/50 max-w-[180px] text-right leading-relaxed">{project.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─── TABLET: Clean 2-col grid ─── */
function TabletPortfolio() {
    return (
        <section id="work" className="py-20 px-10">
            <div className="mb-14">
                <h2 className="text-[clamp(2.5rem,7vw,5rem)] font-black uppercase font-heading mb-4">
                    Selected <span className="text-accent">Work</span>
                </h2>
                <p className="text-base text-foreground/60 font-medium">Every project is a collaboration.</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="group cursor-pointer"
                    >
                        <div className="rounded-xl overflow-hidden aspect-[4/3] relative">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url(${project.image})` }} />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl font-black font-heading group-hover:text-accent transition-colors">{project.title}</h3>
                            <p className="text-xs text-accent uppercase tracking-widest font-bold mt-1">{project.category}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

/* ─── MOBILE: Single column stacked ─── */
function MobilePortfolio() {
    return (
        <section id="work" className="py-16 px-5">
            <div className="mb-10">
                <h2 className="text-[clamp(2.2rem,10vw,4rem)] font-black uppercase font-heading">
                    Selected <span className="text-accent">Work</span>
                </h2>
            </div>
            <div className="flex flex-col gap-10">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="group"
                    >
                        <div className="rounded-xl overflow-hidden w-full aspect-[4/3]">
                            <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url(${project.image})` }} />
                        </div>
                        <div className="mt-3">
                            <p className="text-[10px] text-accent uppercase tracking-widest font-bold mb-1">{project.category}</p>
                            <h3 className="text-xl font-black font-heading">{project.title}</h3>
                            <p className="text-sm text-foreground/60 mt-1">{project.desc}</p>
                        </div>
                    </motion.div>
                ))}
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
