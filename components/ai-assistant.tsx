"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  MessageCircle,
  Send,
  X,
  Bot,
  User,
  Minimize2,
  Maximize2,
  Download,
  Mic,
  MicOff,
  Globe,
  Sparkles,
  ExternalLink,
  Mail,
  Phone,
  Github,
  Linkedin,
  GraduationCap,
  Code,
  Award,
  RefreshCw,
} from "lucide-react"

interface Message {
  id: string
  type: "user" | "assistant"
  content: string
  timestamp: Date
  quickActions?: QuickAction[]
  suggestedQuestions?: string[]
}

interface QuickAction {
  label: string
  icon: React.ReactNode
  action: () => void
  variant?: "default" | "outline" | "secondary"
}

interface ConversationContext {
  previousTopics: string[]
  userInterests: string[]
  askedQuestions: string[]
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [language, setLanguage] = useState<"en" | "af">("en")
  const [context, setContext] = useState<ConversationContext>({
    previousTopics: [],
    userInterests: [],
    askedQuestions: [],
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const recognitionRef = useRef<any>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Initialize with welcome message
  useEffect(() => {
    const welcomeMessage: Message = {
      id: "welcome",
      type: "assistant",
      content:
        language === "en"
          ? "👋 Hi there! I'm Blessing's AI assistant. I'm here to help you learn everything about his background, skills, projects, and experience. What would you like to know?"
          : "👋 Hallo daar! Ek is Blessing se KI-assistent. Ek is hier om jou te help om alles oor sy agtergrond, vaardighede, projekte en ervaring te leer. Wat wil jy graag weet?",
      timestamp: new Date(),
      quickActions: [
        {
          label: language === "en" ? "View Projects" : "Bekyk Projekte",
          icon: <Code className="h-4 w-4" />,
          action: () => scrollToSection("projects"),
        },
        {
          label: language === "en" ? "Contact Info" : "Kontak Info",
          icon: <Mail className="h-4 w-4" />,
          action: () => scrollToSection("contact"),
        },
        {
          label: language === "en" ? "Skills" : "Vaardighede",
          icon: <Award className="h-4 w-4" />,
          action: () => scrollToSection("skills"),
        },
        {
          label: language === "en" ? "Education" : "Onderwys",
          icon: <GraduationCap className="h-4 w-4" />,
          action: () => scrollToSection("about"),
        },
      ],
      suggestedQuestions:
        language === "en"
          ? [
              "What programming languages does Blessing know?",
              "Tell me about his current internship",
              "What are his major projects?",
              "How can I contact Blessing?",
              "What is his educational background?",
            ]
          : [
              "Watter programmeertale ken Blessing?",
              "Vertel my van sy huidige internskap",
              "Wat is sy hoofprojekte?",
              "Hoe kan ek Blessing kontak?",
              "Wat is sy opvoedkundige agtergrond?",
            ],
    }

    if (messages.length === 0) {
      setMessages([welcomeMessage])
    }
  }, [language, messages.length])

  // Enhanced knowledge base with more detailed information
  const knowledgeBase = {
    education: {
      university: "North-West University",
      degree: "Bachelor of Science in Information Technology",
      campus: "Vanderbijlpark",
      expectedGraduation: "2025",
      overallGPA: "74",
      yearlyGPAs: {
        2022: "80 (Excellent performance in foundational courses)",
        2023: "74 (Strong performance across diverse IT modules)",
        2024: "71 (Consistent academic achievement)",
        2025: "60 (Current semester in progress)",
      },
      achievements: [
        "Golden Key International Honour Society member since 2023",
        "Recognized for academic excellence in Information Technology",
        "Consistent high performance across multiple academic years",
      ],
      keySubjects: [
        "Object-Oriented Programming",
        "Data Structures and Algorithms",
        "Computer Networks",
        "Database Systems",
        "Artificial Intelligence",
        "System Analysis and Design",
        "Information Security",
      ],
    },
    experience: {
      current: {
        title: "Field Application Engineer Intern",
        company: "RJ Connect",
        period: "2024-Present",
        responsibilities: [
          "Shadow experienced engineers on industrial automation projects",
          "Gain hands-on experience with Siemens systems and networking devices",
          "Assist with customer solutions involving industrial networking",
          "Support implementation and testing of automation systems",
          "Learn industry best practices in industrial networking",
        ],
        skills_gained: [
          "Industrial automation expertise",
          "Siemens systems proficiency",
          "Customer solution development",
          "Professional engineering practices",
        ],
      },
      previous: {
        title: "Student Assistant",
        company: "North-West University",
        period: "2024-2025",
        modules: [
          "Object-Oriented Programming (2025)",
          "Apps and Advanced User Interface Programming (2024)",
          "Mathematical Techniques (2024)",
        ],
        responsibilities: [
          "Tutor students in complex programming concepts",
          "Assist lecturers with coursework and assessments",
          "Support learners in understanding mathematical concepts",
          "Provide one-on-one academic support",
          "Help bridge knowledge gaps for struggling students",
        ],
      },
    },
    skills: {
      programming: {
        languages: ["Java", "Python", "C#", "JavaScript", "HTML", "TypeScript"],
        proficiency: {
          Java: "Advanced - Primary language for academic projects",
          Python: "Intermediate - Used for data analysis and scripting",
          "C#": "Intermediate - Desktop application development",
          JavaScript: "Intermediate - Web development and UI",
          HTML: "Advanced - Web markup and structure",
          TypeScript: "Intermediate - Type-safe JavaScript development",
        },
      },
      networking: {
        tools: ["Cisco Packet Tracer", "Network simulation and design"],
        concepts: ["VLANs", "IP Subnetting", "Remote Access", "Network Security"],
        experience: "Hands-on experience designing corporate LAN infrastructure",
      },
      tools: {
        development: ["Visual Studio", "NetBeans", "Git version control"],
        industrial: ["Siemens TIA Portal", "Industrial automation systems"],
        design: ["Network topology design", "System architecture planning"],
      },
      soft_skills: [
        "Critical & Analytical Thinking - Problem-solving approach to complex technical challenges",
        "Communication - Proven through tutoring and technical documentation",
        "Adaptability - Quick to learn new technologies and frameworks",
        "Problem-Solving - Systematic approach to debugging and optimization",
        "Leadership - Experience guiding and mentoring fellow students",
        "Time Management - Balancing academic, work, and project commitments",
      ],
    },
    projects: {
      "Corporate LAN Design": {
        description: "Comprehensive network infrastructure design for medium-sized business",
        technologies: ["Cisco Packet Tracer", "VLANs", "Network Security", "IP Addressing"],
        scope: "Complete enterprise network solution",
        features: [
          "Secure VLAN segmentation for different departments",
          "Comprehensive IP addressing scheme with subnetting",
          "Wireless and wired access point integration",
          "Remote access configuration for mobile workforce",
          "Network security implementation with firewalls",
          "Complete documentation including network topology",
          "Budget analysis and cost-benefit evaluation",
          "Scalability planning for future growth",
        ],
        learning_outcomes: [
          "Enterprise network design principles",
          "Security best practices implementation",
          "Project documentation and presentation skills",
        ],
      },
      "Java Property Management System": {
        description: "Object-oriented property management application with advanced features",
        technologies: ["Java", "OOP Principles", "File I/O", "Interface Design"],
        architecture: "Modular, maintainable object-oriented design",
        features: [
          "Property management for residential and commercial properties",
          "Advanced file I/O operations for data persistence",
          "Interface and inheritance implementation",
          "Polymorphism and encapsulation best practices",
          "Error handling and input validation",
          "User-friendly interface design",
          "Comprehensive testing and debugging",
        ],
        technical_highlights: [
          "Clean code architecture following SOLID principles",
          "Efficient data structures for property management",
          "Robust error handling and exception management",
        ],
      },
      "Clinic Chatbot System": {
        description: "Advanced healthcare chatbot with AI-driven features and multi-user support",
        technologies: ["Chatbot Development", "Healthcare IT", "Security", "Web Development"],
        scope: "Complete healthcare management platform",
        features: [
          "24/7 appointment scheduling and maintenance system",
          "AI-powered symptom assessment and triage",
          "Healthcare education and critical information delivery",
          "Online consultation with virtual clinic agents",
          "User location tracking and identification",
          "Multi-user system supporting Admin, Agent, and User roles",
          "Medical assistance request handling",
          "Comprehensive data protection and HIPAA compliance measures",
          "Emergency response and escalation protocols",
        ],
        impact: [
          "Improved healthcare accessibility",
          "Reduced administrative burden on medical staff",
          "Enhanced patient engagement and education",
        ],
      },
      "Virtual CV": {
        description: "Interactive, responsive web-based curriculum vitae with modern technologies",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        status: "In Progress - Continuous enhancement",
        features: [
          "Interactive user interface with smooth animations",
          "Fully responsive design for all device types",
          "Dynamic content presentation with real-time updates",
          "Dark/light theme support with system preference detection",
          "Professional portfolio showcase with project galleries",
          "Mobile-first responsive design approach",
          "Accessibility compliance (WCAG guidelines)",
          "SEO optimization for better discoverability",
          "Performance optimization for fast loading",
        ],
        technical_achievements: [
          "Modern React hooks and state management",
          "TypeScript for type safety and better development experience",
          "Advanced CSS animations and transitions",
        ],
      },
    },
    certifications: [
      {
        name: "Siemens TIA-MICRO S7-1200 Micro-Course Certificate",
        issuer: "Siemens",
        year: "2024",
        description: "Industrial automation and PLC programming certification",
        skills: ["PLC Programming", "Industrial Automation", "Siemens Systems"],
      },
    ],
    contact: {
      email: "bless.masemola10@gmail.com",
      phone: "067 297 2191",
      location: "Tembisa, 1632, South Africa",
      linkedin: "https://www.linkedin.com/in/blessing-masemola-600718225",
      github: "https://github.com/citylyf",
      availability: "Available for internships, part-time work, and collaboration opportunities",
    },
    personal: {
      name: "Blessing Masemola",
      languages: [
        "English (Fluent) - Primary communication language",
        "Afrikaans (Read and Write) - Secondary language proficiency",
      ],
      interests: [
        "Networking and Infrastructure Design",
        "Software Development and Programming",
        "Industrial Automation and IoT",
        "Artificial Intelligence and Machine Learning",
        "Cybersecurity and Information Security",
        "Technology Innovation and Emerging Trends",
      ],
      career_goals: [
        "Develop expertise in enterprise network architecture",
        "Contribute to innovative software development projects",
        "Build experience in industrial automation systems",
        "Pursue advanced certifications in networking and security",
      ],
      personality: [
        "Detail-oriented and analytical thinker",
        "Collaborative team player with leadership potential",
        "Passionate about continuous learning and improvement",
        "Strong problem-solving mindset with creative solutions",
      ],
    },
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false) // Close assistant after navigation
    }
  }

