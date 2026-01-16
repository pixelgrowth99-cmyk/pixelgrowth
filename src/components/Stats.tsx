import { motion } from "framer-motion";

const stats = [
  { number: "150+", label: "Projects Delivered" },
  { number: "98%", label: "Client Retention" },
  { number: "3x", label: "Average Growth" },
  { number: "5+", label: "Years Experience" },
];

const Stats = () => {
  return (
    <section className="py-16 bg-surface-dark">
      <div className="container-max section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
  );
};

export default Stats;
