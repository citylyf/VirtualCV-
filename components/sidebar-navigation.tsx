"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, ChevronLeft, ChevronRight } from "lucide-react"

export function SidebarNavigation() {
  const [isDark, setIsDark] = useState(true)
  const [isExpanded, setIsExpanded] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth < 768) {
        setIsExpanded(false)
      }
    }

    // Initialize theme from localStorage or default to dark
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      const isDarkMode = savedTheme === "dark"
      setIsDark(isDarkMode)
      if (isDarkMode) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    } else {
      // Default to dark mode
      setIsDark(true)
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      // Switch to dark mode
      document.documentElement.classList.add("dark")
      document.body.style.backgroundColor = "#000000"
      localStorage.setItem("theme", "dark")
    } else {
      // Switch to light mode
      document.documentElement.classList.remove("dark")
      document.body.style.backgroundColor = "#ffffff"
      localStorage.setItem("theme", "light")
    }
  }

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded)
  }

  const handleNavClick = (sectionName: string) => {
    // Special handling for Skills to scroll to technical skills section
    if (sectionName === "Skills") {
      const technicalSkillsSection = document.getElementById("technical-skills")
      if (technicalSkillsSection) {
        technicalSkillsSection.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      const section = document.getElementById(sectionName.toLowerCase())
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const navItems = [
    { name: "About", icon: "👤" },
    { name: "Projects", icon: "💼" },
    { name: "Skills", icon: "🛠️" },
    { name: "Contact", icon: "📧" },
  ]

  return (
    <>
      {/* Sidebar */}
      <nav
        className={`fixed left-0 top-0 h-full z-50 backdrop-blur-md border-r transition-all duration-500 ease-in-out ${
          isExpanded ? "w-64" : "w-16"
        } ${isDark ? "bg-black/95 border-gray-800" : "bg-white/95 border-gray-200"}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div
            className={`p-4 border-b transition-colors duration-300 ${isDark ? "border-gray-800" : "border-gray-200"}`}
          >
            <div className="flex items-center justify-between">
              {isExpanded && (
                <h1
                  className={`text-lg font-bold animate-fade-in transition-colors duration-300 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Blessing Masemola
                </h1>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleSidebar}
                className={`transition-all duration-200 hover:scale-125 ${
                  isDark
                    ? "text-gray-300 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {isExpanded ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 py-6">
            <div className="space-y-2 px-3">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.name)}
                  className={`w-full flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-300 hover:scale-110 group relative ${
                    isExpanded ? "justify-start" : "justify-center"
                  } ${
                    isDark
                      ? "text-gray-300 hover:text-white hover:bg-gray-800"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-xl group-hover:scale-125 transition-transform duration-200">{item.icon}</span>
                  {isExpanded && <span className="font-medium animate-fade-in">{item.name}</span>}

                  {/* Tooltip for collapsed state */}
                  {!isExpanded && (
                    <div
                      className={`absolute left-full ml-2 px-2 py-1 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap ${
                        isDark ? "bg-gray-800 text-white" : "bg-gray-900 text-white"
                      }`}
                    >
                      {item.name}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div
            className={`p-4 border-t transition-colors duration-300 ${isDark ? "border-gray-800" : "border-gray-200"}`}
          >
            <div className={`flex items-center ${isExpanded ? "justify-between" : "justify-center"}`}>
              {isExpanded && (
                <span
                  className={`text-sm animate-fade-in transition-colors duration-300 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Theme
                </span>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className={`transition-all duration-200 hover:scale-125 ${
                  isDark
                    ? "text-gray-300 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isMobile && isExpanded && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsExpanded(false)} />
      )}
    </>
  )
}
