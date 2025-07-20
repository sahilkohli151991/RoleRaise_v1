import React, { useRef, useState, useEffect } from "react";
import "./RoadmapFormSection.css";

// Utility: Intersection Observer hook (plays once)
function useOnceInView(ref: React.RefObject<HTMLElement>, rootMargin = "0px") {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.35 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, rootMargin]);
  return inView;
}

export function RoadmapFormSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useOnceInView(sectionRef);
  const [assembled, setAssembled] = useState(false);

  // Animate pieces in sequence
  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => setAssembled(true), 1700);
      return () => clearTimeout(timeout);
    }
  }, [inView]);

  return (
    <section className="roadmap-section" ref={sectionRef}>
      <div className="roadmap-anim-container">
        {/* Torn paper fragments */}
        <div className={`paper-piece piece-top${inView ? " animate" : ""}${assembled ? " done" : ""}`}></div>
        <div className={`paper-piece piece-bottom${inView ? " animate" : ""}${assembled ? " done" : ""}`}></div>
        <div className={`paper-piece piece-left${inView ? " animate" : ""}${assembled ? " done" : ""}`}></div>
        <div className={`paper-piece piece-right${inView ? " animate" : ""}${assembled ? " done" : ""}`}></div>
        {/* Center form reveal */}
        <div className={`roadmap-form-shell${assembled ? " reveal" : ""}`}>
          <h2 className="roadmap-form-title">Get Your Free $200K+ Tech Roadmap</h2>
          <form className="roadmap-form-fields">
            <label className="roadmap-label">
              Full Name *
              <input className="roadmap-input" type="text" placeholder="Enter your full name" required />
            </label>
            <label className="roadmap-label">
              Email Address *
              <input className="roadmap-input" type="email" placeholder="Enter your email address" required />
            </label>
            <label className="roadmap-label">
              Current Role *
              <input className="roadmap-input" type="text" placeholder="e.g., Software Engineer, Student, etc." required />
            </label>
            <label className="roadmap-label">
              Years of Experience *
              <select className="roadmap-input" required>
                <option value="">Select experience level</option>
                <option value="0-1">0-1 years</option>
                <option value="2-3">2-3 years</option>
                <option value="4-6">4-6 years</option>
                <option value="7-10">7-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </label>
            <label className="roadmap-label">
              Current Salary (Optional)
              <input className="roadmap-input" type="text" placeholder="e.g., $80,000" />
            </label>
            <label className="roadmap-label">
              Target Salary (Optional)
              <input className="roadmap-input" type="text" placeholder="e.g., $200,000" />
            </label>
            <button className="roadmap-submit" type="submit">Get My Free Roadmap</button>
          </form>
        </div>
      </div>
    </section>
  );
}
