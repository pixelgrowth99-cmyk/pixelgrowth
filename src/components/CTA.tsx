import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-max section-padding">
        <div ref={ref} className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              Ready to Grow
              <br />
              <span className="text-text-muted">Your Business?</span>
            </h2>
            <p className="text-lg md:text-xl text-text-body max-w-2xl mx-auto mb-10">
              Let's discuss how we can help you achieve your digital growth goals.
              No pressure, just a conversation about possibilities.
            </p>
            <Button variant="cta" size="xl" asChild>
              <a href="#contact" className="group">
                Message Pixel Growth
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
