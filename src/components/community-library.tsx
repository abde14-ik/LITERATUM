"use client";

import { motion } from "framer-motion";
import { en } from "@/locales/en";
import { useLanguage } from "@/context/language-context";

const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

type LibraryBook = {
    title: string;
    author: string;
    image?: string;
    theme?: string;
    synopsis?: string;
    connection?: string;
    curator?: string;
    coverColor?: string;
    review?: string;
};

export function CommunityLibrary() {
    const { content } = useLanguage();
    const typedContent = content as typeof en;
    const archives = typedContent.archives ?? {};
    const library = typedContent.library ?? {};
    const books: LibraryBook[] = Array.isArray(library.items)
        ? (library.items as LibraryBook[]).map((book) => ({ ...book }))
        : [];

    const booksPerShelf = 4;
    const shelves: LibraryBook[][] = [];

    for (let i = 0; i < books.length; i += booksPerShelf) {
        shelves.push(books.slice(i, i + booksPerShelf));
    }

    const palette = ["bg-[#3A0F0F]", "bg-[#111827]", "bg-[#123524]", "bg-espresso"];

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
            <header className="mb-8 space-y-2">
                <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-parchment">
                    {archives.heading}
                </h2>
                <p className="text-sm text-parchment/70 sm:text-base leading-relaxed max-w-2xl">
                    {archives.subheading}
                </p>
            </header>

            <div className="space-y-10">
                {shelves.map((shelfBooks: LibraryBook[], shelfIndex: number) => (
                    <div key={shelfIndex} className="relative pb-6">
                        <div className="flex flex-wrap gap-6">
                            {shelfBooks.map((book: LibraryBook, index: number) => {
                                const globalIndex = shelfIndex * booksPerShelf + index;
                                const bgClass = palette[globalIndex % palette.length];
                                const curator = book.curator ?? "IKBI Abdelilah";

                                return (
                                    <motion.article
                                        key={book.title}
                                        className="group relative flex"
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.4, delay: globalIndex * 0.04, ease: "easeOut" }}
                                    >
                                        <div
                                            className={`${bgClass} relative flex aspect-[2/3] w-24 sm:w-28 md:w-32 items-center justify-center rounded-md border border-espresso/70 px-3 text-center shadow-[0_18px_40px_rgba(0,0,0,0.85)] transition-transform duration-200 group-hover:-translate-y-2`}
                                            style={{ transformStyle: "preserve-3d" }}
                                        >
                                            {/* Curator tag */}
                                            <div className="absolute -top-3 right-3">
                                                <div className="rounded-b-[0.25rem] bg-parchment px-2 py-0.5 text-[0.65rem] text-espresso shadow-sm shadow-black/40">
                                                    <span className="block italic">Read by {curator}</span>
                                                </div>
                                            </div>

                                            <div className="flex flex-col items-center justify-center gap-2">
                                                <h3 className="font-serif text-xs sm:text-sm md:text-base font-semibold leading-snug text-parchment">
                                                    {book.title}
                                                </h3>
                                                <p className="text-[0.7rem] sm:text-xs text-parchment/80 italic font-sans">
                                                    {book.author}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.article>
                                );
                            })}
                        </div>

                        {/* Shelf board */}
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 rounded-sm border-b-[12px] border-[#2A1D12] shadow-[0_14px_26px_rgba(0,0,0,0.9)]" />
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
