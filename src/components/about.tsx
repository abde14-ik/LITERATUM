"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { en } from "@/locales/en";
// import { Gallery } from "@/components/gallery";

const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export function AboutSection() {
    const { content } = useLanguage();
    const typedContent = content as typeof en;
    const about = typedContent.aboutClub ?? typedContent.about;

    return (
        <motion.section
            id="about"
            className="scroll-mt-24 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <header className="mb-12 mt-[1cm] space-y-3">
                <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-slate-100">
                    {about.heading}
                </h2>
                <p className="text-sm text-slate-400 sm:text-base">
                    {about.subheading}
                </p>
            </header>

            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
                <div className="rounded-2xl border border-leather/70 bg-espresso/80 p-5 shadow-sm shadow-black/60">
                    <h3 className="text-sm font-semibold text-slate-100 sm:text-base">
                        {about.engineeringTitle}
                    </h3>
                    <div className="mt-3 space-y-2 text-sm text-slate-300 sm:text-[0.94rem]">
                        {about.profileItems.map((item: string) => (
                            <p key={item}>{item}</p>
                        ))}
                    </div>
                </div>

                <div className="rounded-2xl border border-leather/70 bg-espresso/80 p-5 shadow-sm shadow-black/60">
                    <h3 className="text-sm font-semibold text-slate-100 sm:text-base">
                        {about.beyondCodeTitle}
                    </h3>
                    <div className="mt-3 space-y-2 text-sm text-slate-300 sm:text-[0.94rem]">
                        {about.beyondItems.map((item: string) => (
                            <p key={item}>{item}</p>
                        ))}
                    </div>
                </div>

                {/**
                 * Life Gallery (photos) placeholder.
                 * Uncomment the block below once you have added images under public/gallery/.
                 */}
                {/**
                <div className="md:col-span-2 rounded-2xl border border-slate-800/70 bg-slate-950/80 p-5 shadow-sm shadow-slate-950/40">
                    <Gallery />
                </div>
                */}
            </div>
        </motion.section>
    );
}
