export default function Contact({ darkMode }) {
  return (
    <section
      id="contact"
      className={`py-20 px-6 ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2
          className={`text-4xl font-bold mb-8 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          İletişime Geç
        </h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Adınız"
            className={`w-full p-4 rounded-xl border focus:outline-none focus:ring-4 focus:ring-blue-500 ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
            }`}
          />
          <input
            type="email"
            placeholder="E-posta"
            className={`w-full p-4 rounded-xl border focus:outline-none focus:ring-4 focus:ring-blue-500 ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
            }`}
          />
          <textarea
            placeholder="Mesajınız"
            rows="5"
            className={`w-full p-4 rounded-xl border focus:outline-none focus:ring-4 focus:ring-blue-500 ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
            }`}
          ></textarea>
          <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            Gönder
          </button>
        </form>
      </div>
    </section>
  );
}
