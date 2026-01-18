import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Github, Code, ExternalLink, Award, GraduationCap, Zap, Database, Server, Trophy, Target } from 'lucide-react';
import ig from './images/linkdin.jpg'

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = containerRef.current.scrollTop;
        const scrollHeight = containerRef.current.scrollHeight - containerRef.current.clientHeight;
        const progress = scrollTop / scrollHeight;
        setScrollProgress(progress);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const skyTransition = Math.min(1, scrollProgress * 1.2);
  
  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll overflow-x-hidden bg-slate-950 relative">
      {/* Sky Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 transition-opacity duration-3000" style={{ opacity: 1 - skyTransition }}>
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-200 via-blue-100 to-orange-100" />
          <div className="absolute w-32 h-32 sm:w-48 sm:h-48 bg-yellow-100 rounded-full top-[15%] right-[20%] blur-[40px]" />
        </div>
        
        <div className="absolute inset-0 transition-opacity duration-3000" style={{ opacity: skyTransition }}>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-900 to-purple-900" />
          <div className="absolute w-32 h-32 sm:w-40 sm:h-40 bg-slate-100 rounded-full top-[10%] right-[15%] blur-[12px]" />
          {[...Array(50)].map((_, i) => (
            <div key={i} className="absolute bg-white rounded-full w-0.5 h-0.5" 
              style={{ top: `${Math.random() * 70}%`, left: `${Math.random() * 100}%`, opacity: skyTransition * (0.3 + Math.random() * 0.4) }} />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* INTRO */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-8">
          <div className="text-center max-w-5xl w-full" style={{ opacity: Math.max(0, 1 - scrollProgress * 4) }}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black mb-4 sm:mb-8 text-white tracking-wide">
              ANOOP YADAV
            </h1>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-emerald-400">
              Full-Stack Developer
            </div>
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-slate-300 font-light mb-8 sm:mb-12">
              Java • Spring Boot • React.js • MySQL
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-white max-w-3xl mx-auto">
              <div className="bg-slate-800/60 backdrop-blur-md px-6 sm:px-10 py-5 sm:py-7 rounded-2xl border-2 border-emerald-400/50 shadow-xl">
                <div className="text-3xl sm:text-5xl font-bold text-emerald-400 mb-2">200+</div>
                <div className="text-slate-200 text-sm sm:text-base">Problems Solved</div>
              </div>
              <div className="bg-slate-800/60 backdrop-blur-md px-6 sm:px-10 py-5 sm:py-7 rounded-2xl border-2 border-blue-400/50 shadow-xl">
                <div className="text-3xl sm:text-5xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-slate-200 text-sm sm:text-base">REST APIs</div>
              </div>
              <div className="bg-slate-800/60 backdrop-blur-md px-6 sm:px-10 py-5 sm:py-7 rounded-2xl border-2 border-purple-400/50 shadow-xl">
                <div className="text-3xl sm:text-5xl font-bold text-purple-400 mb-2">7.5</div>
                <div className="text-slate-200 text-sm sm:text-base">CGPA</div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-12">
          <div className="max-w-7xl w-full">
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 border-2 border-emerald-400/40 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="flex justify-center">
                  <div className="relative group">
                    <div className="absolute -inset-3 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full blur-2xl opacity-40"></div>
                    <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-400/50 shadow-2xl">
                      <div className="w-full h-full bg-gradient-to-br from-emerald-500 via-blue-600 to-purple-600 flex items-center justify-center text-white text-6xl sm:text-8xl font-bold">
                        <img src={ig} alt="" />
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-emerald-500 p-2 sm:p-3 rounded-full shadow-xl border-2 border-white">
                      <Code className="text-white" size={20} />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 sm:mb-10">About Me</h2>
                  <div className="text-lg sm:text-xl md:text-2xl text-slate-200 space-y-4 sm:space-y-6 leading-relaxed">
                    <p>I'm a passionate <span className="text-emerald-400 font-bold">Full-Stack Developer</span> with expertise in building scalable applications.</p>
                    <p>Specializing in <span className="text-amber-300 font-semibold">Java</span>, <span className="text-green-400 font-semibold">Spring Boot</span>, <span className="text-blue-400 font-semibold">React.js</span>, and <span className="text-orange-300 font-semibold">MySQL</span>.</p>
                    <p className="text-emerald-300 text-lg sm:text-2xl font-semibold break-all">📧 anoopyadav5984@gmail.com</p>
                    <p className="text-blue-300 text-lg sm:text-2xl font-semibold">📱 +91-9005437293</p>
                  </div>
                  <div className="flex gap-6 sm:gap-8 mt-6 sm:mt-10">
                    <a href="mailto:anoopyadav5984@gmail.com" className="text-emerald-400 hover:text-emerald-300 transition-all hover:scale-110">
                      <Mail size={32} />
                    </a>
                    <a href="https://linkedin.com/in/anoop-yadav-232808329" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-all hover:scale-110">
                      <Linkedin size={32} />
                    </a>
                    <a href="https://github.com/AnoopRepo" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-all hover:scale-110">
                      <Github size={32} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-12 sm:py-20">
          <div className="max-w-7xl w-full">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center mb-12 sm:mb-20 text-white">Technical Skills</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { name: 'Java', icon: Code, color: 'from-orange-400 to-red-500' },
                { name: 'Spring Boot', icon: Server, color: 'from-green-400 to-emerald-500' },
                { name: 'React.js', icon: Code, color: 'from-blue-400 to-cyan-500' },
                { name: 'MySQL', icon: Database, color: 'from-blue-500 to-indigo-600' },
                { name: 'REST APIs', icon: Zap, color: 'from-yellow-400 to-orange-500' },
                { name: 'Git & CI/CD', icon: Target, color: 'from-purple-400 to-pink-500' }
              ].map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div key={idx} className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl sm:rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500`} />
                    <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-8 sm:p-12 border-2 border-white/10 group-hover:border-white/30 transition-all duration-500 group-hover:scale-105 shadow-xl">
                      <Icon className="text-white mb-4 sm:mb-6 mx-auto" size={50} />
                      <h3 className="text-2xl sm:text-3xl font-bold text-white text-center">{skill.name}</h3>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 sm:mt-16 bg-slate-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-purple-400/40 shadow-2xl">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-300 mb-6 sm:mb-8">Complete Tech Stack</h3>
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 text-base sm:text-lg md:text-xl text-slate-200">
                <div><p className="text-emerald-400 font-bold text-xl sm:text-2xl mb-3 sm:mb-4">Backend</p><p>Spring MVC, Spring Data JPA, Hibernate, Microservices, JWT</p></div>
                <div><p className="text-blue-400 font-bold text-xl sm:text-2xl mb-3 sm:mb-4">Frontend</p><p>Tailwind CSS, Bootstrap, HTML5, CSS3, JavaScript</p></div>
                <div><p className="text-amber-400 font-bold text-xl sm:text-2xl mb-3 sm:mb-4">DevOps</p><p>Docker, Maven, Postman, Railway, Vercel</p></div>
                <div><p className="text-purple-400 font-bold text-xl sm:text-2xl mb-3 sm:mb-4">Soft Skills</p><p>Problem-solving, Team collaboration, Agile</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="min-h-screen px-4 sm:px-8 py-16 sm:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 sm:mb-20">
              <div className="text-xs sm:text-sm uppercase tracking-widest text-slate-400 mb-3 sm:mb-4 text-center">Featured Work</div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center text-white">Selected Projects</h2>
            </div>

            <div className="space-y-8 sm:space-y-10">
              {[
                {
                  title: "E-Commerce Platform",
                  period: "Jul 2025 – Aug 2025",
                  description: "Enterprise-grade e-commerce solution with advanced performance optimizations.",
                  highlights: ["15+ REST APIs with 35% faster response", "React frontend with 98% mobile compatibility", "Optimized MySQL schema (45% faster)"],
                  tech: "Spring Boot · React.js · MySQL · Tailwind"
                },
                {
                  title: "Anime CMS Platform",
                  period: "2025",
                  description: "Modern CMS for anime reviews using full-stack architecture.",
                  highlights: ["Dynamic CMS with reusable React components", "Spring Boot REST APIs following MVC", "CI/CD deployment with zero downtime"],
                  tech: "Spring Boot · React.js · Vercel · Railway"
                }
              ].map((project, idx) => (
                <div key={idx} className="group bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-white/25 transition-all duration-700">
                  <div className="grid md:grid-cols-5 gap-0 md:gap-6">
                    <div className="md:col-span-2 h-48 sm:h-64 md:h-auto overflow-hidden relative bg-gradient-to-br from-slate-700 to-slate-800">
                      <div className="absolute inset-0 flex items-center justify-center"><Code className="text-slate-600" size={64} /></div>
                    </div>
                    <div className="md:col-span-3 p-6 sm:p-8 md:p-10">
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">{project.title}</h3>
                        <ExternalLink size={20} className="text-slate-400 group-hover:text-white transition-all flex-shrink-0" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 mb-3 sm:mb-4">{project.period}</p>
                      <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-4 sm:mb-6 leading-relaxed">{project.description}</p>
                      <ul className="space-y-2 mb-4 sm:mb-6">
                        {project.highlights.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-slate-300">
                            <span className="text-emerald-400 mt-1 flex-shrink-0">✓</span><span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="text-xs sm:text-sm uppercase tracking-wider text-slate-400 mb-3 sm:mb-4">{project.tech}</div>
                      <div className="flex items-center gap-2 text-sm sm:text-base text-white/80"><Zap size={16} /><span>View Details</span></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 sm:mt-20 text-center">
              <a href="https://github.com/AnoopRepo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 sm:gap-3 text-base sm:text-xl text-slate-400 hover:text-white transition-all group">
                <span className="relative">View all projects on GitHub<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-400 group-hover:w-full transition-all duration-500"></span></span>
                <Github size={22} className="group-hover:scale-125 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-12 sm:py-20">
          <div className="max-w-6xl w-full">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center mb-12 sm:mb-20 text-white">Education & Achievements</h2>
            
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl sm:rounded-3xl blur-xl opacity-30"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-emerald-400/40 shadow-2xl">
                  <GraduationCap className="text-emerald-400 mb-4 sm:mb-6" size={40} />
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Education</h3>
                  <div className="text-base sm:text-lg md:text-xl text-slate-200 space-y-2 sm:space-y-3">
                    <p className="text-xl sm:text-2xl font-bold text-emerald-400">Bachelor of Technology</p>
                    <p>Computer Science and Engineering</p>
                    <p>Dr. A. P. J. Abdul Kalam Technical University</p>
                    <p className="text-amber-300">Aug 2022 - May 2026</p>
                    <p className="text-2xl sm:text-3xl font-bold text-emerald-400 mt-4 sm:mt-6">CGPA: 7.5/10.0</p>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl blur-xl opacity-30"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-purple-400/40 shadow-2xl">
                  <Award className="text-purple-400 mb-4 sm:mb-6" size={40} />
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Certifications</h3>
                  <div className="space-y-2 sm:space-y-3 text-base sm:text-lg text-slate-200">
                    <p><span className="text-emerald-400 text-lg sm:text-xl mr-2">✓</span> Java Programming - IIT Kanpur</p>
                    <p><span className="text-emerald-400 text-lg sm:text-xl mr-2">✓</span> DSA (Intermediate) - HackerRank</p>
                    <p><span className="text-emerald-400 text-lg sm:text-xl mr-2">✓</span> React.js - Let's Upgrade</p>
                    <p><span className="text-emerald-400 text-lg sm:text-xl mr-2">✓</span> 160 Days DSA - GeeksforGeeks</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl sm:rounded-3xl blur-xl opacity-30"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-orange-400/40 shadow-2xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <Trophy className="text-orange-400" size={40} />
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Technical Achievements</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 text-base sm:text-lg md:text-xl text-slate-200">
                  <p><span className="text-amber-400 text-xl sm:text-2xl mr-2 sm:mr-3">★</span> Solved 200+ algorithmic problems</p>
                  <p><span className="text-amber-400 text-xl sm:text-2xl mr-2 sm:mr-3">★</span> Mastered DP, Graphs, Backtracking</p>
                  <p><span className="text-amber-400 text-xl sm:text-2xl mr-2 sm:mr-3">★</span> GeeksforGeeks 160 Days Program</p>
                  <p><span className="text-amber-400 text-xl sm:text-2xl mr-2 sm:mr-3">★</span> Active in competitive programming</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-12 sm:py-20">
          <div className="max-w-5xl w-full text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-8 sm:mb-12 text-white">Let's Connect</h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-12 sm:mb-16 px-4">Ready to build something amazing together?</p>

            <div className="relative group mb-12 sm:mb-16">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-500 rounded-2xl sm:rounded-3xl blur-xl opacity-30"></div>
              
              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 border-2 border-emerald-400/40 shadow-2xl">
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center mb-8 sm:mb-12">
                  <a href="mailto:anoopyadav5984@gmail.com" className="px-8 sm:px-12 py-5 sm:py-6 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-2xl flex items-center justify-center gap-3 sm:gap-4 hover:scale-110 transition-all shadow-xl text-white">
                    <Mail size={24} />Email Me
                  </a>
                  <a href="https://linkedin.com/in/anoop-yadav-232808329" target="_blank" rel="noopener noreferrer" className="px-8 sm:px-12 py-5 sm:py-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-2xl flex items-center justify-center gap-3 sm:gap-4 hover:scale-110 transition-all shadow-xl text-white">
                    <Linkedin size={24} />LinkedIn
                  </a>
                </div>
                
                <div className="flex justify-center gap-8 sm:gap-12 mb-8 sm:mb-12">
                  <a href="https://github.com/AnoopRepo" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-all hover:scale-125">
                    <Github size={36} />
                  </a>
                  <a href="https://leetcode.com/anoop___yadav__" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-all hover:scale-125">
                    <Code size={36} />
                  </a>
                </div>
                
                <div className="text-lg sm:text-xl md:text-2xl text-slate-200 space-y-3 sm:space-y-4">
                  <p className="text-emerald-300 font-bold">+91-9005437293</p>
                  <p className="text-blue-300 font-bold break-all">anoopyadav5984@gmail.com</p>
                </div>
              </div>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-slate-400 px-4">© 2026 Anoop Yadav • Full-Stack Developer</p>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #0f172a;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #10b981, #3b82f6);
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}