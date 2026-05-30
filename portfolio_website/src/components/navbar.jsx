import { useState } from "react"
import ThemeToggle from "./ui/themeToggle"
import Button from "./ui/button"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-4 py-4 sm:px-7 sm:py-5">
        
        {/* Logo */}
        <a
          href="#home"
          className="text-sm font-semibold uppercase tracking-[0.2em] text-primary sm:text-lg sm:tracking-[0.35em]"
        >
          Max Moeller
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm uppercase tracking-[0.25em] text-secondary transition-colors duration-300 hover:text-accent"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* Mobile Menu Button */}
          <Button
            onClick={() => setIsOpen(!isOpen)}
            variant="secondary"
            className="px-3 py-2 text-[10px] md:hidden"
          >
            {isOpen ? "Close" : "Menu"}
          </Button>

          {/* Desktop Theme Toggle */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

        </div>
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

          {/* Mobile Theme Toggle */}
          <li className="pt-2">
            <ThemeToggle />
          </li>
        </ul>
      )}
    </header>
  )
}