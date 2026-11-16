import React from 'react';

export default function App() {
  const skills = [
    'Java', 'C Programming', 'SQL & DBMS', 'React', 'JavaScript', 'Tailwind CSS', 'Git & GitHub'
  ];

  const projects = [
    {
      title: 'Line Editor',
      description: 'A command-line text editor built to handle file buffers, line manipulation, and efficient text processing.',
      tech: ['C', 'Data Structures'],
      link: 'https://github.com/saisahana656-b1ip/line-editor'
    },
    {
      title: 'LeetCode Solutions',
      description: 'A curated repository of algorithmic problem solutions focusing on time and space complexity optimization.',
      tech: ['Java', 'Algorithms'],
      link: 'https://github.com/saisahana656-b1ip/leetcode-solutions'
    },
    {
      title: 'Developer Tools & Automation',
      description: 'Collection of development environment configurations, shell workflows, and version control exercises.',
      tech: ['Git', 'CLI', 'Bash'],
      link: 'https://github.com/saisahana656-b1ip/ACTIVITY2-DEV-TOOLS'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold tracking-tight text-indigo-400">
            Sai Sahana
          </a>
          <div className="space-x-6 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-indigo-400 transition">About</a>
            <a href="#skills" className="hover:text-indigo-400 transition">Skills</a>
            <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
            <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <p className="text-indigo-400 font-mono text-sm mb-3">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
          Sai Sahana.
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-slate-400 mb-6">
          Computer Science Student & Software Developer.
        </h2>
        <p className="max-w-xl text-slate-400 leading-relaxed mb-8">
          I build clean web applications, write efficient backend logic, and solve algorithmic challenges. Currently focused on full-stack development, database systems, and core computer science fundamentals.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition"
          >
            View Projects
          </a>
          <a
            href="https://github.com/saisahana656-b1ip"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 font-medium transition"
          >
            GitHub Profile
          </a>
        </div>
      </header>

      {/* About & Skills */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800/60">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">About Me</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              I am pursuing a degree in Computer Science with hands-on experience in object-oriented programming, low-level memory management in C, and relational database design.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Whether debugging complex system architecture concepts or building responsive React interfaces, I enjoy turning technical problems into reliable software.
            </p>
          </div>

          <div id="skills">
            <h3 className="text-2xl font-bold text-white mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 text-sm font-medium rounded-md bg-slate-900 border border-slate-800 text-indigo-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800/60">
        <h3 className="text-2xl font-bold text-white mb-8">Featured Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 transition flex flex-col justify-between"
            >
              <div>
                <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-indigo-400">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-slate-200 hover:text-indigo-400 transition inline-flex items-center gap-1"
                >
                  View Repository →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-800/60 text-center">
        <h3 className="text-2xl font-bold text-white mb-3">Get In Touch</h3>
        <p className="text-slate-400 max-w-md mx-auto mb-6">
          Open to internships, collaborative projects, and software engineering opportunities.
        </p>
        <a
          href="https://github.com/saisahana656-b1ip"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition"
        >
          Connect on GitHub
        </a>
        <p className="text-xs text-slate-600 mt-12">
          Built with React & Tailwind CSS • Sai Sahana
        </p>
      </footer>
    </div>
  );
}
