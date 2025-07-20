import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { MentorShowcaseSection } from "@/components/MentorShowcaseSection";
import { SuccessSection } from "@/components/SuccessSection";

import { FAQSection } from "@/components/FAQSection";

import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ProgramsSection />
      <MentorShowcaseSection />
      <SuccessSection />
      
      <FAQSection />

      <ContactSection />
      <Footer />
    </div>
  );
}