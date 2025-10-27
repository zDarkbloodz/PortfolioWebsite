"use client";

import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/zDarkbloodz",
      icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/eric-reyes-plnderer", // UPDATE WITH ACTUAL
      icon: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
    },
    {
      name: "Email",
      url: "mailto:zplndererz@gmail.com",
      icon: "M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-pure-black border-t border-neon-green/20 pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">PLNDERER</h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Building the future through code and creativity. Merging military
              discipline with technical innovation.
            </p>
            <div className="flex items-center gap-2 text-text-secondary text-sm">
              <svg
                className="w-4 h-4 text-neon-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Oklahoma City, OK</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-neon-green mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-neon-green transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-neon-green/50 rounded-full group-hover:bg-neon-green" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-neon-green mb-4">Connect</h4>
            <p className="text-text-secondary text-sm mb-6">
              Let's build something amazing together. Reach out for collaborations or
              opportunities.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target={social.name !== "Email" ? "_blank" : undefined}
                  rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 bg-card-bg border border-border-subtle rounded-lg flex items-center justify-center text-text-secondary hover:text-neon-green hover:border-neon-green transition-all duration-300"
                  aria-label={social.name}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border-subtle mb-8" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-text-secondary text-sm text-center md:text-left">
            © {currentYear} Eric "Plnderer" Reyes. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-text-secondary text-sm">
            <span>Built with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
              className="text-neon-green"
            >
              ♥
            </motion.span>
            <span>using</span>
            <span className="text-neon-green font-semibold">Next.js</span>
            <span>&</span>
            <span className="text-lime-green font-semibold">TypeScript</span>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <motion.a
            href="#hero"
            whileHover={{ y: -5 }}
            className="group flex flex-col items-center gap-2 text-text-secondary hover:text-neon-green transition-colors duration-300"
          >
            <div className="w-10 h-10 border border-border-subtle rounded-full flex items-center justify-center group-hover:border-neon-green transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </div>
            <span className="text-xs font-semibold">Back to Top</span>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
