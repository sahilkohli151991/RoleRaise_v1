import { useScrollIndicator } from "@/hooks/useScrollIndicator";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { PricingSection } from "@/components/PricingSection";
import { OutcomeProjections } from "@/components/OutcomeProjections";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { MentorSection } from "@/components/MentorSection";

import { SuccessSection } from "@/components/SuccessSection";
import { Specializations } from "@/components/Specializations";
import { FAQ } from "@/components/FAQ";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const scrollPercent = useScrollIndicator();

  return (
    <div className="min-h-screen">
      <div className="scroll-indicator" style={{ width: `${scrollPercent}%` }}></div>
      
      <Navigation />
      <Hero />
      <PricingSection />
      <OutcomeProjections />
      <ProblemSection />
      <SolutionSection />
      <MentorSection />
      <SuccessSection />
      <Specializations />
      <FAQ />
      <ContactSection />
      <Footer />
    </div>
  );
}
