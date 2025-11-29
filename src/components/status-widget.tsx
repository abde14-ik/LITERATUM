"use client";

import { Activity, BookOpen, Cloud } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";

export function StatusWidget() {
    const { content } = useLanguage();
    const hero = content.hero;

    return (
        <motion.div
            className="rounded-2xl border border-slate-800/80 bg-slate-950/70 px-4 py-4 text-xs text-slate-200 shadow-lg shadow-slate-950/60 backdrop-blur-md"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
            <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-300">
                        System Metrics
                    </span>
                </div>
                <span className="text-[0.65rem] text-slate-500">
                    {hero.statusTitle}
                </span>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 text-teal-300">
                        <Cloud className="h-4 w-4" />
                    </span>
                    <div className="space-y-0.5">
                        <p className="text-[0.65rem] uppercase tracking-[0.16em] text-slate-400">
                            {hero.statusCloudLabel}
                        </p>
                        <p className="text-[0.85rem] font-medium text-slate-100">
                            {hero.statusCloudValue}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 text-amber-300">
                        <BookOpen className="h-4 w-4" />
                    </span>
                    <div className="space-y-0.5">
                        <p className="text-[0.65rem] uppercase tracking-[0.16em] text-slate-400">
                            {hero.statusBookLabel}
                        </p>
                        <p
                            className="text-[0.85rem] font-medium text-slate-100"
                            title={hero.statusBookSubtitle}
                        >
                            {hero.statusBookValue}
                        </p>
                        <p className="text-[0.7rem] text-slate-400">
                            {hero.statusBookAuthor}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2 sm:col-span-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 text-emerald-300">
                        <Activity className="h-4 w-4" />
                    </span>
                    <div className="space-y-0.5">
                        <p className="text-[0.65rem] uppercase tracking-[0.16em] text-slate-400">
                            {hero.statusRunLabel}
                        </p>
                        <p
                            className="text-[0.85rem] font-medium text-slate-100"
                            title={hero.statusRunSubtitle}
                        >
                            {hero.statusRunValue}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
