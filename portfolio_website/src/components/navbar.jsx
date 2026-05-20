import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
       
        {/* Logo */}
        <a href="#home" className="text-lg font-semibold uppercase tracking-[0.35em] text-primary">Max Moeller</a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-sm uppercase tracking-[0.25em] text-secondary transition-colors duration-300 hover:text-accent">{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)}
            className="border border-border px-4 py-2 text-xs uppercase tracking-[0.25em] text-primary md:hidden">
          Menu
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="flex flex-col gap-5 border-t border-border bg-background px-6 py-6 md:hidden">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm uppercase tracking-[0.25em] text-secondary transition-colors duration-300 hover:text-accent"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}