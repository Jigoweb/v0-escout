"use client"

import { useTheme } from "@/components/theme/theme-provider"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 dark:border-neutral-800 dark:bg-neutral-950/50 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-900"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white/90 backdrop-blur-md border-white/20 dark:bg-neutral-950/90 dark:border-neutral-800"
      >
        <DropdownMenuItem
          className="cursor-pointer text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white"
          onClick={() => setTheme("light")}
        >
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white"
          onClick={() => setTheme("dark")}
        >
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
