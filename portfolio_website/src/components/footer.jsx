import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const footerLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/maxmoeller-147",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/max-moeller-2b7282396/",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    href: "mailto:maximomoeller@gmail.com",
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-background/70 px-4 py-6 backdrop-blur-xl sm:px-7 sm:py-7">
      <div className="mx-auto flex max-w-8xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <a
          href="#home"
          className="text-sm font-semibold uppercase tracking-[0.2em] text-primary transition-colors duration-300 hover:text-accent sm:text-lg sm:tracking-[0.35em]"
        >
          Max Moeller
        </a>

        <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {footerLinks.map((link) => {
            const Icon = link.icon

            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  target={link.name === "Email" ? undefined : "_blank"}
                  rel={link.name === "Email" ? undefined : "noreferrer"}
                  aria-label={link.name}
                  className="group flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-secondary transition-colors duration-300 hover:text-accent"
                >
                  <Icon className="text-base transition-transform duration-300 group-hover:scale-110" />
                  <span className="hidden sm:inline">{link.name}</span>
                </a>
              </li>
            )
          })}
        </ul>

        <p className="text-xs uppercase tracking-[0.25em] text-secondary">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}