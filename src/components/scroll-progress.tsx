"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    return (
        <div className="pointer-events-none fixed inset-y-24 right-4 z-30 hidden w-px sm:block lg:right-8">
            <div className="relative flex h-full w-full items-stretch justify-center">
                <div className="h-full w-px rounded-full bg-slate-800/70" />
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute inset-x-0 bottom-0 origin-bottom rounded-full bg-gradient-to-b from-violet-500 via-fuchsia-400 to-amber-300"
                />
            </div>
        </div>
    );
}
