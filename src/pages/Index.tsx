import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Portfolio from "@/components/Portfolio";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Process from "@/components/Process";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Process />
      <WhyUs />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
