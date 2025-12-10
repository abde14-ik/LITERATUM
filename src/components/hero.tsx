"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";

const heroVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export function HeroSection() {
    const { content } = useLanguage();
    const hero = content.hero;

    return (
        <motion.section
            id="hero"
            className="scroll-mt-32 pt-4 sm:pt-8 lg:pt-10 max-w-[100vw] overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={heroVariants}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-16 xl:grid-cols-[1.1fr_0.9fr] xl:items-center">
                {/* Left column: intro and CTAs */}
                <div className="relative z-10 space-y-6">
                    <p className="flex items-center gap-2 text-[0.7rem] font-semibold text-gold/80 sm:text-xs tracking-[0.25em] uppercase">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                        <span>{hero.statusDot}</span>
                    </p>

                    <div>
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-parchment">
                            LITERATUM
                        </h1>
                        <p className="mt-3 text-lg md:text-xl text-parchment/85 font-serif">
                            {hero.engineeringMeetsHumanity}
                        </p>
                        {hero.establishedLine && (
                            <p className="mt-1 text-xs sm:text-sm font-serif tracking-[0.35em] text-gold/70 uppercase">
                                {hero.establishedLine}
                            </p>
                        )}
                        {hero.bio && (
                            <p className="mt-4 max-w-xl text-sm sm:text-base text-parchment/70 leading-relaxed">
                                {hero.bio}
                            </p>
                        )}
                    </div>
                </div>

                {/* Right column: Vintage library checkout card */}
                <div className="mt-8 xl:mt-0 md:pl-6 lg:pl-10">
                    <div className="relative max-w-xs sm:max-w-sm -rotate-1 rounded-lg bg-[#F2E8C9] px-5 py-5 sm:px-6 sm:py-6 text-[#1a1a1a] shadow-lg shadow-black/40">
                        {/* Stamp */}
                        <div className="pointer-events-none absolute right-4 top-8 -rotate-12">
                            <div className="border border-red-900/40 px-3 py-1 text-[0.65rem] font-mono uppercase tracking-[0.25em] text-red-900/60 mix-blend-multiply">
                                In Progress
                            </div>
                        </div>

                        {/* Header */}
                        <p className="font-mono text-[0.7rem] tracking-[0.32em] text-[#C5A059] uppercase">
                            Official Record
                        </p>
                        <p className="mt-1 text-[0.65rem] font-mono uppercase tracking-[0.28em] text-[#C5A059]">
                            Literatum Reading Ledger
                        </p>

                        <div className="mt-4 space-y-4 text-xs">
                            <div>
                                <p className="font-mono text-[0.65rem] uppercase tracking-[0.26em] text-[#C5A059]">
                                    Current Volume
                                </p>
                                <p className="mt-1 text-xl sm:text-2xl text-espresso font-serif italic leading-snug">
                                    {hero.statusBookValue}
                                </p>
                                <p className="text-sm text-espresso/80 italic">
                                    {hero.statusBookAuthor}
                                </p>
                                {hero.statusBookSubtitle && (
                                    <p className="mt-1 text-[0.75rem] text-espresso/70">
                                        {hero.statusBookSubtitle}
                                    </p>
                                )}
                            </div>

                            <div className="pt-3 border-t border-espresso/15 grid grid-cols-2 gap-4">
                                <div>
                                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.26em] text-[#C5A059]">
                                        Theme
                                    </p>
                                    <p className="mt-1 text-[0.8rem] text-espresso/80">
                                        {hero.snapshotStacksValue}
                                    </p>
                                </div>
                                <div>
                                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.26em] text-[#C5A059]">
                                        Status
                                    </p>
                                    <p className="mt-1 text-[0.8rem] text-espresso/80">
                                        {hero.statusRunValue}
                                    </p>
                                </div>
                            </div>

                            <div className="pt-3 border-t border-dashed border-espresso/20">
                                <p className="font-mono text-[0.65rem] uppercase tracking-[0.26em] text-[#C5A059]">
                                    Notes
                                </p>
                                <p className="mt-1 text-[0.8rem] text-espresso/80">
                                    {hero.statusRunSubtitle}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

