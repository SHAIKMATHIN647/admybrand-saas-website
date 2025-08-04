import { useState } from "react";
import { ChevronDown } from "lucide-react";
import GlassCard from "./glass-card";
import { useScrollAnimation } from "../../hooks/use-scroll-animation";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
      <GlassCard className={`transition-all ${isOpen ? 'bg-primary/5' : ''}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between items-center p-6 cursor-pointer w-full text-left"
          data-testid={`faq-question-${question.slice(0, 20).replace(/\s+/g, '-').toLowerCase()}`}
        >
          <h3 className="text-lg font-semibold">{question}</h3>
          <ChevronDown 
            className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
        {isOpen && (
          <div className="px-6 pb-6">
            <p className="text-slate-300 leading-relaxed">
              {answer}
            </p>
          </div>
        )}
      </GlassCard>
    </div>
  );
}
