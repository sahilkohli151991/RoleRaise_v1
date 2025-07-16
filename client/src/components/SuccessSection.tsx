import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

import neelabhImage from "@assets/Neelabh_1752003812461_1752651945620.jpeg";
import pranjalImage from "@assets/pranjal_1752003812462_1752651967528.jpeg";
import ratulImage from "@assets/ratul_1752003812462_1752651958804.jpeg";
import safalImage from "@assets/safal_1752003812462_1752651958804.jpeg";
import sumitImage from "@assets/sumit_1752003812463_1752651985578.jpeg";
import saurabhImage from "@assets/Saurabh_1752003812462_1752657466608.jpeg";
import adamImage from "@assets/adam parry_1752651930891.jpeg";

const testimonials = [
  {
    name: "Neelabh Dubey",
    role: "Product Manager @ Apptad",
    quote: "Being on STEM OPT had its challenges, but with the network and support from RoleRaise, I was able to land my role at Apptad. I'm truly grateful for their guidance.",
    image: neelabhImage
  },
  {
    name: "Pranjal Gupta",
    role: "Lead Data Engineer @ Innovaccer",
    quote: "The interview prep and hard coaching I received from my mentors were game-changers. Thanks to RoleRaise, I not only cracked the role but also built skills that will last a lifetime.",
    image: pranjalImage
  },
  {
    name: "Ratul C.",
    role: "Data Engineer @ Commonwealth Bank of Australia",
    quote: "Switching companies is challenging, but the comprehensive support from RoleRaise made all the difference in landing my role at CBA.",
    image: ratulImage
  },
  {
    name: "Saurabh Anand",
    role: "Associate Director @ BeOne Medicines",
    quote: "The guidance and encouragement from my RoleRaise mentors helped me secure my Associate Director role. I'm extremely grateful for their support.",
    image: saurabhImage
  },
  {
    name: "Sumit Sahagal",
    role: "Product Manager @ NAV USA",
    quote: "RoleRaise's mentorship and resources were instrumental in my transition to Product Management at NAV.",
    image: sumitImage
  },
  {
    name: "Safal Kumar",
    role: "Program Manager @ Sigmoid India",
    quote: "The personalized coaching and industry insights from RoleRaise helped me land my dream role at Sigmoid.",
    image: safalImage
  },
  {
    name: "Adam Parry",
    role: "KPMG UK",
    quote: "The mentorship and coaching I received were truly transformative. With their expert guidance, I was able to land the perfect role at KPMG UK—something I once thought was out of reach. I can't recommend this program enough for anyone serious about elevating their career.",
    image: adamImage
  }
];

const specializations = [
  {
    icon: "</> ",
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
  },
  {
    icon: "👥",
    title: "Agile Program Management",
    description: "Scrum Master, Program Manager, Agile Coach",
    salary: "Avg. $165K+"
  },
  {
    icon: "💾",
    title: "Data Engineering",
    description: "Data Engineer, Platform Engineer, ETL Developer",
    salary: "Avg. $175K+"
  },
  {
    icon: "📈",
    title: "Business Analyst",
    description: "Business Analyst, Product Analyst, Strategy Analyst",
    salary: "Avg. $140K+"
  }
];

const careerJumpData = [
  {
    icon: "💻",
    role: "Software Engineer",
    before: "$95K",
    after: "$160K",
    increase: "68%",
    timeline: "6 weeks"
  },
  {
    icon: "📊",
    role: "Data Scientist",
    before: "$100K",
    after: "$165K",
    increase: "65%",
    timeline: "7 weeks"
  },
  {
    icon: "🚀",
    role: "Product Manager",
    before: "$110K",
    after: "$180K",
    increase: "64%",
    timeline: "8 weeks"
  },
  {
    icon: "🎨",
    role: "UX Designer",
    before: "$85K",
    after: "$140K",
    increase: "65%",
    timeline: "5 weeks"
  },
  {
    icon: "⚡",
    role: "Engineering Manager",
    before: "$130K",
    after: "$210K",
    increase: "62%",
    timeline: "7 weeks"
  },
  {
    icon: "📈",
    role: "Growth & Marketing Lead",
    before: "$90K",
    after: "$155K",
    increase: "72%",
    timeline: "6 weeks"
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



        {/* Specializations Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">We specialize in high-demand tech roles</h2>
            <p className="text-xl text-gray-600">Our mentors have deep, track-specific expertise</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {specializations.map((spec, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl mb-4">{spec.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{spec.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{spec.description}</p>
                <p className="text-green-600 font-semibold">{spec.salary}</p>
              </div>
            ))}
          </div>
          
          {/* Career Jump Visualization */}
          <div className="mt-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Career Jump, Visualized</h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-4 gap-4 mb-4 text-center font-semibold text-gray-700">
                <div>Role</div>
                <div>Before → After</div>
                <div>% Increase</div>
                <div>Time to Offer</div>
              </div>
              
              <div className="space-y-4">
                {careerJumpData.map((item, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 items-center py-3 border-b border-gray-100">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <span className="font-medium text-gray-900">{item.role}</span>
                    </div>
                    <div className="text-center">
                      <span className="text-red-500 font-medium">{item.before}</span>
                      <span className="text-gray-400 mx-2">→</span>
                      <span className="text-green-500 font-medium">{item.after}</span>
                    </div>
                    <div className="text-center">
                      <span className="text-blue-600 font-semibold">{item.increase}</span>
                    </div>
                    <div className="text-center">
                      <span className="text-gray-700">{item.timeline}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
