"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Activity, Calendar, ChevronLeft, ChevronRight, Github, Instagram, Users, X } from "lucide-react";
import { prefix } from "@/lib/utils";

export type LeadershipDetails = {
    headline: string;
    description: string;
    featureImage?: string;
    logo?: string;
    stats?: {
        members?: string;
        weeklyDistance?: string;
        activities?: string;
        platform?: string;
        growth?: string;
        role?: string;
        since?: string;
        impact?: string;
        focus?: string;
    };
    subInitiative?: {
        title: string;
        description: string;
        logo?: string;
    };
    resource?: {
        label: string;
        url: string;
        description: string;
    };
    events?: {
        title: string;
        images?: string[];
        desc?: string;
    }[];
};

export type LeadershipModalProps = {
    isOpen: boolean;
    onClose: () => void;
    org: string;
    role: string;
    period?: string;
    logo?: string;
    details: LeadershipDetails;
};

export function LeadershipModal({ isOpen, onClose, org, role, period, logo, details }: LeadershipModalProps) {
    const [mounted, setMounted] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    const [activeEventIndex, setActiveEventIndex] = useState<number | null>(null);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const id = setInterval(() => {
            setImageIndex((prev) => prev + 1);
        }, 5000);

        return () => clearInterval(id);
    }, []);

    if (!mounted) return null;

    const { headline, description, stats, subInitiative, events, resource } = details;

    const isInptRunners = org.includes("INPT Runners");
    const isCitClub = org.includes("CIT Club");
    const isInstagramResource = resource?.url?.toLowerCase().includes("instagram");

    const openEventLightbox = (eventIndex: number, startIndex: number = 0) => {
        setActiveEventIndex(eventIndex);
        setLightboxIndex(startIndex);
    };

    const closeEventLightbox = () => {
        setActiveEventIndex(null);
    };

    const handleNextImage = () => {
        if (!events || activeEventIndex === null) return;
        const images = events[activeEventIndex]?.images ?? [];
        if (!images.length) return;
        setLightboxIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrevImage = () => {
        if (!events || activeEventIndex === null) return;
        const images = events[activeEventIndex]?.images ?? [];
        if (!images.length) return;
        setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const activeEvent = events && activeEventIndex !== null ? events[activeEventIndex] : null;
    const activeImages = activeEvent?.images ?? [];
    const totalImages = activeImages.length;
    const safeLightboxIndex =
        totalImages > 0 ? ((lightboxIndex % totalImages) + totalImages) % totalImages : 0;
    const currentLightboxSrc = totalImages > 0 ? activeImages[safeLightboxIndex] : undefined;

    return createPortal(
        <>
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

                            <header className="mb-4 pr-10">
                                <div className="flex items-center gap-4">
                                    {logo && (
                                        <div className="relative h-16 w-16 shrink-0 rounded-full overflow-hidden border-2 border-white/10 bg-slate-900/60">
                                            <Image
                                                src={prefix(logo)}
                                                alt={org}
                                                fill
                                                className="object-cover"
                                                sizes="64px"
                                            />
                                        </div>
                                    )}
                                    <div className="space-y-1">
                                        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-teal-300">
                                            Leadership Impact
                                        </p>
                                        <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
                                            {org}
                                        </h2>
                                        <p className="text-xs text-slate-300 sm:text-sm">
                                            {role}
                                            {period ? ` · ${period}` : null}
                                        </p>
                                    </div>
                                </div>
                            </header>

                            <section className="space-y-4 overflow-y-auto pr-1">
                                {headline && (
                                    <p className="text-sm font-medium text-slate-100 sm:text-base">
                                        {headline}
                                    </p>
                                )}

                                {description && (
                                    <p className="text-xs text-slate-300 sm:text-sm">
                                        {description}
                                    </p>
                                )}

                                {details.featureImage && (
                                    <div className="mb-6 mt-4 relative w-full aspect-video overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                                        <Image
                                            src={prefix(details.featureImage)}
                                            alt="CIT Board"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}

                                {stats &&
                                    (stats.members ||
                                        stats.weeklyDistance ||
                                        stats.activities ||
                                        stats.platform) && (
                                        <div className="mt-2 rounded-2xl border border-teal-500/40 bg-teal-900/10 px-3 py-3 text-xs sm:text-[0.8rem]">
                                            <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
                                                {stats.members && (
                                                    <div className="flex items-center gap-2 text-teal-200">
                                                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-teal-500/15 text-teal-300">
                                                            <Users className="h-4 w-4" />
                                                        </span>
                                                        <div>
                                                            <p className="text-[0.65rem] uppercase tracking-[0.18em] text-teal-200/80">
                                                                Members
                                                            </p>
                                                            <p className="text-xs font-semibold text-teal-50">
                                                                {stats.members}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}

                                                {stats.weeklyDistance && (
                                                    <div className="flex items-center gap-2 text-amber-200">
                                                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-500/15 text-amber-300">
                                                            <Activity className="h-4 w-4" />
                                                        </span>
                                                        <div>
                                                            <p className="text-[0.65rem] uppercase tracking-[0.18em] text-amber-200/80">
                                                                Weekly Distance
                                                            </p>
                                                            <p className="text-xs font-semibold text-amber-50">
                                                                {stats.weeklyDistance}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}

                                                {(stats.activities || stats.platform) && (
                                                    <div className="flex items-center gap-2 text-sky-200">
                                                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/15 text-sky-300">
                                                            <Calendar className="h-4 w-4" />
                                                        </span>
                                                        <div>
                                                            <p className="text-[0.65rem] uppercase tracking-[0.18em] text-sky-200/80">
                                                                Schedule
                                                            </p>
                                                            {stats.activities && (
                                                                <p className="text-xs font-semibold text-sky-50">
                                                                    {stats.activities}
                                                                </p>
                                                            )}
                                                            {stats.platform && (
                                                                <p className="text-[0.7rem] text-sky-100/90">
                                                                    {stats.platform}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {isInptRunners && (
                                                <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                                                    {stats.platform && (
                                                        <span className="text-[0.7rem] text-teal-100/90">
                                                            {stats.platform}
                                                        </span>
                                                    )}
                                                    <div className="flex flex-wrap items-center gap-2">
                                                        <a
                                                            href="https://www.strava.com/clubs/1508184"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="inline-flex items-center gap-1 rounded-full bg-[#FC4C02] px-3 py-1 text-[0.7rem] font-semibold text-slate-950 shadow-sm shadow-black/40 transition hover:bg-[#ff6a28]"
                                                        >
                                                            <span>Join on Strava</span>
                                                        </a>
                                                        <a
                                                            href="https://www.instagram.com/inpt_runners/?hl=en"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="inline-flex items-center gap-1 rounded-full bg-[#E4405F] px-3 py-1 text-[0.7rem] font-semibold text-slate-50 shadow-sm shadow-black/40 transition hover:bg-[#ff6c7d]"
                                                        >
                                                            <Instagram className="h-3 w-3" />
                                                            <span>Follow on Instagram</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            )}

                                            {isCitClub && (
                                                <div className="mt-3 flex flex-wrap items-center justify-end gap-2">
                                                    <a
                                                        href="https://www.instagram.com/cit.inpt/?hl=en"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-flex items-center gap-1 rounded-full bg-[#E4405F] px-3 py-1 text-[0.7rem] font-semibold text-slate-50 shadow-sm shadow-black/40 transition hover:bg-[#ff6c7d]"
                                                    >
                                                        <Instagram className="h-3 w-3" />
                                                        <span>Follow CIT on Instagram</span>
                                                    </a>
                                                    <a
                                                        href="https://github.com/CitInpt/CIT-Courses/tree/main/24-25/DevOpsCell"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-flex items-center gap-1 rounded-full bg-slate-800 px-3 py-1 text-[0.7rem] font-semibold text-slate-50 shadow-sm shadow-black/40 transition hover:bg-slate-700"
                                                    >
                                                        <Github className="h-3 w-3" />
                                                        <span>View courses on GitHub</span>
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                {subInitiative && (
                                    <div className="mt-3 flex flex-col gap-3 rounded-2xl border border-pink-500/60 bg-pink-950/20 p-3 sm:p-4">
                                        <div className="flex items-center gap-3">
                                            {subInitiative.logo ? (
                                                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-pink-200/70 bg-pink-100">
                                                    <Image
                                                        src={prefix(subInitiative.logo)}
                                                        alt={subInitiative.title}
                                                        fill
                                                        className="object-cover"
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
                                                <h3 className="text-sm font-semibold text-slate-50">
                                                    {subInitiative.title}
                                                </h3>
                                            </div>
                                        </div>
                                        {subInitiative.description && (
                                            <p className="text-xs text-pink-100/90 sm:text-[0.8rem]">
                                                {subInitiative.description}
                                            </p>
                                        )}
                                    </div>
                                )}

                                {resource && !isCitClub && (
                                    <div className="mt-3 flex flex-col gap-1">
                                        <a
                                            href={resource.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[0.7rem] font-semibold shadow-sm shadow-black/40 transition ${isInstagramResource
                                                    ? "bg-gradient-to-r from-pink-600 to-purple-600 text-slate-50 hover:from-pink-500 hover:to-purple-500"
                                                    : "bg-slate-800 text-slate-50 hover:bg-slate-700"
                                                }`}
                                        >
                                            {isInstagramResource && <Instagram className="h-3 w-3" />}
                                            <span>{resource.label}</span>
                                        </a>
                                        {resource.description && (
                                            <p className="text-[0.7rem] text-slate-300">
                                                {resource.description}
                                            </p>
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
                                                    className="flex flex-col overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/80 text-xs text-slate-200 shadow-sm shadow-black/50 cursor-pointer"
                                                    role="button"
                                                    tabIndex={0}
                                                    aria-label={`Open photos for ${event.title}`}
                                                    onClick={() => {
                                                        const startIndex =
                                                            event.images && event.images.length > 0
                                                                ? imageIndex % event.images.length
                                                                : 0;
                                                        openEventLightbox(index, startIndex);
                                                    }}
                                                    onKeyDown={(eventKey) => {
                                                        if (eventKey.key === "Enter" || eventKey.key === " ") {
                                                            eventKey.preventDefault();
                                                            const startIndex =
                                                                event.images && event.images.length > 0
                                                                    ? imageIndex % event.images.length
                                                                    : 0;
                                                            openEventLightbox(index, startIndex);
                                                        }
                                                    }}
                                                >
                                                    {event.images && event.images.length > 0 ? (
                                                        <div className="relative aspect-video w-full overflow-hidden">
                                                            <Image
                                                                src={prefix(
                                                                    event.images[
                                                                    imageIndex % event.images.length
                                                                    ],
                                                                )}
                                                                alt={event.title}
                                                                fill
                                                                className="object-cover object-top transition-opacity duration-500"
                                                                sizes="(min-width: 768px) 200px, 100vw"
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div className="flex aspect-video items-center justify-center bg-slate-800/80 text-[0.7rem] text-slate-300">
                                                            {event.title}
                                                        </div>
                                                    )}
                                                    <div className="space-y-1 p-3">
                                                        <h4 className="text-[0.8rem] font-semibold text-slate-50">
                                                            {event.title}
                                                        </h4>
                                                        {event.desc && (
                                                            <p className="text-[0.7rem] text-slate-300 line-clamp-3">
                                                                {event.desc}
                                                            </p>
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
            </AnimatePresence>

            <AnimatePresence>
                {activeEvent && totalImages > 0 && (
                    <motion.div
                        className="fixed inset-0 z-[95] flex items-center justify-center bg-black/90 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeEventLightbox}
                    >
                        <motion.div
                            className="relative mx-4 w-full max-w-4xl"
                            initial={{ scale: 0.96, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.96, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            onClick={(event) => event.stopPropagation()}
                        >
                            <button
                                type="button"
                                onClick={closeEventLightbox}
                                className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-slate-200 shadow-md shadow-black/80 transition hover:bg-black/90"
                                aria-label="Close event photos"
                            >
                                <X className="h-4 w-4" />
                            </button>

                            <div className="space-y-3 pt-10">
                                <div className="relative mx-auto flex w-full max-w-3xl items-center justify-center">
                                    <button
                                        type="button"
                                        onClick={handlePrevImage}
                                        className="absolute left-0 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-slate-100 shadow-md shadow-black/80 transition hover:bg-black/90"
                                        aria-label="Previous photo"
                                    >
                                        <ChevronLeft className="h-4 w-4" />
                                    </button>
                                    <div className="relative mx-10 aspect-[16/10] w-full max-h-[70vh] overflow-hidden rounded-2xl bg-black">
                                        {currentLightboxSrc && (
                                            <Image
                                                src={prefix(currentLightboxSrc)}
                                                alt={activeEvent.title}
                                                fill
                                                className="object-contain"
                                                sizes="(min-width: 768px) 960px, 100vw"
                                            />
                                        )}
                                    </div>
                                    <button
                                        type="button"
                                        onClick={handleNextImage}
                                        className="absolute right-0 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-slate-100 shadow-md shadow-black/80 transition hover:bg-black/90"
                                        aria-label="Next photo"
                                    >
                                        <ChevronRight className="h-4 w-4" />
                                    </button>
                                </div>
                                <div className="flex items-center justify-between px-2 text-xs text-slate-200 sm:text-sm">
                                    <div className="space-y-0.5">
                                        <p className="font-medium text-slate-50">
                                            {activeEvent.title}
                                        </p>
                                        {activeEvent.desc && (
                                            <p className="text-[0.7rem] text-slate-300 sm:text-xs">
                                                {activeEvent.desc}
                                            </p>
                                        )}
                                    </div>
                                    {totalImages > 1 && (
                                        <p className="text-[0.7rem] text-slate-400">
                                            {safeLightboxIndex + 1} / {totalImages}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>,
        document.body,
    );
}
