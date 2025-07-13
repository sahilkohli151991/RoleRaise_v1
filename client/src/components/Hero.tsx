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
      className={`relative bg-gray-50 pt-16 pb-20 overflow-hidden section-fade ${isIntersecting ? 'visible' : ''}`}
    >
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="geometric-triangle geometric-triangle-1"></div>
        <div className="geometric-triangle geometric-triangle-2"></div>
        <div className="geometric-triangle geometric-triangle-3"></div>
        <div className="geometric-triangle geometric-triangle-4"></div>
        <div className="geometric-triangle geometric-triangle-5"></div>
        <div className="geometric-triangle geometric-triangle-6"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-600 rounded-full text-sm font-medium mb-6">
            ⚡ 742+ Tech Professionals Placed in 2025
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Breaking Into<br/>
            <span className="text-gray-700">Tech is Hard</span>
          </h1>
          
          <div className="mb-12">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition shadow-lg"
            >
              Find out more
            </button>
          </div>
          
          <p className="text-2xl text-gray-600 mb-8 max-w-2xl mx-auto font-light">
            Let us Make it Easy
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-2xl mx-auto shadow-lg">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Where Preparation Meets the Offer</h2>
            <p className="text-gray-600">Technical & Strategic Interview Coaching</p>
            <p className="text-sm text-gray-500 mt-2">From Media to Tech | Global Reach</p>
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
