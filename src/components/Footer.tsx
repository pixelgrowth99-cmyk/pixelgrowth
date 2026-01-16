import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-surface-dark border-t border-primary-foreground/10">
      <div className="container-max section-padding">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/">
              <img src={logo} alt="Pixel Growth" className="h-10 w-auto" />
            </Link>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-8"
          >
            {[
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Work", href: "/work" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-primary-foreground/40"
          >
            © {currentYear} Pixel Growth. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
