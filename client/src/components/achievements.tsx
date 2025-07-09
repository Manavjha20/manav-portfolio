export default function Achievements() {
  const achievements = [
    {
      title: "Letter of Recommendation",
      organization: "NIT Surathkal",
      icon: "fas fa-trophy",
      color: "yellow",
      description: "Received a letter of recommendation from NIT Surathkal for outstanding contributions to ML-based traffic monitoring system development."
    },
    {
      title: "HackerRank Certifications",
      organization: "Professional Skills Validation",
      icon: "fas fa-medal",
      color: "blue",
      description: "Earned Basic Python and Basic SQL Certifications from HackerRank, demonstrating proficiency in core programming and database skills."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognition for outstanding performance and contributions to the field.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <i className={`${achievement.icon} text-${achievement.color}-500 text-3xl mr-4`}></i>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.organization}</p>
                </div>
              </div>
              <p className="text-gray-700">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
