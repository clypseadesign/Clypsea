"use client";

import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <section className="py-20 lg:py-32 bg-accent text-background relative overflow-hidden">
            {/* Decorative blobs — purely visual, contained */}
            <div aria-hidden className="absolute top-[-30%] right-[-10%] w-[40vw] h-[40vw] bg-white/15 rounded-full blur-[100px] pointer-events-none" />
            <div aria-hidden className="absolute bottom-[-30%] left-[-10%] w-[35vw] h-[35vw] bg-black/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                    className="text-[clamp(2.5rem,8vw,7rem)] leading-[0.92] font-black uppercase font-heading tracking-tight mb-6"
                >
                    Let's Build Something <span className="text-white block">Different.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-2xl font-medium max-w-xl mx-auto mb-12 opacity-80 font-heading"
                >
                    Ready to elevate your brand with creativity and strategy?
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a href="#contact" className="flex items-center justify-center text-sm tracking-[0.2em] uppercase font-black bg-background text-foreground px-10 py-5 rounded-full hover:bg-white transition-colors duration-300 shadow-xl">
                        Start Your Project
                    </a>
                    <a href="mailto:hello@clypsea.com" className="flex items-center justify-center text-sm tracking-[0.2em] uppercase font-bold border-2 border-background/30 text-background px-10 py-5 rounded-full hover:border-background transition-colors duration-300">
                        Book a Consultation
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
