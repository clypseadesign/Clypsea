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
        <section id="process" className="py-20 md:py-28 lg:py-32 px-5 md:px-10 lg:px-16 bg-surface">
            <div className="flex flex-col xl:flex-row gap-12 md:gap-16 lg:gap-24">
                <div className="xl:w-1/3">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-[clamp(2.5rem,4vw,4.5rem)] leading-[1.1] font-black uppercase font-heading relative xl:sticky top-32 mb-0 break-words"
                    >
                        How We <br /><span className="text-accent">Work</span>
                    </motion.h2>
                </div>

                <div className="xl:w-2/3 flex flex-col pt-0 xl:pt-12">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.num}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="flex flex-row gap-5 md:gap-8 lg:gap-12 pb-10 md:pb-16 lg:pb-24 border-b border-white/5 last:border-0 last:pb-0 mb-10 md:mb-16 lg:mb-24 last:mb-0 items-start"
                        >
                            {/* Mobile: smaller number; Desktop: bigger */}
                            <div className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-accent/50 leading-none select-none w-12 md:w-16 lg:w-24 flex-shrink-0 mt-1">
                                {step.num}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-[clamp(1.4rem,2.5vw,3rem)] leading-[1.1] font-bold font-heading mb-3 md:mb-4 lg:mb-6">{step.title}</h3>
                                <p className="text-base md:text-lg lg:text-xl text-foreground/70 max-w-xl leading-relaxed">
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
                className="mt-24 md:mt-36 lg:mt-48 text-center"
            >
                <h2 className="text-[clamp(1.8rem,4vw,4.5rem)] leading-[1.1] font-black uppercase font-heading tracking-tighter break-words px-2 md:px-4">
                    We don't do <span className="bg-gradient-to-r from-[#b6e949] via-[#fa2472] to-[#7a15df] bg-clip-text text-transparent">boring.</span><br />
                    We build brands<br />
                    that can't be ignored.
                </h2>
            </motion.div>
        </section>
    );
}
