import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Certifications from "@/components/certifications";
import Achievements from "@/components/achievements";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Manav Kumar Jha</h3>
            <p className="text-gray-400 mb-6">Data Analyst & Machine Learning Engineer</p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="https://linkedin.com/in/manav79" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="https://github.com/Manavjha20" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="mailto:meekermanav@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
            <p className="text-gray-400 text-sm">© 2024 Manav Kumar Jha. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
