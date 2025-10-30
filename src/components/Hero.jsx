import React from "react";
import Hero from "../components/Hero";

export default function Home({ darkMode }) {
  // Hero bileşeni onProjectsClick prop'u bekliyor, router ile linklemek için:
  const goToProjects = () => (window.location.href = "/projects");
  return (
    <div>
      <Hero darkMode={darkMode} onProjectsClick={goToProjects} />
    </div>
  );
}
