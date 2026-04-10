import portfolio from "../config/portfolio";

export default function Footer() {
  const { socials, name, title } = portfolio;
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-white font-bold gradient-text text-lg">PM.</p>
          <p className="text-gray-600 text-xs mt-1">{title}</p>
        </div>

        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} {name}. Built with Next.js & ❤️
        </p>

        <div className="flex gap-6 text-sm text-gray-600">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            GitHub
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            LinkedIn
          </a>
          <a href={socials.credly} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            Credly
          </a>
        </div>
      </div>
    </footer>
  );
}
