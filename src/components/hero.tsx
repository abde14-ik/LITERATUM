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
    const ledger = hero.ledger;

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
                        {/* Header */}
                        <p className="font-mono text-[0.7rem] tracking-[0.32em] text-[#C5A059] uppercase">
                            {ledger?.header ?? "Library Card"}
                        </p>
                        <p className="mt-1 text-[0.65rem] font-mono uppercase tracking-[0.28em] text-[#C5A059]">
                            {ledger?.title ?? "CLUB LEDGER"}
                        </p>

                        <div className="mt-4 space-y-4 text-xs">
                            <div>
                                <p className="font-mono text-[0.65rem] uppercase tracking-[0.26em] text-[#C5A059]">
                                    {ledger?.currentLabel ?? "Current Season"}
                                </p>
                                <p className="mt-1 text-xl sm:text-2xl text-espresso font-serif italic leading-snug">
                                    {ledger?.bookTitle}
                                </p>
                                <p className="text-xs font-serif uppercase tracking-[0.2em] text-espresso/80">
                                    {ledger?.bookAuthor}
                                </p>
                                {ledger?.subTitle && (
                                    <p className="mt-1 text-[0.75rem] text-espresso/70">
                                        {ledger.subTitle}
                                    </p>
                                )}
                            </div>

                            <div className="pt-3 border-t border-espresso/15 grid grid-cols-2 gap-4">
                                <div>
                                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.26em] text-[#C5A059]">
                                        {ledger?.themeLabel ?? "Focus"}
                                    </p>
                                    <p className="mt-1 text-[0.8rem] text-espresso/80">
                                        {ledger?.themeList}
                                    </p>
                                </div>
                                <div>
                                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.26em] text-[#C5A059]">
                                        {ledger?.statusLabel ?? "Gathering"}
                                    </p>
                                    <p className="mt-1 text-[0.8rem] text-espresso/80">
                                        {ledger?.statusValue}
                                    </p>
                                </div>
                            </div>

                            <div className="pt-3 border-t border-dashed border-espresso/20">
                                <p className="font-mono text-[0.65rem] uppercase tracking-[0.26em] text-[#C5A059]">
                                    {ledger?.notesLabel ?? "Curator's Note"}
                                </p>
                                <p className="mt-1 text-[0.8rem] text-espresso/80">
                                    {ledger?.notesValue}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

