"use client";

import Image from "next/image";
import { prefix } from "@/lib/utils";

const galleryItems = [
    {
        src: "/gallery/running-1.jpg",
        alt: "Running with INPT Runners",
        cols: "md:col-span-2",
        rows: "md:row-span-2",
    },
    {
        src: "/gallery/reading-1.jpg",
        alt: "Reading and note-taking",
        cols: "",
        rows: "",
    },
    {
        src: "/gallery/hiking-1.jpg",
        alt: "Hiking in nature",
        cols: "",
        rows: "md:row-span-2",
    },
    {
        src: "/gallery/community-1.jpg",
        alt: "Community event or workshop",
        cols: "md:col-span-2",
        rows: "",
    },
];

export function Gallery() {
    return (
        <section className="space-y-3">
            <header className="space-y-1">
                <h3 className="font-serif text-sm font-semibold text-slate-100 sm:text-base">
                    Life Gallery (coming soon)
                </h3>
                <p className="text-[0.78rem] text-slate-400 sm:text-xs">
                    Moments from running, reading, and building communities.
                </p>
            </header>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 auto-rows-[120px] md:auto-rows-[150px]">
                {galleryItems.map((item) => (
                    <div
                        key={item.src}
                        className={`relative overflow-hidden rounded-xl bg-slate-900/60 ${item.cols} ${item.rows}`}
                    >
                        <Image
                            src={prefix(item.src)}
                            alt={item.alt}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    </div>
                ))}
            </div>
        </section>
    );
}
