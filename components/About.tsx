"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const About = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  // Skills data
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
      icon: "💻",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "REST APIs"],
      icon: "⚙️",
    },
    {
      title: "AI/ML",
      skills: ["OpenAI API", "ML Fundamentals", "Prompt Engineering"],
      icon: "🤖",
    },
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "C++", "Python"],
      icon: "📝",
    },
    {
      title: "DevOps",
      skills: ["Git/GitHub", "AWS Basics", "Docker", "CI/CD"],
      icon: "🚀",
    },
    {
      title: "Systems",
      skills: ["Network Protocols", "RF Systems", "Security"],
      icon: "🔧",
    },
    {
      title: "Creative",
      skills: ["Music Production", "UX/UI Design", "Brand Development", "Visual Design"],
      icon: "🎨",
    },
    {
      title: "Professional",
      skills: ["Leadership", "Bilingual (EN/ES)", "Critical Thinking", "Military Discipline"],
      icon: "💼",
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-pure-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-neon-green mx-auto" />
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Photo Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1 flex justify-center items-start"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-green to-lime-green rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative w-full max-w-[400px] aspect-square bg-card-bg border-2 border-neon-green/50 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👨‍💻</div>
                    <p className="text-text-secondary text-sm">Photo Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Who I Am */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-neon-green mb-4 flex items-center">
                <span className="w-8 h-0.5 bg-neon-green mr-3" />
                WHO I AM
              </h3>
              <p className="text-text-secondary leading-relaxed text-lg">
                I'm <span className="text-neon-green font-semibold">Eric "Plnderer" Reyes</span>,
                a multidimensional creator with a rare blend of software engineering, AI, design,
                music, and brand vision. I don't fit into a single category — and that's my strength.
              </p>
              <p className="text-text-secondary leading-relaxed text-lg mt-4">
                <span className="text-gold-accent">Puerto Rican</span> at heart,
                <span className="text-lime-green"> veteran</span> by discipline,
                <span className="text-neon-green"> technologist</span> by passion.
                I merge code, culture, and creativity to build experiences that matter.
              </p>
            </motion.div>

            {/* Background */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-neon-green mb-4 flex items-center">
                <span className="w-8 h-0.5 bg-neon-green mr-3" />
                BACKGROUND
              </h3>
              <div className="space-y-6">
                {/* US Army */}
                <div className="border-l-2 border-neon-green/30 pl-4">
                  <h4 className="text-xl font-semibold text-text-primary mb-2">
                    🎖️ US Army (2018-2022)
                  </h4>
                  <p className="text-neon-green/80 mb-2">Signal Support Systems Specialist (25U)</p>
                  <ul className="text-text-secondary space-y-1 list-disc list-inside">
                    <li>Managed communications with 99.9% uptime</li>
                    <li>Led technical training initiatives</li>
                    <li>Established network security measures</li>
                  </ul>
                </div>

                {/* Hubbell */}
                <div className="border-l-2 border-lime-green/30 pl-4">
                  <h4 className="text-xl font-semibold text-text-primary mb-2">
                    🏭 Hubbell Incorporated (2023-2025)
                  </h4>
                  <p className="text-lime-green/80 mb-2">Production Lead</p>
                  <ul className="text-text-secondary space-y-1 list-disc list-inside">
                    <li>Reduced downtime by 35%</li>
                    <li>Increased production by 20%</li>
                    <li>Led daily operations and training</li>
                  </ul>
                </div>

                {/* Amazon */}
                <div className="border-l-2 border-gold-accent/30 pl-4">
                  <h4 className="text-xl font-semibold text-text-primary mb-2">
                    💻 Amazon SDE Intern (2025)
                  </h4>
                  <p className="text-gold-accent/80 mb-2">Software Development Engineer</p>
                  <ul className="text-text-secondary space-y-1 list-disc list-inside">
                    <li>Built scalable services with AWS</li>
                    <li>Collaborated in agile environment</li>
                    <li>Selected through Student Veteran Program</li>
                  </ul>
                </div>

                {/* Education */}
                <div className="border-l-2 border-amber/30 pl-4">
                  <h4 className="text-xl font-semibold text-text-primary mb-2">
                    🎓 Full Sail University
                  </h4>
                  <p className="text-amber/80">BS in Computer Science (AI) - In Progress</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-neon-green mb-8 text-center flex items-center justify-center">
            <span className="w-12 h-0.5 bg-neon-green mr-4" />
            SKILLS & EXPERTISE
            <span className="w-12 h-0.5 bg-neon-green ml-4" />
          </h3>

          {/* Skill Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card-bg border border-border-subtle rounded-lg p-6 hover:border-neon-green/50 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h4 className="text-xl font-bold text-neon-green group-hover:text-lime-green transition-colors">
                    {category.title}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-text-secondary text-sm flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-neon-green rounded-full mr-2 group-hover:animate-glow-pulse" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
