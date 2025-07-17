import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useState } from "react";

const pricingTiers = [
  {
    name: "Interview Mastery",
    level: "Beginner",
    description: "Perfect for interview preparation",
    price: "$2,980",
    period: "(one-time)",
    discount: null,
    isPopular: false,
    guarantee: "30-day money-back guarantee",
    features: [
      "Resume & LinkedIn optimization",
      "Comprehensive interview prep course",
      "4 mock interviews/month",
      "2 technical, 2 behavioral interviews",
      "Salary negotiation masterclass",
      "Personalized job-search strategy session",
      "Tailored Job Applications (We apply to relevant roles)",
      "Exclusive community access"
    ]
  },
  {
    name: "Dream Job Accelerator",
    level: "Intermediate",
    description: "Most comprehensive career transformation",
    price: "$5,980",
    period: "(one-time)",
    discount: "Best Value",
    isPopular: true,
    guarantee: "60-day money-back guarantee",
    features: [
      "Everything in Interview Mastery, plus:",
      "Personal FAANG/Fortune 500 Mentor",
      "8 mock interviews/month",
      "Mixed panels tailored to your target roles",
      "5 guaranteed referrals (FAANG or Fortune 500)",
      "Unlimited 1:1 coaching sessions",
      "Tailored Job Applications (600+ personalized applications handled)",
      "Priority 24/7 Slack support"
    ]
  },
  {
    name: "Elite Executive",
    level: "Senior",
    description: "For executives & senior professionals",
    price: "$8,980",
    period: "(one-time)",
    discount: null,
    isPopular: false,
    guarantee: "60-day money-back guarantee",
    features: [
      "Everything in Dream Job Accelerator, plus:",
      "Dedicated Career Strategist",
      "12 mock interviews/month",
      "C-suite simulations included",
      "10 guaranteed C-suite referrals",
      "Executive presence & advanced leadership coaching",
      "Board-level preparation workshops",
      "Equity negotiation masterclass",
      "Tailored Job Applications (1,000 personalized executive applications handled)",
      "Elite 24/7 priority Slack & direct support line"
    ]
  },
  {
    name: "Break Into Tech",
    level: "Foundational Bootcamp",
    description: "Intensive skills bootcamp",
    price: "$7,000",
    period: "(one-time)",
    discount: null,
    isPopular: false,
    guarantee: "30-day money-back guarantee",
    features: [
      "Intensive skills bootcamp",
      "6 mock interviews/month",
      "Complete resume & LinkedIn overhaul",
      "Technical & Behavioral training",
      "3 technical, 3 behavioral interviews",
      "Interactive live workshops & practical labs",
      "Personalized career roadmap & 1:1 coaching",
      "Tailored Job Applications (Proactive, personalized job applications)",
      "Lifetime alumni network"
    ]
  },
  {
    name: "Career Growth Subscription",
    level: "Monthly Support",
    description: "Ongoing monthly support",
    price: "$400/month",
    period: "Cancel anytime",
    discount: null,
    isPopular: false,
    guarantee: "7-day free trial - Cancel anytime",
    features: [
      "Weekly live masterclasses",
      "2 personalized mock interviews/month",
      "Resume & LinkedIn templates",
      "Monthly group practice sessions",
      "Updated templates regularly",
      "Interview prep workshops",
      "Comprehensive career resource library",
      "24/7 Slack access",
      "Tailored Job Applications (Continuous personalized applications)"
    ]
  }
];

const faqs = [
  {
    question: "I don't have enough experience for FAANG",
    answer: "Clients range 2–15+ yrs. We place both juniors and principals."
  },
  {
    question: "This seems expensive",
    answer: "Cheapest $34K raise you'll ever get; money-back guarantee."
  },
  {
    question: "No time for coaching?",
    answer: "3–4 hrs/week replaces 20+ hrs of blind apps; 75% faster results."
  },
  {
    question: "What if I don't get interviews?",
    answer: "At least 3 top-tier interviews in 90 days or 100% refund."
  },
  {
    question: "Does this work outside the US?",
    answer: "Yes—US, CA, UK, AU, DE, BR; global FAANG network."
  },
  {
    question: "Can't I learn this on YouTube?",
    answer: "YouTube can't refer you to a Principal Engineer or negotiate $240K."
  }
];

export function PricingSection() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  const toggleCard = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="pricing" className="py-24 bg-white section-fade">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 animate-fade-in">Invest in Your Breakthrough</h2>
          <p className="text-xl text-gray-700 mb-10 animate-fade-in delay-200">Choose the plan that transforms your career and pays for itself—fast.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 animate-fade-in delay-400">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl p-8 flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group ${tier.isPopular ? 'border-4 border-blue-600 scale-105' : 'border border-gray-200'}`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 right-0 m-4 px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg animate-bounce z-10">
                  Most Popular
                </div>
              )}
              {tier.discount && (
                <div className="absolute top-0 left-0 m-4 px-4 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse z-10">
                  {tier.discount}
                </div>
              )}
              {index === 0 && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 px-4 py-1 bg-red-600 text-white text-xs font-bold rounded-full shadow-lg animate-pulse z-10">
                  Limited Spots
                </div>
              )}
              <div className="h-14 flex flex-col justify-center mb-4">
                <h3 className="text-lg font-bold text-gray-900 text-center group-hover:text-blue-600 transition-colors duration-200">{tier.name}</h3>
                <div className="text-sm text-gray-600 text-center">{tier.level}</div>
              </div>
              <div className="mb-4 h-16 flex flex-col justify-center">
                <span className="text-3xl font-extrabold text-gray-900 text-center">{tier.price}</span>
                <div className="text-sm text-gray-500 text-center">{tier.period}</div>
              </div>
              <div className="h-8 flex justify-center items-center mb-4">
                {tier.guarantee && (
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">{tier.guarantee}</div>
                )}
              </div>
              <ul className="space-y-2 mb-6 text-sm text-gray-600 text-left">
                {(tier.features).map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span className="text-xs">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex justify-center pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-sm font-bold shadow-lg transition-colors duration-200 animate-pulse group-hover:animate-none">
                  Choose Plan
                </button>
              </div>
              <div className="mt-4 text-xs text-gray-500 flex justify-center items-center gap-2">
                <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 10.707a1 1 0 01-1.414 0L10 10.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z"/></svg>
                {tier.guarantee}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mb-16 animate-fade-in delay-600">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">90-Day Guarantee</div>
              <p className="text-gray-600 text-sm">Job offer or money back</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">FAANG Mentors</div>
              <p className="text-gray-600 text-sm">Ex-employees guide you</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">92% Success Rate</div>
              <p className="text-gray-600 text-sm">Proven track record of results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
