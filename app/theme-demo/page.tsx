"use client"

import { Button } from "@/components/ui/button"
// Import directly from the component files
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { useTheme } from "@/components/theme/theme-provider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Moon, Sun, Monitor } from "lucide-react"

export default function ThemeDemo() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#030303] py-20">
      <div className="container mx-auto px-4 space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Theme Switching Demo</h1>
          <p className="text-neutral-600 dark:text-white/60 mb-8 max-w-2xl mx-auto">
            This page demonstrates the theme switching functionality. The theme is persisted in local storage and
            respects the user's system preference by default.
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <Button
              variant={theme === "light" ? "default" : "outline"}
              onClick={() => setTheme("light")}
              className={
                theme === "light"
                  ? "bg-violet-500 hover:bg-violet-600 text-white"
                  : "border-neutral-300 dark:border-white/10"
              }
            >
              <Sun className="mr-2 h-4 w-4" />
              Light Mode
            </Button>
            <Button
              variant={theme === "dark" ? "default" : "outline"}
              onClick={() => setTheme("dark")}
              className={
                theme === "dark"
                  ? "bg-violet-500 hover:bg-violet-600 text-white"
                  : "border-neutral-300 dark:border-white/10"
              }
            >
              <Moon className="mr-2 h-4 w-4" />
              Dark Mode
            </Button>
            <Button
              variant={theme === "system" ? "default" : "outline"}
              onClick={() => setTheme("system")}
              className={
                theme === "system"
                  ? "bg-violet-500 hover:bg-violet-600 text-white"
                  : "border-neutral-300 dark:border-white/10"
              }
            >
              <Monitor className="mr-2 h-4 w-4" />
              System
            </Button>
          </div>

          <div className="inline-block">
            <ThemeToggle />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Light & Dark Mode</CardTitle>
              <CardDescription>Seamless theme switching with smooth transitions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-700 dark:text-neutral-300">
                The theme system supports light and dark modes with smooth transitions between them. All components
                automatically adapt to the current theme.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Preference</CardTitle>
              <CardDescription>Respects the user's system settings</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-700 dark:text-neutral-300">
                By default, the theme follows the user's system preference. This can be overridden by explicitly
                selecting a theme.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Persistent Preference</CardTitle>
              <CardDescription>User's choice is remembered</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-700 dark:text-neutral-300">
                The user's theme preference is stored in local storage, ensuring it persists between visits to the site.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 p-6 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Current Theme: {theme}</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              <h3 className="font-medium text-neutral-900 dark:text-white mb-2">Background Colors</h3>
              <div className="flex gap-2 flex-wrap">
                <div className="w-12 h-12 rounded bg-white dark:bg-[#030303] border border-neutral-200 dark:border-neutral-800"></div>
                <div className="w-12 h-12 rounded bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800"></div>
                <div className="w-12 h-12 rounded bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"></div>
                <div className="w-12 h-12 rounded bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700"></div>
              </div>
            </div>
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              <h3 className="font-medium text-neutral-900 dark:text-white mb-2">Text Colors</h3>
              <div className="space-y-1">
                <p className="text-neutral-900 dark:text-white">Primary Text</p>
                <p className="text-neutral-700 dark:text-neutral-300">Secondary Text</p>
                <p className="text-neutral-500 dark:text-neutral-400">Tertiary Text</p>
                <p className="text-neutral-400 dark:text-neutral-500">Muted Text</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
