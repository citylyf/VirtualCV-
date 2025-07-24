"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar, BadgeIcon as Certificate } from "lucide-react"
import { AcademicRecordModal } from "./academic-record-modal"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [sidebarExpanded, setSidebarExpanded] = useState(true)
  const [isAcademicModalOpen, setIsAcademicModalOpen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Check sidebar state
    const checkMobile = () => {
      setSidebarExpanded(window.innerWidth >= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return (
    <>
      <section
        ref={sectionRef}
        id="about"
        className={`py-20 bg-gray-100 dark:bg-gray-900 transition-all duration-500 ${sidebarExpanded ? "ml-64" : "ml-16"}`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">About Me</h2>
            <p className="text-gray-700 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Passionate about technology with a strong foundation in IT systems and network infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card
              className={`bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-all duration-500 hover:scale-125 hover:shadow-2xl hover:z-10 cursor-pointer ${isVisible ? "animate-slide-in-left" : "opacity-0 -translate-x-10"}`}
              onClick={() => setIsAcademicModalOpen(true)}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="h-6 w-6 text-gray-700 dark:text-gray-300 animate-pulse" />
                  <h3 className="text-xl font-semibold text-black dark:text-white">Education</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-black dark:text-white">North-West University</h4>
                    <p className="text-gray-700 dark:text-gray-300">BSc in Information Technology</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
                      <Calendar className="h-4 w-4" />
                      <span>Expected Completion: 2025</span>
                    </div>
                    <div className="mt-2">
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs">
                        Overall GPA: 74
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 italic">
                      Click to view detailed academic record
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-all duration-500 hover:scale-125 hover:shadow-2xl hover:z-10 ${isVisible ? "animate-slide-in-up" : "opacity-0 translate-y-10"}`}
              style={{ animationDelay: "200ms" }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-6 w-6 text-yellow-600 dark:text-yellow-400 animate-pulse" />
                  <h3 className="text-xl font-semibold text-black dark:text-white">Achievements</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <Badge className="bg-yellow-200 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-200 mb-2 hover:scale-125 transition-transform duration-300 cursor-pointer">
                      Golden Key International Honour Society
                    </Badge>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">Member since 2023</p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">Recognized for academic excellence</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-all duration-500 hover:scale-125 hover:shadow-2xl hover:z-10 ${isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-10"}`}
              style={{ animationDelay: "400ms" }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Certificate className="h-6 w-6 text-blue-600 dark:text-blue-400 animate-pulse" />
                  <h3 className="text-xl font-semibold text-black dark:text-white">Certifications</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-black dark:text-white">Siemens TIA-MICRO S7-1200</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">Micro-Course Certificate</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
                      <Calendar className="h-4 w-4" />
                      <span>Issued by Siemens, 2024</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card
            className={`bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-all duration-500 hover:shadow-2xl hover:scale-110 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
            style={{ animationDelay: "600ms" }}
          >
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Professional Summary</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Final-year BSc Information Technology student at North-West University with hands-on experience in
                networking, software development, and systems design. Proven ability in technical support roles through
                internships and student assistantships. Passionate about growing professionally in a role that values
                personal ability, technical skills, and a strong commitment to excellence, while offering opportunities
                for continued development and contribution.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <AcademicRecordModal isOpen={isAcademicModalOpen} onClose={() => setIsAcademicModalOpen(false)} />
    </>
  )
}
