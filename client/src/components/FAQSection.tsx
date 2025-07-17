const faqs = [
  {
    q: "Who are the mentors?",
    a: "Our mentors are ex-Google, Meta, Amazon, and other FAANG leaders with real hiring experience."
  },
  {
    q: "What is the money-back guarantee?",
    a: "If you don’t land a qualifying offer within the program period, you get a full refund—no questions asked."
  },
  {
    q: "How are sessions delivered?",
    a: "All sessions are 1:1 and remote, scheduled flexibly to fit your calendar."
  },
  {
    q: "How fast can I get results?",
    a: "Most clients land offers in 6–12 weeks, depending on effort and starting point."
  },
  {
    q: "Do you help with referrals?",
    a: "Yes—our mentors provide direct referrals to top companies as part of Premium and Elite programs."
  },
];

export function FAQSection() {
  return (
    <section className="relative py-20 md:py-32 bg-white px-4 border-b border-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-xl mx-auto">
          Everything you need to know before getting started.
        </p>
        <div className="space-y-6 text-left">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-6 shadow-sm">
              <div className="font-bold text-gray-900 mb-2">{faq.q}</div>
              <div className="text-gray-700">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
