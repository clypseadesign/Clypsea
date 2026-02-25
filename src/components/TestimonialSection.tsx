"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Clypsea completely transformed our online presence. The design, strategy, and execution were beyond expectations.",
        author: "Tech Startup CEO"
    },
    {
        quote: "Their creativity and marketing expertise helped us scale faster than we imagined.",
        author: "E-Commerce Founder"
    },
    {
        quote: "Professional, innovative, and truly dedicated to results.",
        author: "Marketing Director"
    }
];

export default function TestimonialSection() {
    return (
        <section id="testimonials" className="py-20 md:py-28 lg:py-32 px-5 md:px-10 lg:px-16 bg-surface">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 md:mb-20 lg:mb-24"
                >
                    {/* Mobile: left-aligned; md+: centered */}
                    <h2 className="text-[clamp(2rem,7vw,7rem)] font-black uppercase font-heading leading-[1.05] text-left md:text-center">
                        What Our <span className="text-accent">Clients Say</span>
                    </h2>
                </motion.div>

                {/* Mobile: single column stacked cards
                    Tablet: 2-col grid, last one full-width
                    Desktop: 3-col grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className={`bg-background p-7 md:p-8 lg:p-10 rounded-2xl lg:rounded-3xl border border-white/5 relative group hover:border-accent/30 transition-colors
                                ${i === 2 ? 'md:col-span-2 lg:col-span-1' : ''}
                            `}
                        >
                            <Quote className="text-white/10 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 absolute top-5 left-5 md:top-6 md:left-6 group-hover:text-accent/20 transition-colors duration-500" />
                            <div className="relative z-10 pt-10 md:pt-12 flex flex-col h-full justify-between gap-6">
                                <p className="text-lg md:text-xl lg:text-2xl font-medium font-heading leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex items-center gap-3 md:gap-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-surface rounded-full flex items-center justify-center font-bold text-accent font-heading border border-white/10 text-sm md:text-base">
                                        {testimonial.author.charAt(0)}
                                    </div>
                                    <p className="font-bold text-foreground/80 tracking-wide uppercase text-xs md:text-sm">
                                        {testimonial.author}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
