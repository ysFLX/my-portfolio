import React, { Fragment } from "react";

const sample = [
  {
    title: "Proje 1",
    desc: "Kısa açıklama, React + Tailwind projesi. Modern UI ve responsive düzen içerir.",
    image: "https://via.placeholder.com/600x360?text=Proje+1",
    tags: ["React", "Tailwind", "Responsive"],
    live: "#",
    repo: "#",
  },
  {
    title: "Proje 2",
    desc: "Vite tabanlı hızlı başlangıç, API entegrasyonu ve hata yönetimi.",
    image: "https://via.placeholder.com/600x360?text=Proje+2",
    tags: ["Vite", "API", "Axios"],
    live: "#",
    repo: "#",
  },
  {
    title: "Proje 3",
    desc: "Performans odaklı, kod ayırma ve önbellekleme çözümleriyle.",
    image: "https://via.placeholder.com/600x360?text=Proje+3",
    tags: ["Perf", "Code-splitting", "Caching"],
    live: "#",
    repo: "#",
  },
];

export default function Projects({ darkMode }) {
  const sectionBg = darkMode
    ? "bg-gray-900 text-gray-100"
    : "bg-gray-50 text-gray-900";
  const cardBg = darkMode
    ? "bg-gray-800 border-gray-700"
    : "bg-white border-gray-200";

  return (
    <section id="projects" className={`py-20 px-6 ${sectionBg}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold">Projeler</h2>
          <p className="mt-2 text-sm md:text-base text-gray-400">
            Yakın zamanda üzerinde çalıştığım bazı projeler — detaylarına bak.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sample.map((p) => (
            <article
              key={p.title}
              className={`rounded-xl overflow-hidden shadow-sm transform transition hover:scale-[1.02] hover:shadow-lg border ${cardBg}`}
              aria-labelledby={`${p.title}-title`}
            >
              <div className="relative h-44 sm:h-48 md:h-40 lg:h-44 overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} görseli`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 ${
                    darkMode
                      ? "bg-gradient-to-t from-black/40 to-transparent"
                      : "bg-gradient-to-t from-black/25 to-transparent"
                  }`}
                />
              </div>

              <div className="p-5">
                <h3
                  id={`${p.title}-title`}
                  className="text-lg font-semibold mb-1"
                >
                  {p.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md shadow-sm"
                    aria-label={`Canlı önizleme: ${p.title}`}
                  >
                    Canlıyı Gör
                    <span aria-hidden>↗</span>
                  </a>

                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-medium px-3 py-2 rounded-md border ${
                      darkMode
                        ? "border-gray-600 text-gray-200 hover:bg-gray-700"
                        : "border-gray-200 text-gray-700 hover:bg-gray-100"
                    }`}
                    aria-label={`Kaynak kodu: ${p.title}`}
                  >
                    Repo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
