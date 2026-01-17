import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Github, Code, ExternalLink, Award, Briefcase, GraduationCap, Zap, Database, Server, Smartphone, BookOpen, Trophy, Target } from 'lucide-react';

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

  const cameraZ = scrollProgress * 5000;
  const roadOffset = scrollProgress * 3000;
  const buildingScroll = scrollProgress * 2000;
  const skyTransition = Math.min(1, scrollProgress * 1.2);
  
  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll overflow-x-hidden bg-slate-950 relative">
      {/* Calm Sky with Gradient */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Day Sky - Softer colors */}
        <div 
          className="absolute inset-0 transition-opacity duration-3000"
          style={{ opacity: 1 - skyTransition }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-200 via-blue-100 to-orange-100" />
          {/* Soft sun */}
          <div 
            className="absolute w-48 h-48 bg-yellow-100 rounded-full"
            style={{ 
              top: `${15 - scrollProgress * 50}%`,
              right: '20%',
              filter: 'blur(40px)',
              boxShadow: '0 0 150px 80px rgba(254, 243, 199, 0.4)'
            }}
          />
          {/* Gentle clouds */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/60 rounded-full animate-float"
              style={{
                width: `${120 + i * 30}px`,
                height: `${40 + i * 10}px`,
                top: `${10 + i * 8}%`,
                left: `${10 + i * 15}%`,
                filter: 'blur(20px)',
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${20 + i * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Night Sky - Deeper, calmer */}
        <div 
          className="absolute inset-0 transition-opacity duration-3000"
          style={{ opacity: skyTransition }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-900 to-purple-900" />
          {/* Soft moon */}
          <div 
            className="absolute w-40 h-40 bg-slate-100 rounded-full"
            style={{ 
              top: `${Math.max(-10, -50 + scrollProgress * 60)}%`,
              right: '15%',
              filter: 'blur(12px)',
              boxShadow: '0 0 120px 50px rgba(226, 232, 240, 0.3)'
            }}
          />
          {/* Gentle stars */}
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: '2px',
                height: '2px',
                top: `${Math.random() * 70}%`,
                left: `${Math.random() * 100}%`,
                opacity: skyTransition * (0.3 + Math.random() * 0.4),
                animation: `gentleTwinkle ${3 + Math.random() * 4}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Calm Road */}
      <div className="fixed bottom-0 left-0 right-0 h-full pointer-events-none z-1" style={{ perspective: '900px' }}>
        <div 
          className="absolute bottom-0 left-1/2 w-[900px] h-full -translate-x-1/2"
          style={{
            background: `linear-gradient(to bottom, 
              transparent 0%, 
              rgba(30, 41, 59, ${0.3 + skyTransition * 0.4}) 25%, 
              rgba(30, 41, 59, ${0.6 + skyTransition * 0.3}) 60%,
              rgba(15, 23, 42, ${0.9}) 100%)`,
            transform: `rotateX(76deg) translateY(${roadOffset}px)`,
            transformOrigin: 'bottom center'
          }}
        >
          {/* Calm road markings */}
          <div className="absolute inset-0 flex flex-col items-center justify-start pt-20 gap-24">
            {[...Array(25)].map((_, i) => (
              <div 
                key={i} 
                className="w-4 h-28 bg-amber-200 rounded-sm"
                style={{
                  opacity: 0.6,
                  boxShadow: skyTransition > 0.5 ? '0 0 15px rgba(253, 230, 138, 0.5)' : 'none'
                }}
              />
            ))}
          </div>
          
          {/* Soft road edges */}
          <div className="absolute left-2 top-0 bottom-0 w-2 bg-white/20 rounded-full" />
          <div className="absolute right-2 top-0 bottom-0 w-2 bg-white/20 rounded-full" />
        </div>
      </div>

      {/* Calming Buildings */}
      <div className="fixed inset-0 pointer-events-none z-2" style={{ perspective: '1200px' }}>
        {/* Left buildings - softer colors */}
        <div 
          className="absolute left-0 bottom-0 w-1/3 h-full flex items-end gap-3 px-6"
          style={{ 
            transform: `translateZ(${-cameraZ * 0.5}px) translateY(${buildingScroll}px)`,
            transformStyle: 'preserve-3d'
          }}
        >
          {[580, 420, 680, 520, 620, 460, 560, 660, 590, 510].map((height, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-b from-slate-600 via-slate-700 to-slate-800 relative rounded-t-md"
              style={{ 
                height: `${height}px`,
                boxShadow: '0 0 40px rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Soft building top */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-slate-500/30 rounded-t-md" />
              
              {/* Calm windows */}
              <div className="absolute inset-0 p-2 grid grid-cols-3 gap-1">
                {[...Array(Math.floor(height / 28))].map((_, j) => {
                  const isLit = Math.random() > (skyTransition < 0.5 ? 0.75 : 0.3);
                  return (
                    <div
                      key={j}
                      className="rounded-sm transition-all duration-1000"
                      style={{
                        backgroundColor: isLit ? 'rgba(255, 248, 220, 0.8)' : 'rgba(71, 85, 105, 0.3)',
                        opacity: isLit ? (0.6 + Math.random() * 0.3) : 0.15,
                        boxShadow: isLit && skyTransition > 0.5 ? '0 0 12px rgba(255, 248, 220, 0.4)' : 'none'
                      }}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Right buildings */}
        <div 
          className="absolute right-0 bottom-0 w-1/3 h-full flex items-end gap-3 px-6"
          style={{ 
            transform: `translateZ(${-cameraZ * 0.5}px) translateY(${buildingScroll}px)`,
            transformStyle: 'preserve-3d'
          }}
        >
          {[600, 680, 470, 640, 530, 610, 680, 570, 650, 500].map((height, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-b from-slate-600 via-slate-700 to-slate-800 relative rounded-t-md"
              style={{ 
                height: `${height}px`,
                boxShadow: '0 0 40px rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Soft building top */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-slate-500/30 rounded-t-md" />
              
              {/* Calm windows */}
              <div className="absolute inset-0 p-2 grid grid-cols-3 gap-1">
                {[...Array(Math.floor(height / 28))].map((_, j) => {
                  const isLit = Math.random() > (skyTransition < 0.5 ? 0.75 : 0.3);
                  return (
                    <div
                      key={j}
                      className="rounded-sm transition-all duration-1000"
                      style={{
                        backgroundColor: isLit ? 'rgba(255, 248, 220, 0.8)' : 'rgba(71, 85, 105, 0.3)',
                        opacity: isLit ? (0.6 + Math.random() * 0.3) : 0.15,
                        boxShadow: isLit && skyTransition > 0.5 ? '0 0 12px rgba(255, 248, 220, 0.4)' : 'none'
                      }}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative z-10">
        {/* INTRO */}
        <section className="min-h-screen flex items-center justify-center px-8">
          <div 
            className="text-center max-w-5xl"
            style={{
              opacity: Math.max(0, 1 - scrollProgress * 4),
              transform: `scale(${Math.max(0.6, 1 - scrollProgress * 1.5)})`
            }}
          >
            <h1 className="text-9xl font-black mb-8 text-white tracking-wide">
              ANOOP YADAV
            </h1>
            <div className="text-5xl font-bold mb-6 text-emerald-400">
              Full-Stack Developer
            </div>
            <p className="text-3xl text-slate-300 font-light mb-12">
              Java • Spring Boot • React.js • MySQL
            </p>
            <div className="flex justify-center gap-12 text-white text-xl">
              <div className="bg-slate-800/60 backdrop-blur-md px-10 py-7 rounded-2xl border-2 border-emerald-400/50 shadow-xl">
                <div className="text-5xl font-bold text-emerald-400 mb-2">200+</div>
                <div className="text-slate-200">Problems Solved</div>
              </div>
              <div className="bg-slate-800/60 backdrop-blur-md px-10 py-7 rounded-2xl border-2 border-blue-400/50 shadow-xl">
                <div className="text-5xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-slate-200">REST APIs</div>
              </div>
              <div className="bg-slate-800/60 backdrop-blur-md px-10 py-7 rounded-2xl border-2 border-purple-400/50 shadow-xl">
                <div className="text-5xl font-bold text-purple-400 mb-2">7.5</div>
                <div className="text-slate-200">CGPA</div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT ME */}
        <section className="min-h-screen flex items-center justify-center px-8">
          <div className="max-w-7xl w-full">
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-16 border-2 border-emerald-400/40 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Profile Picture */}
                <div className="flex justify-center">
                  <div className="relative group">
                    <div className="absolute -inset-3 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-700"></div>
                    
                    <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-emerald-400/50 shadow-2xl group-hover:scale-105 transition-all duration-500">
                      <div className="w-full h-full bg-gradient-to-br from-emerald-500 via-blue-600 to-purple-600 flex items-center justify-center">
                        <svg className="w-48 h-48 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="absolute -top-4 -right-4 bg-emerald-500 p-3 rounded-full shadow-xl border-2 border-white animate-float">
                      <Code className="text-white" size={28} />
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-blue-500 p-3 rounded-full shadow-xl border-2 border-white animate-float" style={{animationDelay: '0.3s'}}>
                      <Server className="text-white" size={28} />
                    </div>
                    <div className="absolute top-1/2 -right-6 bg-purple-500 p-3 rounded-full shadow-xl border-2 border-white animate-float" style={{animationDelay: '0.6s'}}>
                      <Database className="text-white" size={28} />
                    </div>
                  </div>
                </div>

                {/* About Text */}
                <div>
                  <h2 className="text-6xl font-black text-white mb-10">About Me</h2>
              
                  <div className="text-2xl text-slate-200 space-y-6 leading-relaxed">
                    <p>
                      I'm a passionate <span className="text-emerald-400 font-bold">Full-Stack Developer</span> with expertise in building scalable, high-performance enterprise applications.
                    </p>
                    <p>
                      Specializing in <span className="text-amber-300 font-semibold">Java</span>, <span className="text-green-400 font-semibold">Spring Boot</span>, <span className="text-blue-400 font-semibold">React.js</span>, and <span className="text-orange-300 font-semibold">MySQL</span>.
                    </p>
                    <p className="text-emerald-300 text-2xl font-semibold">
                      📧 anoopyadav5984@gmail.com
                    </p>
                    <p className="text-blue-300 text-2xl font-semibold">
                      📱 +91-9005437293
                    </p>
                  </div>

                  <div className="flex gap-8 mt-10">
                    <a href="mailto:anoopyadav5984@gmail.com" className="text-emerald-400 hover:text-emerald-300 transition-all hover:scale-110">
                      <Mail size={40} />
                    </a>
                    <a href="https://linkedin.com/in/anoop-yadav-232808329" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-all hover:scale-110">
                      <Linkedin size={40} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-all hover:scale-110">
                      <Github size={40} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="min-h-screen flex items-center justify-center px-8 py-20">
          <div className="max-w-7xl w-full">
            <h2 className="text-7xl font-black text-center mb-20 text-white">Technical Skills</h2>
            
            <div className="grid grid-cols-3 gap-8">
              {[
                { name: 'Java', icon: Code, color: 'from-orange-400 to-red-500' },
                { name: 'Spring Boot', icon: Server, color: 'from-green-400 to-emerald-500' },
                { name: 'React.js', icon: Smartphone, color: 'from-blue-400 to-cyan-500' },
                { name: 'MySQL', icon: Database, color: 'from-blue-500 to-indigo-600' },
                { name: 'REST APIs', icon: Zap, color: 'from-yellow-400 to-orange-500' },
                { name: 'Git & CI/CD', icon: Target, color: 'from-purple-400 to-pink-500' }
              ].map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div key={idx} className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500`} />
                    
                    <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-3xl p-12 border-2 border-white/10 group-hover:border-white/30 transition-all duration-500 group-hover:scale-105 shadow-xl">
                      <Icon className="text-white mb-6 mx-auto" size={70} />
                      <h3 className="text-3xl font-bold text-white text-center">{skill.name}</h3>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 bg-slate-900/80 backdrop-blur-xl rounded-3xl p-12 border-2 border-purple-400/40 shadow-2xl">
              <h3 className="text-4xl font-bold text-purple-300 mb-8">Complete Tech Stack</h3>
              <div className="grid grid-cols-2 gap-8 text-xl text-slate-200">
                <div>
                  <p className="text-emerald-400 font-bold text-2xl mb-4">Backend</p>
                  <p>Spring MVC, Spring Data JPA, Hibernate, Microservices, JWT</p>
                </div>
                <div>
                  <p className="text-blue-400 font-bold text-2xl mb-4">Frontend</p>
                  <p>Tailwind CSS, Bootstrap, HTML5, CSS3, JavaScript</p>
                </div>
                <div>
                  <p className="text-amber-400 font-bold text-2xl mb-4">DevOps</p>
                  <p>Docker, Maven, Postman, Railway, Vercel</p>
                </div>
                <div>
                  <p className="text-purple-400 font-bold text-2xl mb-4">Soft Skills</p>
                  <p>Problem-solving, Team collaboration, Agile methodologies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* PROJECTS */}
<section className="min-h-screen px-8 py-32">
  <div className="max-w-6xl mx-auto">
    {/* Heading */}
    <div className="mb-20">
      <div className="text-sm uppercase tracking-widest text-slate-400 mb-4 text-center">
        Featured Work
      </div>
      <h2 className="text-6xl md:text-7xl font-black text-center text-white">
        Selected Projects
      </h2>
    </div>

    {/* Project List */}
    <div className="space-y-10">
      {[
        {
          title: "E-Commerce Platform",
          period: "Jul 2025 – Aug 2025",
          description:
            "Enterprise-grade e-commerce solution with advanced performance optimizations and scalable backend architecture.",
          highlights: [
            "15+ REST APIs with 35% faster response time",
            "React frontend with 98% mobile compatibility",
            "Optimized MySQL schema (45% faster queries)"
          ],
          tech: "Spring Boot · React.js · MySQL · Tailwind CSS",
          image: "/images/ecommerce.jpg"
        },
        {
          title: "Anime Content Management Platform",
          period: "2025",
          description:
            "Modern CMS for anime reviews and content management using a full-stack scalable architecture.",
          highlights: [
            "Dynamic CMS using reusable React components",
            "Spring Boot REST APIs following MVC",
            "CI/CD deployment with zero downtime"
          ],
          tech: "Spring Boot · React.js · Vercel · Railway",
          image: "/images/anime.jpg"
        }
      ].map((project, idx) => (
        <div
          key={idx}
          className="group bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/25 hover:bg-slate-900/90 transition-all duration-700"
        >
          <div className="grid md:grid-cols-5 gap-6">
            {/* Image */}
            <div className="md:col-span-2 h-64 md:h-auto overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="md:col-span-3 p-10">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-3xl font-bold text-white">
                  {project.title}
                </h3>
                <ExternalLink
                  size={24}
                  className="text-slate-400 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                />
              </div>

              <p className="text-sm text-slate-400 mb-4">
                {project.period}
              </p>

              <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-slate-300"
                  >
                    <span className="text-emerald-400 mt-1">✓</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="text-sm uppercase tracking-wider text-slate-400 mb-4">
                {project.tech}
              </div>

              <div className="flex items-center gap-2 text-white/80">
                <Zap size={16} />
                <span>View Project Details</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* GitHub CTA */}
    <div className="mt-20 text-center">
      <a
        href="https://github.com/AnoopRepo"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 text-xl text-slate-400 hover:text-white transition-all group"
      >
        <span className="relative">
          View all projects on GitHub
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-400 group-hover:w-full transition-all duration-500"></span>
        </span>
        <Github
          size={26}
          className="group-hover:scale-125 group-hover:rotate-6 transition-transform"
        />
      </a>
    </div>
  </div>
</section>



        {/* EDUCATION */}
        <section className="min-h-screen flex items-center justify-center px-8 py-20">
          <div className="max-w-6xl w-full">
            <h2 className="text-7xl font-black text-center mb-20 text-white">Education & Achievements</h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500" />
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl p-10 border-2 border-emerald-400/40 shadow-2xl">
                  <GraduationCap className="text-emerald-400 mb-6" size={56} />
                  <h3 className="text-4xl font-bold text-white mb-6">Education</h3>
                  <div className="text-xl text-slate-200 space-y-3">
                    <p className="text-2xl font-bold text-emerald-400">Bachelor of Technology</p>
                    <p>Computer Science and Engineering</p>
                    <p>Dr. A. P. J. Abdul Kalam Technical University</p>
                    <p className="text-amber-300">Aug 2022 - May 2026</p>
                    <p className="text-3xl font-bold text-emerald-400 mt-6">CGPA: 7.5/10.0</p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500" />
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl p-10 border-2 border-purple-400/40 shadow-2xl">
                  <Award className="text-purple-400 mb-6" size={56} />
                  <h3 className="text-4xl font-bold text-white mb-6">Certifications</h3>
                  <div className="space-y-3 text-lg text-slate-200">
                    <p><span className="text-emerald-400 text-xl mr-2">✓</span> Java Programming - IIT Kanpur</p>
                    <p><span className="text-emerald-400 text-xl mr-2">✓</span> DSA (Intermediate) - HackerRank</p>
                    <p><span className="text-emerald-400 text-xl mr-2">✓</span> React.js - Let's Upgrade</p>
                    <p><span className="text-emerald-400 text-xl mr-2">✓</span> 160 Days DSA - GeeksforGeeks</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500" />
              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl p-12 border-2 border-orange-400/40 shadow-2xl">
                <div className="flex items-center gap-6 mb-8">
                  <Trophy className="text-orange-400" size={56} />
                  <h3 className="text-4xl font-bold text-white">Technical Achievements</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6 text-xl text-slate-200">
                  <p><span className="text-amber-400 text-2xl mr-3">★</span> Solved 200+ algorithmic problems</p>
                  <p><span className="text-amber-400 text-2xl mr-3">★</span> Mastered DP, Graphs, Backtracking</p>
                  <p><span className="text-amber-400 text-2xl mr-3">★</span> GeeksforGeeks 160 Days Program</p>
                  <p><span className="text-amber-400 text-2xl mr-3">★</span> Active in competitive programming</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="min-h-screen flex items-center justify-center px-8 py-20">
          <div className="max-w-5xl w-full text-center">
            <h2 className="text-8xl font-black mb-12 text-white">Let's Connect</h2>
            <p className="text-3xl text-slate-300 mb-16">
              Ready to build something amazing together?
            </p>

            <div className="relative group mb-16">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500" />
              
              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl p-16 border-2 border-emerald-400/40 shadow-2xl">
                <div className="flex flex-col sm:flex-row gap-8 justify-center mb-12">
                  <a
                    href="mailto:anoopyadav5984@gmail.com"
                    className="group/btn px-12 py-6 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl font-bold text-2xl flex items-center justify-center gap-4 hover:scale-110 transition-all shadow-xl text-white"
                  >
                    <Mail className="group-hover/btn:scale-125 transition-transform" size={32} />
                    Email Me
                  </a>
                  <a
                    href="https://linkedin.com/in/anoop-yadav-232808329"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn px-12 py-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl font-bold text-2xl flex items-center justify-center gap-4 hover:scale-110 transition-all shadow-xl text-white"
                  >
                    <Linkedin className="group-hover/btn:scale-125 transition-transform" size={32} />
                    LinkedIn
                  </a>
                </div>

                <div className="flex justify-center gap-12 mb-12">
                  <a href="https://github.com/AnoopRepo" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-all hover:scale-125">
                    <Github size={48} />
                  </a>
                  <a href="https://leetcode.com/anoop___yadav__" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-all hover:scale-125">
                    <Code size={48} />
                  </a>
                </div>

                <div className="text-2xl text-slate-200 space-y-4">
                  <p className="text-emerald-300 font-bold">+91-9005437293</p>
                  <p className="text-blue-300 font-bold">anoopyadav5984@gmail.com</p>
                </div>
              </div>
            </div>

            <p className="text-xl text-slate-400">
              © 2026 Anoop Yadav • Full-Stack Developer
            </p>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes gentleTwinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
        
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
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #059669, #2563eb);
        }
      `}</style>
    </div>
  );
}