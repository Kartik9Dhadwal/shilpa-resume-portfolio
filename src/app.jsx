import React, { useState } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, Award, BookOpen, Code, Cpu, Microscope, Briefcase } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('All');

  const projects = [
    {
      title: "Hand Motion Capture Glove with ML",
      category: "Robotics",
      tech: ["ROS", "ML", "Haptics", "Inductive Sensing"],
      desc: "Developed a sensing glove for gesture recognition and haptic feedback integration using machine learning."
    },
    {
      title: "Visual-Inertial Odometry System",
      category: "AI",
      tech: ["MSCKF", "Deep Learning", "Python"],
      desc: "Implemented multi-state constraint Kalman filters with deep learning fusion for autonomous navigation."
    },
    {
      title: "Autonomous Driving Perception",
      category: "AI",
      tech: ["YOLO", "LaneNet", "Blender API", "OpenPose"],
      desc: "End-to-end perception pipeline within a simulated Blender environment for lane and object detection."
    },
    {
      title: "Wearable HMI Backpack",
      category: "Hardware",
      tech: ["Embedded Systems", "Pneumatics", "C++"],
      desc: "Full arm tracking system with integrated pneumatic haptic feedback for human-machine interaction."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
      
      {/* --- HERO SECTION --- */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950 -z-10" />
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
          Shilpa <span className="text-cyan-400">Thakur</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-8">
          Robotics Engineer & Researcher | PhD Candidate at WPI
          <span className="block text-cyan-500/80 text-lg mt-2 font-mono tracking-widest uppercase">Human-Machine Interaction • Soft Robotics • AI</span>
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-full transition-all font-semibold shadow-[0_0_15px_rgba(8,145,178,0.3)]">
            View Projects
          </a>
          {/* Ensure your PDF name matches exactly what is in your public folder */}
          <a href="/Shilpa_Resume.pdf" download className="border border-slate-700 hover:border-cyan-500 px-8 py-3 rounded-full transition-all flex items-center gap-2">
            <Download size={18} /> Resume
          </a>
        </div>
      </header>

      {/* --- ABOUT SECTION --- */}
      <section className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-cyan-500"></span> About Me
          </h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            Currently pursuing a PhD in Robotics Engineering at **Worcester Polytechnic Institute (WPI)**, 
            I specialize in bridging the gap between humans and intelligent machines. My work focuses on 
            Intelligent Systems and Soft Robotics.
          </p>
          <p className="text-slate-400 leading-relaxed">
            With a background spanning mechanical design, electronics, and AI, I am seeking 
            **co-op and internship opportunities starting January 2026** to apply my research 
            to real-world autonomous systems.
          </p>
        </div>

        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-cyan-400">
            <Cpu size={20} /> Technical Expertise
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-bold text-slate-500 uppercase mb-2">Software</p>
              <ul className="space-y-1 text-sm text-slate-300">
                <li>Python / C++ / MATLAB</li>
                <li>ROS / OpenCV / Git</li>
                <li>Linux / Deep Learning</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-500 uppercase mb-2">Engineering</p>
              <ul className="space-y-1 text-sm text-slate-300">
                <li>SolidWorks / COMSOL</li>
                <li>KiCAD / 3D Printing</li>
                <li>Haptic Interfaces</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-12">Experience</h2>
        <div className="space-y-8">
          {[
            { role: "Research Assistant", org: "Soft Robotics Lab, WPI", date: "2022 – Present" },
            { role: "Industry Mentor", org: "Dassault Systèmes", date: "2022" },
            { role: "Co-founder & Mechatronics Engineer", org: "Incoen Systems", date: "2020 – 2021" }
          ].map((job, i) => (
            <div key={i} className="flex flex-col md:flex-row md:justify-between border-l border-slate-800 pl-6 relative">
              <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[6.5px] top-1 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
              <div>
                <h3 className="text-xl font-bold text-white">{job.role}</h3>
                <p className="text-cyan-400">{job.org}</p>
              </div>
              <p className="text-slate-500 font-mono">{job.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="bg-slate-900/30 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold">Featured Research</h2>
            <div className="flex gap-4 text-sm">
              {['All', 'Robotics', 'AI', 'Hardware'].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`${activeTab === tab ? 'text-cyan-400 border-b border-cyan-400' : 'text-slate-500'} pb-1 transition-all`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(p => activeTab === 'All' || p.category === activeTab).map((project, i) => (
              <div key={i} className="group bg-slate-900 border border-slate-800 p-8 rounded-xl hover:border-cyan-500/50 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <ExternalLink size={18} className="text-slate-600 group-hover:text-cyan-400" />
                </div>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-[10px] uppercase tracking-widest bg-slate-800 px-2 py-1 rounded text-cyan-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ACHIEVEMENTS --- */}
      <section className="max-w-6xl mx-auto py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-white">Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-slate-900/40 rounded-xl border border-slate-800">
            <Award className="mx-auto mb-4 text-cyan-400" size={32} />
            <p className="font-bold">Gold Medalist</p>
            <p className="text-sm text-slate-500">M.Tech Robotics</p>
          </div>
          <div className="p-6 bg-slate-900/40 rounded-xl border border-slate-800">
            <Award className="mx-auto mb-4 text-cyan-400" size={32} />
            <p className="font-bold">National Innovation Winner</p>
            <p className="text-sm text-slate-500">$12,500 Award</p>
          </div>
          <div className="p-6 bg-slate-900/40 rounded-xl border border-slate-800">
            <Award className="mx-auto mb-4 text-cyan-400" size={32} />
            <p className="font-bold">Best Research Project</p>
            <p className="text-sm text-slate-500">Robotics Expo</p>
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <footer className="py-24 px-6 text-center bg-slate-950 border-t border-slate-900">
        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">I'm currently looking for new opportunities in robotics research and industry internships.</p>
        <div className="flex justify-center gap-6 mb-12">
          <a href="mailto:sthakur@wpi.edu" className="p-3 bg-slate-900 rounded-full hover:text-cyan-400 transition-all border border-slate-800"><Mail /></a>
          <a href="https://linkedin.com/in/shilpa-thakur" className="p-3 bg-slate-900 rounded-full hover:text-cyan-400 transition-all border border-slate-800"><Linkedin /></a>
          <a href="#" className="p-3 bg-slate-900 rounded-full hover:text-cyan-400 transition-all border border-slate-800"><Github /></a>
        </div>
        <p className="text-xs text-slate-700 uppercase tracking-widest">© 2026 Shilpa Thakur • Built with React & Tailwind</p>
      </footer>
    </div>
  );
};

export default App;