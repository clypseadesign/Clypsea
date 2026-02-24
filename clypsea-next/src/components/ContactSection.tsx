"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
    return (
        <section id="contact" className="py-32 px-6 md:px-12 min-h-screen flex flex-col justify-center">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-24">

                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-[clamp(2.5rem,5vw,5rem)] leading-tight font-black uppercase font-heading mb-6 break-words">
                            Start the<br />Conversation
                        </h2>
                        <p className="text-xl text-foreground/70 max-w-sm mb-16">
                            Ready to push the boundaries? Reach out to us.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col gap-4 font-heading text-2xl font-bold"
                    >
                        <a href="mailto:hello@clypsea.com" className="hover:text-accent transition-colors w-fit">hello@clypsea.com</a>
                        <a href="tel:+1234567890" className="hover:text-accent transition-colors w-fit">+1 234 567 890</a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <form className="flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
                        <div className="relative group">
                            <input
                                type="text"
                                required
                                placeholder="Your Name"
                                className="w-full bg-transparent border-b border-foreground/30 py-4 text-xl outline-none focus:border-accent transition-colors peer"
                            />
                        </div>
                        <div className="relative group">
                            <input
                                type="email"
                                required
                                placeholder="Email Address"
                                className="w-full bg-transparent border-b border-foreground/30 py-4 text-xl outline-none focus:border-accent transition-colors peer"
                            />
                        </div>
                        <div className="relative group">
                            <input
                                type="text"
                                required
                                placeholder="Company Name"
                                className="w-full bg-transparent border-b border-foreground/30 py-4 text-xl outline-none focus:border-accent transition-colors peer"
                            />
                        </div>
                        <div className="relative group">
                            <select
                                required
                                defaultValue=""
                                className="w-full bg-transparent border-b border-foreground/30 py-4 text-xl outline-none focus:border-accent transition-colors peer text-foreground/50 focus:text-foreground appearance-none cursor-pointer"
                            >
                                <option value="" disabled className="bg-surface text-foreground">Service Needed (Select)</option>
                                <option value="branding" className="bg-surface text-foreground">Branding & Identity</option>
                                <option value="web" className="bg-surface text-foreground">Web Design & Development</option>
                                <option value="marketing" className="bg-surface text-foreground">Digital Marketing</option>
                                <option value="other" className="bg-surface text-foreground">Other / Multiple Services</option>
                            </select>
                        </div>
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Project Budget (Optional)"
                                className="w-full bg-transparent border-b border-foreground/30 py-4 text-xl outline-none focus:border-accent transition-colors peer"
                            />
                        </div>
                        <div className="relative group">
                            <textarea
                                required
                                placeholder="Your Message"
                                rows={4}
                                className="w-full bg-transparent border-b border-foreground/30 py-4 text-xl outline-none focus:border-accent transition-colors peer resize-none"
                            />
                        </div>

                        <button className="relative w-fit px-12 py-5 rounded-full border border-foreground overflow-hidden group mt-4">
                            <span className="relative z-10 font-heading font-bold uppercase tracking-widest transition-colors duration-300 group-hover:text-background">
                                Send Message
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-0 bg-accent transition-all duration-300 ease-out group-hover:h-full z-0" />
                        </button>
                    </form>
                </motion.div>

            </div>

            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
            >
                <div>
                    <p className="text-foreground font-bold font-heading text-lg">Clypsea — Creative Digital Studio</p>
                    <p className="text-foreground/50 text-sm mt-1 uppercase tracking-widest font-bold">Design. Strategy. Growth.</p>
                </div>
                <div className="flex gap-8 text-sm uppercase tracking-widest font-bold font-heading">
                    <a href="#" className="hover:text-accent transition-colors">Instagram</a>
                    <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-accent transition-colors">Behance</a>
                </div>
            </motion.footer>
        </section>
    );
}
