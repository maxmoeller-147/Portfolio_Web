import { useState } from "react"
import SkillAccordion from "./ui/accordion"

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
    description: "Interfaces, styling and interactive user experiences.",
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
    description: "Server logic, APIs and application architecture.",
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
    description: "Data modelling, storage and database fundamentals.",
    technologies: [
      { name: "SQL", icon: FaDatabase },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Version control, debugging and developer workflow.",
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
    description: "Testing basics, API testing and deployment setup.",
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
  const [openIndex, setOpenIndex] = useState(0)

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

        <div className="space-y-4">
          {techCategories.map((category, index) => (
            <SkillAccordion
              key={category.title}
              category={category}
              index={index}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}