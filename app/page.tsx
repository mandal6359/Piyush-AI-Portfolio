import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import AIChat from "../components/AIChat";
import Scene3D from "../components/Scene3D";
import Loader from "../components/Loader";
import GithubStats from "../components/GithubStats";
import SkillRadar from "../components/SkillRadar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Loader>
      <main>
        <Navbar />
        <Scene3D />
        <Hero />
        <Projects />
        <Skills />
        <AIChat />
        <GithubStats />
        <SkillRadar />
        <Contact />
        <Footer />
      </main>
    </Loader>
  );
}