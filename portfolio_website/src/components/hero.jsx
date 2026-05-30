import Button from "./ui/button"

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center px-6 py-24 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:gap-8">
        
        {/* Small Label */}
        <span className="text-xs uppercase tracking-[0.25em] text-secondary sm:text-sm sm:tracking-[0.3em]">
          Frontend Developer • Creative Developer
        </span>

        {/* Main Heading */}
        <h1 className="max-w-4xl text-4xl font-semibold uppercase tracking-[0.06em] text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          Building dark,
          futuristic and immersive digital experiences
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-sm leading-relaxed text-secondary sm:text-base md:text-lg">
          React developer focused on creating modern interfaces,
          interactive experiences and visually striking web design.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-start gap-3 pt-4 sm:flex-row sm:flex-wrap sm:gap-4">
          <Button href="#projects" size="lg">
            View Projects
          </Button>

          <Button href="#contact" variant="secondary" size="lg">
            Contact
          </Button>
        </div>
      </div>
    </section>
  )
}