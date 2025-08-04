import { useState } from "react";
import { Check, X } from "lucide-react";
import SectionHeading from "../ui/section-heading";
import PricingCard from "../ui/pricing-card";
import GlassCard from "../ui/glass-card";
import { useScrollAnimation } from "../../hooks/use-scroll-animation";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses",
    monthlyPrice: 29,
    annualPrice: 23,
    features: [
      { name: "Up to 5 campaigns", included: true },
      { name: "AI content generation", included: true },
      { name: "Basic analytics", included: true },
      { name: "Email support", included: true },
      { name: "Advanced automation", included: false },
      { name: "Custom integrations", included: false },
    ],
    popular: false,
  },
  {
    name: "Professional",
    description: "Best for growing companies",
    monthlyPrice: 79,
    annualPrice: 63,
    features: [
      { name: "Up to 25 campaigns", included: true },
      { name: "Advanced AI features", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Priority support", included: true },
      { name: "Campaign automation", included: true },
      { name: "Team collaboration", included: true },
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    monthlyPrice: 199,
    annualPrice: 159,
    features: [
      { name: "Unlimited campaigns", included: true },
      { name: "Full AI suite access", included: true },
      { name: "Custom analytics", included: true },
      { name: "24/7 dedicated support", included: true },
      { name: "Custom integrations", included: true },
      { name: "White-label options", included: true },
    ],
    popular: false,
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [adSpend, setAdSpend] = useState(10000);
  const { ref, isVisible } = useScrollAnimation();

  const calculateROI = (spend: number) => {
    return Math.round(spend * 4.2);
  };

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <SectionHeading
            title="Simple, Transparent"
            highlightText="Pricing"
            description="Choose the perfect plan for your business. All plans include our core AI features with 14-day free trial and no setup fees."
          />
          
          {/* Pricing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-16">
            <span className="text-slate-300">Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full p-1 transition-colors duration-200 focus:outline-none ${
                isAnnual ? 'bg-primary' : 'bg-slate-600'
              }`}
              data-testid="pricing-toggle"
            >
              <div 
                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ${
                  isAnnual ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
            <span className="text-white">Annual</span>
            <span className="bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Save 20%
            </span>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              isAnnual={isAnnual}
            />
          ))}
        </div>
        
        {/* ROI Calculator */}
        <div className="max-w-2xl mx-auto">
          <GlassCard className="p-8">
            <h3 className="text-xl font-bold text-center mb-6">ROI Calculator</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Monthly Ad Spend</label>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  value={adSpend}
                  onChange={(e) => setAdSpend(parseInt(e.target.value))}
                  className="w-full"
                  data-testid="roi-slider"
                />
                <span className="text-sm text-slate-400">
                  ${adSpend.toLocaleString()}
                </span>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">
                  +${calculateROI(adSpend).toLocaleString()}
                </div>
                <div className="text-sm text-slate-400">Potential Monthly Savings</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
