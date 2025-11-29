"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Activity, Github, Linkedin, Menu, X } from "lucide-react";
import { Cairo } from "next/font/google";
import { motion } from "framer-motion";
import { profile } from "@/constants/data";
import { prefix } from "@/lib/utils";
import { AvatarModal } from "@/components/avatar-modal";
import { NavDropdown } from "@/components/nav-dropdown";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/context/language-context";

const cairo = Cairo({
    subsets: ["arabic"],
    weight: ["700"],
});

export function Navbar() {
    const [isAvatarOpen, setIsAvatarOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { content } = useLanguage();

    const nav = content.nav;
    const navbar = content.navbar ?? {};

    const desktopLinks = (navbar.items as { id: string; label: string }[] | undefined) ?? [
        { id: "about", label: nav.about },
        { id: "skills", label: nav.skills },
        { id: "experience", label: nav.experience },
        { id: "projects", label: nav.projects },
    ];

    const communityLinks = [
        { id: "leadership", label: navbar.leadership ?? nav.leadership },
        { id: "bookshelf", label: navbar.bookshelf ?? "Bookshelf" },
        { id: "languages", label: navbar.languages ?? "Languages" },
        { id: "community", label: navbar.endorsements ?? "Endorsements" },
        { id: "guestbook", label: navbar.guestbook ?? "Guestbook" },
    ];

    const mobileLinks = [
        { id: "hero", label: nav.home },
        { id: "about", label: nav.about },
        { id: "education", label: nav.education },
        { id: "skills", label: nav.skills },
        { id: "experience", label: nav.experience },
        { id: "projects", label: nav.projects },
        { id: "leadership", label: navbar.leadership ?? nav.leadership },
        { id: "bookshelf", label: navbar.bookshelf ?? "Bookshelf" },
        { id: "languages", label: navbar.languages ?? "Languages" },
        { id: "community", label: navbar.endorsements ?? "Endorsements" },
        { id: "guestbook", label: navbar.guestbook ?? "Guestbook" },
        { id: "contact", label: navbar.contact ?? nav.contact },
    ];

    return (
        <>
            <div className="flex h-16 items-center justify-between px-4 sm:px-8">
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => setIsAvatarOpen(true)}
                        className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-zinc-700 bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400"
                        aria-label="Expand profile photo"
                    >
                        <motion.div layoutId="avatar-image" className="relative h-full w-full">
                            <Image
                                src={prefix(content.hero.avatar)}
                                alt={profile.name}
                                fill
                                className="object-cover"
                                sizes="36px"
                            />
                        </motion.div>
                    </button>
                    <div className="flex flex-col leading-tight">
                        <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-sm font-semibold text-slate-100 dark:text-slate-100">
                                {profile.name}
                            </span>
                            <span
                                className={`${cairo.className} text-sm font-bold text-slate-100`}
                            >
                                {profile.arabicName}
                            </span>
                        </div>
                    </div>
                </div>

                <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-400 md:flex">
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

                    <NavDropdown label="Community">
                        <div className="space-y-1">
                            {communityLinks.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className="block rounded-md px-2 py-1 text-sm text-zinc-100 transition-colors hover:bg-zinc-800/80"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </NavDropdown>
                </nav>

                <div className="flex items-center gap-2">
                    <div className="hidden items-center gap-1.5 sm:flex">
                        <Link
                            href={profile.github}
                            aria-label={content.nav.githubAria}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Github className="h-4 w-4" />
                        </Link>
                        <Link
                            href={profile.linkedin}
                            aria-label={content.nav.linkedinAria}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Linkedin className="h-4 w-4" />
                        </Link>
                        {profile.strava && (
                            <Link
                                href={profile.strava}
                                aria-label={content.nav.stravaAria}
                                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Activity className="h-4 w-4" />
                            </Link>
                        )}
                    </div>
                    <div className="hidden items-center gap-4 md:flex">
                        <LanguageSwitcher />
                        <Link
                            href="#contact"
                            className="rounded-full bg-zinc-100 px-3 py-1.5 text-sm font-medium text-black shadow-sm shadow-black/40 transition hover:bg-white"
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
