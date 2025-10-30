import PropTypes from "prop-types";

const projects = [
  {
    title: "Proje 1",
    description: "Modern web application built with React and Tailwind CSS.",
    link: "#",
    tags: ["React", "Tailwind CSS", "Frontend"],
  },
  {
    title: "Proje 2",
    description:
      "Real-time data visualization with Vite and RESTful API integration.",
    link: "#",
    tags: ["Vite", "API", "Data Visualization"],
  },
  {
    title: "Proje 3",
    description:
      "High-performance web application with optimized user experience.",
    link: "#",
    tags: ["Performance", "UX", "Optimization"],
  },
];

export default function Projects({ darkMode = false }) {
  return (
    <section
      id="projects"
      className={`py-24 px-6 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl font-bold mb-12 text-center ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              aria-label={`Open ${project.title}`}
              className={`group block p-8 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-3 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {project.title}
              </h3>
              <p
                className={`text-sm mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-3 py-1 rounded-full ${
                      darkMode
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center text-sm font-medium text-blue-500 group-hover:text-blue-600">
                View Project
                <svg
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

Projects.propTypes = {
  darkMode: PropTypes.bool,
};
