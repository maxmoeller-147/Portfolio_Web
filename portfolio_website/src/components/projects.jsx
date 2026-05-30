import ImageCard from "./ui/card"

const projects = [
  {
    title: "Project 1",
    description:
      "Zombies, zombies everywhere. A thrilling survival game set in a post-apocalyptic world.",
    image: "/images/zombi.jpg",
    tech: ["React", "Vite", "Tailwind"],
  },
  {
    title: "Project 2",
    description:
      "A big monster with a big heart. A heartwarming story of friendship and courage in a fantastical world.",
    image: "/images/face.jpg",
    tech: ["React", "Vite", "Tailwind"],
  },
  {
    title: "Project 3",
    description:
      "Red skies and dark secrets. A gripping mystery thriller that will keep you on the edge of your seat.",
    image: "/images/red.jpg",
    tech: ["React", "Vite", "Tailwind"],
  },
]

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
              image={project.image}
              title={project.title}
              description={project.description}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </section>
  )
}