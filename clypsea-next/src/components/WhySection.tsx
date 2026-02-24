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
        <section id="why-us" className="py-32 px-6 md:px-12 bg-background border-y border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-24 items-start">

                <div className="xl:w-1/2 relative xl:sticky top-32 xl:h-fit">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-[clamp(2.5rem,5vw,5rem)] leading-[1.1] font-black uppercase font-heading mb-8 break-words"
                    >
                        Why Choose <br /><span className="bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent pb-2 block">Clypsea?</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-2xl md:text-4xl font-heading font-bold text-foreground/80 leading-tight pb-8 lg:pb-0"
                    >
                        We don't follow trends.<br />
                        We create experiences that lead them.
                    </motion.div>
                </div>

                <div className="xl:w-1/2 flex flex-col gap-8">
                    {reasons.map((reason, i) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="bg-surface p-8 md:p-12 rounded-3xl border border-white/5 hover:border-accent/50 transition-colors group"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4 group-hover:text-accent transition-colors">{reason.title}</h3>
                            <p className="text-xl text-foreground/60">{reason.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
