import { HeroSection } from "@/components/hero";
import { AboutSection } from "@/components/about";
import { LanguagesSection } from "@/components/languages";
import { EducationSection } from "@/components/education";
import { ExperienceSection } from "@/components/experience";
import { ProjectsSection } from "@/components/projects";
import { SkillsSection } from "@/components/skills";
import { LeadershipSection } from "@/components/leadership";
import { BookshelfSection } from "@/components/bookshelf";
import { EndorsementsSection } from "@/components/endorsements";
import { GuestbookSection } from "@/components/guestbook";
import { ContactSection } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <HeroSection />
      <AboutSection />
      <LanguagesSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <LeadershipSection />
      <BookshelfSection />
      <EndorsementsSection />
      <div className="h-px w-full bg-violet-900/60" />
      <GuestbookSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
