import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800/95 backdrop-blur-sm border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">RoleRaise</Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('problem')} className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition">Learn</button>
              <button onClick={() => scrollToSection('solution')} className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition">Academy</button>
              <button onClick={() => scrollToSection('mentors')} className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition">Free</button>
              <button onClick={() => scrollToSection('success')} className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition">About</button>
              <button onClick={() => scrollToSection('contact')} className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition">Log in</button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 border-t border-gray-700">
            <button onClick={() => scrollToSection('problem')} className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Learn</button>
            <button onClick={() => scrollToSection('solution')} className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Academy</button>
            <button onClick={() => scrollToSection('mentors')} className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Free</button>
            <button onClick={() => scrollToSection('success')} className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">About</button>
            <button onClick={() => scrollToSection('contact')} className="bg-primary text-white block px-3 py-2 rounded-lg text-base font-medium hover:bg-primary/90">Log in</button>
          </div>
        </div>
      )}
    </nav>
  );
}
