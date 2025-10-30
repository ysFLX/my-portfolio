import React from "react";
import About from "../components/About";

export default function AboutPage({ darkMode }) {
  return (
    <div className="pt-28">
      {" "}
      {/* navbar sabit olduğu için padding-top */}
      <About darkMode={darkMode} />
    </div>
  );
}
