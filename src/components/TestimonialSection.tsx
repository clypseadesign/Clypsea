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
        <section id="testimonials" className="py-32 px-6 md:px-12 bg-surface">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase font-heading">
                        What Our <span className="text-accent">Clients Say</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="bg-background p-10 rounded-3xl border border-white/5 relative group hover:border-accent/30 transition-colors"
                        >
                            <Quote className="text-white/10 w-16 h-16 absolute top-6 left-6 group-hover:text-accent/20 transition-colors duration-500" />
                            <div className="relative z-10 pt-12 flex flex-col h-full justify-between">
                                <p className="text-xl md:text-2xl font-medium font-heading leading-relaxed mb-8">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center font-bold text-accent font-heading border border-white/10">
                                        {testimonial.author.charAt(0)}
                                    </div>
                                    <p className="font-bold text-foreground/80 tracking-wide uppercase text-sm">
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
