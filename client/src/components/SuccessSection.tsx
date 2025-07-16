import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const testimonials = [
  {
    name: "Neelabh Dubey",
    role: "Product Manager @ Apptad",
    quote: "Being on STEM OPT had its challenges, but with the network and support from RoleRaise, I was able to land my role at Apptad. I'm truly grateful for their guidance.",
    initials: "ND",
    bgColor: "bg-blue-500"
  },
  {
    name: "Pranjal Gupta",
    role: "Lead Data Engineer @ Innovaccer",
    quote: "The interview prep and hard coaching I received from my mentors were game-changers. Thanks to RoleRaise, I not only cracked the role but also built skills that will last a lifetime.",
    initials: "PG",
    bgColor: "bg-green-500"
  },
  {
    name: "Ratul C.",
    role: "Data Engineer @ Commonwealth Bank of Australia",
    quote: "Switching companies is challenging, but the comprehensive support from RoleRaise made all the difference in landing my role at CBA.",
    initials: "RC",
    bgColor: "bg-purple-500"
  },
  {
    name: "Saurabh Anand",
    role: "Associate Director @ BeOne Medicines",
    quote: "The guidance and encouragement from my RoleRaise mentors helped me secure my Associate Director role. I'm extremely grateful for their support.",
    initials: "SA",
    bgColor: "bg-orange-500"
  },
  {
    name: "Sumit Sahagal",
    role: "Product Manager @ NAV USA",
    quote: "RoleRaise's mentorship and resources were instrumental in my transition to Product Management at NAV.",
    initials: "SS",
    bgColor: "bg-indigo-500"
  },
  {
    name: "Safal Kumar",
    role: "Program Manager @ Sigmoid India",
    quote: "The personalized coaching and industry insights from RoleRaise helped me land my dream role at Sigmoid.",
    initials: "SK",
    bgColor: "bg-teal-500"
  },
  {
    name: "Adam Parry",
    role: "KPMG UK",
    quote: "The mentorship and coaching I received were truly transformative. With their expert guidance, I was able to land the perfect role at KPMG UK—something I once thought was out of reach. I can't recommend this program enough for anyone serious about elevating their career.",
    initials: "AP",
    bgColor: "bg-red-500"
  }
];

const specializations = [
  {
    icon: "💻",
    title: "Software Engineering",
    description: "Frontend, Backend, Full-Stack, Mobile",
    salary: "Avg. $180K+"
  },
  {
    icon: "📊",
    title: "Data Science",
    description: "Data Scientist, ML Engineer, Research Scientist",
    salary: "Avg. $180K+"
  },
  {
    icon: "🚀",
    title: "Product Management",
    description: "PM, Sr PM, Group PM, Dir",
    salary: "Avg. $190K+"
  },
  {
    icon: "🎨",
    title: "Design & UX",
    description: "Product Designer, UX Researcher",
    salary: "Avg. $160K+"
  },
  {
    icon: "📈",
    title: "Growth & Marketing",
    description: "Growth PM, Marketing Mgr",
    salary: "Avg. $150K+"
  },
  {
    icon: "⚡",
    title: "Engineering Leadership",
    description: "Tech Lead, Eng Manager",
    salary: "Avg. $220K+"
  }
];

export function SuccessSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section 
      id="success" 
      ref={ref} 
      className={`py-20 bg-gray-50 section-fade ${isIntersecting ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-6">Real Results. Real People.</h2>
          <p className="text-xl text-gray-600">See how RoleRaise members have doubled their salaries and landed their dream roles at top companies.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-medium text-gray-900 mb-1">{testimonial.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-2">{testimonial.role}</p>
                <div className="flex justify-center mb-4">
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
        
        {/* Single testimonial for Adam Parry */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center max-w-md">
            <div className="mb-4">
              <img 
                src={testimonials[6].image} 
                alt={testimonials[6].name}
                className="w-12 h-12 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-medium text-gray-900 mb-1">{testimonials[6].name}</h3>
              <p className="text-blue-600 text-sm font-medium mb-2">{testimonials[6].role}</p>
              <div className="flex justify-center mb-4">
                <div className="flex text-yellow-400">
                  {"★".repeat(5)}
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">"{testimonials[6].quote}"</p>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">4.9/5</div>
              <div className="text-sm text-gray-600">Client Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">742+</div>
              <div className="text-sm text-gray-600">Clients Hired</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">92%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">$34K</div>
              <div className="text-sm text-gray-600">Avg. Salary Increase</div>
            </div>
          </div>
        </div>

        {/* Transformation Section */}
        <div className="grid md:grid-cols-3 gap-8 items-center mb-16">
          <div className="text-center">
            <div className="bg-red-50 rounded-2xl p-8 mb-4">
              <h3 className="text-2xl font-bold text-red-600 mb-4">BEFORE RoleRaise</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$85K</div>
              <p className="text-gray-600 text-sm mb-4">Avg. Salary</p>
              <div className="space-y-2 text-left">
                <div className="flex items-center">
                  <span className="text-red-500 mr-2">×</span>
                  <span className="text-sm text-gray-600">Sending 100+ apps with no response</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-500 mr-2">×</span>
                  <span className="text-sm text-gray-600">Rejected after first-round interviews</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-500 mr-2">×</span>
                  <span className="text-sm text-gray-600">No connections at target companies</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-500 mr-2">×</span>
                  <span className="text-sm text-gray-600">Accepting lowball offers</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-primary text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
              <span className="text-lg font-bold">90 DAYS</span>
            </div>
            <div className="text-4xl font-bold text-primary">→</div>
          </div>
          
          <div className="text-center">
            <div className="bg-green-50 rounded-2xl p-8 mb-4">
              <h3 className="text-2xl font-bold text-green-600 mb-4">AFTER RoleRaise</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$185K+</div>
              <p className="text-gray-600 text-sm mb-4">Avg. Salary</p>
              <div className="space-y-2 text-left">
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm text-gray-600">Direct referrals from FAANG engineers</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm text-gray-600">Insider interview prep</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm text-gray-600">Intros to hiring managers</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm text-gray-600">Multiple competing offers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <div className="bg-primary text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">TRANSFORMATION IMPACT</h3>
            <p className="text-xl mb-2">$85K → $185K = +$100K per year</p>
            <p className="text-sm opacity-90 mb-4">That's $500K+ over 5 years!</p>
            <p className="text-lg font-semibold">Average ROI: 2,000% in first year alone</p>
          </div>
        </div>

        {/* Specializations Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">We specialize in high-demand tech roles</h2>
            <p className="text-xl text-gray-600">Our mentors have deep, track-specific expertise</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {specializations.map((spec, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl mb-4">{spec.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{spec.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{spec.description}</p>
                <p className="text-green-600 font-semibold">{spec.salary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
