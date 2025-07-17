export function ContactSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-blue-50 via-white to-blue-100 px-4 border-b border-gray-100">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
          Get in <span className="text-blue-600">Touch</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-xl mx-auto">
          Have questions, want a free consult, or ready to accelerate your career? Fill out the form and our team will get back to you within 24 hours.
        </p>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-5 py-3 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-5 py-3 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-5 py-3 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-400 outline-none"
            rows={5}
            required
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-lg shadow hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
