"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import portfolio from "../config/portfolio";

const roles = portfolio.roles;

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let i = typing ? 0 : current.length;
    const interval = setInterval(() => {
      if (typing) {
        setDisplayed(current.slice(0, i + 1));
        i++;
        if (i > current.length) {
          clearInterval(interval);
          setTimeout(() => setTyping(false), 1800);
        }
      } else {
        setDisplayed(current.slice(0, i - 1));
        i--;
        if (i < 0) {
          clearInterval(interval);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTyping(true);
        }
      }
    }, typing ? 80 : 40);
    return () => clearInterval(interval);
  }, [roleIndex, typing]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative inline-block mb-8 float"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-md opacity-60 scale-110" />
          <Image
            src={portfolio.photo}
            width={160}
            height={160}
            className="relative rounded-full border-2 border-cyan-400/50 object-cover"
            alt={portfolio.name}
          />
          <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-[#050510] pulse-glow" />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 text-sm mb-6"
        >
          <span className="w-2 h-2 bg-cyan-400 rounded-full pulse-glow" />
          {portfolio.available ? "Open to opportunities" : "Currently unavailable"}
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-5xl md:text-7xl font-black mb-4 tracking-tight"
        >
          <span className="text-white">Piyush Prabhakar </span>
          <span className="gradient-text text-glow">Mandal</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-cyan-400 font-mono mb-6 h-8"
        >
          {displayed}
          <span className="cursor text-cyan-400">|</span>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mb-10"
        >
          Building intelligent ML systems, data dashboards and AI-powered applications
          that solve real-world problems. Passionate about turning data into decisions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-all glow-cyan"
          >
            View My Work
          </a>
          <a
            href={portfolio.resume}
            download
            className="px-8 py-3 rounded-xl border border-cyan-400/50 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-xl border border-white/10 text-gray-300 font-semibold hover:border-white/30 transition-all"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex justify-center gap-6"
        >
          {[
            { label: "GitHub", href: portfolio.socials.github, icon: "⌥" },
            { label: "LinkedIn", href: portfolio.socials.linkedin, icon: "in" },
            { label: "Credly", href: portfolio.socials.credly, icon: "🏅" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-400 transition-colors"
            >
              <span>{s.icon}</span>
              {s.label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}
