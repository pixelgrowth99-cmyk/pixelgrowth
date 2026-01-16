import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { step: "01", title: "Discovery", description: "We start by understanding your business, goals, and target audience." },
  { step: "02", title: "Strategy", description: "We develop a comprehensive strategy tailored to your needs." },
  { step: "03", title: "Design & Build", description: "Our team brings the strategy to life with stunning design." },
  { step: "04", title: "Launch & Optimize", description: "We launch and continuously optimize for maximum results." },
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container-max section-padding">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-text-muted mb-4 block">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              How We Work
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-display font-bold text-text-muted/30 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-text-body leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
