export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  className = "",
}) 

{
  const baseStyles =
    "inline-flex items-center justify-center border uppercase transition-colors duration-300"

  const sizes = {
    sm: "px-2 py-1 text-[9px] tracking-[0.12em]",
    md: "px-4 py-2 text-xs tracking-[0.18em] sm:px-5 sm:py-2.5",
    lg: "px-6 py-3 text-sm tracking-[0.2em]",
  }

  const variants = {
    primary:
      "border-border bg-surface text-primary hover:bg-primary hover:text-background",

    secondary:
      "border-border text-secondary hover:border-accent hover:text-accent",
  }

  const styles = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  )
}