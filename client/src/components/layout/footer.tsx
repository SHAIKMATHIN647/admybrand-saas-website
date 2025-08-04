import { SiX, SiLinkedin, SiFacebook, SiYoutube } from "react-icons/si";
import logoImage from "@assets/image_1754297501742.png";

export default function Footer() {
  return (
    <footer className="bg-slate-800 border-t border-slate-700 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logoImage} 
                alt="AdmyBrand Logo" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="text-xl font-bold text-white">AdmyBrand</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Revolutionizing marketing with AI-powered tools that drive real results 
              for businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all"
                data-testid="social-twitter"
              >
                <SiX className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all"
                data-testid="social-linkedin"
              >
                <SiLinkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all"
                data-testid="social-facebook"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all"
                data-testid="social-youtube"
              >
                <SiYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Press Kit</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">System Status</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2025 AdmyBrand AI Suite. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-slate-400">
            <span>Made with ❤️ for marketers</span>
            <span>•</span>
            <a href="mailto:hello@admybrand.ai" className="hover:text-white transition-colors">
              hello@admybrand.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
