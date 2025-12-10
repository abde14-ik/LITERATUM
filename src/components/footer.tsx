"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";

export function Footer() {
  const year = new Date().getFullYear();
  const { content } = useLanguage();

  const quotes = [
    {
      text: "A human being is never meant to be dissociated into parts. We are complex, whole, and far more than what we think.",
      lang: "en",
      font: "font-serif",
    },
    {
      text: "L'être humain n'est pas fait pour être dissocié en parties. Nous sommes complexes, entiers, et bien plus que ce que l'on imagine.",
      lang: "fr",
      font: "font-serif",
    },
    {
      text: "لم يُخلق الإنسان ليُختزل في أجزاء. نحن كيانٌ كاملٌ معقد، وأبعدُ بكثيرٍ مما نظن.",
      lang: "ar",
      font: "font-serif",
    },
  ] as const;

  const [quoteIndex, setQuoteIndex] = useState(0);
  const currentQuote = quotes[quoteIndex];
  const isArabic = currentQuote.lang === "ar";

  useEffect(() => {
    const id = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 10000);

    return () => clearInterval(id);
  }, [quotes.length]);

  return (
    <footer className="mt-10 border-t border-slate-800/80 pt-6 text-center text-xs text-slate-500">
      <p>
        {year} {content.footer.owner}. {content.footer.rights}
      </p>
      <div className="mt-3 flex justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentQuote.lang}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
