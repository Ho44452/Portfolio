import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="noise-overlay relative min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
