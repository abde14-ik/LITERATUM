"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Maximize2 } from "lucide-react";
import Image from "next/image";
import { prefix } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";
import { LeadershipModal } from "@/components/leadership-modal";

const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

const cardsContainerVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.4 },
    },
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
            <header className="mb-10 space-y-4">
                <div className="flex items-center gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                        {leadership.humanSideLabel}
                    </p>
                    <div className="h-px flex-1 bg-gradient-to-r from-amber-300/60 to-transparent" />
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-white">
                    {leadership.humanSideTitle ?? leadership.heading}
                </h2>
                <p className="text-sm text-slate-400 sm:text-base">
                    {leadership.subheading}
                </p>
            </header>

            <div className="rounded-3xl border border-amber-400/50 bg-gradient-to-br from-amber-500/10 via-slate-950/90 to-slate-950/95 p-5 shadow-[0_0_40px_rgba(248,250,252,0.06)] backdrop-blur-xl">
                <motion.div
                    className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3"
                    variants={cardsContainerVariants}
                >
                    {volunteering.map((item) => {
                        const teaserImage =
                            item.details?.featureImage ??
                            item.logo ??
                            item.details?.logo ??
                            item.details?.events?.[0]?.images?.[0];

                        return (
                            <motion.div
                                key={`${item.org}-${item.role}`}
                                onClick={() => handleCardClick(item)}
                                variants={cardVariants}
                                className={`group relative flex flex-col overflow-hidden rounded-xl border border-white/5 bg-zinc-900/50 p-4 text-sm text-slate-200 shadow-md shadow-slate-950/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 ${item.details ? "cursor-pointer" : "cursor-default opacity-80"}`}
                                onMouseMove={(event) => {
                                    const card = event.currentTarget;
                                    const rect = card.getBoundingClientRect();
                                    const x = event.clientX - rect.left;
                                    const y = event.clientY - rect.top;
                                    card.style.setProperty("--mouse-x", `${x}px`);
                                    card.style.setProperty("--mouse-y", `${y}px`);
                                }}
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

                                <div
                                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    style={{
                                        background:
                                            "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(139,92,246,0.18), transparent 40%)",
                                    }}
                                />

                                {item.details && (
                                    <div className="pointer-events-none absolute right-3 top-3 z-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/70 text-white/20 shadow-sm shadow-black/60 group-hover:text-amber-300">
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

                                    <div className="flex items-start gap-2">
                                        <div className="space-y-2">
                                            <p className="text-[0.65rem] font-mono uppercase tracking-[0.18em] text-gold">
                                                {item.period} · {item.org}
                                            </p>
                                            <h3 className="text-lg md:text-xl font-semibold text-slate-100">
                                                {item.role}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="mt-3 text-xs text-slate-300 line-clamp-3">{item.description}</p>

                                    {item.details && (
                                        <div className="mt-4">
                                            <div className="group/cta inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.7rem] font-medium text-slate-100 shadow-sm shadow-black/40 backdrop-blur-sm transform translate-y-2 opacity-0 transition hover:border-gold/50 hover:bg-gold/10 hover:text-gold group-hover:translate-y-0 group-hover:opacity-100">
                                                <span>See impact</span>
                                                <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover/cta:translate-x-1" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
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
