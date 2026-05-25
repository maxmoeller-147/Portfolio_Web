import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaServer,
  FaCodeBranch,
  FaBug,
  FaTerminal,
} from "react-icons/fa"

import {
  SiTailwindcss,
  SiVite,
  SiExpress,
  SiFlask,
  SiPostgresql,
  SiMongodb,
  SiJest,
  SiPytest,
  SiInsomnia,
} from "react-icons/si"

const techCategories = [
  {
    title: "Frontend",
    technologies: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
    ],
  },

  {
    title: "Backend",
    technologies: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "Python", icon: FaPython },
      { name: "Flask", icon: SiFlask },
      { name: "REST APIs", icon: FaServer },
    ],
  },

  {
    title: "Databases",
    technologies: [
      { name: "SQL", icon: FaDatabase },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },

  {
    title: "Tools & Workflow",
    technologies: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Branches & PRs", icon: FaCodeBranch },
      { name: "VS Code", icon: FaTerminal },
      { name: "Debugging", icon: FaBug },
      { name: "Documentation", icon: FaTerminal },
    ],
  },

  {
    title: "Testing & Deployment",
    technologies: [
      { name: "Jest", icon: SiJest },
      { name: "Pytest", icon: SiPytest },
      { name: "API Testing", icon: SiInsomnia },
      { name: "Environment Setup", icon: FaTerminal },
      { name: "Deployment", icon: FaServer },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="text-sm uppercase tracking-[0.3em] text-secondary">
            Tools & Technologies
          </span>

          <h2 className="mt-4 text-4xl font-semibold uppercase tracking-[0.08em] text-primary md:text-5xl">
            Tech Stack
          </h2>
        </div>

        <div className="space-y-12">
          {techCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-4 text-sm uppercase tracking-[0.25em] text-secondary">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {category.technologies.map((tech) => {
                  const Icon = tech.icon

                  return (
                    <article
                      key={tech.name}
                      className="group border border-border bg-surface p-6 transition-all duration-300 hover:border-accent hover:bg-white/[0.03]"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm uppercase tracking-[0.2em] text-primary">
                          {tech.name}
                        </h4>

                        <Icon className="text-3xl text-secondary transition-all duration-300 group-hover:scale-110 group-hover:text-accent group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]" />
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}