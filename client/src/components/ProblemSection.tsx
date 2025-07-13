import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export function ProblemSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section 
      id="problem" 
      ref={ref} 
      className={`py-20 bg-white section-fade ${isIntersecting ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">The Problem</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            95% of applicants fail to stand out in interviews. Fortune 500 jobs have &lt;2% acceptance rate.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional struggling with interview preparation" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Most Candidates Fail</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm">✗</span>
                </div>
                <p className="text-gray-600">Lack of access to insider insights and executive communication skills</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm">✗</span>
                </div>
                <p className="text-gray-600">No technical mock practice with industry experts</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm">✗</span>
                </div>
                <p className="text-gray-600">Generic preparation without personalized skill mapping</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm">✗</span>
                </div>
                <p className="text-gray-600">Massive skill gap in high-stakes, structured interviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* Opportunity Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Opportunity</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fortune 500 companies hire ~6M people globally every year. The coaching industry is worth $20B+ and growing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">6M+</h3>
              <p className="text-gray-600">Fortune 500 hires annually</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">300M+</h3>
              <p className="text-gray-600">Job applications worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">$20B+</h3>
              <p className="text-gray-600">Coaching industry value</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
