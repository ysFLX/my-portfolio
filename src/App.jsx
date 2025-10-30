import React, { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  const [darkMode, setDarkMode] = useState(false);

  const scrollTo = (ref) =>
    ref?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-gray-100 min-h-screen"
          : "bg-white text-gray-900 min-h-screen"
      }
    >
      <Navbar
        onNavigate={(section) => {
          if (section === "home") scrollTo(homeRef);
          if (section === "about") scrollTo(aboutRef);
          if (section === "projects") scrollTo(projectsRef);
        }}
        darkMode={darkMode}
        toggleDark={() => setDarkMode((s) => !s)}
      />
      <main>
        <section ref={homeRef}>
          <Hero
            darkMode={darkMode}
            onProjectsClick={() => scrollTo(projectsRef)}
          />
        </section>
        <section ref={aboutRef}>
          <About darkMode={darkMode} />
        </section>
        <section ref={projectsRef}>
          <Projects darkMode={darkMode} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
