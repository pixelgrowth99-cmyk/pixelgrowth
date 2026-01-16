import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary">
      <div className="container-max section-padding">
        <div ref={ref} className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-text-muted mb-4 block">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-6">
                We Build Digital
                <br />
                <span className="text-text-muted">That Performs</span>
              </h2>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-text-body leading-relaxed">
                Pixel Growth is a digital growth studio that helps ambitious
                businesses and eCommerce brands achieve measurable results
                through strategic design and targeted marketing.
              </p>
              <p className="text-lg text-text-body leading-relaxed">
                We don't just build websites—we create conversion-focused
                digital experiences backed by data and driven by strategy. Every
                pixel serves a purpose. Every campaign delivers results.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { number: "150+", label: "Projects" },
                  { number: "98%", label: "Retention" },
                  { number: "3x", label: "Avg. Growth" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-display font-bold text-foreground">
                      {stat.number}
                    </div>
                    <div className="text-sm text-text-muted mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
