import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Award, Target, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { number: "150+", label: "Projects Delivered" },
  { number: "98%", label: "Client Retention" },
  { number: "3x", label: "Average Growth" },
  { number: "5+", label: "Years Experience" },
];

const values = [
  {
    icon: Target,
    title: "Strategy First",
    description: "We don't jump into design without understanding your business. Every project starts with deep research and strategic planning.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We work as an extension of your team. Your success is our success, and we're committed to long-term partnerships.",
  },
  {
    icon: Zap,
    title: "Results Driven",
    description: "Beautiful design means nothing without results. We measure everything and optimize for performance.",
  },
  {
    icon: Award,
    title: "Quality Obsessed",
    description: "Every pixel matters. We don't cut corners and we don't settle for 'good enough'. Excellence is our standard.",
  },
];

const timeline = [
  {
    year: "2019",
    title: "The Beginning",
    description: "Founded with a mission to help businesses grow through strategic digital design.",
  },
  {
    year: "2020",
    title: "Rapid Growth",
    description: "Expanded our services to include full-scale digital marketing and eCommerce solutions.",
  },
  {
    year: "2021",
    title: "Industry Recognition",
    description: "Recognized as a top digital agency for conversion-focused web design.",
  },
  {
    year: "2022",
    title: "Global Reach",
    description: "Began serving international clients across multiple industries and markets.",
  },
  {
    year: "2023",
    title: "Innovation Focus",
    description: "Launched new AI-powered marketing solutions and advanced analytics services.",
  },
  {
    year: "2024",
    title: "Continued Excellence",
    description: "Celebrating 150+ successful projects and a 98% client retention rate.",
  },
];

const AboutPage = () => {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const timelineRef = useRef(null);
  const teamRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });

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
              About Pixel Growth
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              We Build Digital
              <br />
              <span className="text-text-muted">That Performs</span>
            </h1>
            <p className="text-lg md:text-xl text-text-body max-w-2xl mx-auto">
              A digital growth studio dedicated to helping ambitious businesses 
              achieve measurable results through strategic design and marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-surface-dark">
        <div className="container-max section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
                  {stat.number}
                </div>
                <div className="text-sm text-primary-foreground/60 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section ref={storyRef} className="py-24 md:py-32 bg-secondary">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={storyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <span className="text-sm font-semibold uppercase tracking-widest text-text-muted mb-4 block">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight mb-6">
                  Born From a Simple Belief
                </h2>
                <div className="space-y-4 text-text-body leading-relaxed">
                  <p>
                    Pixel Growth was founded on a simple belief: that great design should drive real business results. 
                    Too many agencies focus on aesthetics alone, creating beautiful websites that fail to convert.
                  </p>
                  <p>
                    We started as a small team of designers and marketers frustrated by this disconnect. 
                    We knew there had to be a better way—an approach that combines stunning visuals with 
                    strategic thinking and data-driven optimization.
                  </p>
                  <p>
                    Today, we've helped over 150 businesses transform their digital presence and achieve 
                    measurable growth. Our clients don't just get beautiful websites; they get 
                    conversion machines built for long-term success.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={storyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-background rounded-lg p-8 md:p-12"
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">What Sets Us Apart</h3>
                <div className="space-y-4">
                  {[
                    "Strategy-first approach to every project",
                    "Data-driven decision making",
                    "Transparent communication throughout",
                    "Long-term partnership mindset",
                    "Continuous optimization and support",
                    "Results-backed guarantee",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0" />
                      <span className="text-text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section ref={valuesRef} className="py-24 md:py-32 bg-background">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-text-muted mb-4 block">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Principles That Guide Us
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-secondary rounded-lg p-8"
                >
                  <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center mb-5">
                    <value.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-text-body leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="py-24 md:py-32 bg-surface-dark text-primary-foreground">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={timelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60 mb-4 block">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Growing Together
              </h2>
            </motion.div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-16 text-right">
                    <span className="text-2xl font-display font-bold">{item.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 mt-2 rounded-full bg-primary-foreground" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-primary-foreground/70">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-24 md:py-32 bg-background">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-text-muted mb-4 block">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Experts Dedicated to Your Growth
              </h2>
              <p className="text-lg text-text-body max-w-2xl mx-auto mb-10">
                Our team combines decades of experience in design, marketing, and technology. 
                We're passionate about helping businesses succeed in the digital world.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact" className="group">
                  Work With Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
