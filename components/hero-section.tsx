"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, ChevronDown } from "lucide-react"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [sidebarExpanded, setSidebarExpanded] = useState(true)
  const fullText = "Hi, I'm Blessing Masemola"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    // Check if we're on mobile to adjust sidebar state
    const checkMobile = () => {
      setSidebarExpanded(window.innerWidth >= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      clearInterval(timer)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const downloadCV = () => {
    // Create CV content as HTML with clickable links - optimized for 2 pages
    const cvContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Blessing Masemola - CV</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            line-height: 1.3; 
            margin: 20px; 
            color: #333; 
            font-size: 11px;
        }
        .header { 
            text-align: center; 
            margin-bottom: 15px; 
            border-bottom: 1px solid #333; 
            padding-bottom: 10px; 
        }
        .header h1 { 
            margin: 0; 
            font-size: 20px; 
            color: #2c3e50; 
        }
        .contact-info { 
            margin: 5px 0; 
            font-size: 10px;
        }
        .contact-info a { 
            color: #2980b9; 
            text-decoration: none; 
        }
        .contact-info a:hover { 
            text-decoration: underline; 
        }
        .section { 
            margin: 12px 0; 
        }
        .section h2 { 
            color: #2c3e50; 
            border-bottom: 1px solid #bdc3c7; 
            padding-bottom: 2px; 
            margin-bottom: 8px; 
            font-size: 14px;
        }
        .section h3 { 
            color: #34495e; 
            margin-top: 8px; 
            margin-bottom: 4px; 
            font-size: 12px;
        }
        .job-title { 
            font-weight: bold; 
            color: #2980b9; 
        }
        .company { 
            font-style: italic; 
            color: #7f8c8d; 
        }
        .date { 
            float: right; 
            color: #7f8c8d; 
            font-size: 10px; 
        }
        ul { 
            margin: 5px 0; 
            padding-left: 15px; 
        }
        li { 
            margin: 2px 0; 
            font-size: 10px;
        }
        .download-note { 
            background: #e8f4fd; 
            border: 1px solid #bee5eb; 
            padding: 6px 10px; 
            border-radius: 4px; 
            margin: 10px 0; 
            text-align: center; 
            color: #0c5460;
            font-size: 11px;
        }
        .print-button {
            background: #2980b9;
            color: white;
            padding: 4px 8px;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            font-size: 11px;
            margin: 3px;
        }
        .print-button:hover {
            background: #1f618d;
        }
        .two-column {
            display: flex;
            gap: 15px;
        }
        .column {
            flex: 1;
        }
        .compact-list li {
            font-size: 10px;
            margin: 1px 0;
        }
        .project-item {
            margin-bottom: 8px;
        }
        .project-item h3 {
            margin-bottom: 2px;
        }
        .project-item p {
            margin: 2px 0;
            font-size: 9px;
        }
        .project-item ul {
            margin: 3px 0;
        }
        @media print { 
            body { 
                margin: 15px; 
                font-size: 10px;
            } 
            .download-note, .print-button { 
                display: none; 
            }
            .section {
                margin: 8px 0;
            }
            .section h2 {
                font-size: 12px;
                margin-bottom: 6px;
            }
            .section h3 {
                font-size: 11px;
                margin: 6px 0 3px 0;
            }
            li {
                font-size: 9px;
                margin: 1px 0;
            }
        }
    </style>
</head>
<body>
    <div class="download-note">
        <p style="margin: 3px 0;"><strong>💡 To save as PDF:</strong> Press <kbd>Ctrl+P</kbd> (or <kbd>Cmd+P</kbd> on Mac) and select "Save as PDF"</p>
        <button class="print-button" onclick="window.print()">🖨️ Print / Save as PDF</button>
    </div>

    <div class="header">
        <h1>Blessing Masemola</h1>
        <div class="contact-info">
            18 Thami Mnyele Circle, Sedibeng Section, Tembisa 1632<br>
            <a href="tel:+27672972191">067 297 2191</a> | <a href="mailto:bless.masemola10@gmail.com">bless.masemola10@gmail.com</a><br>
            <a href="https://www.linkedin.com/in/blessing-masemola-600718225" target="_blank">LinkedIn</a> | 
            <a href="https://github.com/citylyf" target="_blank">GitHub</a>
        </div>
    </div>

    <div class="section">
        <h2>Career Objective</h2>
        <p>Final-year BSc Information Technology student at North-West University with hands-on experience in networking, software development, and systems design. Passionate about growing professionally in a role that values technical skills and commitment to excellence.</p>
    </div>

    <div class="two-column">
        <div class="column">
            <div class="section">
                <h2>Education</h2>
                <h3>North-West University <span class="date">Expected: 2025</span></h3>
                <p><strong>BSc Information Technology</strong></p>
                <p><em>Overall GPA: 74 | Golden Key Member (2023)</em></p>
            </div>

            <div class="section">
                <h2>Certifications</h2>
                <ul class="compact-list">
                    <li>Siemens TIA-MICRO S7-1200 Certificate (2024)</li>
                </ul>
            </div>

            <div class="section">
                <h2>Technical Skills</h2>
                <p><strong>Programming:</strong> Java, Python, C#, JavaScript, HTML, TypeScript</p>
                <p><strong>Networking:</strong> Cisco Packet Tracer, VLANs, IP Subnetting</p>
                <p><strong>Tools:</strong> Visual Studio, NetBeans, Git, Siemens TIA Portal</p>
                <p><strong>Concepts:</strong> OOP, File I/O, Interface Design</p>
            </div>

            <div class="section">
                <h2>Languages</h2>
                <ul class="compact-list">
                    <li>English – Fluent</li>
                    <li>Afrikaans – Read and Write</li>
                </ul>
            </div>
        </div>

        <div class="column">
            <div class="section">
                <h2>Professional Experience</h2>
                
                <h3><span class="job-title">Field Application Engineer Intern</span> <span class="date">2024-Present</span></h3>
                <p class="company">RJ Connect</p>
                <ul class="compact-list">
                    <li>Shadowed engineers on industrial automation projects</li>
                    <li>Supported Siemens networking and automation systems</li>
                    <li>Assisted in customer technical solutions</li>
                </ul>

                <h3><span class="job-title">Student Assistant</span> <span class="date">2024-2025</span></h3>
                <p class="company">North-West University</p>
                <ul class="compact-list">
                    <li>Tutored Object-Oriented Programming & Advanced UI</li>
                    <li>Assisted with Mathematical Techniques coursework</li>
                    <li>Provided one-on-one academic support</li>
                </ul>
            </div>

            <div class="section">
                <h2>Honors & Memberships</h2>
                <ul class="compact-list">
                    <li>Golden Key International Honour Society (2023)</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="section">
        <h2>Academic Projects</h2>
        
        <div class="project-item">
            <h3>Corporate LAN Design – Cisco Packet Tracer</h3>
            <p><em>Repository: <a href="https://github.com/citylyf/CompNetworks" target="_blank">github.com/citylyf/CompNetworks</a></em></p>
            <ul class="compact-list">
                <li>Designed secure, VLAN-segmented LAN for medium-sized business</li>
                <li>Implemented IP addressing, remote access, and complete network topology</li>
                <li>Comprehensive documentation including budgeting and design rationale</li>
            </ul>
        </div>

        <div class="project-item">
            <h3>Clinic Chatbot System</h3>
            <p><em>Repository: <a href="https://github.com/citylyf/Clinic-Chatbot" target="_blank">github.com/citylyf/Clinic-Chatbot</a></em></p>
            <ul class="compact-list">
                <li>24/7 healthcare chatbot with AI-driven symptom assessment and appointment booking</li>
                <li>Multi-user platform (Admin, Agent, User) with virtual agent support</li>
                <li>Data protection and compliance with healthcare IT standards</li>
            </ul>
        </div>

        <div class="project-item">
            <h3>Java Property Management System</h3>
            <ul class="compact-list">
                <li>OOP-based application with file I/O, interfaces, and inheritance</li>
                <li>Manages residential and business properties with modular codebase</li>
            </ul>
        </div>

        <div class="project-item">
            <h3>Virtual CV</h3>
            <p><em>Repository: <a href="https://github.com/citylyf/Virtual-CV" target="_blank">github.com/citylyf/Virtual-CV</a></em></p>
            <ul class="compact-list">
                <li>Interactive web-based CV using React, Next.js, and TypeScript</li>
                <li>Responsive design with dark/light theme support</li>
            </ul>
        </div>
    </div>

    <div class="section">
        <h2>References</h2>
        <div class="two-column">
            <div class="column">
                <p><strong>Willie du Plessis</strong><br>
                Technical Manager (RJ Connect)<br>
                <a href="mailto:Willie@rjconnect.co.za">Willie@rjconnect.co.za</a></p>
            </div>
            <div class="column">
                <p><strong>Bongisa Dyosoba</strong><br>
                Module Facilitator<br>
                <a href="mailto:Bongisa.Dyosoba@nwu.ac.za">Bongisa.Dyosoba@nwu.ac.za</a></p>
            </div>
        </div>
    </div>

    <div style="text-align: center; margin-top: 15px; padding-top: 10px; border-top: 1px solid #bdc3c7; font-size: 10px;">
        <p><em>Connect:</em> 
            <a href="https://www.linkedin.com/in/blessing-masemola-600718225" target="_blank">LinkedIn</a> | 
            <a href="https://github.com/citylyf" target="_blank">GitHub</a> | 
            <a href="mailto:bless.masemola10@gmail.com">Email</a> | 
            <a href="tel:+27672972191">Phone</a>
        </p>
    </div>
</body>
</html>`

    // Only open HTML in new tab for viewing - no automatic download
    const newWindow = window.open("", "_blank")
    if (newWindow) {
      newWindow.document.write(cvContent)
      newWindow.document.close()
    }
  }

  return (
    <section
      className={`min-h-screen flex items-center justify-center relative bg-gray-50 dark:bg-black overflow-hidden transition-all duration-500 ${
        sidebarExpanded ? "ml-64" : "ml-16"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gray-400 dark:border-gray-600 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-gray-500 dark:border-gray-500 rounded-lg rotate-45 animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-gray-600 dark:border-gray-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-gray-400 dark:border-gray-600 rounded-lg animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 border border-gray-300 dark:border-gray-700 rounded-full animate-ping opacity-10"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-black dark:via-gray-900 dark:to-black opacity-80"></div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-400 mb-6 leading-tight min-h-[1.2em]">
          {displayText}
          <span className="animate-blink">|</span>
        </h1>

        <p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up opacity-0"
          style={{ animationDelay: "2s", animationFillMode: "forwards" }}
        >
          Final-year BSc Information Technology student with hands-on experience in networking, software development,
          and systems design. Passionate about growing professionally with a strong commitment to excellence.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up opacity-0"
          style={{ animationDelay: "2.5s", animationFillMode: "forwards" }}
        >
          <Button
            onClick={scrollToProjects}
            className="bg-gray-800 hover:bg-black dark:bg-gray-800 dark:hover:bg-gray-700 text-white px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 flex items-center gap-2 hover:scale-125 hover:shadow-2xl group"
          >
            View Projects
            <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-200" />
          </Button>

          <Button
            variant="outline"
            onClick={downloadCV}
            className="border-gray-600 dark:border-gray-600 text-gray-800 dark:text-gray-300 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-800 dark:hover:text-white px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 flex items-center gap-2 bg-transparent hover:scale-125 hover:shadow-2xl group"
          >
            <Download className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-200" />
            View CV
          </Button>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow opacity-0 animate-fade-in"
        style={{ animationDelay: "3s", animationFillMode: "forwards" }}
      >
        <ChevronDown className="h-6 w-6 text-gray-600 dark:text-gray-400" />
      </div>
    </section>
  )
}
