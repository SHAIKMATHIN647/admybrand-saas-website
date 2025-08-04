import { Star } from "lucide-react";
import GlassCard from "./glass-card";
import { useScrollAnimation } from "../../hooks/use-scroll-animation";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
      <GlassCard className="p-8 hover-lift h-full bg-white/5">
        <div className="flex items-center mb-6">
          <div className="flex text-yellow-400">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>
        <blockquote className="text-slate-300 mb-6 leading-relaxed">
          "{testimonial.content}"
        </blockquote>
        <div className="flex items-center">
          <img 
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
          <div>
            <div className="font-semibold">{testimonial.name}</div>
            <div className="text-sm text-slate-400">{testimonial.role}</div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
