import Button from "./ui/button"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 py-8 sm:px-8"
    >
      {/* Top Hero Bar */}
      <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between text-xs uppercase tracking-[0.25em] text-secondary">
        <span>Max Moeller</span>
        <span className="hidden sm:block">Portfolio / 2026</span>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-center">
        
        {/* Availability */}
        <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-secondary">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span>Available for Work</span>
        </div>

        {/* Heading */}
        <h1 className="max-w-6xl text-[14vw] font-semibold uppercase leading-[0.85] tracking-[-0.06em] text-primary sm:text-[11vw] lg:text-[7.8rem]">
          Full-Stack
          <br />
          Software
          <br />
          Engineer
        </h1>

        {/* Description */}
        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end">
          <p className="max-w-xl text-sm leading-relaxed text-secondary sm:text-base">
            Sydney based developer building modern web applications with React,
            JavaScript, Node.js, Python and SQL. Focused on clean user
            experiences, scalable solutions and continuous learning.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Button href="#projects" size="lg">
              View Projects
            </Button>

            <Button href="#contact" variant="secondary" size="lg">
              Contact
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Details */}
      <div className="relative z-10 mx-auto flex max-w-6xl justify-between pb-6 text-xs uppercase tracking-[0.25em] text-secondary">
        <span>React · Node.js · Python</span>
        <span className="hidden sm:block">Scroll ↓</span>
      </div>
    </section>
  )
}