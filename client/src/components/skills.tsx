export default function Skills() {
  const technicalSkills = [
    { name: "Python", color: "blue" },
    { name: "SQL", color: "green" },
    { name: "NumPy", color: "purple" },
    { name: "Pandas", color: "orange" },
    { name: "Matplotlib", color: "red" },
    { name: "Seaborn", color: "teal" },
    { name: "Scikit-Learn", color: "indigo" },
    { name: "Jupyter", color: "yellow" },
    { name: "Power BI", color: "pink" },
    { name: "Tableau", color: "cyan" },
    { name: "Excel", color: "gray" },
    { name: "Git/GitHub", color: "slate" }
  ];

  const softSkills = [
    { name: "Critical Thinking", rating: 5 },
    { name: "Adaptability", rating: 4 },
    { name: "Communication", rating: 4 }
  ];

  const expertise = [
    "Data Analytics & Visualization",
    "Machine Learning & AI",
    "Database Management",
    "Statistical Analysis"
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i key={i} className={`fas fa-star ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}></i>
    ));
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for data analysis, machine learning, and software development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              <i className="fas fa-code text-primary mr-2"></i>Programming & Tools
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {technicalSkills.map((skill, index) => (
                <div key={index} className={`bg-${skill.color}-50 text-${skill.color}-700 px-3 py-2 rounded-lg text-sm font-medium`}>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              <i className="fas fa-lightbulb text-primary mr-2"></i>Soft Skills
            </h3>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-700">{skill.name}</span>
                  <div className="flex space-x-1">
                    {renderStars(skill.rating)}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Areas of Expertise</h4>
              <div className="space-y-2">
                {expertise.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
