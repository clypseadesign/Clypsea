"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
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

    return (
        <motion.nav
            style={{ background, backdropFilter }}
            className="fixed top-0 left-0 right-0 z-40 px-6 py-6 md:px-12 flex justify-between items-center transition-colors duration-300"
        >
            <Link href="/" className="z-50 flex items-center">
                <img
                    src="/logo.png"
                    alt="Clypsea Logo"
                    className="h-6 md:h-8 w-auto object-contain"
                />
            </Link>

            <div className="hidden md:flex items-center gap-12 font-semibold text-sm tracking-wider uppercase">
                <NavLink href="#services">Services</NavLink>
                <NavLink href="#work">Work</NavLink>
                <NavLink href="#process">Process</NavLink>
                <Link
                    href="#contact"
                    className="relative px-8 py-3 rounded-full border border-accent text-accent overflow-hidden group"
                >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-background">Let's Talk</span>
                    <div className="absolute inset-0 bg-accent transition-transform duration-300 translate-y-full group-hover:translate-y-0" />
                </Link>
            </div>
        </motion.nav>
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
