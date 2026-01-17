import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Github, ExternalLink, ArrowRight, Award } from 'lucide-react';

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      Object.keys(sectionRefs.current).forEach(key => {
        const element = sectionRefs.current[key];
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
          setVisibleSections(prev => ({ ...prev, [key]: isVisible }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    "Java", "Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate",
    "React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS",
    "MySQL", "REST APIs", "Microservices", "JWT", "Git", "Docker", "CI/CD"
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with advanced features and performance optimizations",
      tech: "Spring Boot • React.js • MySQL • Tailwind CSS",
      highlights: "15+ REST APIs • 35% faster response time • 98% mobile compatibility",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop"
    },
    {
      title: "Anime Content Management Platform",
      description: "Dynamic CMS for anime reviews and streaming with modern architecture",
      tech: "Spring Boot • React.js • Vercel • Railway",
      highlights: "Zero-downtime deployment • Dynamic components • MVC pattern",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"
    }
  ];

  const certifications = [
    { name: "Java Programming Certification", org: "IIT Kanpur (Online)", year: "2024" },
    { name: "Data Structures and Algorithms", org: "HackerRank", year: "2024" },
    { name: "React.js Web Development", org: "Let's Upgrade", year: "2024" },
    { name: "160 Days of DSA Program", org: "GeeksforGeeks", year: "2024" }
  ];

  const timeline = [
    { year: "2022", title: "Bachelor of Technology", org: "Dr. A.P.J. Abdul Kalam Technical University", desc: "Computer Science & Engineering" },
    { year: "2024", title: "Java Programming Certification", org: "IIT Kanpur", desc: "Advanced Java concepts and implementation" },
    { year: "2025", title: "Full-Stack Development", org: "Major Projects", desc: "Built 2 production-ready applications" },
    { year: "2026", title: "Graduation (Expected)", org: "CGPA: 7.5/10.0", desc: "Focus: Enterprise Software Development" }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <div 
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <h1 className="text-8xl md:text-9xl font-black mb-6 tracking-tight">
              ANOOP YADAV
            </h1>
          </div>
          
          <div 
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            <p className="text-3xl md:text-4xl text-gray-400 mb-4 font-light">
              Full-Stack Developer
            </p>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Building scalable enterprise solutions with Java, Spring Boot, and React.js
            </p>
          </div>

          <div 
            className="opacity-0 animate-fadeInUp mt-12"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            <div className="flex gap-8 justify-center text-gray-500">
              <a href="#about" className="hover:text-white transition-all duration-300 group">
                <span className="text-sm uppercase tracking-wider">About</span>
                <div className="h-[2px] w-0 group-hover:w-full bg-white transition-all duration-300"></div>
              </a>
              <a href="#work" className="hover:text-white transition-all duration-300 group">
                <span className="text-sm uppercase tracking-wider">Work</span>
                <div className="h-[2px] w-0 group-hover:w-full bg-white transition-all duration-300"></div>
              </a>
              <a href="#contact" className="hover:text-white transition-all duration-300 group">
                <span className="text-sm uppercase tracking-wider">Contact</span>
                <div className="h-[2px] w-0 group-hover:w-full bg-white transition-all duration-300"></div>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fadeIn" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
          <div className="w-[2px] h-16 bg-gradient-to-b from-white to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about"
        ref={el => sectionRefs.current['about'] = el}
        className="min-h-screen flex items-center px-6 py-32"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div 
              className={`transition-all duration-1000 ${
                visibleSections['about'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-white/20 blur-3xl group-hover:bg-white/30 transition-all duration-500"></div>
                <div className="relative w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-all duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center">
                    <svg className="w-1/2 h-1/2 text-white/40" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className={`space-y-8 transition-all duration-1000 delay-300 ${
                visibleSections['about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div>
                <div className="text-sm uppercase tracking-widest text-gray-500 mb-4">About Me</div>
                <h2 className="text-5xl md:text-6xl font-bold mb-8">
                  Simple.<br/>
                  Confident.<br/>
                  <span className="text-gray-600">Technical.</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-xl text-gray-400 leading-relaxed">
                <p>
                  I'm a Full-Stack Developer passionate about creating elegant solutions to complex problems. Specializing in Java ecosystem and modern web technologies.
                </p>
                <p>
                  With expertise in Spring Boot, React.js, and cloud deployment, I build scalable applications that make a difference. <span className="text-white font-semibold">200+ algorithmic problems solved</span> and counting.
                </p>
              </div>

              <div className="pt-8">
                <div className="text-gray-500 mb-4">Core Focus</div>
                <div className="space-y-2 text-lg">
                  <div className="flex items-center gap-3 group cursor-default">
                    <div className="w-2 h-2 bg-white group-hover:w-8 transition-all duration-300"></div>
                    <span className="group-hover:text-white transition-colors">Enterprise Application Development</span>
                  </div>
                  <div className="flex items-center gap-3 group cursor-default">
                    <div className="w-2 h-2 bg-white group-hover:w-8 transition-all duration-300"></div>
                    <span className="group-hover:text-white transition-colors">RESTful API Design</span>
                  </div>
                  <div className="flex items-center gap-3 group cursor-default">
                    <div className="w-2 h-2 bg-white group-hover:w-8 transition-all duration-300"></div>
                    <span className="group-hover:text-white transition-colors">Full-Stack Architecture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div 
            className={`mt-16 transition-all duration-1000 delay-500 ${
              visibleSections['about'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/5 blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl p-12 backdrop-blur-sm">
                <div className="grid md:grid-cols-4 gap-8">
                  <div>
                    <div className="text-gray-500 mb-2">Email</div>
                    <div className="text-lg">anoopyadav5984@gmail.com</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-2">Phone</div>
                    <div className="text-lg">+91-9005437293</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-2">Location</div>
                    <div className="text-lg">Lucknow, India</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-2">Status</div>
                    <div className="text-lg flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      Available
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        ref={el => sectionRefs.current['skills'] = el}
        className="py-32 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div 
            className={`mb-20 transition-all duration-1000 ${
              visibleSections['skills'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="text-sm uppercase tracking-widest text-gray-500 mb-4">Technical Skills</div>
            <h2 className="text-5xl md:text-6xl font-bold">What I Work With</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className={`group transition-all duration-700 ${
                  visibleSections['skills'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default h-full">
                  <div className="text-lg font-medium group-hover:text-white transition-colors">
                    {skill}
                  </div>
                  <div className="w-0 h-[2px] bg-white group-hover:w-full transition-all duration-500 mt-4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="work"
        ref={el => sectionRefs.current['projects'] = el}
        className="py-32 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div 
            className={`mb-20 transition-all duration-1000 ${
              visibleSections['projects'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="text-sm uppercase tracking-widest text-gray-500 mb-4">Featured Work</div>
            <h2 className="text-5xl md:text-6xl font-bold">Selected Projects</h2>
          </div>

          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`group transition-all duration-1000 ${
                  visibleSections['projects'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5 transition-all duration-500 cursor-pointer">
                  <div className="grid md:grid-cols-5 gap-6">
                    <div className="md:col-span-2 relative overflow-hidden h-64 md:h-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:scale-110 transition-transform duration-700">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                        />
                      </div>
                    </div>
                    
                    <div className="md:col-span-3 p-10">
                      <div className="flex items-start justify-between mb-6">
                        <h3 className="text-3xl font-bold group-hover:text-white transition-colors">
                          {project.title}
                        </h3>
                        <ExternalLink className="text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={24} />
                      </div>
                      
                      <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="text-gray-500 mb-4 text-sm uppercase tracking-wider">
                        {project.tech}
                      </div>
                      
                      <div className="text-white/80 flex items-center gap-2">
                        <ArrowRight size={16} />
                        <span>{project.highlights}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div 
            className={`mt-16 text-center transition-all duration-1000 delay-500 ${
              visibleSections['projects'] ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <a 
              href="https://github.com/anoopyadav" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors group"
            >
              <span className="text-lg">View all projects on GitHub</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section 
        ref={el => sectionRefs.current['timeline'] = el}
        className="py-32 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <div 
            className={`mb-20 transition-all duration-1000 ${
              visibleSections['timeline'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="text-sm uppercase tracking-widest text-gray-500 mb-4">Journey</div>
            <h2 className="text-5xl md:text-6xl font-bold">Education & Experience</h2>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10"></div>
            
            <div className="space-y-16">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative pl-12 transition-all duration-1000 ${
                    visibleSections['timeline'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="absolute left-0 top-2 w-4 h-4 bg-white rounded-full shadow-lg shadow-white/50"></div>
                  <div className="absolute left-4 top-2 w-8 h-[2px] bg-white/20"></div>
                  
                  <div className="group cursor-default">
                    <div className="text-sm text-gray-500 mb-2 uppercase tracking-wider">{item.year}</div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">{item.title}</h3>
                    <div className="text-lg text-gray-400 mb-2">{item.org}</div>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div 
            className={`mt-20 bg-white/5 border border-white/10 rounded-2xl p-10 transition-all duration-1000 delay-700 ${
              visibleSections['timeline'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <h3 className="text-2xl font-bold mb-8">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div 
                  key={idx}
                  className="group relative bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/95 text-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center p-6 rounded-xl">
                    <div className="text-center">
                      <Award className="mx-auto mb-3" size={32} />
                      <div className="font-bold text-lg mb-2">{cert.name}</div>
                      <div className="text-sm opacity-70">{cert.org}</div>
                      <div className="text-xs opacity-50 mt-2">{cert.year}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Award size={20} className="text-white/60 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1 group-hover:opacity-0 transition-opacity">{cert.name}</div>
                      <div className="text-sm text-gray-500 group-hover:opacity-0 transition-opacity">{cert.org}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div 
            className={`mt-12 bg-white/5 border border-white/10 rounded-2xl p-10 transition-all duration-1000 delay-900 ${
              visibleSections['timeline'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <h3 className="text-2xl font-bold mb-6">Key Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white mt-2"></div>
                <div>
                  <div className="font-semibold mb-1">200+ Problems Solved</div>
                  <div className="text-sm text-gray-500">LeetCode, GeeksforGeeks, HackerRank</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white mt-2"></div>
                <div>
                  <div className="font-semibold mb-1">Advanced DSA Mastery</div>
                  <div className="text-sm text-gray-500">DP, Graphs, Backtracking, Greedy</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white mt-2"></div>
                <div>
                  <div className="font-semibold mb-1">160 Days DSA Program</div>
                  <div className="text-sm text-gray-500">GeeksforGeeks Intensive</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white mt-2"></div>
                <div>
                  <div className="font-semibold mb-1">Competitive Programming</div>
                  <div className="text-sm text-gray-500">Active participant & contributor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact"
        ref={el => sectionRefs.current['contact'] = el}
        className="min-h-screen flex items-center px-6 py-32"
      >
        <div className="max-w-4xl mx-auto w-full text-center">
          <div 
            className={`transition-all duration-1000 ${
              visibleSections['contact'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="text-sm uppercase tracking-widest text-gray-500 mb-8">Get In Touch</div>
            <h2 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              Let's build something<br/>meaningful together.
            </h2>
            <p className="text-2xl text-gray-400 mb-16 max-w-2xl mx-auto">
              Open to full-time opportunities and interesting projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="mailto:anoopyadav5984@gmail.com"
                className="group inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all duration-300"
              >
                <Mail size={24} />
                <span>Send Email</span>
              </a>
              <a
                href="https://linkedin.com/in/anoop-yadav-232808329"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 border-2 border-white text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
              >
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="flex gap-8 justify-center text-gray-500">
              <a 
                href="https://github.com/AnoopRepo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Github size={32} />
              </a>
              <a 
                href="https://leetcode.com/anoop___yadav__" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523a2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500">
          <div>© 2026 Anoop Yadav. All rights reserved.</div>
          <div className="text-sm">Designed & Built with React</div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #000;
        }

        ::-webkit-scrollbar-thumb {
          background: #fff;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #ddd;
        }
      `}</style>
    </div>
  );
}