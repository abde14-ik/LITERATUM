"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/context/language-context";
import type { EnContent } from "@/locales/en";
import { Book3D } from "@/components/book-3d";

export function BookshelfSection() {
    const { content } = useLanguage();
    type Book = EnContent["library"]["items"][number];
    const books = content.library.items as readonly Book[];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedBook = books[selectedIndex] ?? books[0];
    return (
        <section id="bookshelf" className="scroll-mt-24 space-y-3">
            <header className="space-y-1">
                <h3 className="font-serif text-sm font-semibold text-slate-100 sm:text-base">
                    {content.library.heading}
                </h3>
                <p className="text-[0.78rem] text-slate-400 sm:text-xs">
                    {content.library.tagline}
                </p>
            </header>

            <div className="grid grid-cols-2 gap-4 pb-2 pt-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {books.map((book, index) => (
                    <motion.article
                        key={book.title}
                        className="group relative flex flex-col"
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                        <Book3D
                            title={book.title}
                            image={book.image}
                            isActive={index === selectedIndex}
                            onSelect={() => setSelectedIndex(index)}
                        />

                        <div className="mt-2 space-y-1 text-[0.7rem] text-slate-300">
                            <h4 className="font-serif text-xs font-semibold text-slate-100 sm:text-sm">
                                {book.title}
                            </h4>
                            {book.theme && (
                                <span className="inline-flex items-center rounded-full border border-gold/20 bg-gold/10 px-2 py-0.5 text-[0.65rem] font-medium text-gold">
                                    {book.theme}
                                </span>
                            )}
                        </div>
                    </motion.article>
                ))}
            </div>

            {selectedBook && (
                <div className="mt-4 rounded-2xl border border-violet-600/40 bg-indigo-950/50 p-4 shadow-sm shadow-slate-950/40 backdrop-blur sm:p-5">
                    <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-violet-300">
                        Book Insight
                    </p>
                    <h3 className="mt-1 font-serif text-sm font-semibold text-slate-100 sm:text-base">
                        {selectedBook.title}
                    </h3>
                    {selectedBook.theme && (
                        <p className="mt-0.5 text-xs text-violet-200 sm:text-[0.8rem]">
                            {selectedBook.theme}
                        </p>
                    )}

                    {selectedBook.synopsis && (
                        <p className="mt-3 text-sm text-slate-300 sm:text-[0.94rem]">
                            {selectedBook.synopsis}
                        </p>
                    )}
                </div>
            )}
        </section>
    );
}
