"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { prefix } from "@/lib/utils";

export function EndorsementsSection() {
    const { content } = useLanguage();
    const items = content.endorsements.items;

    return (
        <section id="community" className="scroll-mt-32 space-y-6">
            <div className="mb-12 space-y-3">
                <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-slate-100">
                    {content.endorsements.heading}
                </h2>
                <p className="text-sm text-zinc-400 sm:text-base leading-relaxed">
                    {content.endorsements.subheading}
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item, index) => (
                    <motion.article
                        key={`${item.name}-${index}`}
                        className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#121212] p-4 shadow-sm shadow-black/50"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                    >
                        <div className="flex items-start gap-3">
                            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-black">
                                <Image
                                    src={prefix(item.image)}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                    sizes="40px"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-start justify-between gap-2">
                                    <div>
                                        <p className="font-serif text-sm font-semibold text-white">
                                            {item.name}
                                        </p>
                                        <p className="text-[11px] leading-snug text-zinc-400">
                                            {item.role}
                                            {item.company && (
                                                <>
                                                    {" • "}
                                                    <span className="text-zinc-500">{item.company}</span>
                                                </>
                                            )}
                                        </p>
                                    </div>
                                    {item.linkedinUrl && (
                                        <Link
                                            href={item.linkedinUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={`View ${item.name} on LinkedIn`}
                                            className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-700 text-zinc-300 transition hover:bg-zinc-600"
                                        >
                                            <Linkedin className="h-3.5 w-3.5" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>

                        <p className="mt-3 text-sm italic text-zinc-300 leading-relaxed">
                            {item.text}
                        </p>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
