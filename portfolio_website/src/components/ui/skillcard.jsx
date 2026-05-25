export default function SkillCard({ tech, index, isOpen }) {
  const Icon = tech.icon

  return (
    <div
      className={`group/card flex items-center justify-between border border-border bg-background/60 p-4 transition-all duration-500 hover:-translate-y-1 hover:border-accent hover:bg-white/3 ${
        isOpen
          ? "translate-y-0 opacity-100 blur-0"
          : "translate-y-4 opacity-0 blur-sm"
      }`}
      style={{
        transitionDelay: isOpen ? `${index * 70}ms` : "0ms",
      }}
    >
      <span className="text-xs uppercase tracking-[0.2em] text-primary">
        {tech.name}
      </span>

      <Icon className="text-2xl text-secondary transition-all duration-300 group-hover/card:scale-110 group-hover/card:text-accent group-hover/card:drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]" />
    </div>
  )
}