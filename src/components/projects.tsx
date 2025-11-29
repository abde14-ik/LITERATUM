"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export function ProjectsSection() {
    const { content } = useLanguage();
    const projects = content.projects.items;

    return (
        <motion.section
            id="projects"
            className="scroll-mt-24 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <header className="mb-12 space-y-3">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-white">
                    {content.projects.heading}
                </h2>
                <p className="text-sm text-zinc-400 sm:text-base leading-relaxed">
                    {content.projects.subheading}
                </p>
            </header>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {projects.map((project) => (
                    <motion.article
                        key={project.name}
                        className="group flex h-full flex-col rounded-2xl bg-[#121212] p-4 shadow-md shadow-black/60 transition-transform transition-colors hover:-translate-y-1.5 hover:bg-zinc-900"
                        whileHover={{ translateY: -4 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <h3 className="text-sm font-extrabold tracking-tight text-white sm:text-base">
                                    {project.name}
                                </h3>
                                <p className="mt-2 text-xs text-zinc-400 sm:text-[0.9rem] leading-relaxed">
                                    {project.desc}
                                </p>
                            </div>
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-zinc-200">
                                <Code2 className="h-4 w-4" />
                            </span>
                        </div>

                        <div className="mt-3 flex flex-wrap gap-2">
                            {project.tech.map((tool) => (
                                <span
                                    key={tool}
                                    className="inline-flex items-center rounded-full border border-white/5 bg-black/40 px-3 py-1 text-[0.7rem] font-medium text-zinc-200 font-mono"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.codeUrl && (
                                <a
                                    href={project.codeUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-zinc-900 px-3 py-1.5 text-[0.7rem] font-medium text-zinc-100 hover:bg-zinc-800"
                                >
                                    <Code2 className="h-3 w-3" />
                                    <span>{content.common.viewCode}</span>
                                </a>
                            )}
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-zinc-100 px-3 py-1.5 text-[0.7rem] font-medium text-black shadow-sm hover:bg-white"
                                >
                                    <ExternalLink className="h-3 w-3" />
                                    <span>{content.common.liveDemo}</span>
                                </a>
                            )}
                        </div>
                    </motion.article>
                ))}
            </div>
        </motion.section>
    );
}
