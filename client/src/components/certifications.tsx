export default function Certifications() {
  const certifications = [
    {
      title: "Data Analytics and Visualization Job Simulation",
      provider: "Accenture North America - Forage",
      icon: "fas fa-certificate",
      color: "blue"
    },
    {
      title: "Introduction to Artificial Intelligence",
      provider: "Infosys",
      icon: "fas fa-robot",
      color: "green"
    },
    {
      title: "Introduction to Natural Language Processing",
      provider: "Infosys",
      icon: "fas fa-language",
      color: "purple"
    },
    {
      title: "Introduction to Data Science",
      provider: "Simplilearn",
      icon: "fas fa-chart-bar",
      color: "orange"
    },
    {
      title: "Fundamentals of Deep Learning",
      provider: "Nvidia",
      icon: "fas fa-brain",
      color: "red"
    },
    {
      title: "Basic Python & SQL Certification",
      provider: "HackerRank",
      icon: "fas fa-code",
      color: "yellow"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Continuous learning and professional development in data science and machine learning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className={`bg-gradient-to-br from-${cert.color}-50 to-${cert.color}-100 p-6 rounded-xl`}>
              <i className={`${cert.icon} text-${cert.color}-600 text-2xl mb-3`}></i>
              <h3 className="font-semibold text-gray-900 mb-2">{cert.title}</h3>
              <p className="text-gray-600 text-sm">{cert.provider}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
