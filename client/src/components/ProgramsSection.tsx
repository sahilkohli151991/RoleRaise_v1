import PricingSection from './PricingSection';

export function ProgramsSection() {
  return (
    <div className="bg-white">
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect program to accelerate your career growth with personalized mentorship and support
          </p>
        </div>
      </section>
      
      <PricingSection />
      
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Not sure which program is right for you?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our career advisors are here to help you choose the best program based on your goals and experience level.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Get a Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
