export default function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className={`py-20 px-6 text-center ${
        darkMode
          ? "bg-gray-800"
          : "bg-gradient-to-br from-blue-50 to-purple-100"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* RESİM EKLE */}
        <img
          src="/ysflx.jpg"
          alt="ysFLX Profile"
          className="w-64 h-64 md:w-64 md:h-64 rounded-full mx-auto mb-8 shadow-2xl border-4 border-white dark:border-gray-800"
        />

        <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 drop-shadow-2xl tracking-tight">
          Merhaba, Ben ysFLX!
        </h1>
        <p
          className={`text-xl md:text-2xl mb-8 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          React + Tailwind ile modern web siteleri yapıyorum.
        </p>
        <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          Projelerime Bak
        </button>
      </div>
    </section>
  );
}
