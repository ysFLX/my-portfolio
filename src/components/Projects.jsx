import React from "react";
import Projects from "../components/Projects";

export default function ProjectsPage({ darkMode }) {
  return (
    <div className="pt-28">
      <Projects darkMode={darkMode} />
    </div>
  );
}
