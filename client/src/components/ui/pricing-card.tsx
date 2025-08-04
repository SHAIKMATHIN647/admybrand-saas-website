import { Check, X } from "lucide-react";
import GlassCard from "./glass-card";
import GradientButton from "./gradient-button";
import { useScrollAnimation } from "../../hooks/use-scroll-animation";

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: PricingFeature[];
  popular: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
  isAnnual: boolean;
}

export default function PricingCard({ plan, isAnnual }: PricingCardProps) {
  const { ref, isVisible } = useScrollAnimation();
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

  return (
    <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
      <GlassCard className={`p-8 hover-lift pricing-card h-full ${plan.popular ? 'border-2 border-primary relative' : ''}`}>
        {plan.popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </span>
          </div>
        )}
        
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
          <p className="text-slate-400 mb-6">{plan.description}</p>
          <div className="flex items-baseline justify-center">
            <span className="text-4xl font-bold">${price}</span>
            <span className="text-slate-400 ml-1">/month</span>
          </div>
        </div>
        
        <ul className="space-y-4 mb-8 flex-grow">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              {feature.included ? (
                <Check className="text-emerald-400 mr-3 w-5 h-5 flex-shrink-0" />
              ) : (
                <X className="text-slate-400 mr-3 w-5 h-5 flex-shrink-0" />
              )}
              <span className={feature.included ? "" : "text-slate-400"}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
        
        {plan.popular ? (
          <GradientButton className="w-full" data-testid={`pricing-button-${plan.name.toLowerCase()}`}>
            Start Free Trial
          </GradientButton>
        ) : plan.name === "Enterprise" ? (
          <button 
            className="w-full glass-effect border border-white text-white py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all"
            data-testid={`pricing-button-${plan.name.toLowerCase()}`}
          >
            Contact Sales
          </button>
        ) : (
          <button 
            className="w-full glass-effect border border-primary text-primary py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
            data-testid={`pricing-button-${plan.name.toLowerCase()}`}
          >
            Start Free Trial
          </button>
        )}
      </GlassCard>
    </div>
  );
}
