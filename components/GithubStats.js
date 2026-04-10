"use client";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import portfolio from "../config/portfolio";

const repos = [
  {
    name: "fraud-detection-ml",
    desc: "ML fraud detection with XGBoost & FastAPI",
    lang: "Jupyter Notebook",
    langColor: "#DA5B0B",
    stars: 0,
    forks: 0,
    url: "https://github.com/mandal6359/fraud-detection-ml",
  },
  {
    name: "EXECOS-AI",
    desc: "AI-powered execution system (active)",
    lang: "TypeScript",
    langColor: "#3178c6",
    stars: 0,
    forks: 0,
    url: "https://github.com/mandal6359/EXECOS-AI",
    badge: "Active",
  },
  {
    name: "credit-wise-loan-system",
    desc: "AI loan approval prediction system",
    lang: "Jupyter Notebook",
    langColor: "#DA5B0B",
    stars: 0,
    forks: 0,
    url: "https://github.com/mandal6359/credit-wise-loan-system",
  },
  {
    name: "Car_Price_Prediction_Model",
    desc: "ML model for used car price prediction",
    lang: "Jupyter Notebook",
    langColor: "#DA5B0B",
    stars: 0,
    forks: 0,
    url: "https://github.com/mandal6359/Car_Price_Prediction_Model",
  },
  {
    name: "Python_File_Mangment_System",
    desc: "Python-based file management CLI tool",
    lang: "Python",
    langColor: "#3572A5",
    stars: 0,
    forks: 0,
    url: "https://github.com/mandal6359/Python_File_Mangment_System",
  },
  {
    name: "Piyush-AI-Portfolio",
    desc: "This portfolio — built with Next.js & AI",
    lang: "JavaScript",
    langColor: "#f1e05a",
    stars: 0,
    forks: 0,
    url: "https://github.com/mandal6359/Piyush-AI-Portfolio",
  },
];

const githubStats = [
  { label: "Repositories", value: "7", icon: "📦" },
  { label: "Contributions", value: "37+", icon: "📈" },
  { label: "Languages", value: "5+", icon: "💻" },
  { label: "Active Projects", value: "2", icon: "🚀" },
];

export default function GithubStats() {
  return (
    <section id="github" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase">Open Source</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 text-white">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {githubStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/3 border border-white/10 rounded-xl p-4 text-center card-hover"
            >
              <span className="text-2xl">{s.icon}</span>
              <p className="text-2xl font-black gradient-text mt-2">{s.value}</p>
              <p className="text-gray-500 text-xs mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Contribution calendar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/3 border border-white/10 rounded-2xl p-6 mb-12 overflow-x-auto"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-semibold">Contribution Graph</h3>
            <a
              href={portfolio.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cyan-400 hover:underline"
            >
              @{portfolio.socials.githubUsername}
            </a>
          </div>
          <div className="flex justify-center">
            <GitHubCalendar
              username={portfolio.socials.githubUsername}
              colorScheme="dark"
              theme={{
                dark: ["#0d1117", "#0e4429", "#006d32", "#26a641", "#39d353"],
              }}
              fontSize={12}
            />
          </div>
        </motion.div>

        {/* Repo cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group bg-white/3 border border-white/10 rounded-xl p-4 hover:border-cyan-400/30 transition-all card-hover"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors truncate">
                    {repo.name}
                  </span>
                </div>
                {repo.badge && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-400/20 text-green-400 border border-green-400/30 flex-shrink-0">
                    {repo.badge}
                  </span>
                )}
              </div>
              <p className="text-gray-500 text-xs mb-4 leading-relaxed">{repo.desc}</p>
              <div className="flex items-center gap-4 text-xs text-gray-600">
                <span className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.langColor }}
                  />
                  {repo.lang}
                </span>
                <span>⭐ {repo.stars}</span>
                <span>🍴 {repo.forks}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
