import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, BarChart3, ShoppingCart, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Design",
    description:
      "Conversion-focused websites that are fast, responsive, and built to perform. From landing pages to full-scale platforms.",
    features: ["Custom Design", "Mobile-First", "Speed Optimized", "SEO Ready"],
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description:
      "Targeted campaigns that drive qualified traffic and generate leads. Data-backed strategies for measurable growth.",
    features: ["Paid Ads", "SEO Strategy", "Lead Generation", "Analytics"],
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Growth",
    description:
      "Store optimization and sales funnels designed to scale your revenue. Turn browsers into buyers.",
    features: ["Store Optimization", "Sales Funnels", "CRO", "Scale Strategy"],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
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
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
              Everything You Need
              <br />
              <span className="text-text-muted">To Grow Online</span>
            </h2>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative bg-secondary rounded-lg p-8 hover:bg-surface-dark transition-all duration-500 hover-lift"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-background group-hover:bg-surface-dark-elevated flex items-center justify-center mb-6 transition-colors duration-500">
                  <service.icon className="w-7 h-7 text-foreground group-hover:text-primary-foreground transition-colors duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary-foreground mb-3 transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-text-body group-hover:text-primary-foreground/80 mb-6 leading-relaxed transition-colors duration-500">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-background/50 text-text-muted group-hover:bg-surface-dark-elevated group-hover:text-primary-foreground/70 transition-colors duration-500"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Arrow Link */}
                <div className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-primary-foreground transition-colors duration-500">
                  <span>Learn More</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
