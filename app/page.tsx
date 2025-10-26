"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-pure-black">
      <Navigation />
      <Hero />
      
      {/* About Section - Coming Soon */}
      <section id="about" className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold gradient-text">About Section</h2>
          <p className="text-text-secondary mt-4">Coming soon...</p>
        </motion.div>
      </section>

      {/* Projects Section - Coming Soon */}
      <section id="projects" className="min-h-screen flex items-center justify-center bg-dark-bg">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold gradient-text">Projects Section</h2>
          <p className="text-text-secondary mt-4">Coming soon...</p>
        </motion.div>
      </section>

      {/* Experience Section - Coming Soon */}
      <section id="experience" className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold gradient-text">Experience Section</h2>
          <p className="text-text-secondary mt-4">Coming soon...</p>
        </motion.div>
      </section>

      {/* Contact Section - Coming Soon */}
      <section id="contact" className="min-h-screen flex items-center justify-center bg-dark-bg">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold gradient-text">Contact Section</h2>
          <p className="text-text-secondary mt-4">Coming soon...</p>
        </motion.div>
      </section>
    </main>
  );
}
