"use client"

import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Switch
      checked={theme === "dark"}
      setChecked={(checked) => setTheme(checked ? "dark" : "light")}
      label="Dark mode"
      size="sm"
    />
  )
}
