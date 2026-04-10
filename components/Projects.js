"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portfolio from "../config/portfolio";

const projects = portfolio.projects;
const categories = ["All", "ML", "AI", "Data", "Tools"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-cyan-400/30" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Real-world ML systems and AI applications built from scratch
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? "bg-cyan-400 text-black"
                  : "border border-white/10 text-gray-400 hover:border-cyan-400/50 hover:text-cyan-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
                className="group relative bg-white/3 border border-white/10 rounded-2xl overflow-hidden card-hover"
              >
                {/* Top gradient bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${p.color}`} />

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{p.icon}</span>
                      <div>
                        <h3 className="text-white font-bold text-lg leading-tight">{p.title}</h3>
                        {p.badge && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-400 border border-cyan-400/30">
                            {p.badge}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-500 border border-white/10">
                      {p.category}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{p.description}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-400 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors group/link"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View on GitHub
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href={`${portfolio.socials.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
          >
            View all repositories on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
