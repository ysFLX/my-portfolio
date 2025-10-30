import React from "react";

const sample = [
  {
    title: "Project A",
    desc: "Kısa açıklama, React + Tailwind projesi.",
    link: "#",
  },
  {
    title: "Project B",
    desc: "Kısa açıklama, Vite + API entegrasyonu.",
    link: "#",
  },
  { title: "Project C", desc: "Kısa açıklama, performans odaklı.", link: "#" },
];

export default function Projects({ darkMode }) {
  return (
    <section
      id="projects"
      className={`py-20 px-6 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projeler</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sample.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className={`block p-6 rounded-lg shadow hover:scale-105 transform transition ${
                darkMode ? "bg-gray-700" : "bg-white"
              }`}
            >
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <p className="text-sm mb-4">{p.desc}</p>
              <span className="text-xs font-medium text-blue-500">
                Detaylar →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
