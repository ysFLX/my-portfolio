// ...existing code...
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
/* mevcut component dosyalarını direkt kullan */
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <div
        className={
          darkMode
            ? "bg-gray-900 text-gray-100 min-h-screen"
            : "bg-white text-gray-900 min-h-screen"
        }
      >
        <Navbar darkMode={darkMode} toggleDark={() => setDarkMode((s) => !s)} />
        <main className="pt-28">
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/about" element={<About darkMode={darkMode} />} />
            <Route
              path="/projects"
              element={<Projects darkMode={darkMode} />}
            />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
// ...existing code...
