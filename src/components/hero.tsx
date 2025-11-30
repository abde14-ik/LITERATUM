"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";
import { Cairo, Noto_Sans_Tifinagh } from "next/font/google";
import { profile } from "@/constants/data";
import { StatusBento } from "@/components/status-bento";
import { cn, prefix } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

const heroVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

const cairo = Cairo({
    subsets: ["arabic"],
    weight: "400",
});

const notoTifinagh = Noto_Sans_Tifinagh({
    subsets: ["tifinagh"],
    weight: "400",
});

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
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-16 xl:grid-cols-[1.2fr_0.8fr] xl:items-center">
                {/* Left column: intro and CTAs */}
                <div className="relative z-10 space-y-6">
                    <p className="flex items-center gap-2 text-[0.7rem] font-mono text-amber-400 sm:text-xs">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
                        <span>{hero.statusDot}</span>
                    </p>

                    <div>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-tighter text-white whitespace-nowrap">
                            <span>{profile.name}</span>
                        </h1>
                        <p className="mt-3 flex flex-wrap items-center justify-start gap-3 text-xl text-zinc-300 sm:text-2xl sm:gap-4">
                            <span
                                className={cn(
                                    notoTifinagh.className,
                                    "text-xl sm:text-2xl font-extrabold tracking-wide text-zinc-200",
                                )}
                            >
                                {profile.tifinaghName}
                            </span>
                            <span className="text-zinc-500">•</span>
                            <span
                                className={cn(
                                    cairo.className,
                                    "font-bold text-zinc-200 text-[1.4em] sm:text-[1.4em]",
                                )}
                            >
                                {profile.arabicName}
                            </span>
                        </p>
                    </div>

                    <p className="mt-6 max-w-xl text-sm font-light text-zinc-400 sm:text-base leading-relaxed">
                        {hero.bio}
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gradient-to-r from-royal to-royalDark px-5 py-2.5 text-sm font-semibold text-slate-50 shadow-lg shadow-gold/30 transition hover:border-gold/70 hover:from-royalDark hover:to-royal"
                        >
                            <ArrowDownRight className="h-4 w-4" />
                            <span>{hero.ctaViewProjects}</span>
                        </a>
                        <a
                            href={prefix(content.hero.resumeUrl)}
                            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-black px-5 py-2.5 text-sm font-semibold text-zinc-200 shadow-sm transition hover:bg-zinc-900"
                        >
                            <Download className="h-4 w-4" />
                            <span>{hero.ctaDownloadResume}</span>
                        </a>
                    </div>

                    <p className="mt-3 text-xs text-zinc-400 sm:text-sm">
                        {hero.locationMeta}
                    </p>
                </div>

                {/* Right column: Status bento grid */}
                <div className="mt-6 xl:mt-10">
                    <StatusBento />
                </div>
            </div>
        </motion.section>
    );
}

