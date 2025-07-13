import { useScrollIndicator } from "@/hooks/useScrollIndicator";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { MentorSection } from "@/components/MentorSection";
import { SuccessSection } from "@/components/SuccessSection";
import { PricingSection } from "@/components/PricingSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const scrollPercent = useScrollIndicator();

  return (
    <div className="min-h-screen">
      <div className="scroll-indicator" style={{ width: `${scrollPercent}%` }}></div>
      
      <Navigation />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <MentorSection />
      <SuccessSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
