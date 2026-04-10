"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import portfolio from "../config/portfolio";

const stats = portfolio.stats;

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase">About Me</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 text-white">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - image + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-square max-w-sm mx-auto">
                <Image
                  src={portfolio.photo}
                  fill
                  className="object-cover"
                  alt={portfolio.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-lg">{portfolio.name}</p>
                  <p className="text-cyan-400 text-sm">{portfolio.title}</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center card-hover"
                >
                  <p className="text-2xl font-black gradient-text">{s.value}</p>
                  <p className="text-gray-400 text-sm mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm an <span className="text-cyan-400 font-semibold">AI/ML Developer</span> and
              Data Science enthusiast passionate about building systems that learn, adapt, and solve
              real-world problems at scale.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From fraud detection systems to credit risk models, I work across the full ML pipeline —
              data wrangling, model training, evaluation, and deployment. I love turning messy data
              into clean insights and production-ready APIs.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Currently exploring <span className="text-purple-400">LLMs</span>,{" "}
              <span className="text-pink-400">MLOps</span>, and{" "}
              <span className="text-cyan-400">cloud-native AI</span> on GCP. Always building,
              always learning.
            </p>

            {/* Quick info */}
            <div className="space-y-3 pt-4">
              {[
                { label: "Location", value: portfolio.location },
                { label: "Focus", value: portfolio.focus },
                { label: "GitHub", value: `@${portfolio.socials.githubUsername}` },
                { label: "Email", value: portfolio.socials.email },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-sm">
                  <span className="text-gray-600 w-20">{item.label}</span>
                  <span className="text-gray-300">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href={portfolio.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
              >
                GitHub Profile
              </a>
              <a
                href={portfolio.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
