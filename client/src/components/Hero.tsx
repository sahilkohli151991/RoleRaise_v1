import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { openCalendlyPopup } from "@/lib/calendly";
import { submitToGoogleSheets, type ContactFormData } from "@/lib/googleSheets";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, useInView, useTransform, useScroll } from "framer-motion";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Icosahedron, Line, Environment, ContactShadows } from "@react-three/drei";

// Floating 3D triangle mesh
function FloatingTriangle({ position, rotation, scale, color }: any) {
  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <coneGeometry args={[1, 1.2, 3]} />
      <meshPhysicalMaterial color={color} transparent opacity={0.28} roughness={0.18} metalness={0.7} clearcoat={0.7} clearcoatRoughness={0.2} />
    </mesh>
  );
}

// Central 3D polygon (glass/chrome)
function GlassPolygon() {
  return (
    <Icosahedron args={[3, 0]}>
      <meshPhysicalMaterial
        color="#e0e7ef"
        metalness={0.9}
        roughness={0.08}
        transmission={0.75}
        thickness={0.7}
        clearcoat={1}
        clearcoatRoughness={0.1}
        ior={1.4}
        reflectivity={0.85}
        envMapIntensity={1.3}
      />
    </Icosahedron>
  );
}

export function Hero() {
  // Animation hooks
  const heroRef = React.useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 180]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.6]);
  const headlineRef = React.useRef(null);
  const headlineInView = useInView(headlineRef, { once: true, margin: "-100px" });

  // Form logic
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
        toast({ title: "Success!", description: "Your free $200K+ roadmap has been sent to your email!" });
        setFormData({ fullName: "", email: "", currentRole: "", experience: "", currentSalary: "", targetSalary: "" });
      } else throw new Error("Failed to submit form");
    } catch {
      toast({ title: "Error", description: "Failed to submit form. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Triangles config
  const triangles = [
    { position: [-6, 2, -8], rotation: [0, 0.3, 0], scale: 1.2, color: "#dbeafe" },
    { position: [7, 1, -9], rotation: [0, -0.2, 0], scale: 1.1, color: "#e0e7ef" },
    { position: [0, -3, -10], rotation: [0.2, 0.4, 0], scale: 1.5, color: "#bae6fd" },
    { position: [-5, -2, -9], rotation: [0.1, -0.5, 0], scale: 1.1, color: "#f1f5f9" },
    { position: [5, -2, -7], rotation: [-0.1, 0.7, 0], scale: 1.4, color: "#e0e7ef" },
  ];

  return (
    <>
      {/* IMMERSIVE HERO */}
      <section ref={heroRef} className="relative min-h-[92vh] flex flex-col justify-center items-center bg-white px-4 pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        {/* 3D Canvas: Central Polygon + Floating Triangles */}
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 13], fov: 54 }} shadows>
            <ambientLight intensity={0.92} />
            <directionalLight position={[8, 18, 10]} intensity={1.2} castShadow />
            {/* Floating triangles */}
            {triangles.map((props, i) => (
              <FloatingTriangle key={i} {...props} />
            ))}
            {/* Central glass polygon */}
            <GlassPolygon />
            <ContactShadows position={[0, -3.7, 0]} opacity={0.2} scale={16} blur={2.7} far={9} />
            <Environment preset="city" />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.55} enableDamping dampingFactor={0.11} makeDefault />
          </Canvas>
        </motion.div>
        {/* Headline + CTA */}
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.h1
            ref={headlineRef}
            className="text-5xl md:text-7xl font-black text-gray-900 text-center mb-7 max-w-4xl tracking-tight leading-tight drop-shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={headlineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            style={{ fontFamily: 'Inter, Satoshi, Arial, sans-serif' }}
          >
            Unlock <span className="text-blue-700 bg-gradient-to-br from-blue-400 to-blue-700 bg-clip-text text-transparent">$200K+ Tech Careers</span><br className="hidden md:block" /> with <span className="text-blue-700">Elite Mentorship</span>
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-gray-600 text-center mb-10 max-w-2xl font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={headlineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.9, ease: 'easeOut' }}
          >
            Break into FAANG & top tech roles—no luck, no gatekeeping, just proven systems and real insider mentorship.
          </motion.p>
          <motion.div
            className="flex gap-6 mt-2 justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={headlineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
          >
            <a
              href="#roadmap-form"
              className="rounded-full bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg px-10 py-4 shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-200"
            >
              Get My Free Roadmap
            </a>
            <a
              href="#"
              onClick={openCalendlyPopup}
              className="rounded-full border-2 border-blue-700 text-blue-700 hover:bg-blue-50 font-bold text-lg px-10 py-4 shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100"
            >
              Book Free Call
            </a>
          </motion.div>
        </div>
      </section>
      {/* FORM SECTION BELOW HERO */}
      <section id="roadmap-form" className="relative bg-white py-20 md:py-28 flex flex-col items-center justify-center border-t border-gray-100">
        <div className="w-full max-w-2xl bg-white/80 rounded-3xl shadow-xl px-8 py-10 md:px-14 md:py-14 backdrop-blur-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Get Your Free $200K+ Tech Roadmap</h2>
          <form onSubmit={handleSubmit} className="space-y-7">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">Full Name *</Label>
                <Input id="fullName" type="text" value={formData.fullName} onChange={(e) => handleInputChange('fullName', e.target.value)} placeholder="Enter your full name" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</Label>
                <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} placeholder="Enter your email address" required className="mt-1" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="currentRole" className="text-sm font-medium text-gray-700">Current Role *</Label>
                <Input id="currentRole" type="text" value={formData.currentRole} onChange={(e) => handleInputChange('currentRole', e.target.value)} placeholder="e.g., Software Engineer, Student, etc." required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="experience" className="text-sm font-medium text-gray-700">Years of Experience *</Label>
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
                <Label htmlFor="currentSalary" className="text-sm font-medium text-gray-700">Current Salary (Optional)</Label>
                <Input id="currentSalary" type="text" value={formData.currentSalary} onChange={(e) => handleInputChange('currentSalary', e.target.value)} placeholder="e.g., $80,000" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="targetSalary" className="text-sm font-medium text-gray-700">Target Salary (Optional)</Label>
                <Input id="targetSalary" type="text" value={formData.targetSalary} onChange={(e) => handleInputChange('targetSalary', e.target.value)} placeholder="e.g., $200,000" className="mt-1" />
              </div>
            </div>
            <div className="text-center">
              <Button type="submit" disabled={isSubmitting} className="circular-button text-lg font-medium shadow-lg px-12 py-3">
                {isSubmitting ? 'Sending...' : 'Get My Free Roadmap'}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
