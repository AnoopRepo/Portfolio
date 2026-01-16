import React, { useState, useEffect } from 'react';
import { Code, Mail, Linkedin, Github, ExternalLink, Menu, X, Award, Briefcase, GraduationCap, Wrench, ArrowUp } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skills = {
    "Programming Languages": ["Java", "JavaScript", "SQL", "HTML5", "CSS3"],
    "Backend Technologies": ["Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "REST APIs", "Microservices", "JWT"],
    "Frontend Technologies": ["React.js", "Tailwind CSS", "Bootstrap"],
    "Database": ["MySQL"],
    "DevOps & Tools": ["Git", "GitHub", "Maven", "Postman", "CI/CD", "Railway", "Vercel", "Docker"]
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      period: "Jul 2025 - Aug 2025",
      description: "Full-stack e-commerce solution with advanced features and optimizations",
      highlights: [
        "Engineered 15+ RESTful APIs with 35% reduction in response time",
        "Built responsive React.js frontend with 98% mobile compatibility",
        "Designed normalized MySQL schema with 45% faster query execution"
      ],
      tech: ["Spring Boot", "React.js", "MySQL", "Tailwind CSS"]
    },
    {
      title: "Anime Content Management Platform",
      period: "2025",
      description: "Dynamic content management system for anime reviews and streaming",
      highlights: [
        "Developed full-stack CMS with dynamic React components",
        "Implemented Spring Boot REST APIs following MVC patterns",
        "Deployed with CI/CD on Vercel and Railway with zero-downtime"
      ],
      tech: ["Spring Boot", "React.js", "Vercel", "Railway"]
    }
  ];

  const certifications = [
    "Java Programming Certification - IIT Kanpur (Online)",
    "Data Structures and Algorithms (Intermediate) - HackerRank",
    "React.js Web Development - Let's Upgrade",
    "160 Days of Data Structures & Algorithms Program - GeeksforGeeks"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-lg border-purple-500/30 shadow-lg shadow-purple-500/10' : 'bg-slate-900/80 backdrop-blur-md border-purple-500/20'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer">
              AY
            </span>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-purple-400 transition-all duration-300 hover:scale-110 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden hover:scale-110 transition-transform"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-purple-500/20 animate-slideDown">
            {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-3 hover:bg-slate-700 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left order-2 md:order-1 animate-fadeInLeft">
              <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Anoop Yadav
              </h1>
              <p className="text-2xl sm:text-3xl text-purple-300 mb-4 animate-fadeIn" style={{animationDelay: '0.2s'}}>Full-Stack Developer</p>
              <p className="text-lg text-gray-300 mb-8 animate-fadeIn" style={{animationDelay: '0.4s'}}>
                Expertise in Java, Spring Boot, React.js, and RESTful APIs. Dedicated to designing and implementing scalable enterprise solutions with 200+ algorithmic problem-solving achievements.
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center md:justify-start space-x-6 mb-8 animate-fadeIn" style={{animationDelay: '0.6s'}}>
                <a href="mailto:anoopyadav5984@gmail.com" className="hover:text-purple-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1">
                  <Mail size={24} />
                </a>
                <a href="https://linkedin.com/in/anoop-yadav-232808329" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1">
                  <Linkedin size={24} />
                </a>
                <a href="https://leetcode.com/anoopyadav" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1">
                  <Code size={24} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1">
                  <Github size={24} />
                </a>
              </div>
            </div>

            {/* Profile Image Section */}
            <div className="order-1 md:order-2 flex justify-center animate-fadeInRight">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-purple-500/50 group-hover:border-purple-400 transition-all duration-300 group-hover:scale-105">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <svg className="w-32 h-32 sm:w-40 sm:h-40 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                {/* Floating Icons */}
                <div className="absolute -top-4 -right-4 bg-purple-600 p-3 rounded-full animate-bounce shadow-lg shadow-purple-600/50">
                  <Code size={24} />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-pink-600 p-3 rounded-full animate-bounce shadow-lg shadow-pink-600/50" style={{animationDelay: '0.5s'}}>
                  <Briefcase size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Stats - Full Width Below */}
          <div className="mt-12 animate-fadeInUp">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: "200+", label: "Problems Solved" },
                { value: "15+", label: "REST APIs Built" },
                { value: "2", label: "Major Projects" },
                { value: "7.5", label: "CGPA" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-purple-500/20 hover:border-purple-400 transition-all duration-300 hover:transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30 animate-fadeIn" style={{animationDelay: `${0.8 + idx * 0.1}s`}}>
                  <div className="text-3xl font-bold text-purple-400">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3 animate-fadeIn">
            <Wrench className="text-purple-400 animate-spin-slow" />
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={category} className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105 duration-300 hover:shadow-xl hover:shadow-purple-500/20 animate-fadeInUp" style={{animationDelay: `${idx * 0.1}s`}}>
                <h3 className="text-xl font-semibold text-purple-300 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`px-3 py-1 bg-purple-500/20 rounded-full text-sm border border-purple-500/30 hover:bg-purple-500/40 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-purple-500/50 ${
                        hoveredSkill === skill ? 'transform scale-110 bg-purple-500/40' : ''
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="mt-6 bg-slate-900/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <h3 className="text-xl font-semibold text-purple-300 mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["Problem-solving", "Analytical thinking", "Team collaboration", "Agile methodologies"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-pink-500/20 rounded-full text-sm border border-pink-500/30 hover:bg-pink-500/40 hover:scale-110 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-pink-500/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3 animate-fadeIn">
            <Briefcase className="text-purple-400" />
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 animate-fadeInUp group"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-purple-300 group-hover:text-purple-200 transition-colors">{project.title}</h3>
                  <ExternalLink className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-125" size={20} />
                </div>
                <p className="text-sm text-gray-400 mb-3">{project.period}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-start group-hover:text-gray-300 transition-colors">
                      <span className="text-purple-400 mr-2">→</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-purple-500/10 rounded text-xs border border-purple-500/20 hover:bg-purple-500/30 hover:scale-110 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3 animate-fadeIn">
            <GraduationCap className="text-purple-400" />
            Education & Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 animate-fadeInLeft">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">Education</h3>
              <div className="space-y-2">
                <p className="text-lg font-semibold">Bachelor of Technology</p>
                <p className="text-gray-400">Computer Science and Engineering</p>
                <p className="text-gray-400">Dr. A. P. J. Abdul Kalam Technical University</p>
                <p className="text-gray-400">Aug 2022 - May 2026</p>
                <p className="text-purple-300 font-semibold mt-2">CGPA: 7.5/10.0</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 animate-fadeInRight">
              <h3 className="text-2xl font-bold text-purple-300 mb-4 flex items-center gap-2">
                <Award size={24} />
                Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="text-sm text-gray-300 flex items-start hover:text-purple-300 transition-colors">
                    <span className="text-purple-400 mr-2">✓</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technical Achievements */}
          <div className="mt-8 bg-slate-900/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <h3 className="text-2xl font-bold text-purple-300 mb-4">Technical Achievements</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Solved 200+ algorithmic problems across LeetCode, GeeksforGeeks, and HackerRank",
                "Mastered advanced DSA including DP, graphs, backtracking, and greedy algorithms",
                "Completed GeeksforGeeks 160 Days DSA intensive program",
                "Active in competitive programming and open-source contributions"
              ].map((achievement, idx) => (
                <li key={idx} className="text-gray-300 flex items-start hover:text-purple-300 transition-colors">
                  <span className="text-purple-400 mr-2">★</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fadeIn">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <a
              href="mailto:anoopyadav5984@gmail.com"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-110 hover:shadow-lg hover:shadow-purple-600/50"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/anoop-yadav-232808329"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-110 hover:shadow-lg hover:shadow-slate-600/50"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <div className="mt-8 text-gray-400 animate-fadeIn" style={{animationDelay: '0.4s'}}>
            <p>+91-9005437293</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20 text-center text-gray-400">
        <p>© 2026 Anoop Yadav. Built with React & Tailwind CSS.</p>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 p-3 rounded-full shadow-lg shadow-purple-600/50 transition-all duration-300 hover:scale-110 animate-fadeIn z-50"
        >
          <ArrowUp size={24} />
        </button>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}