  const openExternalLink = (url: string) => {
    window.open(url, "_blank")
  }

  const generateContextualResponse = (
    question: string,
  ): { content: string; quickActions?: QuickAction[]; suggestedQuestions?: string[] } => {
    const lowerQuestion = question.toLowerCase()

    // Update context
    const newContext = { ...context }
    newContext.askedQuestions.push(lowerQuestion)

    // Determine topic and add to context
    let topic = ""
    if (
      lowerQuestion.includes("education") ||
      lowerQuestion.includes("university") ||
      lowerQuestion.includes("degree")
    ) {
      topic = "education"
    } else if (
      lowerQuestion.includes("experience") ||
      lowerQuestion.includes("work") ||
      lowerQuestion.includes("job")
    ) {
      topic = "experience"
    } else if (
      lowerQuestion.includes("skill") ||
      lowerQuestion.includes("programming") ||
      lowerQuestion.includes("technology")
    ) {
      topic = "skills"
    } else if (lowerQuestion.includes("project") || lowerQuestion.includes("portfolio")) {
      topic = "projects"
    }

    if (topic && !newContext.previousTopics.includes(topic)) {
      newContext.previousTopics.push(topic)
    }

    setContext(newContext)

    // Enhanced responses with more personality and detail
    if (
      lowerQuestion.includes("education") ||
      lowerQuestion.includes("university") ||
      lowerQuestion.includes("degree") ||
      lowerQuestion.includes("study")
    ) {
      return {
        content: `🎓 Blessing is currently in his final year pursuing a Bachelor of Science in Information Technology at North-West University's Vanderbijlpark campus, with graduation expected in 2025. 

His academic journey has been impressive:
• **Overall GPA: 74** - Demonstrating consistent academic excellence
• **2022: 80 GPA** - Outstanding performance in foundational courses
• **2023: 74 GPA** - Strong performance across diverse IT modules  
• **2024: 71 GPA** - Maintained high standards in advanced coursework
• **2025: 60 GPA** - Current semester in progress

🏆 **Notable Achievement**: Member of the Golden Key International Honour Society since 2023, recognizing his academic excellence.

**Key subjects mastered**: Object-Oriented Programming, Data Structures & Algorithms, Computer Networks, Database Systems, Artificial Intelligence, and Information Security.`,
        quickActions: [
          {
            label: "View Academic Record",
            icon: <GraduationCap className="h-4 w-4" />,
            action: () => {
              // Trigger academic modal
              const aboutSection = document.getElementById("about")
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" })
                // Simulate click on education card after scroll
                setTimeout(() => {
                  const educationCard = aboutSection.querySelector("[data-education-card]") as HTMLElement
                  if (educationCard) {
                    educationCard.click()
                  }
                }, 1000)
              }
            },
          },
        ],
        suggestedQuestions: [
          "What specific courses has he excelled in?",
          "Tell me about his Golden Key membership",
          "What was his best academic year?",
          "How does his GPA compare to his peers?",
        ],
      }
    }

