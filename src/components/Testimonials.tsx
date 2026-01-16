import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  { quote: "Pixel Growth transformed our online presence completely. Our conversion rate has never been higher.", author: "Sarah Chen", role: "CEO, TechScale" },
  { quote: "Working with Pixel Growth was a game-changer for our eCommerce business. They truly understand online sales.", author: "Michael Torres", role: "Founder, LuxeFashion" },
  { quote: "The team delivered beyond our expectations. Professional, strategic, and results-focused.", author: "David Park", role: "Marketing Director, Metro Dental" },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-max section-padding">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-text-muted mb-4 block">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              What Our Clients Say
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-secondary rounded-lg p-8"
              >
                <Quote className="w-8 h-8 text-text-muted mb-4" />
                <p className="text-text-body leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="font-semibold text-foreground">{t.author}</div>
                <div className="text-sm text-text-muted">{t.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
