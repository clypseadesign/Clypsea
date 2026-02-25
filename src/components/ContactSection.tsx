"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setStatus("success");
            setFormData({ name: "", email: "", company: "", service: "", budget: "", message: "" });

            // Reset success message after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error: any) {
            console.error("Submission error:", error);
            setStatus("error");
            setErrorMessage(error.message || "An unexpected error occurred. Please try again.");
        }
    };

    return (
        <section id="contact" className="py-20 md:py-28 lg:py-32 px-5 md:px-10 lg:px-16 min-h-screen flex flex-col justify-center">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-14 md:gap-20 lg:gap-24">

                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-[clamp(2.2rem,5vw,5rem)] leading-tight font-black uppercase font-heading mb-4 md:mb-6 break-words">
                            Start the<br />Conversation
                        </h2>
                        <p className="text-base md:text-xl text-foreground/70 max-w-sm mb-10 md:mb-16">
                            Ready to push the boundaries? Reach out to us.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col gap-3 md:gap-4 font-heading text-lg md:text-2xl font-bold"
                    >
                        <a href="mailto:clypse.design.agency@gmail.com" className="hover:text-accent transition-colors w-fit break-all text-base md:text-xl lg:text-2xl">clypse.design.agency@gmail.com</a>
                        <a href="tel:+916382354705" className="hover:text-accent transition-colors w-fit">+91 6382354705</a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
                        <div className="relative group">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your Name"
                                className="w-full bg-transparent border-b border-foreground/30 py-4 text-xl outline-none focus:border-accent transition-colors peer"
                                disabled={status === 'loading'}
                            />
                        </div>
                        <div className="relative group">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Email Address"
                                className="w-full bg-transparent border-b border-foreground/30 py-4 text-xl outline-none focus:border-accent transition-colors peer"
                                disabled={status === 'loading'}
                            />
                        </div>
                        <div className="relative group">
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Company Name"
                                className="w-full bg-transparent border-b border-foreground/30 py-4 text-xl outline-none focus:border-accent transition-colors peer"
                                disabled={status === 'loading'}
                            />
                        </div>
                        <div className="relative group">
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-b border-foreground/30 py-4 text-xl outline-none focus:border-accent transition-colors peer text-foreground/50 focus:text-foreground appearance-none cursor-pointer"
                                disabled={status === 'loading'}
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
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                placeholder="Project Budget (Optional)"
                                className="w-full bg-transparent border-b border-foreground/30 py-4 text-xl outline-none focus:border-accent transition-colors peer"
                                disabled={status === 'loading'}
                            />
                        </div>
                        <div className="relative group">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Your Message"
                                rows={4}
                                className="w-full bg-transparent border-b border-foreground/30 py-4 text-xl outline-none focus:border-accent transition-colors peer resize-none"
                                disabled={status === 'loading'}
                            />
                        </div>

                        <div className="flex flex-col gap-4">
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="relative w-fit px-12 py-5 rounded-full border border-foreground overflow-hidden group mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span className="relative z-10 font-heading font-bold uppercase tracking-widest transition-colors duration-300 group-hover:text-background">
                                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                                </span>
                                <div className="absolute inset-x-0 bottom-0 h-0 bg-accent transition-all duration-300 ease-out group-hover:h-full z-0" />
                            </button>

                            {status === 'success' && (
                                <p className="text-accent font-bold">Thank you! Your message has been successfully sent.</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-500 font-bold">{errorMessage}</p>
                            )}
                        </div>
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
                    <a href="https://www.instagram.com/clypsea/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Instagram</a>
                    <a href="https://www.linkedin.com/company/clypsea/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
                </div>
            </motion.footer>
        </section>
    );
}
