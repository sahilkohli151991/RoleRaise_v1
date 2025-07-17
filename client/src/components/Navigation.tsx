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
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
      <div className="circular-nav">
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-xl font-medium text-white">RoleRaise</Link>
          
          <div className="hidden md:flex items-center space-x-2">
            <button onClick={() => scrollToSection('problem')} className="nav-button">Learn</button>
            <button onClick={() => scrollToSection('solution')} className="nav-button">Academy</button>
            <button onClick={() => scrollToSection('mentors')} className="nav-button">Free</button>
            <button onClick={() => scrollToSection('success')} className="nav-button">About</button>
            <button className="circular-button">Log in</button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden absolute top-16 left-4 right-4">
          <div className="circular-nav">
            <div className="flex flex-col space-y-2 p-2">
              <button onClick={() => scrollToSection('problem')} className="nav-button text-left">Learn</button>
              <button onClick={() => scrollToSection('solution')} className="nav-button text-left">Academy</button>
              <button onClick={() => scrollToSection('mentors')} className="nav-button text-left">Free</button>
              <button onClick={() => scrollToSection('success')} className="nav-button text-left">About</button>
              <button className="circular-button">Log in</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
