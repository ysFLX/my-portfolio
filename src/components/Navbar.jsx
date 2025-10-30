import React from "react";

export default function Navbar({ onNavigate, darkMode, toggleDark }) {
  return (
    <nav
      className={`fixed w-full z-30 top-0 backdrop-blur bg-white/60 ${
        darkMode ? "bg-gray-900/60" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => onNavigate("home")}
            className="font-extrabold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            ysFLX
          </button>
          <span
            className={`hidden md:inline ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            React + Tailwind portfolio
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => onNavigate("about")}
            className="hover:underline"
          >
            About
          </button>
          <button
            onClick={() => onNavigate("projects")}
            className="hover:underline"
          >
            Projects
          </button>
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="px-3 py-1 rounded-md border"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>

        <div className="md:hidden">
          <select
            onChange={(e) => onNavigate(e.target.value)}
            className="bg-transparent"
          >
            <option value="home">Home</option>
            <option value="about">About</option>
            <option value="projects">Projects</option>
          </select>
        </div>
      </div>
    </nav>
  );
}
