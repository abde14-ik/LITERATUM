"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export function ExperienceSection() {
    const { content } = useLanguage();
    const items = (content.experience as any).items ?? [];

    return (
        <motion.section
            id="experience"
            className="scroll-mt-24 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <header className="mb-12 space-y-3">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-white">
                    {content.experience.heading}
                </h2>
                <p className="text-sm text-slate-400 sm:text-base">
                    {content.experience.subheading}
                </p>
            </header>

            <div className="relative mt-2">
                <div className="pointer-events-none absolute left-[0.4rem] top-0 bottom-0 hidden w-[2px] bg-zinc-800 sm:block" />
                <ol className="space-y-6 pl-0 sm:pl-6">
                    {items.map((item: any, index: number) => (
                        <motion.li
                            key={`${item.company}-${item.role}-${index}`}
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="absolute -left-[0.6rem] top-3 hidden h-3 w-3 items-center justify-center rounded-full border-2 border-zinc-600 bg-black sm:flex" />
                            <div className="rounded-2xl bg-[#121212] p-4 shadow-md shadow-black/60 transition-transform transition-colors hover:-translate-y-1 hover:bg-zinc-900 md:p-6">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-violet-300">
                                            {item.period}
                                        </p>
                                        <h3 className="mt-1 text-lg md:text-xl font-extrabold tracking-tight text-white">
                                            {item.role} · {""}
                                            <span className="text-amber-400">{item.company}</span>
                                        </h3>
                                        {item.location && (
                                            <p className="mt-1 text-xs text-slate-400">{item.location}</p>
                                        )}
                                    </div>
                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/15 text-violet-300">
                                        <Briefcase className="h-4 w-4" />
                                    </span>
                                </div>

                                <ul className="mt-3 space-y-1.5 text-sm text-slate-300 sm:text-[0.94rem]">
                                    {item.tasks.map((task) => (
                                        <li key={task} className="flex gap-2">
                                            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-gold" />
                                            <span>{task}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.li>
                    ))}
                </ol>
            </div>
        </motion.section>
    );
}
