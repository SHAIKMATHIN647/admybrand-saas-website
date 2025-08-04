import { LucideIcon } from "lucide-react";
import GlassCard from "./glass-card";
import { useScrollAnimation } from "../../hooks/use-scroll-animation";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const colorClasses = {
  primary: "gradient-primary",
  secondary: "gradient-secondary", 
  purple: "bg-gradient-to-r from-purple-500 to-pink-500",
  orange: "bg-gradient-to-r from-yellow-500 to-orange-500",
  green: "bg-gradient-to-r from-green-500 to-blue-500",
  red: "bg-gradient-to-r from-red-500 to-purple-500",
};

const textColors = {
  primary: "text-primary",
  secondary: "text-cyan-500",
  purple: "text-purple-500",
  orange: "text-yellow-500",
  green: "text-green-500",
  red: "text-red-500",
};

export default function FeatureCard({ icon: Icon, title, description, color }: FeatureCardProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
      <GlassCard className="p-8 hover-lift h-full">
        <div className={`w-12 h-12 ${colorClasses[color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-6`}>
          <Icon className="text-white w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-slate-300 leading-relaxed mb-6">
          {description}
        </p>
        <div className={`flex items-center ${textColors[color as keyof typeof textColors]} font-medium`}>
          <span>Learn more</span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </GlassCard>
    </div>
  );
}
