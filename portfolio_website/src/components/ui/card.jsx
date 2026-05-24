
export default function ImageCard({ image, title, description }) {
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

      {/* Text content */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-6 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-primary">
          {description}
        </p>
      </div>
    </article>
  )
}