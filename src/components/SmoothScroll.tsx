"use client";

import { ReactNode, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { usePathname } from 'next/navigation';

export default function SmoothScroll({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Reset scroll when route changes
        lenis.scrollTo(0, { immediate: true });

        return () => {
            lenis.destroy();
        };
    }, [pathname]);

    return <>{children}</>;
}