    if (
      lowerQuestion.includes("experience") ||
      lowerQuestion.includes("work") ||
      lowerQuestion.includes("job") ||
      lowerQuestion.includes("intern")
    ) {
      return {
        content: `💼 Blessing has valuable hands-on experience in both industry and academia:

**🔧 Current Role: Field Application Engineer Intern at RJ Connect (2024-Present)**
• Shadows experienced engineers on industrial automation projects
• Gains hands-on experience with Siemens systems and networking devices  
• Assists with customer solutions involving industrial networking
• Supports implementation and testing of automation systems
• Learning industry best practices in professional engineering environments

**📚 Academic Role: Student Assistant at North-West University (2024-2025)**
• Tutors students in Object-Oriented Programming (2025)
• Assists with Apps and Advanced User Interface Programming (2024)
• Supports Mathematical Techniques coursework (2024)
• Provides one-on-one academic support to struggling students
• Helps bridge knowledge gaps through personalized tutoring approaches

This combination gives him both **industry exposure** and **teaching experience** - a unique blend that demonstrates his technical competence and communication skills! 🌟`,
        quickActions: [
          {
            label: "Contact RJ Connect",
            icon: <ExternalLink className="h-4 w-4" />,
            action: () => openExternalLink("https://rjconnect.co.za"),
          },
          {
            label: "View LinkedIn",
            icon: <Linkedin className="h-4 w-4" />,
            action: () => openExternalLink("https://www.linkedin.com/in/blessing-masemola-600718225"),
          },
        ],
        suggestedQuestions: [
          "What specific Siemens systems does he work with?",
          "How does he help students as a tutor?",
          "What industrial automation projects has he worked on?",
          "What skills has he gained from his internship?",
        ],
      }
    }

