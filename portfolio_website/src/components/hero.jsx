import Button from "./ui/button"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 py-8 sm:px-8"
    >
      {/* Background */}
     <video autoPlay muted loop playsInline
       className="absolute inset-0 h-full w-full object-cover opacity-20">
        <source src="/images/plasma-loop-ultralight.webm" type="video/webm" />
      </video>

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
          <span>Available for work</span>
        </div>

        {/* Heading */}
        <h1 className="max-w-6xl text-[14vw] font-semibold uppercase leading-[0.85] tracking-[-0.06em] text-primary sm:text-[11vw] lg:text-[7.8rem]">
          Building
          <br />
          immersive
          <br />
          web experiences
        </h1>

        {/* Description */}
        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end">
          <p className="max-w-xl text-sm leading-relaxed text-secondary sm:text-base">
            React developer focused on creating modern interfaces,
            interactive experiences and visually striking web design.
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
        <span>Calabaza</span>
        <span className="hidden sm:block">Scroll ↓</span>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[5] h-56 bg-gradient-to-b from-transparent via-background/60 to-background" />
    </section>
  )
}