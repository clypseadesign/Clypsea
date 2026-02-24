"use client";

import { motion } from "framer-motion";

const steps = [
    { num: "01", title: "Discover", desc: "We start by understanding your brand, audience, and goals." },
    { num: "02", title: "Design", desc: "We transform strategy into powerful visuals and digital experiences." },
    { num: "03", title: "Develop", desc: "We build scalable, high-performance digital products." },
    { num: "04", title: "Grow", desc: "We launch, optimize, and continuously improve for measurable results." },
];

export default function ProcessSection() {
    return (
        <section id="process" className="py-32 px-6 md:px-12 bg-surface">
            <div className="flex flex-col xl:flex-row gap-24">
                <div className="xl:w-1/3">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-[clamp(2.5rem,4vw,4.5rem)] leading-[1.1] font-black uppercase font-heading relative xl:sticky top-32 mb-12 xl:mb-0 break-words"
                    >
                        How We <br /><span className="text-accent">Work</span>
                    </motion.h2>
                </div>

                <div className="xl:w-2/3 flex flex-col pt-12">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.num}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="flex flex-col md:flex-row gap-6 md:gap-12 pb-16 md:pb-24 border-b border-white/5 last:border-0 last:pb-0 mb-16 md:mb-24 last:mb-0 items-start"
                        >
                            <div className="text-4xl md:text-5xl font-black font-heading text-accent/50 leading-none select-none w-16 md:w-24 flex-shrink-0 mt-1">
                                {step.num}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-[clamp(1.5rem,3vw,3rem)] leading-[1.1] font-bold font-heading mb-4 md:mb-6">{step.title}</h3>
                                <p className="text-lg md:text-xl text-foreground/70 max-w-xl leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="mt-48 text-center"
            >
                <h2 className="text-[clamp(2rem,4vw,4.5rem)] leading-[1.1] font-black uppercase font-heading tracking-tighter break-words px-4">
                    We don't do <span className="bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent">boring.</span><br />
                    We build brands<br />
                    that can't be ignored.
                </h2>
            </motion.div>
        </section>
    );
}
