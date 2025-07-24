"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code,
  Network,
  Wrench,
  Brain,
  Server,
  Shield,
  Database,
  Monitor,
  Lightbulb,
  MessageCircle,
  Zap,
  Target,
} from "lucide-react"

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [sidebarExpanded, setSidebarExpanded] = useState(true)
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

  const technicalSkillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      iconColor: "text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-300 dark:border-blue-400/20",
      skills: ["Java", "Python", "C#"],
    },
    {
      title: "Networking & Infrastructure",
      icon: <Network className="h-6 w-6" />,
      iconColor: "text-green-600 dark:text-green-400",
      borderColor: "border-green-300 dark:border-green-400/20",
      skills: ["Cisco Packet Tracer", "VLANs", "IP Subnetting", "Remote Access"],
    },
    {
      title: "Development Tools",
      icon: <Wrench className="h-6 w-6" />,
      iconColor: "text-purple-600 dark:text-purple-400",
      borderColor: "border-purple-300 dark:border-purple-400/20",
      skills: ["Git", "Visual Studio", "NetBeans", "Siemens TIA Portal"],
    },
    {
      title: "Core Concepts",
      icon: <Brain className="h-6 w-6" />,
      iconColor: "text-orange-600 dark:text-orange-400",
      borderColor: "border-orange-300 dark:border-orange-400/20",
      skills: ["Object-Oriented Programming", "File I/O Operations", "Interface Design", "Client-Server Architecture"],
    },
    {
      title: "Industrial Automation",
      icon: <Server className="h-6 w-6" />,
      iconColor: "text-cyan-600 dark:text-cyan-400",
      borderColor: "border-cyan-300 dark:border-cyan-400/20",
      skills: ["Siemens Systems", "Industrial Networking", "Automation Projects"],
    },
    {
      title: "Network Security",
      icon: <Shield className="h-6 w-6" />,
      iconColor: "text-yellow-600 dark:text-yellow-400",
      borderColor: "border-yellow-300 dark:border-yellow-400/20",
      skills: ["VLAN Segmentation", "Network Design", "Security Protocols", "Cyber Security Intro"],
    },
    {
      title: "Database Management",
      icon: <Database className="h-6 w-6" />,
      iconColor: "text-pink-600 dark:text-pink-400",
      borderColor: "border-pink-300 dark:border-pink-400/20",
      skills: ["Data Structures", "File Systems", "Database Design"],
    },
    {
      title: "System Design",
      icon: <Monitor className="h-6 w-6" />,
      iconColor: "text-indigo-600 dark:text-indigo-400",
      borderColor: "border-indigo-300 dark:border-indigo-400/20",
      skills: ["System Architecture", "Network Topology", "Infrastructure Planning"],
    },
  ]

  const softSkillCategories = [
    {
      title: "Critical & Analytical Thinking",
      icon: <Lightbulb className="h-6 w-6" />,
      iconColor: "text-emerald-600 dark:text-emerald-400",
      borderColor: "border-emerald-300 dark:border-emerald-400/20",
      description:
        "Ability to analyze complex problems, evaluate information critically, and develop logical solutions through systematic thinking processes.",
      applications: [
        "System troubleshooting",
        "Network design analysis",
        "Code optimization",
        "Technical decision making",
      ],
    },
    {
      title: "Verbal & Written Communication",
      icon: <MessageCircle className="h-6 w-6" />,
      iconColor: "text-sky-600 dark:text-sky-400",
      borderColor: "border-sky-300 dark:border-sky-400/20",
      description:
        "Strong communication skills demonstrated through tutoring, technical documentation, and collaborative project work.",
      applications: ["Student tutoring", "Technical documentation", "Project presentations", "Team collaboration"],
    },
    {
      title: "Adaptability",
      icon: <Zap className="h-6 w-6" />,
      iconColor: "text-violet-600 dark:text-violet-400",
      borderColor: "border-violet-300 dark:border-violet-400/20",
      description:
        "Flexibility to learn new technologies, adapt to changing environments, and embrace innovative approaches to problem-solving.",
      applications: [
        "Learning new frameworks",
        "Adapting to industry changes",
        "Cross-platform development",
        "Technology transitions",
      ],
    },
    {
      title: "Problem-Solving",
      icon: <Target className="h-6 w-6" />,
      iconColor: "text-rose-600 dark:text-rose-400",
      borderColor: "border-rose-300 dark:border-rose-400/20",
      description:
        "Systematic approach to identifying, analyzing, and resolving technical challenges through creative and efficient solutions.",
      applications: ["Debugging complex code", "Network troubleshooting", "System optimization", "Process improvement"],
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`py-20 bg-gray-50 dark:bg-gray-900 transition-all duration-500 ${sidebarExpanded ? "ml-64" : "ml-16"}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Technical Skills Section */}
        <div id="technical-skills" className="scroll-mt-20">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">Technical Skills</h2>
            <p className="text-gray-700 dark:text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
              A comprehensive overview of my technical expertise across different domains of software development,
              networking, and systems design with hands-on experience in industrial automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkillCategories.map((category, index) => (
              <Card
                key={index}
                className={`bg-white dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:z-10 group ${category.borderColor} hover:border-opacity-50 ${
                  isVisible ? "animate-slide-in-up" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`${category.iconColor} group-hover:scale-125 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <h3 className="text-black dark:text-white font-semibold text-lg group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300 leading-tight">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className={`text-gray-700 dark:text-gray-400 text-sm hover:text-black dark:hover:text-gray-300 transition-colors duration-200 cursor-default ${
                          skill === "Cyber Security Intro" ? "text-yellow-700 dark:text-yellow-300 font-medium" : ""
                        }`}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="mt-20">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
            style={{ animationDelay: "900ms" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">Soft Skills</h2>
            <p className="text-gray-700 dark:text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
              Essential interpersonal and cognitive abilities that complement technical expertise and drive professional
              success in collaborative environments and complex problem-solving scenarios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softSkillCategories.map((category, index) => (
              <Card
                key={index}
                className={`bg-white dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:z-10 group ${category.borderColor} hover:border-opacity-50 ${
                  isVisible ? "animate-slide-in-up" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${1000 + index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`${category.iconColor} group-hover:scale-125 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <h3 className="text-black dark:text-white font-bold text-xl group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
                    {category.description}
                  </p>

                  <div>
                    <h4 className="text-black dark:text-white font-semibold mb-3 text-sm">Applications:</h4>
                    <div className="space-y-2">
                      {category.applications.map((application, idx) => (
                        <div
                          key={idx}
                          className="text-gray-700 dark:text-gray-400 text-sm hover:text-black dark:hover:text-gray-300 transition-colors duration-200 flex items-center gap-2"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${category.iconColor.replace("text-", "bg-")}`}
                          ></div>
                          {application}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <div
          className={`mt-20 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
          style={{ animationDelay: "1600ms" }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Languages</h3>
            <p className="text-gray-700 dark:text-gray-400">Communication skills across multiple languages</p>
          </div>

          <div className="flex justify-center gap-8">
            <div className="text-center group">
              <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-6 hover:scale-110 hover:shadow-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-750">
                <h4 className="text-black dark:text-white font-semibold mb-2">English</h4>
                <p className="text-gray-700 dark:text-gray-400 text-sm">Fluent</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-6 hover:scale-110 hover:shadow-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-750">
                <h4 className="text-black dark:text-white font-semibold mb-2">Afrikaans</h4>
                <p className="text-gray-700 dark:text-gray-400 text-sm">Read and Write</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
