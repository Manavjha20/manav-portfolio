export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-8">
          {/* Professional headshot placeholder */}
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
            <i className="fas fa-user text-4xl md:text-5xl text-gray-400"></i>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Manav Kumar Jha
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Data Analyst & Machine Learning Engineer
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Recent Computer Science graduate skilled in database management, data analytics, and machine learning. 
            Passionate about deriving insights from data to drive business impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors"
            >
              Get In Touch
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              <i className="fas fa-download mr-2"></i>Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
