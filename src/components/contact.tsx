"use client";

import { motion } from "framer-motion";
import { contact, profile } from "@/constants/data";
import { Mail } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";

const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export function ContactSection() {
    const { content } = useLanguage();
    const formRef = useRef<HTMLFormElement | null>(null);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        if (!formRef.current) {
            setStatus("error");
            return;
        }

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
            )
            .then(
                () => {
                    setStatus("success");
                    formRef.current?.reset();
                    setTimeout(() => setStatus("idle"), 5000);
                },
                (error) => {
                    console.error(error);
                    setStatus("error");
                },
            );
    };

    return (
        <motion.section
            id="contact"
            className="scroll-mt-24 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <header className="mb-12 space-y-3">
                <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-[#D6C6B0]">
                    Epilogue
                </h2>
                <p className="text-sm text-parchment/70 sm:text-base">
                    {content.contact.subheading}
                </p>
            </header>

            <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
                <form
                    ref={formRef}
                    className="space-y-4 rounded-2xl border border-leather/70 bg-espresso/80 p-5 shadow-sm shadow-black/60"
                    onSubmit={sendEmail}
                >
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-1.5 text-sm">
                            <label htmlFor="name" className="block text-xs font-medium text-slate-200">
                                {content.contact.form.nameLabel}
                            </label>
                            <input
                                id="name"
                                name="user_name"
                                type="text"
                                className="w-full rounded-lg border border-violet-900/50 bg-midnight/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-gold focus:ring-1 focus:ring-gold"
                                placeholder={content.contact.form.namePlaceholder}
                            />
                        </div>
                        <div className="space-y-1.5 text-sm">
                            <label htmlFor="email" className="block text-xs font-medium text-slate-200">
                                {content.contact.form.emailLabel}
                            </label>
                            <input
                                id="email"
                                name="user_email"
                                type="email"
                                className="w-full rounded-lg border border-violet-900/50 bg-midnight/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-gold focus:ring-1 focus:ring-gold"
                                placeholder={content.contact.form.emailPlaceholder}
                                defaultValue=""
                            />
                        </div>
                    </div>
                    <div className="space-y-1.5 text-sm">
                        <label htmlFor="message" className="block text-xs font-medium text-slate-200">
                            {content.contact.form.messageLabel}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="w-full resize-none rounded-lg border border-violet-900/50 bg-midnight/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-gold focus:ring-1 focus:ring-gold"
                            placeholder={content.contact.form.messagePlaceholder}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="inline-flex items-center justify-center rounded-full border border-gold/40 bg-gradient-to-r from-royal to-royalDark px-5 py-2.5 text-sm font-semibold text-slate-50 shadow-lg shadow-gold/30 transition hover:border-gold/70 hover:from-royalDark hover:to-royal disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {status === "loading"
                            ? content.contact.states.sending
                            : status === "success"
                                ? content.contact.states.success
                                : status === "error"
                                    ? content.contact.states.error
                                    : content.contact.form.submitLabel}
                    </button>
                </form>

                <div className="space-y-4 rounded-2xl border border-leather/70 bg-espresso/80 p-5 text-sm text-slate-200 shadow-sm shadow-black/60">
                    <dl className="space-y-2 text-sm">
                        <div>
                            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                                {content.contact.info.emailLabel}
                            </dt>
                            <dd className="mt-1">
                                <a
                                    href={`mailto:${contact.email}`}
                                    className="inline-flex items-center gap-2 text-gold hover:text-amber-200"
                                >
                                    <Mail className="h-3.5 w-3.5" />
                                    <span>{contact.email}</span>
                                </a>
                            </dd>
                        </div>
                        <div>
                            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                                {content.contact.info.locationLabel}
                            </dt>
                            <dd className="mt-1 text-slate-200">{content.contact.meta.location}</dd>
                        </div>
                        <div>
                            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                                {content.contact.info.availabilityLabel}
                            </dt>
                            <dd className="mt-1 text-slate-200">{content.contact.meta.availability}</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </motion.section>
    );
}
