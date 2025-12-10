import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { LanguageProvider } from "@/context/language-context";

export const metadata: Metadata = {
  title: "LITERATUM | The Syntax Society",
  description:
    "A Dark Academia Reading Club. Where Engineering Meets Philosophy.",
  keywords: [
    "Literature",
    "Philosophy",
    "Reading Club",
    "Dark Academia",
    "Syntax Society",
  ],
  authors: [{ name: "The Syntax Society" }],
  creator: "LITERATUM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased font-sans">
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            <div className="min-h-screen bg-espresso text-parchment transition-colors duration-300 bg-[radial-gradient(circle_at_top,_rgba(197,160,89,0.18),transparent_65%)]">
              <ScrollProgress />
              <header className="sticky top-0 z-40 border-b border-leather/70 bg-leather/85 backdrop-blur-md">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                  <Navbar />
                </div>
              </header>
              <main className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
                {children}
              </main>
            </div>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
