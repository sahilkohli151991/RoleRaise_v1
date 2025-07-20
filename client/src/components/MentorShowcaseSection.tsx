import { useState } from "react";
import { motion } from "framer-motion";
import "./MentorShowcaseSection.css";

type Mentor = {
  name: string;
  title: string;
  company: string;
  avatar: string;
  tagline: string;
  trustLogos: string[];
  review: {
    text: string;
    author: string;
  };
};

const mentors: Mentor[] = [
  {
    name: "Rajat Kohli",
    title: "Sales Leader at Google",
    company: "Ex: Adobe",
    avatar: "/attached_assets/Rajat_1752659516427.jpeg",
    tagline: "Empowering the next generation of tech leaders.",
    review: {
      text: "Rajat guided me step-by-step to my dream job. His advice was practical, motivating, and tailored to my goals. I felt truly supported throughout my journey.",
      author: "— Priya S. (ex-Amazon)"
    },
    trustLogos: [
      "/attached_assets/logo1_1752659516425.png",
      "/attached_assets/logo2_1752659516425.png",
    ],
  },
  {
    name: "Akhil K",
    title: "Senior Program Manager at Nielsen",
    company: "Ex: Microsoft, Walmart",
    avatar: "/attached_assets/akhil_1752659516424.jpeg",
    tagline: "Turning potential into performance.",
    review: {
      text: "Akhil helped me break into product management with confidence. He simplified complex topics and always encouraged me to aim higher. His mentorship is a game changer.",
      author: "— Rohit T. (Meta)"
    },
    trustLogos: [
      "/attached_assets/logo3_1752659516426.png",
      "/attached_assets/logo4_1752659516426.png",
    ],
  },
  {
    name: "Sahil Chaudhry",
    title: "Senior Manager Cloud and DevOps at KPMG Global",
    company: "Ex: Deloitte",
    avatar: "/attached_assets/sahilc_1752659516428.jpeg",
    tagline: "Building careers, not just resumes.",
    review: {
      text: "Sahil made advanced cloud concepts easy to master. His career advice was actionable and always on point. I gained both skills and confidence.",
      author: "— Ananya B. (Google)"
    },
    trustLogos: [
      "/attached_assets/logo5_1752659516426.png",
      "/attached_assets/logo8_1752659516426.png",
    ],
  },
  {
    name: "Nick Parker",
    title: "Sr. Director Engineering at Fannie Mae",
    company: "Ex: Prudential Financial",
    avatar: "/attached_assets/Nick Parker_1752659516426.jpeg",
    tagline: "From code to C-suite: your journey starts here.",
    review: {
      text: "Nick’s leadership coaching transformed my approach to team management. He shared real-world strategies that I could use immediately. I left every session inspired.",
      author: "— Kavya R. (Stripe)"
    },
    trustLogos: [
      "/attached_assets/logo1_1752659516425.png",
      "/attached_assets/logo2_1752659516425.png",
    ],
  },
  {
    name: "Raj Kumar",
    title: "Director at Capgemini",
    company: "Ex: Accenture",
    avatar: "/attached_assets/Raj_1752659516427.jpeg",
    tagline: "Guiding you to global impact.",
    review: {
      text: "Raj’s insights helped me scale my startup and attract investors. He always provided honest feedback and practical solutions. His support made all the difference.",
      author: "— Sandeep P. (BeOne)"
    },
    trustLogos: [
      "/attached_assets/logo3_1752659516426.png",
      "/attached_assets/logo4_1752659516426.png",
    ],
  },
  {
    name: "Shubhi Duggal",
    title: "Chartered Accountant | CFA | Chartered Financial Analyst (CFA) at AIG",
    company: "Ex: Accenture, AIG, Fortune 500",
    avatar: "/attached_assets/Shubhi_1752659516428.jpeg",
    tagline: "Finance meets tech—unlock your edge.",
    review: {
      text: "Shubhi made finance and accounting concepts simple and clear. Her mentorship gave me the confidence to take on new roles. I highly recommend her guidance.",
      author: "— Rohan K. (Fortune 500)"
    },
    trustLogos: [
      "/attached_assets/logo5_1752659516426.png",
      "/attached_assets/logo8_1752659516426.png",
    ],
  },
  {
    name: "Alok Agarwal",
    title: "Data Scientist at Airbnb",
    company: "Ex: Meta, Twitter",
    avatar: "/attached_assets/Alok_1752659516425.jpeg",
    tagline: "Data-driven decisions, career-defining results.",
    review: {
      text: "Alok explained data science in a way that finally made sense. His real-world examples and patient teaching style helped me get results fast.",
      author: "— Meera S. (Airbnb)"
    },
    trustLogos: [
      "/attached_assets/logo1_1752659516425.png",
      "/attached_assets/logo2_1752659516425.png",
    ],
  },
  {
    name: "Sahil Kohli",
    title: "Director of Fair Analytics",
    company: "Ex: Deloitte",
    avatar: "/attached_assets/sahil kohli_1752659516428.jpeg",
    tagline: "Analytics for impact, mentorship for life.",
    review: {
      text: "Sahil’s analytics mentorship gave me real-world skills I use daily. He helped me see the big picture and grow as a professional. Every session was valuable.",
      author: "— Arjun M. (Deloitte)"
    },
    trustLogos: [
      "/attached_assets/logo3_1752659516426.png",
      "/attached_assets/logo4_1752659516426.png",
    ],
  },
  {
    name: "Nitil D",
    title: "Generative AI & BI Architect at Tiger Analytics",
    company: "Ex: Pepsico",
    avatar: "/attached_assets/Nitil_1752659516427.jpeg",
    tagline: "AI is the future—let's build it together.",
    review: {
      text: "Nitil opened my eyes to the power of AI and BI. His mentorship was practical, inspiring, and always focused on results. I feel ready for the future.",
      author: "— Sneha T. (Tiger Analytics)"
    },
    trustLogos: [
      "/attached_assets/logo5_1752659516426.png",
      "/attached_assets/logo8_1752659516426.png",
    ],
  },
  {
    name: "Nimisha Sainani",
    title: "Founder @ The Quiet Reset",
    company: "13+ years scaling startups across India and the U.S.",
    avatar: "/attached_assets/Nimisha Sainaini_1752659516427.jpeg",
    tagline: "Startups, scale, and success—on your terms.",
    review: {
      text: "Nimisha’s startup advice was actionable and motivating. She helped me overcome challenges and move forward with clarity. Her support is unmatched.",
      author: "— Vikram S. (Startup Founder)"
    },
    trustLogos: [
      "/attached_assets/logo1_1752659516425.png",
      "/attached_assets/logo2_1752659516425.png",
    ],
  },
];

