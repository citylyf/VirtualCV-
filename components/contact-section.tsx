"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

export function ContactSection() {
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

  const handleSendEmail = () => {
    const email = "bless.masemola10@gmail.com"
    const subject = "Inquiry from Portfolio Website"
    const body =
      "Hello Blessing,\n\nI visited your portfolio website and would like to get in touch with you.\n\nBest regards,"

    // Create Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Open Gmail in a new tab
    window.open(gmailUrl, "_blank")
  }

  const handleEmailClick = () => {
    const email = "bless.masemola10@gmail.com"
    const subject = "Contact from Portfolio"
    const body = "Hello Blessing,\n\nI found your contact information on your portfolio website.\n\n"

    // Create Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Open Gmail in a new tab
    window.open(gmailUrl, "_blank")
  }

  const handlePhoneClick = () => {
    // For mobile devices, this will open the phone dialer
    window.open("tel:+27672972191", "_self")
  }

  const handleLinkedInClick = () => {
    // Open LinkedIn in a new tab
   
    window.open("https://www.linkedin.com/in/blessing-masemola-600718225/", "_blank")
  }

  const handleGitHubClick = () => {
    // Open GitHub in a new tab
    
    window.open("https://github.com/citylyf", "_blank")
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`py-20 bg-white dark:bg-black transition-all duration-500 ${sidebarExpanded ? "ml-64" : "ml-16"}`}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">Get In Touch</h2>
          <p className="text-gray-700 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate or discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <Card
          className={`bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border-gray-300 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 hover:scale-110 ${
            isVisible ? "animate-scale-in" : "opacity-0 scale-95"
          }`}
          style={{ animationDelay: "300ms" }}
        >
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-6">Let's Connect</h3>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div
                className="flex flex-col items-center text-black dark:text-white group hover:scale-125 transition-transform duration-300 cursor-pointer"
                onClick={handleEmailClick}
              >
                <Mail className="h-8 w-8 mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-200" />
                <p className="text-sm text-gray-700 dark:text-gray-400">Email</p>
                <p className="font-medium">bless.masemola10@gmail.com</p>
              </div>

              <div
                className="flex flex-col items-center text-black dark:text-white group hover:scale-125 transition-transform duration-300 cursor-pointer"
                onClick={handlePhoneClick}
              >
                <Phone className="h-8 w-8 mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-200" />
                <p className="text-sm text-gray-700 dark:text-gray-400">Phone</p>
                <p className="font-medium">0672972191</p>
              </div>

              <div className="flex flex-col items-center text-black dark:text-white group hover:scale-125 transition-transform duration-300 cursor-pointer">
                <MapPin className="h-8 w-8 mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-200" />
                <p className="text-sm text-gray-700 dark:text-gray-400">Location</p>
                <p className="font-medium">Tembisa, 1632</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleSendEmail}
                className="flex items-center gap-2 bg-gray-800 text-white hover:bg-black dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-125 hover:shadow-lg group"
              >
                <Mail className="h-4 w-4 group-hover:rotate-12 transition-transform duration-200" />
                Send Email
              </Button>

              <Button
                variant="outline"
                onClick={handleLinkedInClick}
                className="flex items-center gap-2 text-black dark:text-white border-gray-500 dark:border-gray-600 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white bg-transparent transition-all duration-300 hover:scale-125 hover:shadow-lg group"
              >
                <Linkedin className="h-4 w-4 group-hover:rotate-12 transition-transform duration-200" />
                LinkedIn
              </Button>

              <Button
                variant="outline"
                onClick={handleGitHubClick}
                className="flex items-center gap-2 text-black dark:text-white border-gray-500 dark:border-gray-600 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white bg-transparent transition-all duration-300 hover:scale-125 hover:shadow-lg group"
              >
                <Github className="h-4 w-4 group-hover:rotate-12 transition-transform duration-200" />
                GitHub
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
