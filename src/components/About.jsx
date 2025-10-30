export default function About({ darkMode }) {
  return (
    <section
      id="about"
      className={`py-20 px-6 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className={`text-4xl font-bold mb-8 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Hakkımda
        </h2>
        <p
          className={`text-lg leading-relaxed max-w-2xl mx-auto ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          React ve Tailwind öğreniyorum. Hedefim:{" "}
          <strong>3 ayda freelance alabilecek seviyeye gelmek</strong>. Her gün
          kod yazıyorum, projeler yapıyorum. Sen de yapabilirsin!
        </p>
      </div>
    </section>
  );
}
