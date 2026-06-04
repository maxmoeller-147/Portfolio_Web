import Button from "../ui/button"

export default function ImageCard({ image, title, description, tech }) {
  return (
    <article className="group relative h-85 w-full overflow-hidden rounded-none border border-white/10 shadow-lg transition-all duration-500 hover:border-white/50 hover:shadow-[0_0_35px_rgba(255,255,255,0.12)] sm:h-95 md:h-105">
      {/* Silver Border Glow */}
      <div className="pointer-events-none absolute inset-0 z-20 rounded-none ring-1 ring-white/10 transition-all duration-500 group-hover:ring-white/40" />

      {/* Metallic Sweep */}
      <div className="pointer-events-none absolute inset-y-0 left-[-75%] z-30 w-1/2 skew-x-[-20deg] bg-linear-to-r from-transparent via-white/35 to-transparent opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100" />

      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 md:group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/45 to-transparent backdrop-blur-[1px] md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 opacity-100 transition-all duration-500 sm:p-6 md:translate-y-6 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
        <h3 className="text-xl font-bold uppercase tracking-[0.08em] text-white sm:text-2xl">
          {title}
        </h3>

        <p className="mt-2 text-xs leading-relaxed text-white/80 sm:text-sm">
          {description}
        </p>

        <ul className="mt-4 flex flex-wrap justify-center gap-2">
          {tech.map((item) => (
            <li
              key={item}
              className="border border-white/20 bg-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.15em] text-white/70 backdrop-blur-sm sm:px-3 sm:text-xs"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <Button href="#projects" size="md">
            Live View
          </Button>

          <Button href="#contact" variant="secondary" size="md">
            View Code
          </Button>
        </div>
      </div>
    </article>
  )
}