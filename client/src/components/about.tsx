export default function About() {
  const educationData = [
    {
      degree: "Bachelor of Computer Science and Engineering",
      institution: "Aarupadai Veedu Institute of Technology",
      period: "2020 - 2024",
      grade: "CGPA: 8.9",
      isPrimary: true
    },
    {
      degree: "Higher Secondary (Science Stream)",
      institution: "Janta Koshi College",
      period: "2018 - 2020",
      grade: "70%",
      isPrimary: false
    },
    {
      degree: "Secondary School",
      institution: "+2 Onkar High School",
      period: "2017 - 2018",
      grade: "60.1%",
      isPrimary: false
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A passionate data enthusiast with a strong foundation in computer science and hands-on experience in machine learning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Education</h3>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div key={index} className={`border-l-4 pl-6 ${edu.isPrimary ? 'border-primary' : 'border-gray-300'}`}>
                  <h4 className="text-lg font-semibold text-gray-900">{edu.degree}</h4>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-gray-500">{edu.period} | {edu.grade}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Objective</h3>
            <p className="text-gray-700 mb-6">
              Recent Computer Science graduate skilled in database management, data analytics, and machine learning. 
              Passionate about deriving insights from data to drive business impact. Seeking a Data Analyst role to 
              apply analytical skills in a dynamic environment.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <i className="fas fa-graduation-cap text-2xl text-primary mb-2"></i>
                <p className="font-semibold">8.9 CGPA</p>
                <p className="text-sm text-gray-600">Academic Excellence</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <i className="fas fa-certificate text-2xl text-primary mb-2"></i>
                <p className="font-semibold">8+ Certifications</p>
                <p className="text-sm text-gray-600">Continuous Learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
