export default function Button({ href, children, variant = "primary", className = "", }) {
  const baseStyles =
    "inline-block border px-6 py-3 text-sm uppercase tracking-[0.2em] transition-colors duration-300"

  const variants = {
    primary:
      "border-border bg-surface text-primary hover:bg-primary hover:text-background",
    secondary:
      "border-border text-secondary hover:border-accent hover:text-accent",
  }

  return (
    <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </a>
  )
}