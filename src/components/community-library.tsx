"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/language-context";
import { en } from "@/locales/en";
import { supabase } from "@/lib/supabase";

type Book = {
    title: string;
    author: string;
    year: string;
    genre: string;
    dateDiscussed: string;
    seriesLabel: string;
    notes: string;
    curator: string;
    coverColor: string;
};

type LibraryRow = {
    id: string;
    title: string;
    author: string;
    curator?: string;
    review?: string;
    cover_color?: string;
    created_at: string;
};

const COVER_PALETTE: string[] = [
    "#7f1d1d", // deep crimson
    "#1e293b", // navy
    "#064e3b", // forest
    "#3b2f2f", // espresso
];

export function CommunityLibrary() {
    const { content } = useLanguage();
    const archives = (content as typeof en).archives;

    const seededBooks: Book[] = archives.items.map((item, index) => ({
        title: item.title,
        author: item.author,
        year: item.year,
        genre: item.genre,
        dateDiscussed: item.dateDiscussed,
        seriesLabel: item.seriesLabel,
        notes: item.notes,
        curator: "Curator",
        coverColor: COVER_PALETTE[index % COVER_PALETTE.length],
    }));

    const [books, setBooks] = useState<Book[]>(seededBooks);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [curator, setCurator] = useState("");
    const [review, setReview] = useState("");
    const [showToast, setShowToast] = useState(false);

    const lastBookRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!isModalOpen) return;

        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsModalOpen(false);
        };

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = originalOverflow;
        };
    }, [isModalOpen]);

    useEffect(() => {
        if (books.length > seededBooks.length && lastBookRef.current) {
            lastBookRef.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [books.length]);

    useEffect(() => {
        if (!showToast) return;

        const timeout = window.setTimeout(() => {
            setShowToast(false);
        }, 2500);

        return () => window.clearTimeout(timeout);
    }, [showToast]);

    useEffect(() => {
        const fetchBooks = async () => {
            const { data, error } = await supabase
                .from<LibraryRow>("library_books")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) {
                console.error("Failed to load community books", error);
                setBooks(seededBooks);
                return;
            }

            const dynamicBooks: Book[] =
                data?.map((row) => ({
                    title: row.title,
                    author: row.author,
                    year: "—",
                    genre: "Reader Recommendation",
                    dateDiscussed: "—",
                    seriesLabel: "Community Shelf",
                    notes: row.review ?? "",
                    curator: row.curator ?? "Contributor",
                    coverColor:
                        row.cover_color ||
                        COVER_PALETTE[Math.floor(Math.random() * COVER_PALETTE.length)],
                })) ?? [];

            setBooks([...seededBooks, ...dynamicBooks]);
        };

        fetchBooks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [archives.items.length]);

    if (!archives) return null;

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        const trimmedTitle = title.trim();
        const trimmedAuthor = author.trim();
        const trimmedCurator = curator.trim();
        const trimmedReview = review.trim();

        if (!trimmedTitle || !trimmedAuthor || !trimmedCurator || !trimmedReview) {
            return;
        }

        const randomColor =
            COVER_PALETTE[Math.floor(Math.random() * COVER_PALETTE.length)];

        const newBook: Book = {
            title: trimmedTitle,
            author: trimmedAuthor,
            year: "—",
            genre: "Reader Recommendation",
            dateDiscussed: "—",
            seriesLabel: "Community Shelf",
            notes: trimmedReview,
            curator: trimmedCurator,
            coverColor: randomColor,
        };

        const { error } = await supabase.from("library_books").insert([
            {
                title: trimmedTitle,
                author: trimmedAuthor,
                curator: trimmedCurator,
                review: trimmedReview,
                cover_color: randomColor,
            },
        ]);

        if (error) {
            console.error("Failed to add book", error);
        } else {
            setBooks((prev) => [...prev, newBook]);
            setShowToast(true);
            if (lastBookRef.current) {
                lastBookRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                });
            }
        }

        setTitle("");
        setAuthor("");
        setCurator("");
        setReview("");
        setIsModalOpen(false);
    };

    return (
        <section id="library" className="scroll-mt-32 py-6 lg:py-8">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-3xl border border-leather/70 bg-espresso/90 px-6 py-6 sm:px-8 sm:py-7 shadow-[0_24px_70px_rgba(0,0,0,0.9)]">
                    <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                        <div>
                            <p className="font-mono text-[0.7rem] tracking-[0.25em] text-gold/80 uppercase">
                                EX LIBRIS
                            </p>
                            <h2 className="mt-1 font-serif text-3xl md:text-4xl tracking-tight text-parchment">
                                {archives.heading}
                            </h2>
                        </div>
                        <p className="max-w-xl text-sm text-parchment/70">
                            {archives.subheading}
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {books.map((book, index) => (
                            <article
                                key={`${book.title}-${book.author}-${index}`}
                                className="flex flex-col rounded-2xl border border-espresso/40 bg-espresso/80 p-4 shadow-inner shadow-black/40"
                                ref={index === books.length - 1 ? lastBookRef : undefined}
                            >
                                <div
                                    className="mb-3 h-24 w-full rounded-md shadow-md"
                                    style={{
                                        backgroundColor: book.coverColor,
                                        backgroundImage:
                                            "linear-gradient(135deg, rgba(255,255,255,0.06), transparent)",
                                    }}
                                />
                                <h3 className="font-serif text-sm sm:text-base font-semibold leading-snug text-parchment">
                                    {book.title}
                                </h3>
                                <p className="mt-1 text-[0.7rem] sm:text-xs text-parchment/80 italic">
                                    {book.author}
                                </p>
                                <p className="mt-2 text-[0.7rem] font-mono uppercase tracking-[0.18em] text-gold/80">
                                    {book.seriesLabel}
                                </p>
                                <p className="mt-2 text-xs text-parchment/80">
                                    {book.notes}
                                </p>
                                <p className="mt-3 text-[0.7rem] text-parchment/60">
                                    Curated by <span className="italic">{book.curator}</span>
                                </p>
                            </article>
                        ))}

                        {/* Ghost Book card */}
                        <button
                            type="button"
                            onClick={handleOpenModal}
                            className="flex h-full min-h-[9rem] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#C5A059]/40 bg-[#F2E8C9]/5 text-parchment/70 transition shadow-inner shadow-black/20 hover:shadow-[0_0_15px_#C5A059]"
                        >
                            <span className="text-3xl leading-none text-[#C5A059]">+</span>
                            <span className="mt-2 text-xs font-mono uppercase tracking-[0.18em]">
                                Contribute
                            </span>
                            <span className="mt-1 text-[0.7rem] text-parchment/50">
                                Add a volume to the shelf
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    onClick={handleCloseModal}
                >
                    <article
                        className="w-full max-w-xl rounded-sm border border-[#C5A059] bg-[#F2E8C9] text-[#231709] shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <header className="relative border-b border-[#dcc9a2] px-6 py-4">
                            <h3 className="font-[var(--font-heading)] text-xl tracking-tight">
                                Contribute a Volume
                            </h3>
                            <p className="mt-1 text-xs text-[#5c4a36]">
                                Suggestions live only in your browser — a temporary community shelf.
                            </p>
                            <button
                                type="button"
                                className="absolute right-4 top-4 text-lg leading-none font-[var(--font-heading)] text-[#5c4a36] hover:text-[#231709] transition-colors"
                                onClick={handleCloseModal}
                                aria-label="Close"
                            >
                                ×
                            </button>
                        </header>
                        <form onSubmit={handleSubmit} className="space-y-4 px-6 py-4">
                            <div>
                                <label className="block text-xs font-mono uppercase tracking-[0.18em] text-[#5c4a36]">
                                    Title
                                    <input
                                        type="text"
                                        className="mt-1 w-full rounded-sm border border-[#d6c6a0] bg-[#F2E8C9] px-3 py-2 text-sm text-[#231709] placeholder:text-[#7b6a4d] outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                                        value={title}
                                        onChange={(event) => setTitle(event.target.value)}
                                        placeholder="What book belongs on this shelf?"
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="block text-xs font-mono uppercase tracking-[0.18em] text-[#5c4a36]">
                                    Author
                                    <input
                                        type="text"
                                        className="mt-1 w-full rounded-sm border border-[#d6c6a0] bg-[#F2E8C9] px-3 py-2 text-sm text-[#231709] placeholder:text-[#7b6a4d] outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                                        value={author}
                                        onChange={(event) => setAuthor(event.target.value)}
                                        placeholder="Who wrote it?"
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="block text-xs font-mono uppercase tracking-[0.18em] text-[#5c4a36]">
                                    Curator Name
                                    <input
                                        type="text"
                                        className="mt-1 w-full rounded-sm border border-[#d6c6a0] bg-[#F2E8C9] px-3 py-2 text-sm text-[#231709] placeholder:text-[#7b6a4d] outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                                        value={curator}
                                        onChange={(event) => setCurator(event.target.value)}
                                        placeholder="Who is recommending this?"
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="block text-xs font-mono uppercase tracking-[0.18em] text-[#5c4a36]">
                                    Brief Review
                                    <textarea
                                        className="mt-1 w-full min-h-[6rem] rounded-sm border border-[#d6c6a0] bg-[#F2E8C9] px-3 py-2 text-sm text-[#231709] placeholder:text-[#7b6a4d] outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                                        value={review}
                                        onChange={(event) => setReview(event.target.value)}
                                        placeholder="Why this book? What does it leave you with?"
                                    />
                                </label>
                            </div>

                            <div className="mt-2 flex justify-end">
                                <button
                                    type="submit"
                                    className="
                                        rounded-sm
                                        border border-[#C5A059]/40
                                        bg-[#231709]
                                        px-6 py-2
                                        text-sm font-semibold uppercase tracking-[0.18em]
                                        text-[#C5A059]
                                        transition
                                        hover:bg-[#3C2A20]
                                        hover:shadow-[0_0_15px_rgba(197,160,89,0.35)]
                                    "
                                >
                                    Shelve Volume
                                </button>
                            </div>
                        </form>
                    </article>
                </div>
            )}

            {showToast && (
                <div className="fixed bottom-6 right-6 z-50 rounded-md border border-[#C5A059]/60 bg-[#231709] px-4 py-3 text-xs shadow-lg">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[#C5A059]">
                        Ex Libris
                    </p>
                    <p className="mt-1 text-[0.75rem] text-parchment/80">
                        Book added to the shelf.
                    </p>
                </div>
            )}
        </section>
    );
}

