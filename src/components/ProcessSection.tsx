"use client";

import { motion } from "framer-motion";
import { useDeviceType } from "@/hooks/useDeviceType";

const steps = [
    { num: "01", title: "Discover", desc: "We start by understanding your brand, audience, and goals." },
    { num: "02", title: "Design", desc: "We transform strategy into powerful visuals and digital experiences." },
    { num: "03", title: "Develop", desc: "We build scalable, high-performance digital products." },
    { num: "04", title: "Grow", desc: "We launch, optimize, and continuously improve for measurable results." },
];

function DesktopProcess() {
    return (
        <section id="process" className="py-32 px-16 bg-surface">
            <div className="flex gap-24 items-start">
                <div className="w-1/3 sticky top-32 h-fit">
                    <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-[clamp(3rem,5vw,5rem)] font-black uppercase font-heading leading-[1]">
                        How We <span className="text-accent block">Work</span>
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-6 text-foreground/50 leading-relaxed">
                        A proven process for exceptional results.
                    </motion.p>
                </div>
                <div className="w-2/3 flex flex-col pt-4">
                    {steps.map((s, i) => (
                        <motion.div key={s.num} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }} className="flex gap-10 pb-20 border-b border-white/5 last:border-0 mb-20 last:mb-0">
                            <div className="text-[5rem] font-black font-heading text-accent/20 leading-none select-none w-24 flex-shrink-0">{s.num}</div>
                            <div>
                                <h3 className="text-3xl font-black font-heading mb-3">{s.title}</h3>
                                <p className="text-lg text-foreground/60 leading-relaxed">{s.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function TabletProcess() {
    return (
        <section id="process" className="py-20 px-10 bg-surface">
            <h2 className="text-[clamp(2.5rem,7vw,5rem)] font-black uppercase font-heading mb-12">How We <span className="text-accent">Work</span></h2>
            <div className="grid grid-cols-2 gap-6">
                {steps.map((s, i) => (
                    <motion.div key={s.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-background/50 rounded-2xl p-8 border border-white/5">
                        <p className="text-4xl font-black font-heading text-accent/30 mb-4">{s.num}</p>
                        <h3 className="text-xl font-black font-heading mb-2">{s.title}</h3>
                        <p className="text-sm text-foreground/60 leading-relaxed">{s.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

function MobileProcess() {
    return (
        <section id="process" className="py-16 px-5 bg-surface">
            <h2 className="text-[clamp(2rem,10vw,3.5rem)] font-black uppercase font-heading mb-8">How We <span className="text-accent">Work</span></h2>
            <div className="flex flex-col">
                {steps.map((s, i) => (
                    <motion.div key={s.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="flex gap-5 py-6 border-b border-white/8 last:border-0">
                        <span className="text-2xl font-black font-heading text-accent/40 w-10 flex-shrink-0">{s.num}</span>
                        <div>
                            <h3 className="text-lg font-black font-heading mb-1">{s.title}</h3>
                            <p className="text-sm text-foreground/55 leading-relaxed">{s.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default function ProcessSection() {
    const device = useDeviceType();
    if (device === 'desktop') return <DesktopProcess />;
    if (device === 'tablet') return <TabletProcess />;
    return <MobileProcess />;
}
