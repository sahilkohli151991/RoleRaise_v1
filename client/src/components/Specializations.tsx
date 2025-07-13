import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

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
    description: "Data Scientist, ML Engineer, Research",
    salary: "Avg. $180K+"
  },
  {
    icon: "🚀",
    title: "Product Management",
    description: "PM, Sr PM, Group PM, Director",
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
    description: "Growth PM, Marketing Manager",
    salary: "Avg. $150K+"
  },
  {
    icon: "⚡",
    title: "Engineering Leadership",
    description: "Tech Lead, Engineering Manager",
    salary: "Avg. $220K+"
  }
];

export function Specializations() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section 
      id="specializations" 
      ref={ref} 
      className={`py-20 bg-white section-fade ${isIntersecting ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-6">We Specialize in High-Demand Roles</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Your Path to $200K+ Careers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map((spec, index) => (
            <div key={index} className="text-center bg-gray-50 p-6 rounded-xl responsive-card">
              <div className="text-4xl mb-4">{spec.icon}</div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{spec.title}</h3>
              <p className="text-gray-600 font-light mb-4">{spec.description}</p>
              <div className="text-primary font-medium">{spec.salary}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}