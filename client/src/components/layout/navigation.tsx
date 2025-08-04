import { useState } from "react";
import { Menu, X } from "lucide-react";
import GradientButton from "../ui/gradient-button";
import logoImage from "@assets/image_1754297501742.png";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="AdmyBrand Logo" 
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="text-xl font-bold text-white">AdmyBrand</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("features")}
              className="text-slate-300 hover:text-white transition-colors"
              data-testid="nav-features"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("pricing")}
              className="text-slate-300 hover:text-white transition-colors"
              data-testid="nav-pricing"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")}
              className="text-slate-300 hover:text-white transition-colors"
              data-testid="nav-testimonials"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection("faq")}
              className="text-slate-300 hover:text-white transition-colors"
              data-testid="nav-faq"
            >
              FAQ
            </button>
            <GradientButton 
              data-testid="nav-trial-button"
              onClick={() => scrollToSection("contact")}
            >
              Start Free Trial
            </GradientButton>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
              data-testid="mobile-menu-button"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-dark border-t border-white/10" data-testid="mobile-menu">
            <div className="px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection("features")}
                className="block text-slate-300 hover:text-white"
                data-testid="mobile-nav-features"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection("pricing")}
                className="block text-slate-300 hover:text-white"
                data-testid="mobile-nav-pricing"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="block text-slate-300 hover:text-white"
                data-testid="mobile-nav-testimonials"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection("faq")}
                className="block text-slate-300 hover:text-white"
                data-testid="mobile-nav-faq"
              >
                FAQ
              </button>
              <GradientButton 
                className="w-full"
                onClick={() => scrollToSection("contact")}
                data-testid="mobile-nav-trial-button"
              >
                Start Free Trial
              </GradientButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
