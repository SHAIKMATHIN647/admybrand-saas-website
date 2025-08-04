import { Rocket, Play, CheckCircle } from "lucide-react";
import GradientButton from "../ui/gradient-button";
import GlassCard from "../ui/glass-card";
import AnimatedCounter from "../ui/animated-counter";
import { useScrollAnimation } from "../../hooks/use-scroll-animation";

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-bg pt-24 pb-16 lg:pt-32 lg:pb-24 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
            <GlassCard className="inline-flex items-center px-4 py-2 rounded-full mb-6">
              <span className="text-emerald-400 text-sm font-medium">
                🚀 New: AI Campaign Optimizer 2025
              </span>
            </GlassCard>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Revolutionary
              <span className="text-gradient block">AI Marketing</span>
              That Converts
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Transform your marketing strategy with our AI-powered suite. Generate campaigns, 
              optimize performance, and boost ROI with cutting-edge artificial intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <GradientButton 
                size="lg" 
                onClick={scrollToContact}
                data-testid="hero-trial-button"
              >
                <Rocket className="mr-2 w-5 h-5" />
                Start Free 14-Day Trial
              </GradientButton>
              <button className="glass-effect px-8 py-4 rounded-lg text-white font-semibold text-lg hover:bg-white/20 transition-all flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <div className="flex items-center">
                <CheckCircle className="text-emerald-400 mr-2 w-4 h-4" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-emerald-400 mr-2 w-4 h-4" />
                Cancel anytime
              </div>
            </div>
          </div>
          
          <div className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
            <div className="relative">
              {/* Main dashboard preview */}
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
                alt="AI Marketing Dashboard Interface" 
                className="rounded-2xl shadow-2xl hover-lift w-full"
              />
              
              {/* Floating elements */}
              <GlassCard className="absolute -top-4 -left-4 p-4 animate-bounce">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">AI Active</span>
                </div>
              </GlassCard>
              
              <GlassCard className="absolute -bottom-4 -right-4 p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">
                    <AnimatedCounter end={347} suffix="%" />
                  </div>
                  <div className="text-xs text-slate-300">ROI Increase</div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
