// ...existing code...
import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ darkMode, toggleDark }) {
  const active = "underline font-semibold";
  const base = "px-3 py-1 rounded-md";
  return (
    <nav
      className={`fixed w-full z-30 top-0 backdrop-blur bg-white/60 ${
        darkMode ? "bg-gray-900/60" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <NavLink
            to="/"
            className="font-extrabold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            ysFLX
          </NavLink>
          <span
            className={`hidden md:inline ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            React + Tailwind
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) => `${base} ${isActive ? active : ""}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `${base} ${isActive ? active : ""}`}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => `${base} ${isActive ? active : ""}`}
          >
            Projects
          </NavLink>
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
            onChange={(e) => (window.location.href = e.target.value)}
            className="bg-transparent"
          >
            <option value="/">Home</option>
            <option value="/about">About</option>
            <option value="/projects">Projects</option>
          </select>
        </div>
      </div>
    </nav>
  );
}
// ...existing code...
