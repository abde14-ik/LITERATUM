"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cairo, Playfair_Display } from "next/font/google";
import { useLanguage } from "@/context/language-context";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export function Footer() {
  const year = new Date().getFullYear();
  const { content } = useLanguage();

  const quotes = [
    {
      text: "A human being is never meant to be dissociated into parts. We are complex, whole, and far more than what we think.",
      lang: "en",
      font: playfair.className,
    },
    {
      text: "L'être humain n'est pas fait pour être dissocié en parties. Nous sommes complexes, entiers, et bien plus que ce que l'on imagine.",
      lang: "fr",
      font: playfair.className,
    },
    {
      text: "لم يُخلق الإنسان ليُختزل في أجزاء. نحن كيانٌ كاملٌ معقد، وأبعدُ بكثيرٍ مما نظن.",
      lang: "ar",
      font: cairo.className,
    },
  ] as const;

  const [quoteIndex, setQuoteIndex] = useState(0);
  const currentQuote = quotes[quoteIndex];
  const isArabic = currentQuote.lang === "ar";

  useEffect(() => {
    const id = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(id);
  }, [quotes.length]);

  return (
    <footer className="mt-10 border-t border-slate-800/80 pt-6 text-center text-xs text-slate-500">
      <p>
        © {year} {content.footer.owner}. {content.footer.rights}
      </p>
      <div className="mt-3 flex justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentQuote.lang}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            dir={isArabic ? "rtl" : "ltr"}
            className={`${currentQuote.font} max-w-2xl text-[0.7rem] text-slate-400 ${isArabic ? "text-right" : "text-center"
              }`}
          >
            {currentQuote.text}
          </motion.p>
        </AnimatePresence>
      </div>
    </footer>
  );
}
