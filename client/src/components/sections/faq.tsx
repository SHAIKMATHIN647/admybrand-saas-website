import SectionHeading from "../ui/section-heading";
import FAQItem from "../ui/faq-item";
import { useScrollAnimation } from "../../hooks/use-scroll-animation";

const faqs = [
  {
    question: "How does the AI content generation work?",
    answer: "Our AI uses advanced natural language processing and machine learning models trained on high-performing marketing content. Simply input your brand guidelines, target audience, and campaign objectives, and our AI generates compelling copy optimized for your specific goals.",
  },
  {
    question: "Can I integrate with my existing marketing tools?",
    answer: "Yes! ADmyBRAND AI Suite integrates with over 100+ popular marketing tools including HubSpot, Salesforce, Google Ads, Facebook Ads, Mailchimp, and more. Our API also allows for custom integrations with your proprietary systems.",
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer comprehensive support including 24/7 chat support, extensive documentation, video tutorials, webinar training sessions, and dedicated account managers for Enterprise customers. Our team is committed to your success.",
  },
  {
    question: "Is my data secure and private?",
    answer: "Absolutely. We employ enterprise-grade security measures including end-to-end encryption, SOC 2 compliance, GDPR compliance, and regular security audits. Your data is never shared with third parties and you maintain full ownership of your content.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time with no cancellation fees. If you cancel during your trial period, you won't be charged. For paid subscriptions, you'll continue to have access until the end of your billing period.",
  },
  {
    question: "How quickly can I see results?",
    answer: "Most customers see improvements within the first week of implementation. Our AI learns from your brand data and optimizes campaigns in real-time, so results compound over time. Typical improvements include 40-60% better engagement rates and 25-45% increase in conversions.",
  },
];

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-20 lg:py-32 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <SectionHeading
            title="Frequently Asked"
            highlightText="Questions"
            description="Get answers to common questions about ADmyBRAND AI Suite."
          />
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
