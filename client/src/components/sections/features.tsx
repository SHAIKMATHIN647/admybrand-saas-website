import { Wand2, TrendingUp, Users, Bot, Palette, Shield } from "lucide-react";
import SectionHeading from "../ui/section-heading";
import FeatureCard from "../ui/feature-card";
import { useScrollAnimation } from "../../hooks/use-scroll-animation";

const features = [
  {
    icon: Wand2,
    title: "AI Content Generator",
    description: "Generate high-converting ad copy, social media posts, and email campaigns in seconds with our advanced language models.",
    color: "primary",
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Real-time insights and predictive analytics to optimize your campaigns and maximize ROI across all channels.",
    color: "secondary",
  },
  {
    icon: Users,
    title: "Audience Targeting",
    description: "AI-powered audience segmentation and targeting to reach the right customers at the perfect moment.",
    color: "purple",
  },
  {
    icon: Bot,
    title: "Campaign Automation",
    description: "Set up intelligent automation workflows that adapt and optimize your campaigns based on performance data.",
    color: "orange",
  },
  {
    icon: Palette,
    title: "Creative Studio",
    description: "AI-powered design tools to create stunning visuals, videos, and graphics that capture attention and drive engagement.",
    color: "green",
  },
  {
    icon: Shield,
    title: "Brand Protection",
    description: "Advanced AI monitoring to protect your brand reputation and ensure compliance across all marketing channels.",
    color: "red",
  },
];

export default function Features() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <SectionHeading
            title="Powerful AI Features That"
            highlightText="Drive Results"
            description="Our comprehensive AI suite provides everything you need to create, optimize, and scale your marketing campaigns with unprecedented efficiency."
          />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
