import Navigation from "../components/layout/navigation";
import Footer from "../components/layout/footer";
import Hero from "../components/sections/hero";
import Features from "../components/sections/features";
import Pricing from "../components/sections/pricing";
import Testimonials from "../components/sections/testimonials";
import FAQ from "../components/sections/faq";
import Contact from "../components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
