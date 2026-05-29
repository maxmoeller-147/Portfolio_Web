import Button from "./ui/button"
import SpotlightCard from "./ui/spotlightcard"

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SpotlightCard className="p-8 md:p-12">
          <span className="text-sm uppercase tracking-[0.3em] text-secondary">
            Contact
          </span>

          <h2 className="mt-4 max-w-3xl text-4xl font-semibold uppercase tracking-[0.08em] text-primary md:text-5xl">
            Let’s build together. I’m currently open to new opportunities and collaborations.
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-secondary md:text-base">
            I’m open to full-time roles, freelance projects, and collaborations. Whether you have a project in mind or just want to say hi, feel free to reach out. I’m always excited to connect with like-minded individuals and explore new possibilities.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="mailto:your@email.com">Email Me</Button>

            <Button href="https://github.com/maxmoeller-147" variant="secondary">
              GitHub
            </Button>

            <Button
              href="https://www.linkedin.com/in/max-moeller-2b7282396/"
              variant="secondary"
            >
              LinkedIn
            </Button>
          </div>
        </SpotlightCard>
      </div>
    </section>
  )
}