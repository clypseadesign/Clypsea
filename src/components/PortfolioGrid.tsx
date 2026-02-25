"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/utils/cn";

const projects = [
    {
        id: 1,
        title: 'Aura Branding',
        category: 'Branding | Web Design | Marketing',
        desc: 'We crafted a bold visual identity and built a high-performing website designed to convert and scale.',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80',
        size: 'large'
    },
    {
        id: 2,
        title: 'Nexus Web',
        category: 'Web Development | SEO',
        desc: 'A complete platform overhaul resulting in a 200% increase in user engagement and seamless performance.',
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80',
        size: 'small'
    },
    {
        id: 3,
        title: 'Zephyr Campaign',
        category: 'Digital Marketing | Social',
        desc: 'A targeted brand awareness campaign that drove exceptional social reach and customer acquisition.',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80',
        size: 'medium'
    },
    {
        id: 4,
        title: 'Nova UI/UX',
        category: 'App Design | Strategy',
        desc: 'Intuitive application design focusing on user retention, frictionless onboarding, and modern aesthetics.',
        image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1200&q=80',
        size: 'large'
    },
];

export default function PortfolioGrid() {
    return (
        <section id="work" className="py-32 px-6 md:px-12">
            <div className="mb-24">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-[clamp(2.5rem,7vw,8rem)] font-black uppercase font-heading mb-8"
                >
                    Selected <span className="text-accent">Work</span>
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-foreground/70 max-w-2xl font-medium"
                >
                    <p>Every project is a collaboration.</p>
                    <p>Here are some of the brands we’ve helped transform.</p>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-8 md:gap-y-32">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Parallax effect on image
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div
            ref={ref}
            className={cn(
                "group cursor-pointer flex flex-col gap-6",
                project.size === 'large' ? "md:col-span-8" :
                    project.size === 'medium' ? "md:col-span-6 md:col-start-2" :
                        "md:col-span-4 md:col-start-9 md:mt-32"
            )}
        >
            <div className="overflow-hidden bg-surface relative rounded-2xl w-full aspect-[4/3] md:aspect-auto md:h-[600px]">
                <motion.div
                    style={{ y }}
                    className="absolute inset-[-15%] w-[130%] h-[130%]"
                >
                    <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                        style={{ backgroundImage: `url(${project.image})` }}
                    />
                </motion.div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center pointer-events-none">
                </div>
            </div>

            <div className="flex flex-col gap-3 group-hover:translate-x-4 transition-transform duration-500">
                <h3 className="text-3xl md:text-4xl font-bold font-heading">{project.title}</h3>
                <p className="text-sm tracking-[0.2em] text-accent uppercase font-bold">{project.category}</p>
                <p className="text-foreground/70 mt-2">{project.desc}</p>
                <div className="mt-4 flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors w-fit pb-1 border-b border-white/20 hover:border-accent">
                    View Case Study
                </div>
            </div>
        </div>
    );
}
