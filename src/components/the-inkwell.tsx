"use client";

import { type FormEvent, useEffect, useState } from "react";
import { en } from "@/locales/en";
import { useLanguage } from "@/context/language-context";

type Entry = {
    id: string;
    author: string;
    text: string;
    date: string;
    isUser: boolean;
};

export function TheInkwell() {
    const { content } = useLanguage();
    const inkwell = (content as typeof en).inkwell;

    const [entries, setEntries] = useState<Entry[]>([
        {
            id: "0",
            author: "System",
            text: "Welcome to the Inkwell. The margins are yours.",
            date: "Now",
            isUser: false,
        },
    ]);

    const [entryText, setEntryText] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showArchive, setShowArchive] = useState(false);
    const [selectedEntry, setSelectedEntry] = useState<Entry | null>(null);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setSelectedEntry(null);
            }
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    if (!inkwell) {
        return null;
    }

    const latestEntry = entries[0];
    const archiveEntries = entries.slice(1);

    const handleDeploy = () => {
        const trimmedText = entryText.trim();
        const trimmedAuthor = authorName.trim();

        if (!trimmedText || !trimmedAuthor || isSubmitting) {
            return;
        }

        setIsSubmitting(true);

        const now = new Date();
        const formattedDate = now.toLocaleString(undefined, {
            year: "numeric",
            month: "short",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        });

        const newEntryBase: Omit<Entry, "id"> = {
            author: trimmedAuthor,
            text: trimmedText,
            date: formattedDate,
            isUser: true,
        };

        setEntryText("");
        setAuthorName("");

        window.setTimeout(() => {
            const newEntry: Entry = {
                id: Date.now().toString(),
                ...newEntryBase,
            };

            setEntries((prev) => [newEntry, ...prev]);
            setIsSubmitting(false);
        }, 1000);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        handleDeploy();
    };

    return (
        <section id="inkwell" className="scroll-mt-32 py-6 lg:py-8">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-3xl border border-leather/70 bg-espresso/90 px-6 py-6 sm:px-8 sm:py-7 shadow-[0_24px_70px_rgba(0,0,0,0.9)]">
                    <div className="grid gap-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.1fr)] md:items-start">
                        {/* Left column: prompt + feed */}
                        <div className="space-y-5">
                            <div className="space-y-3">
                                <p className="font-mono text-[0.7rem] tracking-[0.25em] text-gold/80 uppercase">
                                    THE INKWELL
                                </p>
                                <div className="space-y-2">
                                    <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-parchment">
                                        {inkwell.heading}
                                    </h2>
                                    <p className="text-sm font-semibold tracking-[0.2em] text-parchment/60 uppercase">
                                        {inkwell.subheading}
                                    </p>
                                </div>
                                <div className="mt-1 space-y-3 text-sm sm:text-[0.95rem] leading-relaxed text-parchment/85">
                                    <p dangerouslySetInnerHTML={{ __html: inkwell.prompt }} />
                                    {inkwell.note && (
                                        <p className="text-xs text-parchment/60">
                                            {inkwell.note}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {latestEntry && (
                                <div
                                    className="mt-2 rounded-2xl border border-parchment/35 bg-espresso/70 px-4 py-4 shadow-inner shadow-black/40 cursor-pointer hover:opacity-80 transition-opacity"
                                    onClick={() => setSelectedEntry(latestEntry)}
                                >
                                    <p className="text-[0.65rem] font-mono uppercase tracking-[0.22em] text-gold/80">
                                        Latest inscription
                                    </p>
                                    <p className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-parchment/60">
                                        {latestEntry.date}
                                    </p>
                                    <p className="mt-3 text-sm sm:text-[0.95rem] leading-relaxed text-parchment/85">
                                        {latestEntry.text}
                                    </p>
                                    <p className="mt-2 font-serif text-sm font-semibold text-gold">
                                        — {latestEntry.author}
                                    </p>
                                </div>
                            )}

                            <div className="flex items-center justify-between pt-1">
                                <button
                                    type="button"
                                    onClick={() => setShowArchive((prev) => !prev)}
                                    className="inline-flex items-center text-xs font-mono uppercase tracking-[0.18em] text-gold hover:text-amber-200"
                                >
                                    {showArchive ? "Hide archive" : "See more entries"}
                                </button>
                                <p className="text-[0.7rem] text-parchment/50">
                                    Your inscription is only stored in this browser.
                                </p>
                            </div>

                            {showArchive && archiveEntries.length > 0 && (
                                <div className="mt-3 max-h-64 space-y-3 overflow-y-auto pr-1">
                                    {archiveEntries.map((entry) => (
                                        <article
                                            key={entry.id}
                                            className="rounded-2xl border border-parchment/25 bg-espresso/80 px-4 py-3 shadow-inner shadow-black/40 cursor-pointer hover:opacity-80 transition-opacity"
                                            onClick={() => setSelectedEntry(entry)}
                                        >
                                            <div className="flex items-baseline justify-between gap-3">
                                                <p className="font-serif text-sm font-semibold text-gold">
                                                    {entry.author}
                                                </p>
                                                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-parchment/55">
                                                    {entry.date}
                                                </p>
                                            </div>
                                            <p className="mt-2 text-sm sm:text-[0.95rem] leading-relaxed text-parchment/85">
                                                {entry.text}
                                            </p>
                                        </article>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Right column: typewriter-style input */}
                        <div className="rounded-2xl border border-parchment/40 bg-parchment/95 shadow-inner shadow-black/40">
                            <form onSubmit={handleSubmit} className="flex h-full flex-col">
                                <div className="flex items-center justify-between border-b border-espresso/15 px-4 py-2">
                                    <span className="text-[0.7rem] font-mono uppercase tracking-[0.2em] text-espresso/70">
                                        Your page
                                    </span>
                                    <span className="text-[0.7rem] text-espresso/50">
                                        Type as if each sentence were ink.
                                    </span>
                                </div>

                                <div className="flex-1 space-y-3 px-4 py-3">
                                    <textarea
                                        className="min-h-[8rem] w-full resize-none bg-[#F2E8C9] px-3 py-3 text-sm text-espresso font-mono leading-relaxed outline-none placeholder:text-espresso/40"
                                        rows={8}
                                        placeholder={inkwell.placeholder}
                                        value={entryText}
                                        onChange={(event) => setEntryText(event.target.value)}
                                    />

                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                        <div className="flex-1">
                                            <label className="text-[0.7rem] font-mono uppercase tracking-[0.18em] text-espresso/70">
                                                Signed by
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full border-b border-espresso/30 bg-transparent pb-1 text-sm font-mono text-espresso placeholder:text-espresso/40 outline-none"
                                                    placeholder="Your name or alias"
                                                    value={authorName}
                                                    onChange={(event) => setAuthorName(event.target.value)}
                                                />
                                            </label>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="
                                                relative overflow-hidden
                                                bg-[#231709]
                                                text-[#C5A059]
                                                border border-[#C5A059]/30
                                                font-cinzel
                                                text-sm uppercase tracking-widest font-bold
                                                py-3 px-8 rounded-sm
                                                transition-all duration-300
                                                hover:bg-[#3C2A20]
                                                hover:shadow-[0_0_15px_rgba(197,160,89,0.3)]
                                                disabled:opacity-50 disabled:cursor-not-allowed
                                            "
                                        >
                                            {isSubmitting ? (
                                                <span className="animate-pulse">Quill writing...</span>
                                            ) : (
                                                "Inscribe"
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {selectedEntry && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
                    onClick={() => setSelectedEntry(null)}
                >
                    <article
                        className="relative w-full max-w-2xl border border-[#C5A059] bg-[#F2E8C9] p-8 text-[#231709] shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="absolute right-4 top-4 text-xl leading-none font-[var(--font-heading)] text-[#5c4a36] hover:text-[#231709] transition-colors"
                            onClick={() => setSelectedEntry(null)}
                            aria-label="Close"
                        >
                            ×
                        </button>

                        <h3 className="font-[var(--font-heading)] text-2xl sm:text-3xl tracking-tight">
                            {selectedEntry.author}
                        </h3>
                        <p className="mt-1 font-[var(--font-fira-code)] text-xs uppercase tracking-[0.2em] text-[#5c4a36]">
                            {selectedEntry.date}
                        </p>
                        <p className="mt-4 font-[var(--font-body)] text-xl sm:text-2xl leading-relaxed">
                            {selectedEntry.text}
                        </p>
                    </article>
                </div>
            )}
        </section>
    );
}
