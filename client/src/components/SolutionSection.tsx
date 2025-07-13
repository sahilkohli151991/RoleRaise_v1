import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Solution</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A results-driven coaching platform offering personalized interview mastery and career transformation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical & Strategic Interview Coaching</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-600">Technical Interview Mastery (DSA, System Design, Case Studies)</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-600">Behavioral & Leadership Coaching (STAR Method, Executive Presence)</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-600">Personalized Mock Interviews (Tech, Product, Strategy Roles)</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-600">AI-Based Feedback Reports + Human Coaching</p>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern coaching session in progress" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
        </div>
        
        <div className="bg-primary/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">From Media to Tech | Global Reach</h3>
          <p className="text-gray-600 mb-6">
            In our initial call, we map the right person for their right skillset and don't sell them anything. 
            We focus on impact and then hone your skillset for the right role and right job.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-lg shadow-sm">
            <span className="text-sm font-medium text-gray-600">⚡ No-sell consultation approach</span>
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How We Transform Your Career</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 4-step system has helped 742+ professionals land $200K+ roles
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600">We analyze your current skills, experience, and career goals to create a personalized roadmap</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mentorship</h3>
              <p className="text-gray-600">Get matched with a senior executive mentor from Google, Meta, Amazon, or other top companies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Preparation</h3>
              <p className="text-gray-600">Intensive training on technical skills, system design, behavioral interviews, and negotiation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Success</h3>
              <p className="text-gray-600">Land your $200K+ role with our 92% success rate and ongoing support through your first 90 days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
