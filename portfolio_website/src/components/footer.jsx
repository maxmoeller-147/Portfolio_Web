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
      <div className="mx-auto flex max-w-8xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        
        <a
          href="#home"
          className="text-sm font-semibold uppercase tracking-[0.35em] text-primary"
        >
          Max Moeller
        </a>

        <ul className="flex items-center gap-6">
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
                      text-xl
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]
                    "
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <p className="text-xs uppercase tracking-[0.2em] text-secondary">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}