export function MentorShowcaseSection() {
  // Track which images failed to load
  const [errored, setErrored] = useState<{ [key: number]: boolean }>({});

  const handleImgError = (i: number) => {
    setErrored((prev) => ({ ...prev, [i]: true }));
  };

  return (
    <section className="relative py-16 md:py-20 bg-white flex flex-col items-center justify-center overflow-hidden">
      {/* Animated geometric accent */}
      <motion.div
        className="absolute left-8 top-8 w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-400 opacity-20 rounded-2xl blur-2xl z-0 animate-spin-slow"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
      />
      <motion.h2
        className="text-4xl md:text-6xl font-black text-gray-900 text-center mb-10 max-w-3xl drop-shadow"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        style={{ fontFamily: 'Lato, Arial, sans-serif' }}
      >
        Meet your <span className="text-blue-700">elite mentors</span>
      </motion.h2>
      <motion.p
        className="text-2xl md:text-3xl text-gray-600 text-center mb-12 max-w-2xl font-light"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      >
        Handpicked from FAANG, unicorns, and top startups—your mentors have already done what you want to do.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl z-10">
        {mentors.map((mentor, i) => (
          <motion.div
            key={mentor.name}
            className="mentor-card relative bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center border-2 border-gray-100 group overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 + i * 0.14, duration: 0.7, ease: 'easeOut' }}
          >
            {/* Curtain animation layer */}
            <div className="mentor-curtain">
              {(!errored[i]) ? (
                <img
                  src={mentor.avatar}
                  alt={mentor.name}
                  className="w-28 h-28 rounded-full object-cover border-4 border-blue-100 shadow-lg mb-4 z-10"
                  loading="lazy"
                  onError={() => handleImgError(i)}
                />
              ) : (
                <div className="w-28 h-28 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 text-blue-800 text-3xl font-bold">
                  {mentor.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-1 z-10">{mentor.name}</h3>
            </div>
            {/* Review layer (revealed on hover) */}
            <div className="mentor-review">
              <div className="mentor-review-text">{mentor.review?.text}</div>
              <div className="mentor-review-author">{mentor.review?.author}</div>
            </div>
            {/* Card content (below curtain) */}
            <span className="text-sm text-blue-700 font-semibold mb-1 z-10">{mentor.title}</span>
            <p className="text-base text-gray-600 mb-4 text-center z-10">{mentor.company}</p>
            {mentor.tagline && (
              <div className="italic text-gray-500 text-sm mb-1 z-10">“{mentor.tagline}”</div>
            )}
            {/* Trust logos row */}
            <div className="flex items-center gap-3 mt-auto z-10">
              {mentor.trustLogos.map((logo, idx) => (
                <img key={idx} src={logo} alt="logo" className="w-8 h-8 object-contain opacity-70" />
              ))}
            </div>
            {/* Subtle animated border for all cards */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.09, 0.17, 0.09, 0], scale: [1, 1.01, 1.03, 1.01, 1] }}
              transition={{ repeat: Infinity, duration: 8 + i, ease: 'easeInOut' }}
              style={{ background: 'linear-gradient(135deg, #93c5fd 0%, #e0e7ff 100%)' }}
            />
          </motion.div>
        ))}
      </div>
      {/* Decorative geometric accent */}
      <motion.div
        className="absolute right-16 bottom-8 w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-300 opacity-20 rounded-2xl blur-2xl z-0 animate-bounce"
        animate={{ y: [0, -16, 0] }}
        transition={{ repeat: Infinity, duration: 13, ease: 'easeInOut' }}
      />
    </section>
  );
}
