import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa"

import { SiVite, SiTailwindcss } from "react-icons/si"

const techStack = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "Vite", icon: SiVite },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
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

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {techStack.map((tech) => {
            const Icon = tech.icon

            return (
              <article
                key={tech.name}
                className="group border border-border bg-surface p-6 transition-all duration-300 hover:border-accent hover:bg-white/[0.03]"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm uppercase tracking-[0.2em] text-primary">
                    {tech.name}
                  </h3>

                  <Icon className="text-3xl text-secondary transition-all duration-300 group-hover:scale-110 group-hover:text-accent group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]" />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}