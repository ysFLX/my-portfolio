import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";

export default function Home({ darkMode }) {
  const navigate = useNavigate();

  return (
    <div className="pt-28">
      <Hero darkMode={darkMode} onProjectsClick={() => navigate("/projects")} />
      <div
        className={`max-w-4xl mx-auto px-6 py-16 text-center ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        <h3 className="text-2xl font-semibold mb-4">Kısa Tanıtım</h3>
        <p className="mb-6">
          Buradan hakkımda kısa bir bilgi alabilir ve ziyaretçileri diğer
          sayfalara yönlendirebilirsiniz.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/about")}
            className="px-6 py-3 rounded-md border hover:bg-gray-100 transition"
          >
            Hakkımda
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white"
          >
            İletişim
          </button>
        </div>
      </div>
    </div>
  );
}
