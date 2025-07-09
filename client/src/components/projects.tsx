export default function Projects() {
  const projects = [
    {
      title: "Windows-Based Virtual Assistant",
      description: "Developed a voice-activated virtual assistant for Windows, enabling hands-free control of applications with advanced scripting and system integration capabilities.",
      icon: "fas fa-microphone-alt",
      gradient: "from-blue-400 to-purple-500",
      features: [
        "Voice-activated control system",
        "System integration and automation",
        "Enhanced user productivity"
      ],
      technologies: ["Python", "Speech Recognition", "Windows API"],
      techColors: ["blue", "green", "purple"]
    },
    {
      title: "Exploratory Data Analysis (EDA)",
      description: "Comprehensive data analysis project involving data cleaning, transformation, and visualization to uncover customer insights and improve marketing strategies.",
      icon: "fas fa-chart-line",
      gradient: "from-green-400 to-blue-500",
      features: [
        "Data cleaning and transformation",
        "Customer segmentation analysis",
        "Marketing strategy insights"
      ],
      technologies: ["Pandas", "Matplotlib", "Seaborn", "Data Visualization"],
      techColors: ["orange", "red", "teal", "yellow"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my work in machine learning, data analysis, and software development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              {/* Project image placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <i className={`${project.icon} text-white text-4xl`}></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="space-y-2 mb-4">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={`bg-${project.techColors[techIndex]}-100 text-${project.techColors[techIndex]}-700 px-2 py-1 rounded text-sm`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a href="#" className="text-primary hover:text-secondary">
                    <i className="fab fa-github mr-1"></i>View Code
                  </a>
                  <a href="#" className="text-primary hover:text-secondary">
                    <i className="fas fa-external-link-alt mr-1"></i>Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
