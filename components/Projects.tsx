"use client";

import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const Projects = () => {
  // Projects data
  const projects: Project[] = [
    {
      id: "1",
      title: "Misfit Sanctuary Hub",
      description:
        "Full-stack community platform combining social features, AI-powered music/art discovery, and cultural showcase. Built for the misfits and unique creators.",
      technologies: ["Next.js", "React", "PostgreSQL", "AI/ML", "TypeScript"],
      featured: true,
    },
    {
      id: "2",
      title: "Veterano",
      description:
        "Bilingual job board for military veterans transitioning to tech. Features AI resume builder, skill translator, and veteran-friendly company profiles.",
      technologies: ["Next.js", "TypeScript", "AI Integration", "PostgreSQL"],
      featured: true,
    },
    {
      id: "3",
      title: "Plnderer's Studio",
      description:
        "AI-powered music production assistant with Caribbean/urban flavor. Generate lyrics, beat patterns, and collaborate remotely.",
      technologies: ["React", "Web Audio API", "AI Models", "Real-time Collab"],
      featured: true,
    },
    {
      id: "4",
      title: "OptiFlow",
      description:
        "Manufacturing workflow management system with real-time metrics, downtime tracking, and ROI calculator. Based on real production experience.",
      technologies: ["React", "D3.js", "Node.js", "Data Visualization"],
      featured: false,
    },
    {
      id: "5",
      title: "CultureCode",
      description:
        "Interactive archive celebrating Puerto Rican contributions to tech. Bilingual educational content with video interviews and timeline.",
      technologies: ["Next.js", "Sanity CMS", "Video Integration"],
      featured: false,
    },
    {
      id: "6",
      title: "NetGuard",
      description:
        "Interactive cybersecurity training platform with simulated network environments, gamified challenges, and progress tracking.",
      technologies: ["React", "Node.js", "WebSockets", "Docker"],
      featured: false,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-dark-bg">
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-neon-green mx-auto mb-6" />
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full-stack development,
            AI integration, and creative problem-solving
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-card-bg border border-border-subtle rounded-lg overflow-hidden hover:border-neon-green/50 transition-all duration-300"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-neon-green/20 border border-neon-green text-neon-green text-xs font-bold px-3 py-1 rounded-full animate-glow-pulse">
                    FEATURED
                  </span>
                </div>
              )}

              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-dark-bg to-card-bg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2 opacity-50">🚀</div>
                    <p className="text-text-secondary text-sm">Coming Soon</p>
                  </div>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-lime-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-xl font-bold text-text-primary group-hover:text-neon-green transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 border border-neon-green/30 text-neon-green/80 rounded-full hover:bg-neon-green/10 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 neon-border rounded-md text-neon-green text-center hover:bg-neon-green/10 transition-all duration-300 text-sm font-semibold"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 px-4 py-2 border border-border-subtle rounded-md text-text-secondary text-center cursor-not-allowed text-sm"
                    >
                      Coming Soon
                    </button>
                  )}

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 border border-border-subtle rounded-md text-text-secondary text-center hover:border-neon-green/50 hover:text-neon-green transition-all duration-300 text-sm font-semibold"
                    >
                      GitHub
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 px-4 py-2 border border-border-subtle rounded-md text-text-secondary/50 text-center cursor-not-allowed text-sm"
                    >
                      GitHub
                    </button>
                  )}
                </div>
              </div>

              {/* Glow Effect on Hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-green to-lime-green rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500 -z-10" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-text-secondary mb-4">
            More projects coming soon. Check back later!
          </p>
          <a
            href="https://github.com/zDarkbloodz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 neon-border rounded-lg text-neon-green hover:bg-neon-green/10 transition-all duration-300 font-semibold"
          >
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
