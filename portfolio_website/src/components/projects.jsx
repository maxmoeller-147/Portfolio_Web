import ImageCard from "./ui/card"

const projects = [
  {
    title: "Project 1",
    description:
      "zombies, zombies everywhere. A thrilling survival game set in a post-apocalyptic world.",
    image:
      "./public/images/zombi.jpg",
    tech: ["React", "Vite", "Tailwind"],
  },
  {
    title: "Project 2",
    description:
      "a big monster with a big heart. A heartwarming story of friendship and courage in a fantastical world.",
    image:
      "./public/images/face.jpg",
    tech: ["React", "Vite", "Tailwind"],
  },
  {
    title: "Project 3",
    description:
      "red skies and dark secrets. A gripping mystery thriller that will keep you on the edge of your seat.",
    image:
      "./public/images/red.jpg",
    tech: ["React", "Vite", "Tailwind"],
  },
]

export default function Projects() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-sm uppercase tracking-[0.3em] text-secondary">
            Selected Work
          </span>

          <h2 className="mt-4 text-4xl font-semibold uppercase tracking-[0.08em] text-primary md:text-5xl">
            Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ImageCard
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