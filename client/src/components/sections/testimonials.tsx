import SectionHeading from "../ui/section-heading";
import TestimonialCard from "../ui/testimonial-card";
import { useScrollAnimation } from "../../hooks/use-scroll-animation";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director, TechFlow",
    content: "ADmyBRAND AI increased our conversion rates by 340% in just 3 months. The AI content generation is incredibly accurate and saves us hours daily.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CEO, GrowthLab",
    content: "The automation features are game-changing. We've reduced manual work by 80% while improving campaign performance across all channels.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "CMO, InnovateCorp",
    content: "ROI tracking and predictive analytics helped us identify high-value opportunities we were missing. Revenue increased by 250% this quarter.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Creative Director, BrandStudio",
    content: "The creative studio AI generated visuals that outperformed our designer-made content. It's like having a team of experts working 24/7.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "VP Marketing, ScaleUp Inc",
    content: "Customer support is exceptional. They guided us through implementation and optimization strategies that delivered immediate results.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "CTO, NextGen Solutions",
    content: "Integration was seamless with our existing tools. The platform scales perfectly as our business grows, from startup to enterprise level.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    rating: 5,
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <SectionHeading
            title="Trusted by"
            highlightText="Marketing Leaders"
            description="See how businesses like yours are achieving incredible results with ADmyBRAND AI Suite."
          />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
