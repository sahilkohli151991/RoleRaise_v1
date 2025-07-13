import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const steps = [
  {
    step: "Assessment",
    title: "We analyze your skills, experience & goals to build your custom roadmap.",
    description: "Deep dive into your background, strengths, and career objectives to create a personalized strategy."
  },
  {
    step: "Mentorship",
    title: "Pair with FAANG & Fortune 100 executives for 1:1 coaching.",
    description: "Work directly with industry leaders who've been where you want to go."
  },
  {
    step: "Preparation",
    title: "Intensive mock technical, case-study & leadership interviews.",
    description: "Practice with real scenarios and get expert feedback to perfect your performance."
  },
  {
    step: "Success",
    title: "Land your dream role, master negotiation & get 90-day post-offer support.",
    description: "Complete journey from offer to successful onboarding with ongoing support."
  }
];

export function SolutionSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section 
      id="solution" 
      ref={ref} 
      className={`py-20 bg-gray-50 section-fade ${isIntersecting ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-6">How We Transform Your Career</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Our proven 4-step system
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center responsive-card bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-lg font-medium">{index + 1}</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{step.step}</h3>
              <p className="text-gray-600 font-light mb-4">{step.title}</p>
              <p className="text-sm text-gray-500 font-light">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}