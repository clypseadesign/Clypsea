"use client";

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const background = useTransform(
        scrollY,
        [0, 100],
        ['rgba(13, 13, 13, 0)', 'rgba(13, 13, 13, 0.8)']
    );
    const backdropFilter = useTransform(
        scrollY,
        [0, 100],
        ['blur(0px)', 'blur(10px)']
    );

    // Close menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent scroll when menu open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const navLinks = [
        { href: '#services', label: 'Services' },
        { href: '#work', label: 'Work' },
        { href: '#process', label: 'Process' },
    ];

    return (
        <>
            <motion.nav
                style={{ background, backdropFilter }}
                className="fixed top-0 left-0 right-0 z-40 px-6 py-5 md:px-12 md:py-6 flex justify-between items-center transition-colors duration-300"
            >
                <Link href="/" className="z-50 flex items-center" onClick={() => setMenuOpen(false)}>
                    <img
                        src="/logo.png"
                        alt="Clypsea Logo"
                        className="h-6 md:h-8 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-12 font-semibold text-sm tracking-wider uppercase">
                    {navLinks.map(link => (
                        <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
                    ))}
                    <Link
                        href="#contact"
                        className="relative px-7 py-2.5 rounded-full border border-accent text-accent text-xs font-black tracking-widest uppercase overflow-hidden group shadow-[0_0_16px_rgba(182,233,73,0.2)] hover:shadow-[0_0_24px_rgba(182,233,73,0.45)] transition-all duration-300"
                    >
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-background">Let's Talk</span>
                        <div className="absolute inset-0 bg-accent transition-transform duration-300 translate-y-full group-hover:translate-y-0 rounded-full" />
                    </Link>
                </div>

                {/* Hamburger Button */}
                <button
                    className="md:hidden z-50 flex flex-col justify-center items-center gap-[6px] w-10 h-10 rounded-full border border-white/10 hover:border-accent/50 transition-colors"
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-label="Toggle menu"
                >
                    <motion.span
                        animate={menuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                        className="block w-5 h-[1.5px] bg-foreground origin-center transition-all"
                    />
                    <motion.span
                        animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                        className="block w-5 h-[1.5px] bg-foreground origin-center transition-all"
                    />
                    <motion.span
                        animate={menuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                        className="block w-5 h-[1.5px] bg-foreground origin-center transition-all"
                    />
                </button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-30 bg-background/95 backdrop-blur-xl flex flex-col items-start justify-center px-8 pt-24 pb-12"
                    >
                        <div className="flex flex-col gap-8 w-full">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.08 + 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="text-5xl font-black uppercase font-heading text-foreground/80 hover:text-accent transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.35, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="mt-4 pt-8 border-t border-white/10 w-full"
                            >
                                <Link
                                    href="#contact"
                                    onClick={() => setMenuOpen(false)}
                                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent text-background font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
                                >
                                    Let's Talk
                                </Link>
                            </motion.div>
                        </div>

                        {/* Decorative accent glow */}
                        <div className="absolute bottom-0 left-0 w-[60vw] h-[30vh] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="relative group overflow-hidden">
            <span>{children}</span>
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-accent -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
        </Link>
    );
}
