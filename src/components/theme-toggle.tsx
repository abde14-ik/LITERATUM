"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button
                type="button"
                aria-label="Toggle theme"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-600/60 bg-slate-900/60 text-slate-300 shadow-sm transition-colors hover:border-violet-400/60 hover:text-violet-300 dark:border-slate-500/60 dark:bg-slate-800/80"
            >
                <span className="h-4 w-4 rounded-full bg-slate-500/70" />
            </button>
        );
    }

    const isDark = theme === "dark";

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-600/60 bg-slate-900/60 text-slate-300 shadow-sm transition-colors hover:border-violet-400/60 hover:text-violet-300 dark:border-slate-500/60 dark:bg-slate-800/80"
        >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </button>
    );
}
