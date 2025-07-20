import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

type ExperienceLevel = {
  value: string;
  label: string;
};

const experienceLevels: ExperienceLevel[] = [
  { value: '0-2', label: '0–2 years (Entry Level)' },
  { value: '3-5', label: '3–5 years (Junior)' },
  { value: '6-10', label: '6–10 years (Mid-Level)' },
  { value: '11-15', label: '11–15 years (Senior)' },
  { value: '15+', label: '15+ years (Expert/Leadership)' },
];

interface MentorshipFormProps {
  isOpen: boolean;
  onClose: () => void;
  isIndia: boolean;
}

export function MentorshipForm({ isOpen, onClose, isIndia }: MentorshipFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    currentRole: '',
    experience: '',
    currentSalary: '',
    targetSalary: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  // Close form when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        currentRole: '',
        experience: '',
        currentSalary: '',
        targetSalary: '',
      });
      onClose();
      // Show success message for a while before closing
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 2000);
  };

  const salaryPlaceholder = isIndia ? 'e.g., ₹15,00,000' : 'e.g., $80,000';
  const targetSalaryPlaceholder = isIndia ? 'e.g., ₹35,00,000' : 'e.g., $200,000';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close form"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
                Get Your Free {isIndia ? '35LPA+' : '$200K+'} Tech Roadmap
              </h2>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Thanks! Your roadmap is on the way.
                  </h3>
                  <p className="text-gray-600">Check your email shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="currentRole" className="block text-sm font-medium text-gray-700">
                        Current Role
                      </label>
                      <input
                        type="text"
                        id="currentRole"
                        name="currentRole"
                        value={formData.currentRole}
                        onChange={handleChange}
                        placeholder="e.g., Software Engineer, Student, etc."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                        Years of Experience
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none bg-white"
                        required
                      >
                        <option value="">Select your experience level</option>
                        {experienceLevels.map((level) => (
                          <option key={level.value} value={level.value}>
                            {level.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="currentSalary" className="block text-sm font-medium text-gray-700">
                        Current Salary (Optional)
                      </label>
                      <input
                        type="text"
                        id="currentSalary"
                        name="currentSalary"
                        value={formData.currentSalary}
                        onChange={handleChange}
                        placeholder={salaryPlaceholder}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="targetSalary" className="block text-sm font-medium text-gray-700">
                        Target Salary (Optional)
                      </label>
                      <input
                        type="text"
                        id="targetSalary"
                        name="targetSalary"
                        value={formData.targetSalary}
                        onChange={handleChange}
                        placeholder={targetSalaryPlaceholder}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium py-4 px-6 rounded-xl hover:shadow-lg hover:-translate-y-0.5 transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Get My Free Roadmap
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
