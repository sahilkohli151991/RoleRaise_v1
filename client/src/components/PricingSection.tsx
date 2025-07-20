import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Award, Rocket, Briefcase } from 'lucide-react';

type Plan = {
  id: string;
  name: string;
  level: string;
  price: {
    usd: number;
    inr: number;
  };
  duration: string;
  features: {
    text: string;
    included: boolean;
  }[];
  popular?: boolean;
};

const PricingSection = () => {
  // Default to USD, GeoIP detection removed as per user request
  const [currency] = useState<'USD' | 'INR'>('USD');
  const isLoading = false; // No loading state needed as we're not detecting location

  const plans: Plan[] = [
    {
      id: 'pulse',
      name: 'RaisePulse',
      level: 'Beginner',
      price: { usd: 720, inr: 11500 },
      duration: '3 months',
      features: [
        { text: 'Resume & LinkedIn: 3 reviews', included: true },
        { text: 'Mock Interviews: 6', included: true },
        { text: 'Personalized Mentoring', included: false },
        { text: 'Job Apply Support', included: true },
        { text: 'Guaranteed Referrals: 2', included: true },
        { text: 'Resume Customization', included: false },
      ],
    },
    {
      id: 'power',
      name: 'RaisePower',
      level: 'Intermediate',
      price: { usd: 3600, inr: 55000 },
      duration: '6 months',
      popular: true,
      features: [
        { text: 'Resume & LinkedIn: 5 reviews', included: true },
        { text: 'Mock Interviews: 15', included: true },
        { text: 'Tech Mentoring: 3 sessions', included: true },
        { text: 'Behavioral Mentoring: 3 sessions', included: true },
        { text: 'Job Apply Support: 600+ jobs', included: true },
        { text: 'Guaranteed Referrals: 4', included: true },
        { text: 'Resume Customization', included: true },
      ],
    },
    {
      id: 'pinnacle',
      name: 'RaisePinnacle',
      level: 'Advanced',
      price: { usd: 5000, inr: 75000 },
      duration: '6 months',
      features: [
        { text: 'Resume & LinkedIn: 5 reviews', included: true },
        { text: 'Mock Interviews: 25', included: true },
        { text: 'Tech Mentoring: 8 sessions', included: true },
        { text: 'Behavioral Mentoring: 8 sessions', included: true },
        { text: 'Job Apply Support: 1000+ jobs', included: true },
        { text: 'Guaranteed Referrals: 8', included: true },
        { text: 'Resume Customization', included: true },
      ],
    },
    {
      id: 'path',
      name: 'RaisePath',
      level: 'Bootcamp',
      price: { usd: 6250, inr: 95000 },
      duration: '6 months',
      features: [
        { text: 'Resume building included', included: true },
        { text: 'Mock Interviews: 30', included: true },
        { text: 'Tech Mentoring: 10 sessions', included: true },
        { text: 'Behavioral Mentoring: 10 sessions', included: true },
        { text: 'Job Apply Support: 800+ jobs', included: true },
        { text: 'Guaranteed Referrals: 8', included: true },
        { text: 'Resume Customization', included: true },
        { text: '$200 consultation credit before joining', included: true },
      ],
    },
  ];

  // Ensure all cards have the same height by making content fill available space
  const cardContentClass = "flex flex-col h-full";
  const buttonContainerClass = "mt-auto pt-6";

  const getIcon = (index: number) => {
    const icons = [
      <Zap key="zap" className="w-5 h-5" />, 
      <Briefcase key="briefcase" className="w-5 h-5" />, 
      <Award key="award" className="w-5 h-5" />, 
      <Rocket key="rocket" className="w-5 h-5" />
    ];
    return icons[index % icons.length];
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading pricing...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Career Growth Plan</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Select the perfect plan to accelerate your tech career with personalized mentorship and support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`relative flex flex-col h-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-blue-500 transform -translate-y-2' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              
              <div className={`p-6 ${cardContentClass}`}>
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-3">
                    {getIcon(index)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                    <span className="text-sm text-blue-600 font-medium">{plan.level}</span>
                  </div>
                </div>
                
                <div className="mt-6 mb-8">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-gray-900">
                      {currency === 'USD' ? `$${plan.price.usd.toLocaleString()}` : `₹${plan.price.inr.toLocaleString()}`}
                    </span>
                    <span className="ml-2 text-gray-500">/{plan.duration}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      ) : (
                        <span className="w-5 h-5 text-red-400 mr-2 flex-shrink-0">×</span>
                      )}
                      <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className={buttonContainerClass}>
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Choose {plan.name}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
