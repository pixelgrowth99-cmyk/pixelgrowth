import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Phone, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@pixelgrowth.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    description: "Mon-Fri, 9am-6pm EST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Digital Ave, Suite 100",
    description: "New York, NY 10001",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Monday - Friday",
    description: "9:00 AM - 6:00 PM EST",
  },
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope. A landing page typically takes 2-3 weeks, while a full website can take 6-12 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "What's your pricing structure?",
    answer: "We offer both project-based and retainer pricing depending on your needs. After our discovery call, we'll provide a detailed proposal with transparent pricing.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes! We offer various maintenance and support packages to keep your website running smoothly and your marketing campaigns optimized.",
  },
  {
    question: "Can you work with our existing brand guidelines?",
    answer: "Absolutely. We're experienced in working within established brand frameworks while still delivering fresh, effective designs.",
  },
];

const ContactPage = () => {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const faqRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              Let's Start
              <br />
              <span className="text-text-muted">Growing Together</span>
            </h1>
            <p className="text-lg md:text-xl text-text-body max-w-2xl mx-auto">
              Ready to transform your digital presence? Get in touch and let's discuss 
              how we can help you achieve your growth goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-secondary">
        <div className="container-max section-padding">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background rounded-lg p-6 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                <p className="text-foreground font-medium mb-1">{info.details}</p>
                <p className="text-sm text-text-muted">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} className="py-24 md:py-32 bg-background">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight mb-6">
                  Send Us a Message
                </h2>
                <p className="text-lg text-text-body leading-relaxed mb-8">
                  Fill out the form and we'll get back to you within 24 hours. 
                  We're excited to learn about your project and explore how we can help.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Free Consultation</h3>
                      <p className="text-text-body text-sm">Get expert insights into your project at no cost.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Custom Strategy</h3>
                      <p className="text-text-body text-sm">Receive a tailored proposal based on your specific needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">No Commitment</h3>
                      <p className="text-text-body text-sm">Explore your options without any pressure.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Content - Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <form onSubmit={handleSubmit} className="bg-secondary rounded-lg p-8 space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        required
                        className="bg-background border-border text-foreground placeholder:text-text-muted h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="bg-background border-border text-foreground placeholder:text-text-muted h-12"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Your Company"
                        className="bg-background border-border text-foreground placeholder:text-text-muted h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="bg-background border-border text-foreground placeholder:text-text-muted h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="flex h-12 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select a service</option>
                      <option value="web-design">Web Design & Development</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="ecommerce">eCommerce Growth</option>
                      <option value="full-service">Full-Service Package</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      className="flex h-12 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select a range</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Tell Us About Your Project *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Describe your project, goals, and timeline..."
                      required
                      rows={5}
                      className="bg-background border-border text-foreground placeholder:text-text-muted resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="hero"
                    size="xl"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-24 md:py-32 bg-surface-dark text-primary-foreground">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60 mb-4 block">
                FAQs
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Common Questions
              </h2>
            </motion.div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={faqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-surface-dark-elevated rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-primary-foreground/70 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight mb-6">
              Prefer to Talk?
            </h2>
            <p className="text-lg md:text-xl text-text-body max-w-2xl mx-auto mb-10">
              Sometimes a conversation is the best way to get started. 
              Book a free 30-minute strategy call with our team.
            </p>
            <Button variant="hero" size="xl" className="group">
              Schedule a Call
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
