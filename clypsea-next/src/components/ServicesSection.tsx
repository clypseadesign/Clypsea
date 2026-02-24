"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/utils/cn";

const services = [
    {
        id: "01",
        title: "Creative Design",
        desc: "We design visual identities and digital experiences that leave a lasting impression.",
        list: ["Branding & Identity", "Graphic Design", "UI/UX Design", "Social Media Design", "Creative Direction"],
        img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    },
    {
        id: "02",
        title: "Digital Marketing",
        desc: "We help brands grow, connect, and convert through data-driven marketing strategies.",
        list: ["Social Media Management", "Paid Advertising (Meta, Google)", "SEO Optimization", "Content Strategy", "Performance Marketing"],
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    },
    {
        id: "03",
        title: "Web Development",
        desc: "We build modern, fast, and scalable websites that turn visitors into customers.",
        list: ["Custom Websites", "E-commerce Stores", "Landing Pages", "Web Applications", "Website Maintenance"],
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop",
    },
];

export default function ServicesSection() {
    const containerRef = useRef<HTMLElement>(null);

    return (
        <section id="services" ref={containerRef} className="py-32 px-6 md:px-12 bg-surface">
            <div className="mb-24 flex flex-col items-start gap-8">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black uppercase font-heading"
                >
                    What <span className="text-accent">We Do</span>
                </motion.h2>
            </div>

            <div className="flex flex-col">
                {services.map((service, i) => (
                    <ServiceRow key={service.id} service={service} index={i} />
                ))}
            </div>
        </section>
    );
}

function ServiceRow({ service, index }: { service: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={cn(
                "group relative grid grid-cols-1 lg:grid-cols-[60px_1fr_1.5fr_300px] items-start lg:items-center gap-8 py-16 border-t border-white/10 overflow-hidden",
                index === 2 && "border-b"
            )}
        >
            <div className="font-heading text-xl text-accent font-bold lg:mt-0">{service.id}</div>

            <div>
                <h3 className="text-3xl lg:text-5xl font-black uppercase font-heading group-hover:text-accent transition-colors duration-500">
                    {service.title}
                </h3>
            </div>

            <div className="flex flex-col gap-4 text-foreground/80">
                <p className="text-lg font-medium font-heading">
                    {service.desc}
                </p>
                <ul className="flex flex-col gap-2 mt-2">
                    {service.list.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent min-w-[6px]" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Static Image block instead of hover overlay */}
            <div className="w-full aspect-video lg:aspect-square lg:h-[220px] rounded-2xl relative overflow-hidden mt-6 lg:mt-0">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${service.img})` }}
                />
            </div>
        </motion.div>
    );
}
