"use client";

import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <section className="relative py-24 bg-accent text-background overflow-hidden">
            {/* Decorative blobs — purely visual */}
            <div aria-hidden className="absolute top-[-30%] right-[-5%] w-[35vw] h-[35vw] bg-white/15 rounded-full blur-[100px] pointer-events-none" />
            <div aria-hidden className="absolute bottom-[-20%] left-[-5%] w-[30vw] h-[30vw] bg-black/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Intentionally centered — this is the CTA block */}
            <div className="relative z-10 px-6 md:px-10 lg:px-20 flex flex-col items-center text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    className="text-xs font-black tracking-[0.4em] uppercase mb-6 opacity-60"
                >
                    Ready to Begin?
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-[clamp(2.5rem,7vw,7rem)] leading-[0.92] font-black uppercase font-heading tracking-tight max-w-4xl mb-8"
                >
                    Let's Build Something <span className="text-white">Different.</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-base md:text-xl font-medium max-w-xl mb-12 opacity-80 leading-relaxed"
                >
                    Ready to elevate your brand with creativity and strategy that actually drives growth?
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <a href="#contact" className="text-sm font-black tracking-[0.15em] uppercase bg-background text-foreground px-10 py-4 rounded-full hover:bg-white transition-colors duration-300 shadow-xl">
                        Start Your Project
                    </a>
                    <a href="mailto:clypse.design.agency@gmail.com" className="text-sm font-black tracking-[0.15em] uppercase border-2 border-background/40 px-10 py-4 rounded-full hover:border-background transition-colors duration-300">
                        Book a Call
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
