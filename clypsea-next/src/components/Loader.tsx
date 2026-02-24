"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        >
            <motion.div
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="mb-12 flex justify-center items-center h-24"
            >
                <img
                    src="/logo.png"
                    alt="Clypsea Logo"
                    className="h-10 md:h-14 w-auto object-contain"
                />
            </motion.div>

            <div className="w-64 h-[2px] bg-white/20 relative overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute inset-y-0 left-0 bg-accent"
                />
            </div>
        </motion.div>
    );
}
