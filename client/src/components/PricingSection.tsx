import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const pricingTiers = [
  {
    name: "Interview Mastery",
    description: "Perfect for interview preparation",
    originalPrice: "$4,964",
    price: "$2,980",
    isPopular: false,
    features: [
      "Resume & LinkedIn optimization",
      "Interview prep course",
      "2 mock interviews",
      "Salary negotiation guide",
      "Job-search strategy session",
      "Community access"
    ]
  },
  {
    name: "Dream Job Accelerator",
    description: "Most comprehensive career transformation",
    originalPrice: "$9,964",
    price: "$5,980",
    isPopular: true,
    features: [
      "Everything in Interview Mastery",
      "Personal FAANG mentor",
      "5 guaranteed referrals",
      "Unlimited 1:1 coaching",
      "600+ applications handled",
      "Expert salary negotiation (+$34K avg.)",
      "24/7 Slack support"
    ]
  },
  {
    name: "Elite Executive",
    description: "For executives & senior professionals",
    originalPrice: "$14,964",
    price: "$8,980",
    isPopular: false,
    features: [
      "Everything in Dream Job Accelerator",
      "Dedicated career strategist",
      "10 guaranteed C-suite referrals",
      "Executive presence coaching",
      "Board interview prep",
      "Equity negotiation masterclass",
      "Priority job placement"
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

  return (
    <section 
      id="pricing" 
      ref={ref} 
      className={`py-20 bg-white section-fade ${isIntersecting ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Your $200K+ Career Investment</h2>
          <p className="text-xl text-gray-600 mb-4">Choose the fastest path to your dream role. Average ROI: 400% within 90 days</p>
          <div className="inline-flex items-center px-4 py-2 bg-yellow-500 text-white rounded-full text-sm font-medium">
            🔥 Limited Time: 40% OFF All Programs - Act Fast!
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 price-card ${tier.isPopular ? 'border-2 border-primary relative' : ''}`}>
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">Most Popular</div>
                </div>
              )}
              <div className="text-center">
                <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">40% OFF</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-4">{tier.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-lg text-gray-500 line-through ml-2">{tier.originalPrice}</span>
                </div>
                <div className="space-y-3 mb-8 text-sm text-gray-600">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
                  Enroll Now - {tier.price}
                </button>
                <p className="text-xs text-gray-500 mt-2">Or discuss payment options on a call</p>
                <div className="flex justify-center space-x-4 mt-4 text-xs text-gray-500">
                  <span>💰 Money-back guarantee</span>
                  <span>🔒 Secure payment</span>
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
