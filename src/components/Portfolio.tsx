import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Fashion eCommerce Rebrand",
    category: "Web Design + eCommerce",
    result: "+127% Conversion Rate",
    description: "Complete store redesign with optimized checkout flow",
  },
  {
    title: "SaaS Landing Experience",
    category: "Web Design + Marketing",
    result: "3x Lead Generation",
    description: "High-converting landing pages with integrated campaigns",
  },
  {
    title: "Local Business Growth",
    category: "Digital Marketing",
    result: "+340% Organic Traffic",
    description: "SEO and paid ads strategy for regional expansion",
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-24 md:py-32 bg-secondary">
      <div className="container-max section-padding">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-text-muted mb-4 block">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
              Results That Speak
              <br />
              <span className="text-text-muted">For Themselves</span>
            </h2>
          </motion.div>

          {/* Projects */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative bg-background rounded-lg p-8 md:p-10 cursor-pointer hover-lift"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {/* Left Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-medium text-text-muted">
                        {project.category}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-text-muted" />
                      <span className="text-sm font-semibold text-foreground">
                        {project.result}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2 group-hover:text-text-muted transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-text-body">{project.description}</p>
                  </div>

                  {/* Right Content - Arrow */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 text-foreground group-hover:text-background transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center text-text-muted mt-12"
          >
            More case studies coming soon. Each project represents real results for real clients.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
