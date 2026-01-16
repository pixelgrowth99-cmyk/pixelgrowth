import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ArrowRight, TrendingUp, Users, ShoppingCart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "LuxeFashion eCommerce",
    category: "Web Design + eCommerce",
    result: "+127% Conversion Rate",
    description: "Complete store redesign with optimized checkout flow and enhanced product pages. Implemented advanced filtering and personalized recommendations.",
    metrics: [
      { label: "Conversion Rate", value: "+127%" },
      { label: "Avg Order Value", value: "+45%" },
      { label: "Cart Abandonment", value: "-38%" },
    ],
    tags: ["Shopify", "UI/UX Design", "Conversion Optimization"],
  },
  {
    title: "TechScale SaaS Platform",
    category: "Web Design + Marketing",
    result: "3x Lead Generation",
    description: "High-converting landing pages with integrated marketing campaigns. Built a comprehensive lead generation funnel with automated nurturing sequences.",
    metrics: [
      { label: "Lead Generation", value: "3x" },
      { label: "Cost Per Lead", value: "-52%" },
      { label: "Demo Bookings", value: "+185%" },
    ],
    tags: ["Landing Pages", "Paid Ads", "Marketing Automation"],
  },
  {
    title: "Metro Dental Group",
    category: "Digital Marketing",
    result: "+340% Organic Traffic",
    description: "SEO and paid ads strategy for regional expansion. Developed local SEO presence across multiple locations with targeted Google Ads campaigns.",
    metrics: [
      { label: "Organic Traffic", value: "+340%" },
      { label: "New Patients", value: "+89%" },
      { label: "Cost Per Acquisition", value: "-61%" },
    ],
    tags: ["SEO", "Local Marketing", "Google Ads"],
  },
  {
    title: "FitnessPro Subscription",
    category: "eCommerce + Marketing",
    result: "+215% Revenue Growth",
    description: "Subscription box optimization and retention marketing. Reduced churn and increased lifetime value through targeted email campaigns and UX improvements.",
    metrics: [
      { label: "Revenue Growth", value: "+215%" },
      { label: "Customer Retention", value: "+67%" },
      { label: "Lifetime Value", value: "+94%" },
    ],
    tags: ["Subscription Commerce", "Email Marketing", "Retention"],
  },
  {
    title: "GreenTech Solutions",
    category: "Web Design + Branding",
    result: "+180% Brand Awareness",
    description: "Complete brand refresh and website redesign for a B2B technology company. Created a modern digital presence that reflects their innovative solutions.",
    metrics: [
      { label: "Brand Awareness", value: "+180%" },
      { label: "Website Traffic", value: "+156%" },
      { label: "Lead Quality", value: "+73%" },
    ],
    tags: ["Brand Identity", "B2B Website", "Content Strategy"],
  },
  {
    title: "Artisan Coffee Co.",
    category: "eCommerce + Local SEO",
    result: "+420% Online Sales",
    description: "Transformed a local coffee roaster into a thriving eCommerce business. Built subscription model and expanded nationwide shipping capabilities.",
    metrics: [
      { label: "Online Sales", value: "+420%" },
      { label: "Subscription Revenue", value: "$45K/mo" },
      { label: "Email List", value: "+12,000" },
    ],
    tags: ["Shopify", "Subscription", "Email Marketing"],
  },
];

const testimonials = [
  {
    quote: "Pixel Growth transformed our online presence completely. Our conversion rate has never been higher, and the quality of leads we're getting is exceptional.",
    author: "Sarah Chen",
    role: "CEO, TechScale",
    icon: TrendingUp,
  },
  {
    quote: "Working with Pixel Growth was a game-changer for our eCommerce business. They truly understand what drives online sales.",
    author: "Michael Torres",
    role: "Founder, LuxeFashion",
    icon: ShoppingCart,
  },
  {
    quote: "The team at Pixel Growth delivered beyond our expectations. Professional, strategic, and results-focused.",
    author: "David Park",
    role: "Marketing Director, Metro Dental",
    icon: Users,
  },
];

const industries = [
  { icon: ShoppingCart, name: "eCommerce" },
  { icon: Globe, name: "SaaS" },
  { icon: Users, name: "Healthcare" },
  { icon: TrendingUp, name: "Finance" },
];

const WorkPage = () => {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" });
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });
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
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              Results That Speak
              <br />
              <span className="text-text-muted">For Themselves</span>
            </h1>
            <p className="text-lg md:text-xl text-text-body max-w-2xl mx-auto">
              Every project tells a story of transformation. Explore how we've helped 
              businesses achieve extraordinary growth through strategic design and marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-12 bg-secondary">
        <div className="container-max section-padding">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <span className="text-sm text-text-muted uppercase tracking-widest">Industries we serve:</span>
            {industries.map((industry, index) => (
              <div key={index} className="flex items-center gap-2 text-foreground">
                <industry.icon className="w-5 h-5" />
                <span className="font-medium">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section ref={projectsRef} className="py-24 md:py-32 bg-background">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-secondary rounded-lg p-8 md:p-10 hover-lift cursor-pointer"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                  {/* Left Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-sm font-medium text-text-muted">
                        {project.category}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-text-muted" />
                      <span className="text-sm font-semibold text-foreground">
                        {project.result}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3 group-hover:text-text-muted transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-text-body mb-6 max-w-2xl">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-background text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Content - Metrics */}
                  <div className="flex flex-wrap lg:flex-col gap-6 lg:gap-4 lg:min-w-[180px]">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center lg:text-right">
                        <div className="text-2xl font-display font-bold text-foreground">
                          {metric.value}
                        </div>
                        <div className="text-sm text-text-muted">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-end mt-6">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-foreground group-hover:text-background transition-colors duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-24 md:py-32 bg-surface-dark text-primary-foreground">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60 mb-4 block">
                Client Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                What Our Clients Say
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-surface-dark-elevated rounded-lg p-8"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center mb-6">
                    <testimonial.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="text-primary-foreground/80 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-primary-foreground/60">{testimonial.role}</div>
                  </div>
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
              Ready to Be Our
              <br />
              <span className="text-text-muted">Next Success Story?</span>
            </h2>
            <p className="text-lg md:text-xl text-text-body max-w-2xl mx-auto mb-10">
              Join the growing list of businesses that have transformed their 
              digital presence with Pixel Growth.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="group">
                Start Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkPage;
