import Button from "./ui/button"
import SpotlightCard from "./ui/spotlightcard"

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 sm:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SpotlightCard className="p-6 text-center sm:text-left sm:p-8 md:p-12">
          <span className="text-xs uppercase tracking-[0.25em] text-secondary sm:text-sm sm:tracking-[0.3em]">
            Contact
          </span>

          <h2 className="mt-4 max-w-3xl text-2xl font-semibold uppercase tracking-[0.04em] text-primary sm:text-3xl md:text-5xl">
            Let's Build Something Great.
          </h2>

          <p className="mt-4 max-w-xl text-xs leading-relaxed text-secondary sm:text-sm md:text-base">
            Full-Stack Developer based in Sydney, currently open to new
            opportunities and collaborations.
          </p>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-secondary md:text-base">
            I enjoy building modern web applications that combine clean user
            experiences with practical functionality. Whether you're looking
            for a developer to join your team, help build a product, or
            collaborate on a new idea, I'd love to hear from you.
          </p>

          <div className="mt-6 text-sm text-secondary">
            <p>Sydney, Australia</p>
            <p>Full-Stack Development · React · Node.js · Python</p>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-start sm:items-start sm:gap-4">
            <Button
              href="mailto:maximomoeller@gmail.com"
              size="lg"
            >
              Email Me
            </Button>

            <Button
              href="https://github.com/maxmoeller-147"
              variant="secondary"
              size="lg"
            >
              GitHub
            </Button>

            <Button
              href="https://www.linkedin.com/in/max-moeller-2b7282396/"
              variant="secondary"
              size="lg"
            >
              LinkedIn
            </Button>
          </div>
        </SpotlightCard>
      </div>
    </section>
  )
}