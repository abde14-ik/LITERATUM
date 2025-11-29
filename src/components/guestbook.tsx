"use client";

import Giscus from "@giscus/react";
import { useLanguage } from "@/context/language-context";
import { GISCUS_CONFIG } from "@/lib/giscus-config";

export function GuestbookSection() {
    const { content, language } = useLanguage();
    const hasGiscusConfig = Boolean(GISCUS_CONFIG.repoId && GISCUS_CONFIG.categoryId);

    return (
        <section id="guestbook" className="scroll-mt-32">
            <div className="mb-12 space-y-3">
                <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-slate-100">
                    {content.guestbook.heading}
                </h2>
                <p className="text-sm text-slate-400 sm:text-base">
                    {content.guestbook.subheading}
                </p>
            </div>

            <div className="mt-4 rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/40">
                {hasGiscusConfig ? (
                    <Giscus
                        repo={GISCUS_CONFIG.repo}
                        repoId={GISCUS_CONFIG.repoId}
                        category={GISCUS_CONFIG.category}
                        categoryId={GISCUS_CONFIG.categoryId}
                        mapping="pathname"
                        strict="0"
                        reactionsEnabled="1"
                        emitMetadata="0"
                        inputPosition="bottom"
                        theme="transparent_dark"
                        lang={language === "fr" ? "fr" : "en"}
                        loading="lazy"
                    />
                ) : (
                    <p className="text-sm text-slate-500">
                        Guestbook coming soon.
                    </p>
                )}
            </div>
        </section>
    );
}
