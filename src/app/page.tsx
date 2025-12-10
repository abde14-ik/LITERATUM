import { HeroSection } from "@/components/hero";
import { TheInkwell } from "@/components/sections/inkwell";
import { PrologueSection } from "@/components/sections/prologue";
import { CommunityLibrary } from "@/components/sections/library";
import { TheLexicon } from "@/components/sections/lexicon";
import { ContactSection } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <HeroSection />
      <PrologueSection />
      <TheInkwell />
      <CommunityLibrary />
      <TheLexicon />
      <ContactSection />
      <Footer />
    </div>
  );
}
