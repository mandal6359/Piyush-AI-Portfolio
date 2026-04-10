"use client";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    icon: "💻",
    color: "cyan",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "R", level: 70 },
      { name: "TypeScript", level: 65 },
    ],
  },
  {
    category: "ML / AI",
    icon: "🧠",
    color: "purple",
    skills: [
      { name: "Scikit-Learn", level: 88 },
      { name: "XGBoost", level: 85 },
      { name: "PyTorch", level: 72 },
      { name: "Pandas / NumPy", level: 92 },
    ],
  },
  {
    category: "Data & BI",
    icon: "📊",
    color: "pink",
    skills: [
      { name: "Power BI", level: 80 },
      { name: "Matplotlib", level: 85 },
      { name: "Seaborn", level: 82 },
      { name: "Chart.js", level: 70 },
    ],
  },
  {
    category: "Web & Cloud",
    icon: "☁️",
    color: "green",
    skills: [
      { name: "React / Next.js", level: 75 },
      { name: "FastAPI / Flask", level: 80 },
      { name: "GCP", level: 68 },
      { name: "Streamlit", level: 85 },
    ],
  },
];

const colorMap = {
  cyan: { bar: "bg-cyan-400", text: "text-cyan-400", border: "border-cyan-400/30", bg: "bg-cyan-400/10" },
  purple: { bar: "bg-purple-400", text: "text-purple-400", border: "border-purple-400/30", bg: "bg-purple-400/10" },
  pink: { bar: "bg-pink-400", text: "text-pink-400", border: "border-pink-400/30", bg: "bg-pink-400/10" },
  green: { bar: "bg-green-400", text: "text-green-400", border: "border-green-400/30", bg: "bg-green-400/10" },
};

const tools = [
  "Python", "Jupyter", "VS Code", "Git", "GitHub", "FastAPI",
  "Streamlit", "Power BI", "GCP", "Docker", "Pandas", "NumPy",
  "Scikit-Learn", "XGBoost", "PyTorch", "React", "Next.js", "SQL",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 text-white">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        {/* Skill groups with progress bars */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillGroups.map((group, gi) => {
            const c = colorMap[group.color];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.1 }}
                className="bg-white/3 border border-white/10 rounded-2xl p-6 card-hover"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className={`text-2xl p-2 rounded-lg ${c.bg} ${c.border} border`}>
                    {group.icon}
                  </span>
                  <h3 className={`font-bold text-lg ${c.text}`}>{group.category}</h3>
                </div>

                <div className="space-y-4">
                  {group.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className={`${c.text} font-mono`}>{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: si * 0.1, ease: "easeOut" }}
                          className={`h-full ${c.bar} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tools cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm mb-6 uppercase tracking-widest">Tools & Ecosystem</p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.1, borderColor: "#00f5ff" }}
                className="px-4 py-2 rounded-lg border border-white/10 text-gray-400 text-sm bg-white/3 cursor-default transition-colors hover:text-cyan-400"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
