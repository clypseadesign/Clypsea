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
        <section id="services" ref={containerRef} className="py-20 md:py-28 lg:py-32 px-5 md:px-10 lg:px-16 bg-surface">
            <div className="mb-12 md:mb-20 lg:mb-24 flex flex-col items-start gap-4 md:gap-6 lg:gap-8">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-[clamp(2.5rem,7vw,8rem)] font-black uppercase font-heading"
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
                "group relative py-10 md:py-14 lg:py-16 border-t border-white/10 overflow-hidden",
                index === 2 && "border-b"
            )}
        >
            {/* Mobile layout: stacked vertically */}
            <div className="flex flex-col lg:hidden gap-5">
                <div className="flex items-center gap-4">
                    <span className="font-heading text-base text-accent font-bold">{service.id}</span>
                    <h3 className="text-2xl md:text-3xl font-black uppercase font-heading group-hover:text-accent transition-colors duration-500">
                        {service.title}
                    </h3>
                </div>
                <div className="w-full aspect-video rounded-xl overflow-hidden">
                    <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                        style={{ backgroundImage: `url(${service.img})` }}
                    />
                </div>
                <p className="text-base text-foreground/80 font-medium">{service.desc}</p>
                <ul className="flex flex-wrap gap-x-4 gap-y-2">
                    {service.list.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-foreground/60">
                            <span className="w-1 h-1 rounded-full bg-accent min-w-[4px]" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Desktop layout: 4-column grid */}
            <div className="hidden lg:grid grid-cols-[60px_1fr_1.5fr_300px] items-center gap-8">
                <div className="font-heading text-xl text-accent font-bold">{service.id}</div>
                <div>
                    <h3 className="text-3xl xl:text-5xl font-black uppercase font-heading group-hover:text-accent transition-colors duration-500">
                        {service.title}
                    </h3>
                </div>
                <div className="flex flex-col gap-4 text-foreground/80">
                    <p className="text-lg font-medium font-heading">{service.desc}</p>
                    <ul className="flex flex-col gap-2 mt-2">
                        {service.list.map((item: string, idx: number) => (
                            <li key={idx} className="flex items-center gap-3 text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent min-w-[6px]" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full aspect-square h-[200px] xl:h-[220px] rounded-2xl relative overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                        style={{ backgroundImage: `url(${service.img})` }}
                    />
                </div>
            </div>
        </motion.div>
    );
}