    if (
      lowerQuestion.includes("skill") ||
      lowerQuestion.includes("programming") ||
      lowerQuestion.includes("technology")
    ) {
      return {
        content: `💻 Blessing has developed a comprehensive technical skill set across multiple domains:

**🔥 Programming Languages:**
• **Java** (Advanced) - Primary language for academic projects and OOP mastery
• **Python** (Intermediate) - Data analysis, scripting, and automation
• **C#** (Intermediate) - Desktop application development
• **JavaScript & TypeScript** (Intermediate) - Modern web development
• **HTML** (Advanced) - Web markup and structure expertise

**🌐 Networking & Infrastructure:**
• **Cisco Packet Tracer** - Network simulation and design
• **VLANs & IP Subnetting** - Enterprise network segmentation
• **Network Security** - Firewall configuration and security protocols
• **Industrial Networking** - Siemens systems integration

**🛠️ Development Tools:**
• **Git** - Version control and collaborative development
• **Visual Studio & NetBeans** - Professional IDE proficiency
• **Siemens TIA Portal** - Industrial automation programming

**🧠 Soft Skills:**
• **Critical Thinking** - Systematic problem-solving approach
• **Communication** - Proven through tutoring and technical documentation
• **Adaptability** - Quick learner of new technologies and frameworks
• **Leadership** - Experience mentoring and guiding fellow students

His unique combination of **academic excellence**, **industry experience**, and **teaching ability** makes him a well-rounded IT professional! ⭐`,
        quickActions: [
          {
            label: "View Skills Section",
            icon: <Award className="h-4 w-4" />,
            action: () => scrollToSection("skills"),
          },
          {
            label: "See Projects",
            icon: <Code className="h-4 w-4" />,
            action: () => scrollToSection("projects"),
          },
        ],
        suggestedQuestions: [
          "Which programming language is he strongest in?",
          "What networking certifications does he have?",
          "How does he apply his skills in real projects?",
          "What tools does he use for development?",
        ],
      }
    }

