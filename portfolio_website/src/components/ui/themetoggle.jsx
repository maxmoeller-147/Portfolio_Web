import { useEffect, useState } from "react"
import Button from "./button"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle("light", !isDark)
  }, [isDark])

  return (
    <Button
      onClick={() => setIsDark(!isDark)}
      variant="secondary"
      className="px-4 py-2 text-xs"
    >
      {isDark ? "Light" : "Dark"}
    </Button>
  )
}