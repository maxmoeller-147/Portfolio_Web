import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa"

const footerLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/maxmoeller-147",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/max-moeller-2b7282396/",
  },
  {
    icon: FaEnvelope,
    href: "mailto:your@email.com",
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-8xl flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        
        <a
          href="#home"
          className="text-xs font-semibold uppercase tracking-[0.25em] text-primary sm:text-sm sm:tracking-[0.35em]"
        >
          Max Moeller
        </a>

        <ul className="flex items-center gap-5 sm:gap-6">
          {footerLinks.map((link, index) => {
            const Icon = link.icon

            return (
              <li key={index}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    text-secondary
                    transition-all
                    duration-300
                    hover:text-accent
                  "
                >
                  <Icon
                    className="
                      text-lg
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]
                      sm:text-xl
                    "
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <p className="text-[10px] uppercase tracking-[0.15em] text-secondary sm:text-xs sm:tracking-[0.2em]">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}