import SkillCard from "../ui/skillcard"

export default function SkillAccordion({
  category,
  index,
  isOpen,
  onToggle,
}) {
  return (
    <article className="group overflow-hidden border border-border bg-surface/70 transition-all duration-300 hover:border-accent">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 p-6 text-left"
      >
        <div className="relative">
          <span className="pointer-events-none absolute -top-6 left-0 text-6xl font-black uppercase tracking-tight text-white/[0.03] transition-all duration-500 group-hover:translate-x-2 group-hover:text-white/[0.05] md:text-8xl">
            {category.title}
          </span>

          <span className="relative text-xs uppercase tracking-[0.3em] text-secondary">
            0{index + 1}
          </span>

          <h3 className="relative mt-2 text-2xl font-semibold uppercase tracking-[0.12em] text-primary md:text-3xl">
            {category.title}
          </h3>

          <p className="relative mt-2 max-w-xl text-sm leading-relaxed text-secondary">
            {category.description}
          </p>
        </div>

        <span
          className={`text-3xl text-secondary transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        className={`grid transition-all duration-500 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid grid-cols-2 gap-4 border-t border-border p-6 md:grid-cols-3 lg:grid-cols-4">
            {category.technologies.map((tech, techIndex) => (
              <SkillCard
                key={tech.name}
                tech={tech}
                index={techIndex}
                isOpen={isOpen}
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}