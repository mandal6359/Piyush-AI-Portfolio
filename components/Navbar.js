"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md text-white flex justify-center gap-10 py-4 z-50 border-b border-cyan-400">
      
      <a href="#hero" className="hover:text-cyan-400">Home</a>
      <a href="#projects" className="hover:text-cyan-400">Projects</a>
      <a href="#skills" className="hover:text-cyan-400">Skills</a>
      <a href="#ai" className="hover:text-cyan-400">AI Chat</a>

    </nav>
  );
}