"use client";

import { motion } from "framer-motion";

const reasons = [
    { title: "Strategy First", desc: "Every creative decision has purpose." },
    { title: "Design With Impact", desc: "We create bold, memorable visuals." },
    { title: "Results Focused", desc: "Growth and performance matter." },
    { title: "Collaborative Approach", desc: "We work with you, not just for you." },
];

export default function WhySection() {
    return (
        <section id="why-us" className="py-20 md:py-28 lg:py-32 px-5 md:px-10 lg:px-16 bg-background border-y border-white/5">
            <div className="max-w-7xl mx-auto">

                {/* Mobile: stacked header + cards
                    Desktop: 2-col sticky layout */}
                <div className="flex flex-col xl:flex-row gap-12 md:gap-16 lg:gap-24 items-start">

                    <div className="xl:w-1/2 relative xl:sticky top-32 xl:h-fit">
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-[clamp(2.2rem,5vw,5rem)] leading-[1.1] font-black uppercase font-heading mb-5 md:mb-8 break-words"
                        >
                            Why Choose <br /><span className="bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent pb-2 block">Clypsea?</span>
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl lg:text-4xl font-heading font-bold text-foreground/80 leading-tight"
                        >
                            We don't follow trends.<br />
                            We create experiences that lead them.
                        </motion.div>
                    </div>

                    {/* Mobile: 2×2 grid; Desktop: single column */}
                    <div className="xl:w-1/2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4 md:gap-5 lg:gap-8">
                        {reasons.map((reason, i) => (
                            <motion.div
                                key={reason.title}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="bg-surface p-6 md:p-8 lg:p-12 rounded-2xl lg:rounded-3xl border border-white/5 hover:border-accent/50 transition-colors group"
                            >
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-heading mb-2 md:mb-3 lg:mb-4 group-hover:text-accent transition-colors">{reason.title}</h3>
                                <p className="text-base md:text-lg lg:text-xl text-foreground/60">{reason.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
