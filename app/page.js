import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Scene3D from "../components/Scene3D";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import GithubStats from "../components/GithubStats";
import AIChat from "../components/AIChat";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Loader>
      <Scene3D />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Achievements />
        <GithubStats />
        <AIChat />
        <Contact />
      </main>
      <Footer />
    </Loader>
  );
}
