"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type NavDropdownProps = {
    label: string;
    children: ReactNode;
};

export function NavDropdown({ label, children }: NavDropdownProps) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="group inline-flex items-center gap-1 pb-1 text-sm font-medium text-slate-400 transition-colors hover:text-violet-300"
            >
                <span>{label}</span>
                <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
                />
                <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-violet-400 to-amber-300 transition-transform duration-200 group-hover:scale-x-100" />
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute right-0 top-full z-40 mt-2 min-w-[10rem] rounded-xl border border-slate-700/70 bg-slate-950/90 p-2 text-sm text-slate-100 shadow-lg shadow-slate-950/70 backdrop-blur-md"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
