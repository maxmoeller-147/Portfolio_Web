export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center px-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        
        {/* Small Label */}
        <span className="text-sm uppercase tracking-[0.3em] text-secondary">
          Frontend Developer • Creative Developer
        </span>

        {/* Main Heading */}
        <h1 className="max-w-4xl text-5xl font-semibold uppercase tracking-[0.08em] text-primary md:text-7xl">
          Building dark,
          futuristic and immersive digital experiences
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-base leading-relaxed text-secondary md:text-lg">
          React developer focused on creating modern interfaces,
          interactive experiences and visually striking web design.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#projects"
            className="border border-border bg-surface px-6 py-3 text-sm uppercase tracking-[0.2em] text-primary transition-colors duration-300 hover:bg-primary hover:text-background"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-border px-6 py-3 text-sm uppercase tracking-[0.2em] text-secondary transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}