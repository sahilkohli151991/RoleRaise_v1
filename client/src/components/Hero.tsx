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
    <>
      {/* Pre-Hero Pain Screen */}
      <section className="relative bg-gray-50 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="geometric-triangle geometric-triangle-1 floating-triangle"></div>
          <div className="geometric-triangle geometric-triangle-2 floating-triangle"></div>
          <div className="geometric-triangle geometric-triangle-3 floating-triangle"></div>
          <div className="geometric-triangle geometric-triangle-4 floating-triangle"></div>
          <div className="geometric-triangle geometric-triangle-5 floating-triangle"></div>
          <div className="geometric-triangle geometric-triangle-6 floating-triangle"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-normal text-gray-900 mb-12 leading-tight">
              Breaking Into Tech Is Hard
            </h1>
            
            <button 
              onClick={() => scrollToSection('hero')}
              className="circular-button text-lg font-medium shadow-lg interactive-hover pulse-animation"
            >
              Find out more
            </button>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section 
        id="hero"
        ref={ref} 
        className={`relative bg-white pt-20 pb-20 section-fade ${isIntersecting ? 'visible' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Let Us Make It Easy
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 font-light">
              Technical & Strategic Interview Coaching
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-medium text-gray-900 stats-counter">92%</div>
                <div className="text-gray-600 font-light">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-medium text-gray-900 stats-counter">+$34K</div>
                <div className="text-gray-600 font-light">Avg Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-medium text-gray-900 stats-counter">6 Weeks</div>
                <div className="text-gray-600 font-light">to Offer</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="circular-button text-lg font-medium shadow-lg interactive-hover"
              >
                Get My Free $200K+ Roadmap
              </button>
              <button 
                onClick={() => scrollToSection('demo')}
                className="circular-button bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white text-lg font-medium shadow-lg interactive-hover"
              >
                Watch 30-sec Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
