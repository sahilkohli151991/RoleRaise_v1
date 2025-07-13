import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export function Hero() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={ref} 
      className={`hero-gradient pt-16 pb-20 section-fade ${isIntersecting ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-600 rounded-full text-sm font-medium mb-6">
            ⚡ 742+ Tech Professionals Placed in 2025
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Where Preparation<br/>
            <span className="text-primary">Meets the Offer</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Skip the endless job applications. Get direct access to exclusive $200K+ opportunities 
            at leading technology companies through our proven coaching network.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition"
            >
              🚀 Schedule Strategy Call
            </button>
            <button 
              onClick={() => scrollToSection('success')}
              className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold border-2 border-primary hover:bg-primary/5 transition"
            >
              📊 See Success Stories
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 stats-counter">92%</div>
              <div className="text-gray-600">Success Rate</div>
              <div className="text-sm text-gray-500">Of clients receive job offers within 90 days</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 stats-counter">$34K</div>
              <div className="text-gray-600">Avg. Salary Increase</div>
              <div className="text-sm text-gray-500">Average salary boost for successful candidates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 stats-counter">6 Weeks</div>
              <div className="text-gray-600">Time to Offer</div>
              <div className="text-sm text-gray-500">Average time from start to job offer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
