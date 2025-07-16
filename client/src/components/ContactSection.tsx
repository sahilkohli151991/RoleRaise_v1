import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { submitToGoogleSheets, type ContactFormData } from "@/lib/googleSheets";
import { CALENDLY_URL } from "@/lib/calendly";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function ContactSection() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    currentRole: "",
    experience: "",
    currentSalary: "",
    targetSalary: ""
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const success = await submitToGoogleSheets(formData);
      if (success) {
        toast({
          title: "Success!",
          description: "Thank you for your interest! We will contact you within 24 hours.",
        });
        setFormData({
          fullName: "",
          email: "",
          currentRole: "",
          experience: "",
          currentSalary: "",
          targetSalary: ""
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section 
      id="contact" 
      ref={ref} 
      className={`py-20 bg-gray-50 section-fade ${isIntersecting ? 'visible' : ''}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl text-gray-600 mb-8 font-light">
            Book your 30-minute Strategy Call now—only 7 slots left this week.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">FREE $200K+ Career Assessment</h3>
              <p className="text-gray-600 mb-6">See exactly how to land your dream role in 90 days</p>
              
              <Button 
                onClick={() => scrollToSection('roadmap-form')}
                className="w-full circular-button py-3 font-medium"
              >
                Get My Free Assessment
              </Button>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">1-on-1 Strategy Call</h3>
              <p className="text-gray-600 mb-6">Book your complimentary 30-minute strategy call with our founder</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-600">Personalized career roadmap</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-600">Salary negotiation strategy</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-600">Interview preparation tips</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-600">Access to exclusive job opportunities</span>
                </div>
              </div>
              
              <a 
                href={CALENDLY_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button className="w-full circular-button py-3 font-medium">
                  Book Your Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
