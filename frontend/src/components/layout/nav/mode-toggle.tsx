"use client"

import * as React from "react"
import { useAtom } from "jotai"

import { Moon, Sun } from "lucide-react"

import { themeAtom } from "@/atoms/theme-atom"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const [theme, setTheme] = useAtom(themeAtom)

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="!bg-transparent"
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] ${theme === "dark" ? "rotate-0 scale-0" : "rotate-0 scale-100"} transition-all`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] ${theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"} transition-all`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
