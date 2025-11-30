"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Users, X } from "lucide-react";
import { prefix } from "@/lib/utils";

export type LeadershipDetails = {
    headline: string;
    description: string;
    stats?: {
        members?: string;
        growth?: string;
    };
    subInitiative?: {
        title: string;
        description: string;
        logo?: string;
    };
    events?: {
        title: string;
        image?: string;
        desc?: string;
    }[];
};

export type LeadershipModalProps = {
    isOpen: boolean;
    onClose: () => void;
    org: string;
    role: string;
    period?: string;
    details: LeadershipDetails;
};

export function LeadershipModal({ isOpen, onClose, org, role, period, details }: LeadershipModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const { headline, description, stats, subInitiative, events } = details;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 backdrop-blur-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="relative mx-4 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/95 p-5 text-slate-100 shadow-2xl shadow-black/70 sm:p-7"
                        initial={{ scale: 0.96, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.96, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={onClose}
                            className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 shadow-md shadow-black/60 transition hover:bg-slate-800/90"
                            aria-label="Close leadership details"
                        >
                            <X className="h-4 w-4" />
                        </button>

                        <header className="mb-4 space-y-1 pr-10">
                            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-teal-300">
                                Leadership Impact
                            </p>
                            <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">{org}</h2>
                            <p className="text-xs text-slate-300 sm:text-sm">
                                {role}
                                {period ? ` · ${period}` : null}
                            </p>
                        </header>

                        <section className="space-y-4 overflow-y-auto pr-1">
                            {headline && (
                                <p className="text-sm font-medium text-slate-100 sm:text-base">{headline}</p>
                            )}

                            {description && (
                                <p className="text-xs text-slate-300 sm:text-sm">{description}</p>
                            )}

                            {stats && (stats.members || stats.growth) && (
                                <div className="mt-2 flex flex-wrap items-center gap-3 rounded-2xl border border-teal-500/40 bg-teal-900/10 px-3 py-2 text-xs sm:text-[0.8rem]">
                                    <div className="flex items-center gap-2 text-teal-300">
                                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-teal-500/15">
                                            <Users className="h-4 w-4" />
                                        </span>
                                        <span className="font-semibold">{stats.members}</span>
                                    </div>
                                    {stats.growth && (
                                        <span className="rounded-full bg-slate-900/70 px-2 py-1 text-[0.7rem] text-teal-200">
                                            {stats.growth}
                                        </span>
                                    )}
                                </div>
                            )}

                            {subInitiative && (
                                <div className="mt-3 flex flex-col gap-3 rounded-2xl border border-pink-500/60 bg-pink-950/20 p-3 sm:p-4">
                                    <div className="flex items-center gap-3">
                                        {subInitiative.logo ? (
                                            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-pink-500/20">
                                                <Image
                                                    src={prefix(subInitiative.logo)}
                                                    alt={subInitiative.title}
                                                    fill
                                                    className="object-contain p-1.5"
                                                    sizes="40px"
                                                />
                                            </div>
                                        ) : (
                                            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-pink-500/20 text-pink-300">
                                                <Users className="h-5 w-5" />
                                            </div>
                                        )}
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pink-300">
                                                Sub-initiative
                                            </p>
                                            <h3 className="text-sm font-semibold text-slate-50">{subInitiative.title}</h3>
                                        </div>
                                    </div>
                                    {subInitiative.description && (
                                        <p className="text-xs text-pink-100/90 sm:text-[0.8rem]">{subInitiative.description}</p>
                                    )}
                                </div>
                            )}

                            {events && events.length > 0 && (
                                <div className="mt-4 space-y-2">
                                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
                                        Events
                                    </p>
                                    <div className="grid gap-3 md:grid-cols-3">
                                        {events.map((event, index) => (
                                            <article
                                                key={`${event.title}-${index}`}
                                                className="flex flex-col overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/80 text-xs text-slate-200 shadow-sm shadow-black/50"
                                            >
                                                {event.image ? (
                                                    <div className="relative aspect-video w-full">
                                                        <Image
                                                            src={prefix(event.image)}
                                                            alt={event.title}
                                                            fill
                                                            className="object-cover"
                                                            sizes="(min-width: 768px) 200px, 100vw"
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="flex aspect-video items-center justify-center bg-slate-800/80 text-[0.7rem] text-slate-300">
                                                        {event.title}
                                                    </div>
                                                )}
                                                <div className="space-y-1 p-3">
                                                    <h4 className="text-[0.8rem] font-semibold text-slate-50">{event.title}</h4>
                                                    {event.desc && (
                                                        <p className="text-[0.7rem] text-slate-300 line-clamp-3">{event.desc}</p>
                                                    )}
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </section>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body,
    );
}
