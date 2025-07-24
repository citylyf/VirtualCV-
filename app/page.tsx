import { SidebarNavigation } from "@/components/sidebar-navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { AIAssistant } from "@/components/ai-assistant"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <SidebarNavigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-800 py-8 ml-16 md:ml-64 transition-all duration-500">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-gray-300 transition-colors duration-200">
            © 2024 Blessing Masemola. Built with passion for technology and innovation.
          </p>
        </div>
      </footer>

      {/* AI Assistant */}
      <AIAssistant />
    </div>
  )
}
