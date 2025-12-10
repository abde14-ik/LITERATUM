"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { en } from "@/locales/en";
import { profile } from "@/constants/data";
import { prefix } from "@/lib/utils";
import { AvatarModal } from "@/components/avatar-modal";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/context/language-context";

export function Navbar() {
    const [isAvatarOpen, setIsAvatarOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const { content } = useLanguage();
    const typedContent = content as typeof en;

    const nav = typedContent.nav;
    const navbar = typedContent.navbar ?? {};

    const identities = [
        { text: "LITERATUM", font: "font-serif tracking-[0.35em] uppercase", lang: "la" },
    ];
    const identityCount = identities.length;

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((prev) => (prev + 1) % identityCount);
        }, 10000);

        return () => clearInterval(id);
    }, [identityCount]);

    type NavLink = { id: string; label: string };
    const defaultLinks: NavLink[] = [
        { id: "hero", label: nav.home },
        { id: "about", label: typedContent.aboutClub?.heading ?? nav.about },
        { id: "inkwell", label: typedContent.inkwell?.heading ?? "The Inkwell" },
        { id: "projects", label: typedContent.archives?.heading ?? nav.projects },
        { id: "skills", label: typedContent.lexicon?.heading ?? nav.skills },
    ];

    const navbarItems = navbar.items
        ? navbar.items.map((item) => ({ id: item.id, label: item.label }))
        : undefined;
    const desktopLinks: NavLink[] = navbarItems ?? defaultLinks;

    const mobileLinks = desktopLinks;

    return (
        <>
            <div className="flex h-16 items-center justify-between px-4 lg:pl-12 lg:pr-4">
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => setIsAvatarOpen(true)}
                        className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-zinc-700 bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400"
                        aria-label="Expand logo"
                    >
                        <motion.div
                            layoutId="avatar-image"
                            className="flex h-full w-full items-center justify-center bg-zinc-900"
                        >
                            <BookOpen className="h-4 w-4 text-gold" />
                        </motion.div>
                    </button>
                    <div className="flex flex-col leading-tight">
                        <div className="flex flex-wrap items-center gap-1.5 min-w-[140px]">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={identities[index].text}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    transition={{ duration: 0.25 }}
                                    className={`text-sm font-semibold text-slate-100 dark:text-slate-100 ${identities[index].font}`}
                                    lang={identities[index].lang}
                                >
                                    {identities[index].text}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                <nav className="hidden items-center gap-4 lg:gap-6 text-sm font-medium text-zinc-400 md:flex">
                    {desktopLinks.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="group relative pb-1 transition-colors hover:text-white"
                        >
                            {item.label}
                            <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-zinc-500 transition-transform duration-200 group-hover:scale-x-100" />
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <div className="hidden items-center gap-3 md:flex">
                        <div className="whitespace-nowrap">
                            <LanguageSwitcher />
                        </div>
                        <Link
                            href="#contact"
                            className="rounded-full bg-zinc-100 px-4 py-1.5 text-sm font-medium text-black shadow-sm shadow-black/40 transition hover:bg-white whitespace-nowrap min-w-fit flex-shrink-0"
                        >
                            {navbar.contact ?? nav.contact}
                        </Link>
                    </div>
                    <button
                        type="button"
                        onClick={() => setMobileOpen((prev) => !prev)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white md:hidden"
                        aria-label="Toggle navigation menu"
                    >
                        {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    </button>
                </div>
            </div>

            {mobileOpen && (
                <div className="fixed inset-x-0 top-16 z-30 border-t border-zinc-800/80 bg-black/95 pb-3 pt-2 md:hidden">
                    <div className="flex flex-col space-y-1 px-4">
                        {mobileLinks.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={() => setMobileOpen(false)}
                                className="rounded-md px-2 py-2 text-sm font-medium text-slate-100 hover:bg-slate-800/80"
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="mt-3 flex justify-start">
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
            )}

            <AvatarModal
                isOpen={isAvatarOpen}
                onClose={() => setIsAvatarOpen(false)}
                src={prefix(content.hero.avatar)}
                alt={profile.name}
            />
        </>
    );
}
