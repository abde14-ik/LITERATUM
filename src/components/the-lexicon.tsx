"use client";

import { motion } from "framer-motion";
import { en } from "@/locales/en";
import { useLanguage } from "@/context/language-context";

const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

type LexiconCategory = {
    id: string;
    label: string;
    items: string[];
};

export function TheLexicon() {
    const { content } = useLanguage();
    const typedContent = content as typeof en;
    const lexicon = typedContent.lexicon;
    const categories =
        lexicon?.categories?.map((category) => ({
            id: category.id,
            label: category.label,
            items: [...category.items],
        })) ?? [];

    return (
        <motion.section
            id="skills"
            className="scroll-mt-24 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <header className="mb-12 space-y-3">
                <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-parchment">
                    {lexicon.heading}
                </h2>
                <p className="text-sm text-parchment/70 sm:text-base max-w-2xl">
                    {lexicon.subheading}
                </p>
            </header>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {categories.map((category: LexiconCategory, index: number) => (
                    <motion.div
                        key={category.id}
                        className="flex flex-col rounded-2xl border border-espresso/35 bg-parchment/95 px-4 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.85)] transition-transform hover:-translate-y-1"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                    >
                        <h3 className="font-serif text-sm font-semibold tracking-[0.18em] text-espresso/80 uppercase">
                            {category.label}
                        </h3>

                        <div className="mt-3 flex flex-wrap gap-2">
                            {category.items.map((skill: string) => (
                                <span
                                    key={skill}
                                    className="inline-flex items-center rounded-full border border-espresso/25 bg-parchment/90 px-3 py-1 text-[0.75rem] font-medium text-espresso/80 font-mono shadow-sm shadow-black/20"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
