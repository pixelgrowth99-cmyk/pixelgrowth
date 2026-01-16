import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, LineChart, Palette, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Strategy-First Approach",
    description:
      "We start with your goals, not templates. Every decision is backed by research and aligned with your business objectives.",
  },
  {
    icon: LineChart,
    title: "Data-Driven Decisions",
    description:
      "No guesswork. We use analytics and testing to optimize every element for maximum performance and ROI.",
  },
  {
    icon: Palette,
    title: "Clean, Modern Design",
    description:
      "Beautiful aesthetics that serve a purpose. Every design choice is intentional, creating experiences users love.",
  },
  {
    icon: TrendingUp,
    title: "Growth-Focused Results",
    description:
      "We measure success by your success. Our work is designed to drive leads, sales, and sustainable growth.",
  },
];

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 md:py-32 bg-surface-dark text-primary-foreground">
      <div className="container-max section-padding">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60 mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
              Built Different.
              <br />
              <span className="text-primary-foreground/60">Built Better.</span>
            </h2>
          </motion.div>

          {/* Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="flex gap-5"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-surface-dark-elevated flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                  <p className="text-primary-foreground/70 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
