export default function Projects() {
  const projects = [
    {
      title: "Todo App",
      desc: "State ile todo ekle/sil",
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Hava Durumu",
      desc: "API ile hava çek",
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "E-Ticaret",
      desc: "Sepet sistemi",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Projelerim
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`h-32 bg-gradient-to-r ${p.color} rounded-xl mb-4`}
              ></div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {p.title}
              </h3>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
