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
        className="flex w-full items-center justify-between gap-4 p-5 text-left sm:gap-6 sm:p-6"
      >
        <div className="relative">
          <span className="pointer-events-none absolute -top-4 left-0 text-5xl font-black uppercase tracking-tight text-white/3 transition-all duration-500 group-hover:translate-x-2 group-hover:text-white/5 sm:text-6xl md:-top-6 md:text-8xl">
            {category.title}
          </span>

          <span className="relative text-[10px] uppercase tracking-[0.25em] text-secondary sm:text-xs sm:tracking-[0.3em]">
            0{index + 1}
          </span>

          <h3 className="relative mt-2 text-xl font-semibold uppercase tracking-widest text-primary sm:text-2xl sm:tracking-[0.12em] md:text-3xl">
            {category.title}
          </h3>

          <p className="relative mt-2 max-w-xl text-xs leading-relaxed text-secondary sm:text-sm">
            {category.description}
          </p>
        </div>

        <span
          className={`shrink-0 text-2xl text-secondary transition-transform duration-300 sm:text-3xl ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          {isOpen ? "-" : "+"}
        </span>
      </button>

      <div
        className={`grid transition-all duration-500 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 gap-3 border-t border-border p-5 sm:grid-cols-2 sm:gap-4 sm:p-6 md:grid-cols-3 lg:grid-cols-4">
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