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
    name: "Raj Kumar",
    role: "Director at Capgemini",
    company: "Ex-Accenture",
    image: rajImage
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
    image: alokImage
  },
  {
    name: "Sahil Kohli",
    role: "Director at Tiger Analytics",
    company: "Ex-Deloitte",
    image: sahilKohliImage
  },
  {
    name: "Nitil D",
    role: "Generative AI & BI Architect at Tiger",
    company: "Analytics",
    image: nitilImage
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
        
        {/* Mentor Grid - 3 columns with proper spacing */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mentors.slice(0, 9).map((mentor, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <img 
                src={mentor.image} 
                alt={mentor.name} 
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" 
              />
              <h3 className="text-lg font-bold text-gray-900 mb-1">{mentor.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{mentor.role}</p>
              <p className="text-xs text-gray-500">{mentor.company}</p>
            </div>
          ))}
        </div>
        
        {/* Bottom row with only 2 mentors centered */}
        <div className="flex justify-center gap-8 mb-16">
          {mentors.slice(9, 11).map((mentor, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center w-80">
              <img 
                src={mentor.image} 
                alt={mentor.name} 
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" 
              />
              <h3 className="text-lg font-bold text-gray-900 mb-1">{mentor.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{mentor.role}</p>
              <p className="text-xs text-gray-500">{mentor.company}</p>
            </div>
          ))}
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
