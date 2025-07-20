import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import payalImage from "@assets/payal_1752659516427.jpeg";
import nimishaImage from "@assets/Nimisha Sainaini_1752659516427.jpeg";
import rajatImage from "@assets/Rajat_1752659516427.jpeg";
import akhilImage from "@assets/akhil_1752659516424.jpeg";
import sahilChaudhryImage from "@assets/sahilc_1752659516428.jpeg";
import nickImage from "@assets/Nick Parker_1752659516426.jpeg";
import rajImage from "@assets/Raj_1752659516427.jpeg";
import shubhiImage from "@assets/Shubhi_1752659516428.jpeg";
import alokImage from "@assets/Alok_1752659516425.jpeg";
import sahilKohliImage from "@assets/sahil kohli_1752659516428.jpeg";
import nitilImage from "@assets/Nitil_1752659516427.jpeg";
import kpmgLogo from "@assets/logo1_1752659516425.png";
import googleLogo from "@assets/logo2_1752659516425.png";
import beOneLogo from "@assets/logo3_1752659516426.png";
import amazonLogo from "@assets/logo4_1752659516426.png";
import metaLogo from "@assets/logo5_1752659516426.png";
import stripeLogo from "@assets/logo8_1752659516426.png";

const mentors = [
  // Row 1
  {
    name: "Rajat Kohli",
    role: "Sales Leader at Google",
    company: "Ex-Adobe",
    image: rajatImage
  },
  {
    name: "Akhil K",
    role: "Senior Program Manager at NetJean",
    company: "Ex-Microsoft, Walmart",
    image: akhilImage
  },
  {
    name: "Sahil Chaudhry",
    role: "Senior Manager @ Amazon DevOps at",
    company: "KPMG Global",
    image: sahilChaudhryImage
  },
  // Row 2
  {
    name: "Nick Parker",
    role: "Sr. Director Engineering at Fannie Mae",
    company: "Ex-Prudential Financial",
    image: nickImage
  },
  {
    name: "Sandeep P. (BeOne)",
    role: "Director at Capgemini",
    company: "Ex: Accenture",
    image: rajImage,
    motto: "Guiding you to global impact.",
    testimonial: "Raj's insights helped me scale my startup and attract investors. He always provided honest feedback and practical solutions. His support made all the difference.",
    logo: beOneLogo
  },
  {
    name: "Shubhi Duggal",
    role: "Chartered Accountant (CA) &",
    company: "Chartered Financial Analyst (CFA) at",
    image: shubhiImage
  },
  // Row 3
  {
    name: "Alok Agarwal",
    role: "Data Scientist at Airbnb",
    company: "Ex-Meta, Twitter",
    image: alokImage,
    motto: "Data-driven decisions for impactful results.",
    testimonial: "Alok's expertise in data science helped me understand complex concepts and apply them to real-world problems.",
    logo: metaLogo
  },
  {
    name: "Sahil Kohli",
    role: "Founder & CEO at BeOne",
    company: "Ex-Google, Ex-ShareChat",
    image: sahilKohliImage,
    motto: "Empowering the next generation of tech leaders.",
    testimonial: "Sahil's guidance was instrumental in helping me transition into product management. His insights into the tech industry are invaluable.",
    logo: beOneLogo
  },
  {
    name: "Nitil Pai",
    role: "Senior Director at KPMG",
    company: "Ex-Google, Ex-ShareChat",
    image: nitilImage,
    motto: "Transforming careers through strategic mentorship.",
    testimonial: "Nitil's experience in scaling businesses provided me with practical frameworks that I use daily in my role.",
    logo: kpmgLogo
  },
  // Row 4 - Payal first, then Nimisha
  {
    name: "Payal Dedhia",
    role: "Founder, Filmy AI & EdTech",
    company: "Entrepreneur",
    image: payalImage
  },
  {
    name: "Nimisha Sainani",
    role: "Founder @ The Quiet Reset",
    company: "13+ years scaling startups across India",
    image: nimishaImage
  }
];

export function MentorSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section 
      id="mentors" 
      ref={ref} 
      className={`py-20 bg-gray-50 section-fade ${isIntersecting ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Learn from, engage and network with tech executives</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Interact with top innovators from Google, Uber, Facebook, Amazon, Fiverr, Microsoft & more
          </p>
        </div>
        
        {/* Mentor Grid with fixed heights and proper alignment */}
        <div className="w-full">
          {/* Top 9 mentors in 3x3 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {mentors.slice(0, 9).map((mentor, index) => (
              <div 
                key={index} 
                className="relative bg-white rounded-xl shadow-lg p-6 text-center flex flex-col overflow-hidden"
                style={{ minHeight: '320px' }}
              >
                {/* Main Content */}
                <div className="flex-grow">
                  <div className="w-20 h-20 mx-auto mb-4 flex-shrink-0">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name}
                      className="w-full h-full rounded-full object-cover border-2 border-blue-50"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/150';
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                    {mentor.name}
                  </h3>
                  <div className="mb-3">
                    <p className="text-sm text-gray-600">
                      {mentor.role}
                    </p>
                    <p className="text-xs text-gray-500">
                      {mentor.company}
                    </p>
                  </div>
                  
                  {/* Testimonial Content */}
                  {mentor.motto && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm italic text-gray-700 mb-2">"{mentor.motto}"</p>
                      {mentor.logo && (
                        <div className="flex justify-center space-x-2 mt-2">
                          <img src={mentor.logo} alt="Company Logo" className="h-4 opacity-70" />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom 2 centered mentors */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
            {mentors.slice(9, 11).map((mentor, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-6 text-center w-full max-w-xs"
                style={{ minHeight: '260px' }}
              >
                <div className="w-20 h-20 mx-auto mb-4">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name}
                    className="w-full h-full rounded-full object-cover border-2 border-blue-50"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/150';
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {mentor.name}
                </h3>
                <div className="mb-2">
                  <p className="text-sm text-gray-600">
                    {mentor.role}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {mentor.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Company logos section */}
        <div className="text-center">
          <p className="text-gray-600 mb-8">Our mentor network includes leaders from these top companies:</p>
          <div className="flex justify-center items-center flex-wrap gap-8">
            <img src={kpmgLogo} alt="KPMG" className="h-8 opacity-60" />
            <img src={googleLogo} alt="Google" className="h-8 opacity-60" />
            <img src={beOneLogo} alt="BeOne" className="h-8 opacity-60" />
            <img src={amazonLogo} alt="Amazon" className="h-8 opacity-60" />
            <img src={metaLogo} alt="Meta" className="h-8 opacity-60" />
            <img src={stripeLogo} alt="Stripe" className="h-8 opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}
