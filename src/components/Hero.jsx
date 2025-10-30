// ...existing code...
export default function Hero({ darkMode, onProjectsClick }) {
  return (
    <section
      id="home"
      className={`pt-28 pb-20 px-6 text-center ${
        darkMode
          ? "bg-gray-800"
          : "bg-gradient-to-br from-blue-50 to-purple-100"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 drop-shadow-lg">
          Merhaba, Ben YUSUF!
        </h1>
        <p
          className={`text-xl md:text-2xl mb-8 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          React ve Tailwind CSS ile modern web uygulamaları geliştiriyorum.
          Projelerime göz atmak için aşağıdaki butona tıklayın.
        </p>
        <div className="flex justify-center gap-4">
          <button
            type="button"
            aria-label="Projelerime git"
            onClick={onProjectsClick}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Projelerime Bak
          </button>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("about");
              el?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className={`px-6 py-4 rounded-full border ${
              darkMode
                ? "border-gray-600 text-gray-200"
                : "border-gray-200 text-gray-700"
            }`}
          >
            Hakkında
          </a>
        </div>
      </div>
    </section>
  );
}
// ...existing code...
