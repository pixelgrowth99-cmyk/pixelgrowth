import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface-dark text-primary-foreground">
      <div className="container-max section-padding">
        <div ref={ref} className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60 mb-4 block">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
                Let's Start
                <br />
                <span className="text-primary-foreground/60">Growing Together</span>
              </h2>
              <p className="text-lg text-primary-foreground/70 leading-relaxed mb-8">
                Ready to take your business to the next level? Fill out the form
                and we'll get back to you within 24 hours to discuss your project.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                  <span className="text-primary-foreground/80">Free consultation call</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                  <span className="text-primary-foreground/80">Custom strategy proposal</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                  <span className="text-primary-foreground/80">No commitment required</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="bg-surface-dark-elevated border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground/50 h-12"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="bg-surface-dark-elevated border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground/50 h-12"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Company Name (Optional)"
                    className="bg-surface-dark-elevated border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground/50 h-12"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell us about your project..."
                    required
                    rows={5}
                    className="bg-surface-dark-elevated border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground/50 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="heroOutline"
                  size="xl"
                  disabled={isSubmitting}
                  className="w-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-surface-dark"
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
  );
};

export default Contact;
