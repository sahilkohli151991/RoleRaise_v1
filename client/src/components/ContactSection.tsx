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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule a call with RoleRaise to discuss your career goals and see if our program is right for you.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-yellow-500 text-white rounded-full text-sm font-medium mb-8">
            Limited Availability: Only 7 Strategy Calls Left This Week
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">FREE $200K+ Career Assessment</h3>
            <p className="text-gray-600 mb-6">See exactly how to land your dream role in 90 days</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">Full Name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="currentRole" className="block text-sm font-medium text-gray-700 mb-2">Current Role</Label>
                  <Input
                    id="currentRole"
                    type="text"
                    value={formData.currentRole}
                    onChange={(e) => handleInputChange('currentRole', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</Label>
                  <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2">1-2 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="6-10">6-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="currentSalary" className="block text-sm font-medium text-gray-700 mb-2">Current Salary</Label>
                  <Input
                    id="currentSalary"
                    type="text"
                    placeholder="$85,000"
                    value={formData.currentSalary}
                    onChange={(e) => handleInputChange('currentSalary', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="targetSalary" className="block text-sm font-medium text-gray-700 mb-2">Target Salary</Label>
                  <Input
                    id="targetSalary"
                    type="text"
                    placeholder="$180,000"
                    value={formData.targetSalary}
                    onChange={(e) => handleInputChange('targetSalary', e.target.value)}
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'GET MY FREE $200K+ ROADMAP'}
              </Button>
              
              <p className="text-xs text-gray-500 text-center">🔒 Your information is 100% secure. We never share your data.</p>
            </form>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule Strategy Call</h3>
            <p className="text-gray-600 mb-6">Book a 30-minute strategy call to discuss your career goals</p>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">Calendly Integration</div>
                <div className="mt-4">
                  <Button 
                    onClick={() => window.open(CALENDLY_URL, '_blank')}
                    className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition"
                  >
                    📅 Book Strategy Call
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-600">No upfront payment</p>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-600">90-day guarantee</p>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-600">FAANG mentors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
