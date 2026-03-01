"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useDeviceType } from "@/hooks/useDeviceType";

import Link from "next/link";

const projects = [
    { id: 1, title: 'Digital Marketing', category: 'Marketing', desc: 'Bold visual identity built to convert and scale.', href: '/cases/aura-marketing', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80' },
    { id: 2, title: 'Nexus Web', category: 'Web Dev | SEO', desc: '200% increase in user engagement after overhaul.', href: '#', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80' },
    { id: 3, title: 'Zephyr Campaign', category: 'Marketing | Social', desc: 'Brand awareness campaign with exceptional reach.', href: '#', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80' },
    { id: 4, title: 'Nova UI/UX', category: 'App Design | Strategy', desc: 'Frictionless onboarding with modern aesthetics.', href: '#', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1200&q=80' },
];

/* ─── DESKTOP: Pinned horizontal scroll ─── */
function DesktopPortfolio() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
    const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(projects.length - 1) * 62}vw`]);

    return (
        <div ref={sectionRef} id="work" style={{ height: `${projects.length * 100}vh` }}>
            <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
                {/* Header row */}
                <div className="flex-shrink-0 w-full px-12 pt-24 pb-6 flex items-end justify-between">
                    <h2 className="max-w-5xl text-[clamp(2.5rem,5vw,5.5rem)] font-black uppercase font-heading leading-none">
                        Selected <span className="text-accent">Work</span>
                    </h2>
                    <p className="text-xs text-foreground/50 uppercase tracking-[0.3em] font-bold pb-2">Scroll to explore →</p>
                </div>

                {/* Scrolling track */}
                <div className="flex-1 overflow-hidden flex items-stretch px-12">
                    <motion.div style={{ x }} className="flex gap-6 h-full will-change-transform">
                        {projects.map((project, i) => (
                            <div key={project.id} className="group flex-shrink-0 flex flex-col gap-4" style={{ width: '58vw' }}>
                                <Link href={project.href} className="relative flex-1 rounded-2xl overflow-hidden bg-surface block">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                        style={{ backgroundImage: `url(${project.image})` }} />
                                    <span className="absolute top-5 left-6 text-[5rem] font-black font-heading text-white/5 leading-none select-none">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-black/20">
                                        <span className="text-xs font-black uppercase tracking-widest border border-white px-6 py-3 rounded-full backdrop-blur-sm">View Case</span>
                                    </div>
                                </Link>
                                <div className="flex flex-col gap-1 pb-4">
                                    <h3 className="text-xl font-black font-heading group-hover:text-accent transition-colors">{project.title}</h3>
                                    <p className="text-xs text-accent uppercase tracking-[0.2em] font-bold">{project.category}</p>
                                    <p className="max-w-2xl text-sm text-foreground/70 leading-relaxed mt-1">{project.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

/* ─── TABLET ─── */
function TabletPortfolio() {
    return (
        <section id="work" className="w-full px-8 py-20">
            <div className="mb-10 space-y-3">
                <h2 className="max-w-5xl text-[clamp(2rem,5vw,4rem)] font-black uppercase font-heading">
                    Selected <span className="text-accent">Work</span>
                </h2>
                <p className="max-w-2xl text-base text-foreground/70">Every project is a collaboration.</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="group space-y-3"
                    >
                        <Link href={project.href} className="rounded-xl overflow-hidden aspect-[4/3] bg-surface block">
                            <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url(${project.image})` }} />
                        </Link>
                        <div className="space-y-1">
                            <h3 className="text-lg font-black font-heading group-hover:text-accent transition-colors">{project.title}</h3>
                            <p className="text-xs text-accent uppercase tracking-widest font-bold">{project.category}</p>
                            <p className="max-w-2xl text-sm text-foreground/70">{project.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

/* ─── MOBILE ─── */
function MobilePortfolio() {
    return (
        <section id="work" className="w-full px-5 py-16">
            <div className="mb-8 space-y-2">
                <h2 className="max-w-5xl text-2xl font-black uppercase font-heading">
                    Selected <span className="text-accent">Work</span>
                </h2>
            </div>
            <div className="flex flex-col divide-y divide-white/8">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
                        className="py-8 space-y-3"
                    >
                        <Link href={project.href} className="rounded-xl overflow-hidden w-full aspect-[4/3] bg-surface block">
                            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }} />
                        </Link>
                        <div className="space-y-1">
                            <p className="text-[10px] text-accent uppercase tracking-widest font-bold">{project.category}</p>
                            <h3 className="text-xl font-black font-heading">{project.title}</h3>
                            <p className="max-w-2xl text-sm text-foreground/70">{project.desc}</p>
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
