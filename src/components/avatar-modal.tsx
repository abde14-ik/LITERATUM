"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, X } from "lucide-react";
import { profile } from "@/constants/data";
import { useLanguage } from "@/context/language-context";

type AvatarModalProps = {
    isOpen: boolean;
    onClose: () => void;
    src: string;
    alt: string;
};

export function AvatarModal({ isOpen, onClose, src, alt }: AvatarModalProps) {
    const [mounted, setMounted] = useState(false);
    const { content } = useLanguage();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <button
                        type="button"
                        onClick={onClose}
                        className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-slate-100 shadow-md shadow-black/60 transition hover:bg-black/80"
                        aria-label="Close profile photo"
                    >
                        <X className="h-5 w-5" />
                    </button>

                    <motion.div
                        className="relative flex flex-col items-center gap-4"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <motion.div
                            layoutId="avatar-image"
                            className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-slate-800 shadow-2xl shadow-teal-500/20 md:h-96 md:w-96"
                        >
                            <Image
                                src={src}
                                alt={alt}
                                fill
                                className="object-cover"
                                sizes="(min-width: 768px) 384px, 288px"
                            />
                        </motion.div>

                        <motion.div
                            className="mt-3 flex items-center justify-center gap-3 text-xs text-slate-200"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.2, ease: "easeOut" }}
                        >
                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/90 text-slate-100 shadow-sm shadow-black/50 transition hover:bg-slate-800/90"
                                aria-label={content.contact.info.linkedinLabel}
                            >
                                <Linkedin className="h-4 w-4" />
                            </a>
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/90 text-slate-100 shadow-sm shadow-black/50 transition hover:bg-slate-800/90"
                                aria-label={content.contact.info.githubLabel}
                            >
                                <Github className="h-4 w-4" />
                            </a>
                            <a
                                href={`mailto:${profile.email}`}
                                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/90 text-slate-100 shadow-sm shadow-black/50 transition hover:bg-slate-800/90"
                                aria-label={content.contact.info.emailLabel}
                            >
                                <Mail className="h-4 w-4" />
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body,
    );
}
