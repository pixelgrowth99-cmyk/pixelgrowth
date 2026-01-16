import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Globe, BarChart3, ShoppingCart, ArrowRight, CheckCircle, 
  Palette, Code, Smartphone, Search, Target, TrendingUp,
  ShoppingBag, CreditCard, Package, Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Conversion-focused websites that are fast, responsive, and built to perform. From landing pages to full-scale platforms.",
    features: [
      { icon: Palette, text: "Custom UI/UX Design" },
      { icon: Code, text: "Clean, Modern Code" },
      { icon: Smartphone, text: "Mobile-First Approach" },
      { icon: Search, text: "SEO Optimized" },
    ],
    details: [
      "Custom design tailored to your brand identity",
      "Responsive layouts that work on all devices",
      "Fast loading speeds and performance optimization",
      "Intuitive navigation and user experience",
      "Integration with your existing tools and systems",
      "Ongoing maintenance and support options",
    ],
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description: "Targeted campaigns that drive qualified traffic and generate leads. Data-backed strategies for measurable growth.",
    features: [
      { icon: Target, text: "Paid Advertising" },
      { icon: Search, text: "SEO Strategy" },
      { icon: TrendingUp, text: "Analytics & Reporting" },
      { icon: Layers, text: "Content Marketing" },
    ],
    details: [
      "Comprehensive market and competitor analysis",
      "Strategic paid advertising campaigns (Google, Meta, LinkedIn)",
      "Search engine optimization for organic growth",
      "Social media marketing and management",
      "Email marketing automation and sequences",
      "Detailed analytics and monthly reporting",
    ],
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Growth",
    description: "Store optimization and sales funnels designed to scale your revenue. Turn browsers into buyers with strategic optimization.",
    features: [
      { icon: ShoppingBag, text: "Store Optimization" },
      { icon: CreditCard, text: "Checkout Optimization" },
      { icon: Package, text: "Inventory Management" },
      { icon: TrendingUp, text: "Revenue Scaling" },
    ],
    details: [
      "Product page optimization for higher conversions",
      "Checkout flow improvements to reduce cart abandonment",
      "Email automation for abandoned cart recovery",
      "Customer retention and loyalty programs",
      "Upselling and cross-selling strategies",
      "Platform migration and optimization (Shopify, WooCommerce)",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We start by understanding your business, goals, target audience, and competitive landscape. This research forms the foundation of our strategy.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Based on our findings, we develop a comprehensive strategy tailored to your specific needs and objectives. No cookie-cutter solutions here.",
  },
  {
    step: "03",
    title: "Design & Build",
    description: "Our team brings the strategy to life with stunning design and robust development. Every element is crafted with conversion in mind.",
  },
  {
    step: "04",
    title: "Launch & Optimize",
    description: "We launch your project and continuously monitor performance, making data-driven optimizations to maximize results.",
  },
];

const ServicesPage = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 md:pt-40 md:pb-32 bg-background">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-text-muted mb-4 block">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              Everything You Need
              <br />
              <span className="text-text-muted">To Grow Online</span>
            </h1>
            <p className="text-lg md:text-xl text-text-body max-w-2xl mx-auto">
              From stunning websites to powerful marketing campaigns, we provide 
              comprehensive digital solutions designed to drive real business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section ref={servicesRef} className="py-24 md:py-32 bg-secondary">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto space-y-24">
            {services.map((service, serviceIndex) => (
              <motion.div
                key={serviceIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: serviceIndex * 0.2 }}
                className="grid md:grid-cols-2 gap-12 items-start"
              >
                <div className={serviceIndex % 2 === 1 ? "md:order-2" : ""}>
                  <div className="w-16 h-16 rounded-lg bg-foreground flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-background" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-text-body leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 bg-background rounded-lg p-4">
                        <feature.icon className="w-5 h-5 text-foreground" />
                        <span className="text-sm font-medium text-foreground">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact" className="group">
                      Get Started
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
                <div className={`bg-background rounded-lg p-8 ${serviceIndex % 2 === 1 ? "md:order-1" : ""}`}>
                  <h3 className="text-lg font-semibold text-foreground mb-6">What's Included</h3>
                  <div className="space-y-4">
                    {service.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-text-body">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section ref={processRef} className="py-24 md:py-32 bg-surface-dark text-primary-foreground">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60 mb-4 block">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                How We Work
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl font-display font-bold text-primary-foreground/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-primary-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-24 md:py-32 bg-background">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl text-text-body max-w-2xl mx-auto mb-10">
              Let's discuss your project and find the perfect solution for your business. 
              Book a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact" className="group">
                  Book a Consultation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/work">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
