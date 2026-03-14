"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen bg-black text-white">
      
      <Image
        src="/piyush.jpeg"
        width={180}
        height={180}
        className="rounded-full border-4 border-cyan-400"
        alt="Piyush Mandal"
      />

        <motion.h1
        initial={{ opacity:0, y:50 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
        >
        Piyush Mandal
        </motion.h1>

      <p className="text-xl mt-4 text-gray-300">
        AI / ML Developer • Data Scientist • Cloud Enthusiast
      </p>

      <p className="max-w-xl mt-4 text-gray-400">
        Building machine learning systems, data dashboards and AI-powered
        applications solving real-world problems.
      </p>

    </section>
  );
}