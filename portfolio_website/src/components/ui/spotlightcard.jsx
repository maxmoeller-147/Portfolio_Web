import { useRef } from "react"

export default function SpotlightCard({ children, className = "" }) {
  const cardRef = useRef(null)

  function handleMouseMove(e) {
    const card = cardRef.current
    const rect = card.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -3
    const rotateY = ((x - centerX) / centerX) * 3

    card.style.setProperty("--x", `${x}px`)
    card.style.setProperty("--y", `${y}px`)
    card.style.setProperty("--rotate-x", `${rotateX}deg`)
    card.style.setProperty("--rotate-y", `${rotateY}deg`)
  }

  function handleMouseLeave() {
    const card = cardRef.current

    card.style.setProperty("--rotate-x", "0deg")
    card.style.setProperty("--rotate-y", "0deg")
  }

  return (
    <div className="perspective-distant">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`
          relative
          overflow-hidden
          border
          border-border
          bg-surface/70
          backdrop-blur-xl
          transition-transform
          duration-300
          ease-out
          ${className}
        `}
        style={{
          transform:
            "rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg))",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(500px circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.12), transparent 40%)",
          }}
        />

        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/2 via-transparent to-transparent" />

        <div className="relative z-10 transform-[translateZ(40px)]">
          {children}
        </div>
      </div>
    </div>
  )
}