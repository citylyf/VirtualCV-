"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ImageIcon, ZoomIn } from "lucide-react"
import Image from "next/image"
import { ImageModal } from "./image-modal"

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [sidebarExpanded, setSidebarExpanded] = useState(true)
  const [selectedImage, setSelectedImage] = useState<{
    src: string
    alt: string
    title: string
  } | null>(null)
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

  const handleImageClick = (imageSrc: string, imageAlt: string, projectTitle: string) => {
    setSelectedImage({
      src: imageSrc,
      alt: imageAlt,
      title: projectTitle,
    })
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  const projects = [
    {
      title: "Corporate LAN Design in Cisco Packet Tracer",
      description:
        "Designed a secure, VLAN-segmented LAN for a medium-sized business with comprehensive network infrastructure including wired and wireless access, IP addressing, and remote access capabilities.",
      technologies: ["Cisco Packet Tracer", "VLANs", "Network Security", "IP Addressing"],
      features: [
        "Secure VLAN segmentation",
        "Wired and wireless access points",
        "IP addressing and subnetting",
        "Remote access configuration",
        "Budget planning and documentation",
      ],
      image: "/images/cisco-lan-topology.png",
      hasLiveDemo: false,
      hasViewCode: true,
      githubUrl: "https://github.com/citylyf/CompNetworks",
    },
    {
      title: "Java Property Management System",
      description:
        "Built a comprehensive OOP-based system for managing residential and business properties with advanced file handling and interface design.",
      technologies: ["Java", "OOP", "File I/O", "Interface Design"],
      features: [
        "Object-oriented architecture",
        "Property management for residential and business",
        "File I/O operations",
        "Interface and inheritance implementation",
        "Class-based structure",
      ],
      hasLiveDemo: false,
      hasViewCode: true,
      githubUrl: null, // Add GitHub URL when available
    },
    {
      title: "Clinic Chatbot System",
      description:
        "A comprehensive healthcare chatbot system providing 24-hour mobile healthcare access, appointment scheduling, and online consultation services with robust security measures for data protection and compliance.",
      technologies: ["Chatbot Development", "Healthcare IT", "Security", "Web Development"],
      features: [
        "24-hour appointment scheduling and maintenance",
        "Symptom assessment through AI chatbot",
        "Healthcare education and critical information",
        "Online consultation with virtual clinic agents",
        "User location tracking and identification",
        "Multi-user system (Admin, Agent, User)",
        "Medical assistance requests",
        "Data protection and compliance measures",
      ],
      image: "/images/clinic-chatbot-interface.png",
      hasLiveDemo: false,
      hasViewCode: true,
      githubUrl: "https://github.com/citylyf/Clinic-Chatbot",
    },
    {
      title: "Virtual CV",
      description:
        "An interactive, web-based curriculum vitae showcasing professional experience, skills, and achievements through modern web technologies with responsive design and dynamic content presentation.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      features: [
        "Interactive user interface design",
        "Responsive web development",
        "Dynamic content presentation",
        "Modern web technologies integration",
        "Professional portfolio showcase",
        "Mobile-first responsive design",
        "Dark/light theme support",
        "Smooth animations and transitions",
      ],
      image: "/images/virtual-cv-interface.png",
      hasLiveDemo: false,
      hasViewCode: true,
      isInProgress: true,
      githubUrl: "https://github.com/citylyf/Virtual-CV",
    },
  ]

  return (
    <>
      <section
        ref={sectionRef}
        id="projects"
        className={`py-20 bg-white dark:bg-black transition-all duration-500 ${sidebarExpanded ? "ml-64" : "ml-16"}`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">Academic Projects</h2>
            <p className="text-gray-700 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Showcasing technical expertise through hands-on academic projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`bg-gray-100 dark:bg-gray-900 border-gray-300 dark:border-gray-800 hover:border-gray-500 dark:hover:border-gray-600 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:z-10 group ${
                  isVisible ? "animate-slide-in-up" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-black dark:text-white text-lg mb-2 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  {project.isInProgress && (
                    <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 text-xs w-fit mb-2">
                      In Progress
                    </Badge>
                  )}
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Project Image */}
                    {project.image && (
                      <div
                        className="relative w-full h-48 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden group-hover:shadow-lg transition-all duration-300 cursor-pointer group/image"
                        onClick={() => handleImageClick(project.image!, `${project.title} Interface`, project.title)}
                      >
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={`${project.title} Interface`}
                          fill
                          className="object-contain p-2 group-hover/image:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                          <ImageIcon className="h-3 w-3" />
                          {project.title.includes("Cisco")
                            ? "Network Topology"
                            : project.title.includes("Chatbot")
                              ? "User Interface"
                              : "System Design"}
                        </div>
                        {/* Zoom overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-gray-800/90 rounded-full p-2">
                            <ZoomIn className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                          </div>
                        </div>
                      </div>
                    )}

                    <div>
                      <h4 className="text-black dark:text-white font-medium mb-2">Key Features:</h4>
                      <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1 max-h-32 overflow-y-auto">
                        {project.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="hover:text-black dark:hover:text-white transition-colors duration-200"
                          >
                            • {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-black dark:text-white font-medium mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-400 dark:hover:bg-gray-600 hover:scale-110 transition-all duration-200 cursor-pointer text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          if (project.githubUrl) {
                            window.open(project.githubUrl, "_blank")
                          } else {
                            // Show a message that the code will be available soon
                            alert("Repository will be available soon! Check back later.")
                          }
                        }}
                        className="border-gray-500 dark:border-gray-600 text-gray-800 dark:text-gray-300 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white bg-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg group w-full"
                      >
                        <Github className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-200" />
                        {project.githubUrl ? "View Code" : "Code Coming Soon"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={closeImageModal}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
          imageTitle={selectedImage.title}
        />
      )}
    </>
  )
}