    if (lowerQuestion.includes("project") || lowerQuestion.includes("portfolio")) {
      return {
        content: `🚀 Blessing has completed several impressive projects that showcase his technical expertise:

**🏢 Corporate LAN Design (Cisco Packet Tracer)**
• Designed secure, VLAN-segmented network for medium-sized business
• Complete enterprise solution with wireless/wired integration
• Comprehensive documentation including budget analysis
• **Impact**: Demonstrates enterprise-level network design skills

**☕ Java Property Management System**
• Object-oriented application using advanced OOP principles
• File I/O operations with robust data persistence
• Clean architecture following SOLID principles
• **Impact**: Shows mastery of software engineering fundamentals

**🏥 Clinic Chatbot System**
• 24/7 healthcare chatbot with AI-driven symptom assessment
• Multi-user platform (Admin, Agent, User roles)
• HIPAA-compliant data protection measures
• **Impact**: Addresses real-world healthcare accessibility challenges

**💼 Virtual CV (In Progress)**
• Interactive web-based resume using React, Next.js, TypeScript
• Responsive design with dark/light theme support
• Modern animations and accessibility compliance
• **Impact**: Showcases modern web development capabilities

Each project demonstrates different aspects of his skills - from **network infrastructure** to **software development** to **healthcare technology**! 🎯`,
        quickActions: [
          {
            label: "View All Projects",
            icon: <Code className="h-4 w-4" />,
            action: () => scrollToSection("projects"),
          },
          {
            label: "See GitHub",
            icon: <Github className="h-4 w-4" />,
            action: () => openExternalLink("https://github.com/citylyf"),
          },
        ],
        suggestedQuestions: [
          "Which project was the most challenging?",
          "What technologies did he learn from these projects?",
          "How do these projects relate to his career goals?",
          "Can I see the code for any of these projects?",
        ],
      }
    }

    if (
      lowerQuestion.includes("contact") ||
      lowerQuestion.includes("email") ||
      lowerQuestion.includes("phone") ||
      lowerQuestion.includes("reach")
    ) {
      return {
        content: `📞 Ready to connect with Blessing? Here are all the ways to reach him:

**📧 Email**: bless.masemola10@gmail.com
**📱 Phone**: 067 297 2191
**📍 Location**: Tembisa, 1632, South Africa

**🌐 Professional Profiles**:
• **LinkedIn**: Connect for professional networking
• **GitHub**: Explore his code repositories and contributions

**💼 Availability**: Currently available for:
• Internship opportunities
• Part-time work arrangements  
• Collaboration on interesting projects
• Networking and mentorship opportunities

**⚡ Response Time**: Blessing typically responds to professional inquiries within 24 hours. He's particularly interested in opportunities related to networking, software development, and industrial automation!

Feel free to reach out - he's always excited to discuss technology, share experiences, or explore potential collaborations! 🤝`,
        quickActions: [
          {
            label: "Send Email",
            icon: <Mail className="h-4 w-4" />,
            action: () => {
              const email = "bless.masemola10@gmail.com"
              const subject = "Inquiry from Portfolio Website"
              const body =
                "Hello Blessing,\n\nI visited your portfolio website and would like to get in touch with you.\n\nBest regards,"
              const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
              window.open(gmailUrl, "_blank")
            },
          },
          {
            label: "Call Now",
            icon: <Phone className="h-4 w-4" />,
            action: () => window.open("tel:+27672972191", "_self"),
          },
          {
            label: "LinkedIn",
            icon: <Linkedin className="h-4 w-4" />,
            action: () => openExternalLink("https://www.linkedin.com/in/blessing-masemola-600718225"),
          },
          {
            label: "GitHub",
            icon: <Github className="h-4 w-4" />,
            action: () => openExternalLink("https://github.com/citylyf"),
          },
        ],
        suggestedQuestions: [
          "What's the best way to reach him?",
          "Is he available for freelance work?",
          "What type of opportunities is he looking for?",
          "How quickly does he respond to messages?",
        ],
      }
    }

