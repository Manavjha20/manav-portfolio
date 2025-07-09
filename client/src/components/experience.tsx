export default function Experience() {
  const experienceData = {
    title: "Machine Learning Intern",
    company: "NIT Surathkal",
    period: "Internship Period",
    achievements: [
      "Built a YOLO-based vehicle detection system to classify and count vehicles in real-time from CCTV footage.",
      "Developed Python scripts for video processing and object tracking, improving traffic analysis efficiency.",
      "Analyzed traffic patterns to provide insights for better campus management and safety."
    ],
    technologies: ["YOLO", "Python", "Computer Vision", "Object Detection", "Video Processing"]
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional experience in machine learning and data analysis.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-sm border border-blue-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{experienceData.title}</h3>
                <p className="text-primary font-medium">{experienceData.company}</p>
              </div>
              <div className="text-gray-500 mt-2 md:mt-0">
                <i className="fas fa-calendar-alt mr-2"></i>{experienceData.period}
              </div>
            </div>
            
            <div className="space-y-4">
              {experienceData.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <i className="fas fa-chevron-right text-primary mt-1 mr-3"></i>
                  <p className="text-gray-700">{achievement}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex flex-wrap gap-2">
              {experienceData.technologies.map((tech, index) => (
                <span key={index} className={`px-3 py-1 rounded-full text-sm ${
                  index === 0 ? 'bg-blue-100 text-blue-700' :
                  index === 1 ? 'bg-green-100 text-green-700' :
                  index === 2 ? 'bg-purple-100 text-purple-700' :
                  index === 3 ? 'bg-orange-100 text-orange-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
