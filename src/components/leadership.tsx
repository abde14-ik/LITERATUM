"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Activity, Terminal, Sigma, ArrowRight, Maximize2 } from "lucide-react";
import Image from "next/image";
import { prefix } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";
import { LeadershipModal } from "@/components/leadership-modal";

const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export function LeadershipSection() {
    const { content } = useLanguage();
    const leadership = content.leadership as any;
    const volunteering = (leadership.items as any[]) ?? [];

    const [selectedItem, setSelectedItem] = useState<any | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = (item: any) => {
        if (!item?.details) return;
        setSelectedItem(item);
        setIsModalOpen(true);
    };

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
                    {leadership.heading}
                </h2>
                <p className="text-sm text-slate-400 sm:text-base">
                    {leadership.subheading}
                </p>
            </header>

            <div className="rounded-3xl border border-amber-400/50 bg-gradient-to-br from-amber-500/10 via-slate-950/90 to-slate-950/95 p-5 shadow-[0_0_40px_rgba(248,250,252,0.06)] backdrop-blur-xl">
                <div className="flex items-center justify-between gap-3">
                    <div className="space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                            {leadership.humanSideLabel}
                        </p>
                        <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                            {leadership.humanSideTitle}
                        </h3>
                    </div>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/15 text-amber-300">
                        <Activity className="h-4 w-4" />
                    </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                    {volunteering.map((item) => {
                        const teaserImage =
                            item.logo ??
                            item.details?.logo ??
                            item.details?.events?.[0]?.images?.[0];

                        return (
                            <div
                                key={`${item.org}-${item.role}`}
                                onClick={() => handleCardClick(item)}
                                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-slate-950/60 p-4 text-sm text-slate-200 shadow-md shadow-slate-950/60 backdrop-blur-md transition-transform transition-colors hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-900/20 hover:border-violet-500/50 ${item.details ? "cursor-pointer" : "cursor-default opacity-80"
                                    } ${item.org.includes("INPT Runners") ? "animate-pulse" : ""}`}
                            >
                                {teaserImage && (
                                    <div className="pointer-events-none absolute inset-0">
                                        <Image
                                            src={prefix(teaserImage)}
                                            alt={`${item.org} background`}
                                            fill
                                            className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-30"
                                            sizes="(min-width: 768px) 400px, 100vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/90 to-midnight/40" />
                                    </div>
                                )}

                                {item.details && (
                                    <div className="pointer-events-none absolute right-3 top-3 z-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/70 text-slate-100 shadow-sm shadow-black/60">
                                            <Maximize2 className="h-3 w-3" />
                                        </span>
                                    </div>
                                )}

                                <div className="relative z-10 flex h-full flex-col">
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
                                                ? "text-violet-300"
                                                : item.org.includes("CIT Club")
                                                    ? "text-fuchsia-300"
                                                    : "text-amber-300"
                                                }`}
                                        >
                                            {item.org.includes("INPT Runners") && <Activity className="h-4 w-4" />}
                                            {item.org.includes("CIT Club") && <Terminal className="h-4 w-4" />}
                                            {item.org.includes("MSC") && <Sigma className="h-4 w-4" />}
                                        </span>
                                    </div>

                                    <p className="mt-3 text-xs text-slate-300">{item.description}</p>

                                    {item.details && (
                                        <div className="mt-3">
                                            <div className="group/cta inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.7rem] font-medium text-slate-100 shadow-sm shadow-black/40 backdrop-blur-sm transition hover:border-gold/50 hover:bg-gold/10 hover:text-gold">
                                                <span>See impact</span>
                                                <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover/cta:translate-x-1" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
                {selectedItem?.details && (
                    <LeadershipModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        org={selectedItem.org}
                        role={selectedItem.role}
                        period={selectedItem.period}
                        logo={selectedItem.logo}
                        details={selectedItem.details}
                    />
                )}
            </div>
        </motion.section>
    );
}
