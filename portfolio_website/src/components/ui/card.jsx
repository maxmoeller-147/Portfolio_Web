import Button from "../ui/button"




export default function ImageCard({ image, title, description, tech}) {
  return (
    <article className="group relative h-100 w-80 overflow-hidden rounded-3xl shadow-lg">
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* blur overlay */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-50 group-hover:opacity-100">
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-6 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        
        {/* Title */}
        <h3 className="text-2xl font-bold uppercase tracking-[0.08em] text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-white/80">
          {description}
        </p>

        {/* Tech Stack */}
        <ul className="mt-4 flex flex-wrap gap-2 place-content-center">
          {tech.map((item) => (
            <li
              key={item}
              className="border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-3 mt-3">
          <Button href="#projects" className="px-4 py-2 text-xs">
            Live View
          </Button>

          <Button href="#contact" variant="secondary" className="px-4 py-2 text-xs">
            View Code
          </Button>
        </div>
      </div>
    </article>
  )
}