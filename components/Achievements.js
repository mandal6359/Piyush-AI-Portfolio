"use client";
import { motion } from "framer-motion";
import portfolio from "../config/portfolio";

const certifications = portfolio.certifications.map((c) => ({
  ...c,
  credly: portfolio.socials.credly,
}));

const achievements = [
  {
    icon: "🏆",
    title: "ML Projects Deployed",
    desc: "Built and deployed 6+ production-ready ML models including fraud detection and loan prediction systems",
  },
  {
    icon: "🚀",
    title: "EXECOS-AI",
    desc: "Currently building an AI-powered execution system in TypeScript with active development",
  },
  {
    icon: "📈",
    title: "Data Science Pipeline",
    desc: "End-to-end ML pipelines from raw data ingestion to FastAPI deployment",
  },
  {
    icon: "🌐",
    title: "Full-Stack AI Apps",
    desc: "Combining React/Next.js frontends with Python ML backends for complete AI applications",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase">Recognition</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 text-white">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-8 text-center">
            Verified Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <motion.a
                key={cert.title}
                href={cert.credly}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group bg-white/3 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className={`text-2xl p-3 rounded-xl bg-gradient-to-br ${cert.color} bg-opacity-20 flex-shrink-0`}>
                    {cert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-sm leading-tight mb-1 group-hover:text-cyan-400 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-gray-500 text-xs">{cert.issuer}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-gray-600">{cert.year}</span>
                      <span className="text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        View on Credly →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* View all on Credly */}
            <motion.a
              href={portfolio.socials.credly}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="border border-dashed border-white/20 rounded-2xl p-5 flex flex-col items-center justify-center gap-2 hover:border-cyan-400/50 transition-all group"
            >
              <span className="text-3xl">🏅</span>
              <p className="text-gray-400 text-sm group-hover:text-cyan-400 transition-colors">
                View all badges on Credly
              </p>
              <span className="text-xs text-gray-600">→</span>
            </motion.a>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-8 text-center">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 bg-white/3 border border-white/10 rounded-2xl p-5 card-hover"
              >
                <span className="text-3xl flex-shrink-0">{a.icon}</span>
                <div>
                  <h4 className="text-white font-semibold mb-1">{a.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
