"use client";

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
    const { content } = useLanguage();

    if (typeof document === "undefined") return null;

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
                            className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-slate-800 shadow-2xl shadow-violet-500/25 md:h-96 md:w-96"
                        >
                            <Image
                                src={src}
                                alt={alt}
                                fill
                                className="object-cover"
                                sizes="(min-width: 768px) 384px, 288px"
                            />
                        </motion.div>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body,
    );
}
