"use client";

import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <section className="py-32 px-6 md:px-12 bg-accent text-background relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-white/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] bg-black/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-[clamp(3rem,8vw,7rem)] leading-[0.9] font-black uppercase font-heading tracking-tighter mb-8"
                >
                    Let's Build Something <br /><span className="text-white">Different.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-3xl font-medium max-w-2xl mb-16 opacity-90 font-heading"
                >
                    Ready to elevate your brand with creativity and strategy?
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
                >
                    <a
                        href="#contact"
                        className="group flex flex-1 sm:flex-none items-center justify-center gap-4 text-sm tracking-[0.2em] uppercase font-black bg-background text-foreground px-10 py-5 rounded-full hover:bg-white transition-colors duration-300 shadow-xl"
                    >
                        Start Your Project
                    </a>
                    <a
                        href="mailto:hello@clypsea.com"
                        className="group flex flex-1 sm:flex-none items-center justify-center gap-4 text-sm tracking-[0.2em] uppercase font-bold border-2 border-background/30 text-background px-10 py-5 rounded-full hover:border-background transition-colors duration-300"
                    >
                        Book a Consultation
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
