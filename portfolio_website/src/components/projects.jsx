import ImageCard from "./ui/card"

const projects = [
  {
    title: "MERN Chat App",
    description:
      "Full-stack real-time messaging platform featuring JWT authentication, Socket.IO communication, REST APIs and MongoDB persistence.",
    image: "/images/chat-app.jpg",
    tech: ["React", "Express", "MongoDB", "Socket.IO"],
  },
  {
    title: "Comic Store API",
    description:
      "Backend API built with Flask and PostgreSQL to manage business operations through scalable database relationships and CRUD endpoints.",
    image: "/images/comic-store.jpg",
    tech: ["Python", "Flask", "PostgreSQL"],
  },
  {
    title: "Flesh & Blood Deck Builder",
    description:
      "CLI application designed to streamline deck creation with matchup recommendations, utility tools and database-driven card management.",
    image: "/images/deck-builder.jpg",
    tech: ["Python", "SQLite"],
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