    // Contextual follow-up responses
    if (newContext.previousTopics.length > 0) {
      const recentTopic = newContext.previousTopics[newContext.previousTopics.length - 1]
      return {
        content: `🤔 I'd be happy to help you learn more about Blessing! Based on our conversation, you seem interested in his ${recentTopic}. 

Here are some areas I can provide detailed information about:

🎓 **Education**: Academic performance, coursework, and achievements at North-West University
💼 **Experience**: Current internship at RJ Connect and student assistant role
💻 **Technical Skills**: Programming languages, networking expertise, and development tools
🚀 **Projects**: Detailed breakdown of his academic and personal projects
📞 **Contact**: How to reach him and his availability for opportunities
🏆 **Achievements**: Certifications, honors, and professional recognition

What specific aspect would you like to explore further? I can provide detailed insights, suggest relevant sections to visit, or help you connect with Blessing directly! ✨`,
        suggestedQuestions: [
          "What makes Blessing stand out as a candidate?",
          "How do his skills match current industry needs?",
          "What are his career aspirations?",
          "Can you compare his different projects?",
        ],
      }
    }

    // Default response with personality
    return {
      content: `🌟 Great question! I'm here to help you discover everything about Blessing Masemola - a talented final-year IT student with impressive hands-on experience.

I can provide detailed information about:

🎯 **His Background**: Education at North-West University, academic achievements, and Golden Key membership
🔧 **Professional Experience**: Current internship at RJ Connect and student assistant role
💡 **Technical Expertise**: Programming skills, networking knowledge, and development tools
🚀 **Notable Projects**: From corporate network design to healthcare chatbots
📈 **Career Goals**: His aspirations in networking, software development, and industrial automation
📞 **Getting in Touch**: Contact information and availability for opportunities

What specific aspect interests you most? I can dive deep into any area and even help you connect with Blessing directly! 🚀`,
      suggestedQuestions: [
        "What programming languages does Blessing know?",
        "Tell me about his current internship at RJ Connect",
        "What are his most impressive projects?",
        "How can I contact Blessing?",
        "What makes him unique as an IT professional?",
      ],
    }
  }

  // Voice recognition setup
  useEffect(() => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition
      recognitionRef.current = new SpeechRecognition()
      recognitionRef.current.continuous = false
      recognitionRef.current.interimResults = false
      recognitionRef.current.lang = language === "en" ? "en-US" : "af-ZA"

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setInputValue(transcript)
        setIsListening(false)
      }

      recognitionRef.current.onerror = () => {
        setIsListening(false)
      }

      recognitionRef.current.onend = () => {
        setIsListening(false)
      }
    }
  }, [language])

  const startListening = () => {
    if (recognitionRef.current) {
      setIsListening(true)
      recognitionRef.current.start()
    }
  }

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop()
      setIsListening(false)
    }
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI thinking time with more realistic delay
    setTimeout(
      () => {
        const response = generateContextualResponse(inputValue)
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: "assistant",
          content: response.content,
          timestamp: new Date(),
          quickActions: response.quickActions,
          suggestedQuestions: response.suggestedQuestions,
        }
        setMessages((prev) => [...prev, assistantMessage])
        setIsTyping(false)
      },
      1500 + Math.random() * 1000,
    )
  }

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question)
    setTimeout(() => handleSendMessage(), 100)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const clearConversation = () => {
    setMessages([])
    setContext({ previousTopics: [], userInterests: [], askedQuestions: [] })
    // Re-initialize with welcome message
    setTimeout(() => {
      const welcomeMessage: Message = {
        id: "welcome-new",
        type: "assistant",
        content: "👋 Fresh start! I'm ready to help you learn about Blessing. What would you like to know?",
        timestamp: new Date(),
        quickActions: [
          {
            label: "View Projects",
            icon: <Code className="h-4 w-4" />,
            action: () => scrollToSection("projects"),
          },
          {
            label: "Contact Info",
            icon: <Mail className="h-4 w-4" />,
            action: () => scrollToSection("contact"),
          },
        ],
      }
      setMessages([welcomeMessage])
    }, 100)
  }

  const exportConversation = () => {
    const conversationText = messages
      .map(
        (msg) =>
          `[${msg.timestamp.toLocaleTimeString()}] ${msg.type === "user" ? "You" : "AI Assistant"}: ${msg.content}`,
      )
      .join("\n\n")

    const blob = new Blob([conversationText], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `blessing-ai-conversation-${new Date().toISOString().split("T")[0]}.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      >
        <MessageCircle className="h-6 w-6 group-hover:rotate-12 transition-transform duration-200" />
        <Sparkles className="h-3 w-3 absolute -top-1 -right-1 text-yellow-300 animate-pulse" />
      </Button>
    )
  }

  return (
    <Card
      className={`fixed bottom-6 right-6 z-50 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 shadow-2xl transition-all duration-300 ${
        isMinimized ? "w-80 h-16" : "w-96 h-[700px]"
      }`}
    >
      <CardHeader className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg text-black dark:text-white flex items-center gap-2">
            <div className="relative">
              <Bot className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            AI Assistant
            <Badge variant="secondary" className="text-xs ml-2">
              Enhanced
            </Badge>
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "af" : "en")}
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              title={language === "en" ? "Switch to Afrikaans" : "Switch to English"}
            >
              <Globe className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      {!isMinimized && (
        <>
          <CardContent className="p-0 h-[580px] flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] p-3 rounded-lg ${
                      message.type === "user"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.type === "assistant" && (
                        <Bot className="h-4 w-4 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      )}
                      {message.type === "user" && <User className="h-4 w-4 mt-0.5 text-white flex-shrink-0" />}
                      <div className="flex-1">
                        <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>

                        {/* Quick Actions */}
                        {message.quickActions && message.quickActions.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {message.quickActions.map((action, idx) => (
                              <Button
                                key={idx}
                                size="sm"
                                variant={action.variant || "outline"}
                                onClick={action.action}
                                className="text-xs h-7 px-2 bg-white/10 hover:bg-white/20 border-white/20 text-gray-800 dark:text-gray-200"
                              >
                                {action.icon}
                                <span className="ml-1">{action.label}</span>
                              </Button>
                            ))}
                          </div>
                        )}

                        {/* Suggested Questions */}
                        {message.suggestedQuestions && message.suggestedQuestions.length > 0 && (
                          <div className="mt-3">
                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">💡 Suggested questions:</p>
                            <div className="space-y-1">
                              {message.suggestedQuestions.slice(0, 3).map((question, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => handleSuggestedQuestion(question)}
                                  className="block text-xs text-left text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors duration-200"
                                >
                                  • {question}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Bot className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              {/* Conversation Controls */}
              <div className="flex justify-between items-center mb-3">
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearConversation}
                    className="text-xs text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  >
                    <RefreshCw className="h-3 w-3 mr-1" />
                    New Chat
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={exportConversation}
                    className="text-xs text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                    disabled={messages.length === 0}
                  >
                    <Download className="h-3 w-3 mr-1" />
                    Export
                  </Button>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {messages.length} messages
                </Badge>
              </div>

              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={
                    language === "en" ? "Ask me anything about Blessing..." : "Vra my enigiets oor Blessing..."
                  }
                  className="flex-1 text-sm bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-black dark:text-white"
                  disabled={isTyping}
                />

                {/* Voice Input Button */}
                {recognitionRef.current && (
                  <Button
                    onClick={isListening ? stopListening : startListening}
                    disabled={isTyping}
                    variant="outline"
                    className={`px-3 ${isListening ? "bg-red-100 border-red-300 text-red-600" : ""}`}
                  >
                    {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                  </Button>
                )}

                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-3"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </>
      )}
    </Card>
  )
}
