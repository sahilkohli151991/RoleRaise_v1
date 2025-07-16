import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { openCalendlyPopup } from "@/lib/calendly";
import { submitToGoogleSheets, type ContactFormData } from "@/lib/googleSheets";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function Hero() {
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
          description: "Your free $200K+ roadmap has been sent to your email!",
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
    <>
      {/* Pre-Hero Pain Screen */}
      <section className="relative bg-gray-50 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="geometric-triangle geometric-triangle-1 floating-triangle"></div>
          <div className="geometric-triangle geometric-triangle-2 floating-triangle"></div>
          <div className="geometric-triangle geometric-triangle-3 floating-triangle"></div>
          <div className="geometric-triangle geometric-triangle-4 floating-triangle"></div>
          <div className="geometric-triangle geometric-triangle-5 floating-triangle"></div>
          <div className="geometric-triangle geometric-triangle-6 floating-triangle"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-normal text-gray-900 mb-12 leading-tight">
              Breaking Into Tech Is Hard
            </h1>
            
            <button 
              onClick={() => scrollToSection('hero')}
              className="circular-button text-lg font-medium shadow-lg interactive-hover pulse-animation"
            >
              Find out more
            </button>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section 
        id="hero"
        ref={ref} 
        className={`relative bg-white pt-20 pb-20 section-fade ${isIntersecting ? 'visible' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Let Us Make It Easy
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 font-light">
              Technical & Strategic Interview Coaching
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-medium text-gray-900 stats-counter">92%</div>
                <div className="text-gray-600 font-light">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-medium text-gray-900 stats-counter">+$34K</div>
                <div className="text-gray-600 font-light">Avg Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-medium text-gray-900 stats-counter">6 Weeks</div>
                <div className="text-gray-600 font-light">to Offer</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('roadmap-form')}
                className="circular-button text-lg font-medium shadow-lg interactive-hover"
              >
                Get My Free $200K+ Roadmap
              </button>
              <button 
                onClick={openCalendlyPopup}
                className="circular-button bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white text-lg font-medium shadow-lg interactive-hover"
              >
                Book Strategy Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Free Roadmap Form Section */}
      <section 
        id="roadmap-form"
        className="py-20 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get My Free $200K+ Roadmap</h2>
            <p className="text-xl text-gray-600 mb-8">
              Discover the exact steps to land your dream tech role with a $200K+ salary
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="currentRole" className="text-sm font-medium text-gray-700">
                    Current Role *
                  </Label>
                  <Input
                    id="currentRole"
                    type="text"
                    value={formData.currentRole}
                    onChange={(e) => handleInputChange('currentRole', e.target.value)}
                    placeholder="e.g., Software Engineer, Student, etc."
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="experience" className="text-sm font-medium text-gray-700">
                    Years of Experience *
                  </Label>
                  <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="2-3">2-3 years</SelectItem>
                      <SelectItem value="4-5">4-5 years</SelectItem>
                      <SelectItem value="6-10">6-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="currentSalary" className="text-sm font-medium text-gray-700">
                    Current Salary (Optional)
                  </Label>
                  <Input
                    id="currentSalary"
                    type="text"
                    value={formData.currentSalary}
                    onChange={(e) => handleInputChange('currentSalary', e.target.value)}
                    placeholder="e.g., $80,000"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="targetSalary" className="text-sm font-medium text-gray-700">
                    Target Salary (Optional)
                  </Label>
                  <Input
                    id="targetSalary"
                    type="text"
                    value={formData.targetSalary}
                    onChange={(e) => handleInputChange('targetSalary', e.target.value)}
                    placeholder="e.g., $200,000"
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="text-center">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="circular-button text-lg font-medium shadow-lg px-12 py-3"
                >
                  {isSubmitting ? 'Sending...' : 'Get My Free Roadmap'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
