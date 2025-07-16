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
    <section 
      id="pricing" 
      ref={ref} 
      className={`py-20 bg-white section-fade ${isIntersecting ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-6">Pick the path that fits your journey</h2>
        </div>
        
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 mb-16">
          {pricingTiers.map((tier, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-lg p-6 financeble-card flex flex-col ${tier.isPopular ? 'border-2 border-primary relative' : ''}`}>
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">Best Value</div>
                </div>
              )}
              <div className="text-center">
                {/* Icon placeholder */}
                <div className="flex justify-center mb-4">
                  {index === 0 && <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">⭐</div>}
                  {index === 1 && <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">🎯</div>}
                  {index === 2 && <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">⏰</div>}
                  {index === 3 && <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">💡</div>}
                  {index === 4 && <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">📈</div>}
                </div>
                
                <div className="h-14 flex flex-col justify-center mb-4">
                  <h3 className="text-lg font-medium text-gray-900 text-center">{tier.name}</h3>
                  <div className="text-sm text-gray-600 text-center">{tier.level}</div>
                </div>
                
                <div className="mb-4 h-16 flex flex-col justify-center">
                  <span className="text-2xl font-bold text-gray-900 text-center">{tier.price}</span>
                  <div className="text-sm text-gray-500 text-center">{tier.period}</div>
                </div>
                
                <div className="h-8 flex justify-center items-center mb-4">
                  {tier.discount && (
                    <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">{tier.discount}</div>
                  )}
                </div>
                
                <div className="space-y-2 mb-4 text-sm text-gray-600 text-left">
                  {(expandedCards[index] ? tier.features : tier.features.slice(0, 4)).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-0.5">✓</span>
                      <span className="text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {tier.features.length > 4 && (
                  <button 
                    onClick={() => toggleCard(index)}
                    className="text-blue-600 text-xs mb-4 hover:underline"
                  >
                    {expandedCards[index] ? 'Show Less ⌄' : 'Show More ⌃'}
                  </button>
                )}
                
                <div className="mt-auto">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-sm font-medium transition-colors">
                    Choose Plan
                  </button>
                </div>
                
                <div className="mt-4 text-xs text-gray-500">
                  🛡️ {tier.guarantee}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mb-16">
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

        {/* FAQ Section */}
        <div className="mt-32">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Common Questions</h2>
              <p className="text-xl text-gray-600">But what if you're thinking...</p>
            </div>
            
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">"{faq.question}"</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
