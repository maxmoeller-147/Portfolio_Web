import ImageCard from "./ui/card"
import { projects } from "../data/data_projects"

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 sm:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-secondary sm:text-sm sm:tracking-[0.3em]">
            Selected Work
          </span>

          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.06em] text-primary sm:text-4xl md:text-5xl md:tracking-[0.08em]">
            Projects
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ImageCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}