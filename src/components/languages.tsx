"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";

const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export function LanguagesSection() {
    const { content } = useLanguage();
    const langs = (content.about as any).languagesList ?? [];

    return (
        <motion.section
            id="languages"
            className="scroll-mt-24 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <header className="mb-12 space-y-3">
                <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-slate-100">
                    {content.about.languagesTitle}
                </h2>
                <p className="text-sm text-slate-400 sm:text-base">
                    {content.about.languagesSubtitle}
                </p>
            </header>

            <div className="rounded-2xl border border-violet-500/40 bg-slate-950/80 p-4">
                <div className="mt-1 flex flex-wrap gap-2">
                    {langs.map((lang: string) => (
                        <span
                            key={lang}
                            className="inline-flex items-center rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200"
                        >
                            {lang}
                        </span>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
