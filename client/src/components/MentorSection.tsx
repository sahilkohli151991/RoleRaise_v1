import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const mentors = [
  {
    name: "Sahil Kohli",
    role: "Director @ Tiger Analytics",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    description: "Director at Tiger Analytics with 14 years of experience leading large-scale digital transformation programs for clients such as Walmart, Disney, Pfizer, Macy's, and McDonald's."
  },
  {
    name: "Nimisha Sainani",
    role: "Founder @ The Quiet Reset",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    description: "Founder of The Quiet Reset with 13+ years scaling startups across India and the U.S., expert in growth strategy and organizational development."
  },
  {
    name: "Rajat Kohli",
    role: "Sales Leader @ Google",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    description: "Sales leader at Google with 12+ years in product management and enterprise sales, previously driving growth at Adobe and Google."
  },
  {
    name: "Nick Parker",
    role: "Sr. Director Engineering @ Fannie Mae",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    description: "Transformational technical leader specializing in cloud architecture, data systems, and zero trust security. Expert in building high-performing teams."
  },
  {
    name: "Shubhi Duggal",
    role: "CA & CFA @ AIG, Accenture",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    description: "Chartered Accountant (CA) and CFA based in New York with 10+ years partnering with global clients like AIG, Accenture, and Fortune 500 companies."
  },
  {
    name: "Sahil Chaudhry",
    role: "Manager @ KPMG",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    description: "Experienced Manager at KPMG with expertise in Cloud and DevOps transformations. Proven track record in helping professionals navigate Big Four career paths."
  }
];

export function MentorSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section 
      id="mentors" 
      ref={ref} 
      className={`py-20 bg-white section-fade ${isIntersecting ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-6">Why RoleRaise?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Meet the Founder & Team
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 mentor-card">
              <img 
                src={mentor.image} 
                alt={mentor.name} 
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" 
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{mentor.name}</h3>
              <p className="text-primary font-semibold mb-2">{mentor.role}</p>
              <p className="text-gray-600 text-sm">{mentor.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">and 100+ more mentors from top companies</p>
          <div className="flex justify-center flex-wrap gap-6 opacity-60">
            {['Google', 'Meta', 'Amazon', 'Netflix', 'Apple', 'Microsoft', 'Tesla', 'Uber'].map((company) => (
              <span key={company} className="text-lg font-bold text-gray-600">{company}</span>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
