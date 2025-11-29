"use client";

import { motion } from "framer-motion";
import { volunteering } from "@/constants/data";
import { Activity, Terminal, Sigma } from "lucide-react";
import { content } from "@/constants/content";
import Image from "next/image";
import { prefix } from "@/lib/utils";

const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export function LeadershipSection() {
    return (
        <motion.section
            id="leadership"
            className="scroll-mt-24 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <header className="mb-12 space-y-3">
                <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-slate-100">
                    {content.leadership.heading}
                </h2>
                <p className="text-sm text-slate-400 sm:text-base">
                    {content.leadership.subheading}
                </p>
            </header>

            <div className="rounded-3xl border border-amber-400/50 bg-gradient-to-br from-amber-500/10 via-slate-950/90 to-slate-950/95 p-5 shadow-[0_0_40px_rgba(248,250,252,0.06)] backdrop-blur-xl">
                <div className="flex items-center justify-between gap-3">
                    <div className="space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                            {content.leadership.humanSideLabel}
                        </p>
                        <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                            {content.leadership.humanSideTitle}
                        </h3>
                    </div>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/15 text-amber-300">
                        <Activity className="h-4 w-4" />
                    </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                    {volunteering.map((item) => (
                        <div
                            key={`${item.org}-${item.role}`}
                            className={`flex flex-col rounded-2xl border bg-slate-950/60 p-4 text-sm text-slate-200 shadow-md shadow-slate-950/60 backdrop-blur-md transition-transform hover:-translate-y-1.5 hover:shadow-xl ${item.org.includes("INPT Runners")
                                ? "border-teal-400/60 hover:border-teal-300/80 animate-pulse"
                                : "border-amber-200/40 hover:border-amber-300/80 hover:shadow-amber-400/25"
                                }`}
                        >
                            {item.image && (
                                <div className="mb-3 overflow-hidden rounded-xl">
                                    <div className="relative aspect-[16/9] w-full">
                                        <Image
                                            src={prefix(item.image)}
                                            alt={`${item.org} volunteering`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="flex items-start justify-between gap-2">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-300">
                                        {item.period}
                                    </p>
                                    <h4 className="mt-1 text-sm font-semibold text-slate-50">
                                        {item.role}
                                    </h4>
                                    <p className="text-xs text-slate-300">{item.org}</p>
                                </div>
                                <span
                                    className={`inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 ${item.org.includes("INPT Runners")
                                        ? "text-teal-300"
                                        : item.org.includes("CIT Club")
                                            ? "text-emerald-300"
                                            : "text-amber-300"
                                        }`}
                                >
                                    {item.org.includes("INPT Runners") && <Activity className="h-4 w-4" />}
                                    {item.org.includes("CIT Club") && <Terminal className="h-4 w-4" />}
                                    {item.org.includes("MSC") && <Sigma className="h-4 w-4" />}
                                </span>
                            </div>

                            <p className="mt-3 text-xs text-slate-300">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
