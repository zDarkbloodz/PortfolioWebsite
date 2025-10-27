"use client";

import { motion } from "framer-motion";

interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  highlights: string[];
  color: string;
}

const Experience = () => {
  // Experience data (latest first)
  const experiences: Experience[] = [
    {
      id: "1",
      company: "Amazon",
      role: "Software Development Engineer Intern",
      duration: "2025",
      location: "Seattle, WA",
      highlights: [
        "Selected through Amazon Student Veteran Internship Program",
        "Designed and developed scalable backend and frontend services using AWS",
        "Collaborated cross-functionally in agile environment",
        "Participated in code reviews with unit-tested solutions",
      ],
      color: "neon-green",
    },
    {
      id: "2",
      company: "Hubbell Incorporated",
      role: "Production Lead",
      duration: "2023 - 2025",
      location: "Oklahoma City, OK",
      highlights: [
        "Promoted to lead role for exceptional performance",
        "Reduced downtime by 35% through strategic troubleshooting",
        "Implemented process optimizations resulting in 20% production increase",
        "Led daily production operations and equipment training",
      ],
      color: "lime-green",
    },
    {
      id: "3",
      company: "North Sky Communications",
      role: "Tower Technician",
      duration: "2022 - 2023",
      location: "Oklahoma City, OK",
      highlights: [
        "Installed and maintained critical telecommunications systems",
        "Conducted inspections and upgrades, increasing network reliability by 15%",
        "Diagnosed complex issues in high-risk environments",
        "Adhered to strict safety protocols",
      ],
      color: "gold-accent",
    },
    {
      id: "4",
      company: "United States Army",
      role: "Signal Support Systems Specialist (25U)",
      duration: "2018 - 2022",
      location: "Fort Gordon, GA",
      highlights: [
        "Managed radio, RF, and satellite communications with 99.9% uptime",
        "Provided IT support for 150+ users, resolving tier 1-3 issues",
        "Established network security measures, reducing cyber risk",
        "Led technical training initiatives, improving team knowledge by 40%",
        "Reduced system failures through proactive maintenance",
      ],
      color: "amber",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: { duration: 2, ease: [0.42, 0, 0.58, 1] as any },
    },
  };

  return (
    <section id="experience" className="min-h-screen py-20 px-6 bg-pure-black">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-neon-green mx-auto mb-6" />
          <p className="text-text-secondary text-lg">
            My professional journey from military service to tech
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute left-8 md:left-12 top-0 w-0.5 bg-neon-green/30"
            style={{ height: "100%" }}
          />

          {/* Experience Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative pl-20 md:pl-28"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`absolute left-6 md:left-9 top-0 w-5 h-5 bg-${exp.color} rounded-full border-4 border-pure-black shadow-lg`}
                  style={{
                    boxShadow: `0 0 0 2px var(--color-${exp.color}), 0 0 20px var(--color-${exp.color})`,
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute -inset-2 bg-${exp.color} rounded-full blur-sm`}
                  />
                </motion.div>

                {/* Year Label */}
                <div className="absolute left-0 md:-left-2 top-0 text-text-secondary font-mono text-sm">
                  {exp.duration.split(" ")[0]}
                </div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className={`bg-card-bg border-l-4 border-${exp.color} rounded-lg p-6 hover:shadow-2xl transition-all duration-300 group`}
                >
                  {/* Company & Role */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold gradient-text mb-2">
                      {exp.company}
                    </h3>
                    <p className={`text-${exp.color} text-lg font-semibold mb-1`}>
                      {exp.role}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {exp.duration}
                      </span>
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
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
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start text-text-secondary"
                      >
                        <span
                          className={`text-${exp.color} mr-3 mt-1 flex-shrink-0`}
                        >
                          ▹
                        </span>
                        <span className="leading-relaxed">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Download Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="/Eric_Reyes_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 neon-border rounded-lg text-neon-green hover:bg-neon-green/10 transition-all duration-300 font-semibold"
          >
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
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
