"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { en } from "@/locales/en";
import { fr } from "@/locales/fr";

export type Language = "en" | "fr";

type LanguageContextValue = {
    language: Language;
    content: typeof en | typeof fr;
    toggleLanguage: () => void;
    setLanguage: (language: Language) => void;
    isMatrixMode: boolean;
    toggleMatrixMode: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "language-preference";

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>(() => {
        if (typeof window === "undefined") {
            return "en";
        }
        const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
        return stored === "en" || stored === "fr" ? stored : "en";
    });
    const [isMatrixMode, setIsMatrixMode] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        window.localStorage.setItem(STORAGE_KEY, language);
    }, [language]);

    const content = language === "fr" ? fr : en;

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "fr" : "en"));
    };

    const toggleMatrixMode = () => {
        setIsMatrixMode((prev) => !prev);
    };

    const value: LanguageContextValue = {
        language,
        content,
        toggleLanguage,
        setLanguage,
        isMatrixMode,
        toggleMatrixMode,
    };

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return ctx;
}
