import { motion } from "framer-motion";
import { HiOutlineClipboardList, HiOutlineSparkles, HiOutlineUserGroup } from "react-icons/hi";

export function ProgramsSection() {
  const programs = [
    {
      icon: <HiOutlineClipboardList className="w-9 h-9 text-blue-600 mb-4" />,
      title: "Interview Mastery",
      level: "Beginner",
      price: "$2,980",
      priceNote: "(one-time)",
      desc: "Master every stage of the interview process and land your first tech offer with confidence.",
      benefits: [
        "Resume & LinkedIn optimization",
        "4 expert mock interviews/month",
        "Technical & behavioral mastery",
        "Salary negotiation strategies",
        "Personalized job search plan",
        "Done-for-you job applications",
        "Private community access",
      ],
      eligibility: "Complete onboarding and attend 2+ mock interviews in 30 days",
      guarantee: "30-day money-back guarantee",
      cta: "Choose Plan",
      best: false,
    },
    {
      icon: <HiOutlineSparkles className="w-9 h-9 text-blue-600 mb-4" />,
      title: "Dream Job Accelerator",
      level: "Intermediate",
      price: "$5,980",
      priceNote: "(one-time)",
      desc: "Accelerate your journey to top-tier roles with unlimited coaching and direct FAANG mentorship.",
      benefits: [
        "Everything in Interview Mastery",
        "Personal FAANG/Fortune 500 mentor",
        "8 tailored mock interviews/month",
        "Mixed interview panels for your target roles",
        "5 guaranteed referrals (FAANG/F500)",
        "Unlimited 1:1 coaching",
        "Priority 24/7 Slack support",
        "600+ job applications handled for you",
      ],
      eligibility: "Active mentoring participation & 4+ mocks/month",
      guarantee: "60-day money-back guarantee",
      cta: "Choose Plan",
      best: true,
    },
    {
      icon: <HiOutlineUserGroup className="w-9 h-9 text-blue-600 mb-4" />,
      title: "Elite Executive Service",
      level: "Senior",
      price: "$8,980",
      priceNote: "(one-time)",
      desc: "For senior leaders targeting C-suite roles—board-level prep, advanced leadership coaching, and guaranteed executive referrals.",
      benefits: [
        "Dedicated Career Strategist",
        "12 C-suite mock interviews/month",
        "Executive presence & leadership coaching",
        "Board-level workshops",
        "10 guaranteed C-suite referrals",
        "Equity negotiation masterclass",
        "1,000+ executive job applications handled",
        "Elite 24/7 priority Slack & direct support",
      ],
      eligibility: "Engagement in all executive sessions & required mocks",
      guarantee: "60-day money-back guarantee",
      cta: "Choose Plan",
      best: false,
    },
    {
      icon: <HiOutlineClipboardList className="w-9 h-9 text-blue-600 mb-4" />,
      title: "Break Into Tech Bootcamp",
      level: "Foundational",
      price: "$7,000",
      priceNote: "(one-time)",
      desc: "Hands-on skills bootcamp for career changers and new grads—get job-ready with live labs and a personal roadmap.",
      benefits: [
        "6 mock interviews/month (3 technical, 3 behavioral)",
        "Resume & LinkedIn overhaul",
        "Technical & behavioral workshops",
        "Interactive live labs",
        "Personalized career roadmap & 1:1 coaching",
        "Proactive, done-for-you job applications",
        "Lifetime alumni network",
      ],
      eligibility: "Complete bootcamp tasks & 3+ mocks in first 30 days",
      guarantee: "30-day money-back guarantee",
      cta: "Choose Plan",
      best: false,
    },
    {
      icon: <HiOutlineUserGroup className="w-9 h-9 text-blue-600 mb-4" />,
      title: "Career Growth Subscription",
      level: "Ongoing Support",
      price: "$400/month",
      priceNote: "Cancel anytime",
      desc: "Stay sharp and keep advancing with monthly live masterclasses, mock interviews, and unlimited support.",
      benefits: [
        "Weekly live masterclasses",
        "2 tailored mock interviews/month",
        "Resume & LinkedIn templates",
        "Monthly group practice sessions",
        "Updated templates & resources",
        "Interview-prep workshops",
        "24/7 Slack access",
        "Continuous, personalized job applications",
      ],
      eligibility: "Cancel anytime. 7-day free trial.",
      guarantee: "7-day free trial – Cancel anytime",
      cta: "Choose Plan",
      best: false,
    },
  ];

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-white via-blue-50 to-white flex flex-col items-center justify-center overflow-hidden">
      {/* Animated geometric accent */}
      <motion.div
        className="absolute left-6 top-10 w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-400 opacity-20 rounded-3xl blur-2xl z-0 animate-spin-slow"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 26, ease: 'linear' }}
      />
      <motion.h2
        className="text-4xl md:text-6xl font-black text-gray-900 text-center mb-4 max-w-3xl drop-shadow"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        Choose your <span className="text-blue-700">pathway</span> to top tech.
      </motion.h2>
      <motion.p
        className="text-2xl md:text-3xl text-gray-600 text-center mb-12 max-w-2xl font-light"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      >
        Whether you want a proven roadmap, elite mentorship, or a supportive community—we’ve got you covered.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 w-full max-w-6xl z-10">
        {programs.map((program, i) => (
          <motion.div
            key={program.title}
            className={`relative bg-white rounded-3xl shadow-2xl p-8 flex flex-col border-2 ${
              program.best
                ? "border-blue-700 ring-2 ring-blue-300 scale-105 shadow-blue-200"
                : "border-gray-100"
            } transition-transform duration-300 hover:scale-107 group overflow-hidden`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 + i * 0.12, duration: 0.7, ease: "easeOut" }}
          >
            {/* Animated border effect for best value */}
            {program.best && (
              <motion.span
                className="absolute top-4 right-4 bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.8, 1.15, 1], opacity: [0, 1, 1] }}
                transition={{ duration: 0.7, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              >
                Best Value
              </motion.span>
            )}
            <div className="flex flex-col items-center mb-4 z-10">
              {program.icon}
              <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">
                {program.title}
              </h3>
              <span className="text-sm text-blue-700 font-semibold mb-1">
                {program.level}
              </span>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-extrabold text-gray-900">{program.price}</span>
                <span className="text-xs text-gray-500">{program.priceNote}</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4 text-center z-10">{program.desc}</p>
            <ul className="mb-6 space-y-2 text-left z-10">
              {program.benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-gray-700">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-500" /> {b}
                </li>
              ))}
            </ul>
            <div className="mb-2 text-xs text-gray-500 z-10">
              <span className="font-semibold">Eligibility:</span> {program.eligibility}
            </div>
            <div className="mb-4 text-xs text-green-700 z-10">
              <span className="font-semibold">Guarantee:</span> {program.guarantee}
            </div>
            <button className="mt-auto bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:bg-blue-800 transition text-lg z-10">
              {program.cta}
            </button>
            {/* Subtle animated border for all cards */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.07, 0.15, 0.07, 0], scale: [1, 1.02, 1.04, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 8 + i, ease: 'easeInOut' }}
              style={{ background: 'linear-gradient(135deg, #93c5fd 0%, #e0e7ff 100%)' }}
            />
          </motion.div>
        ))}
      </div>
      {/* Decorative geometric accent */}
      <motion.div
        className="absolute right-12 bottom-10 w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-300 opacity-20 rounded-2xl blur-2xl z-0 animate-bounce"
        animate={{ y: [0, -18, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
      />
    </section>
  );
}
