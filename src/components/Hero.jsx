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
        <h1 className="text-5xl md:text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
          Merhaba, Ben ysFLX!
        </h1>
        <p
          className={`text-xl md:text-2xl mb-8 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          React ve Tailwind CSS ile modern web uygulamaları geliştiriyorum.
          Projelerime göz atmak için aşağıdaki butona tıklayın.
        </p>
        <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          Projelerime Bak
        </button>
      </div>
    </section>
  );
}
