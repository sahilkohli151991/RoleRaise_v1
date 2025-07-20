import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import "./Navigation.css";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 transition-all duration-500 ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className={`modern-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="flex items-center justify-between w-full px-8 py-3">
          <Link href="/" className="flex items-center">
  <img src="/role-raise-logo.svg" alt="RoleRaise Logo" style={{ height: '2.2rem', width: '2.2rem', marginRight: '0.65rem', display: 'inline-block' }} />
  <span className="text-xl font-bold text-white hidden sm:inline">RoleRaise</span>
</Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('problem')} className="nav-link">Learn</button>
            <button onClick={() => scrollToSection('solution')} className="nav-link">Academy</button>
            <button onClick={() => scrollToSection('mentors')} className="nav-link">Free</button>
            <button onClick={() => scrollToSection('success')} className="nav-link">About</button>
            <button className="login-button">Log in</button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white hover:text-blue-300 focus:outline-none p-2 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4">
          <div className="mobile-nav">
            <div className="flex flex-col space-y-3 p-4">
              <button onClick={() => scrollToSection('problem')} className="mobile-nav-link">Learn</button>
              <button onClick={() => scrollToSection('solution')} className="mobile-nav-link">Academy</button>
              <button onClick={() => scrollToSection('mentors')} className="mobile-nav-link">Free</button>
              <button onClick={() => scrollToSection('success')} className="mobile-nav-link">About</button>
              <button className="mobile-login-button">Log in</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
