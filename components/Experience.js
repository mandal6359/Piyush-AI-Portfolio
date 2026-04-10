"use client";
import { motion } from "framer-motion";

const timeline = [
  {
    type: "education",
    title: "B.Tech / B.Sc in Computer Science / Data Science",
    org: "University",
    period: "2022 – Present",
    desc: "Studying core CS fundamentals, machine learning, statistics, and data engineering. Building real-world projects alongside coursework.",
    icon: "🎓",
    color: "cyan",
  },
  {
    type: "project",
    title: "EXECOS-AI — AI Execution System",
    org: "Personal Project",
    period: "Apr 2026",
    desc: "Building an AI-powered execution system using TypeScript and Next.js. Active development with 17 commits in April 2026.",
    icon: "🤖",
    color: "purple",
    badge: "Current",
  },
  {
    type: "project",
    title: "Fraud Detection ML System",
    org: "Personal Project",
    period: "2025",
    desc: "Designed and deployed a full ML pipeline for financial fraud detection using XGBoost, Random Forest, and FastAPI.",
    icon: "🛡️",
    color: "pink",
  },
  {
    type: "project",
    title: "Credit-Wise Loan Prediction",
    org: "Personal Project",
    period: "2025",
    desc: "AI-powered loan approval prediction system analyzing credit history, income, and risk factors.",
    icon: "💳",
    color: "green",
  },
  {
    type: "learning",
    title: "Cloud & ML Certifications",
    org: "Google Cloud, Coursera, IBM",
    period: "2023 – 2024",
    desc: "Completed multiple certifications in GCP, Machine Learning, Python for Data Science, and SQL.",
    icon: "📜",
    color: "yellow",
  },
];

const colorMap = {
  cyan: "border-cyan-400 text-cyan-400 bg-cyan-400/10",
  purple: "border-purple-400 text-purple-400 bg-purple-400/10",
  pink: "border-pink-400 text-pink-400 bg-pink-400/10",
  green: "border-green-400 text-green-400 bg-green-400/10",
  yellow: "border-yellow-400 text-yellow-400 bg-yellow-400/10",
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase">Journey</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 text-white">
            Experience & <span className="gradient-text">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-purple-400/30 to-transparent" />

          <div className="space-y-10">
            {timeline.map((item, i) => {
              const c = colorMap[item.color];
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 border-2 border-[#050510] z-10 mt-2" />

                  {/* Card */}
                  <div className={`ml-14 md:ml-0 md:w-5/12 ${isLeft ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"}`}>
                    <div className="bg-white/3 border border-white/10 rounded-2xl p-5 card-hover">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-xl p-2 rounded-lg border ${c}`}>{item.icon}</span>
                          <div>
                            <h3 className="text-white font-semibold text-sm leading-tight">{item.title}</h3>
                            <p className="text-gray-500 text-xs mt-0.5">{item.org}</p>
                          </div>
                        </div>
                        {item.badge && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-green-400/20 text-green-400 border border-green-400/30 flex-shrink-0">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                      <p className="text-gray-600 text-xs mt-3 font-mono">{item.period}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
