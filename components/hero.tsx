"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, ExternalLink } from "lucide-react"

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up opacity-0">
          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1a1a1a] mb-6">
            Hi, I&apos;m <span className="text-[#b8956a]">Harsh Thakur</span>
          </h1>
        </div>

        <div className="animate-fade-in-up opacity-0 animate-delay-200">
          <p className="text-xl sm:text-2xl text-[#4b5563] mb-8 font-medium">
            Full-Stack Developer | Problem Solver | Tech Enthusiast
          </p>
        </div>

        <div className="animate-fade-in-up opacity-0 animate-delay-400">
          <p className="text-lg text-[#4b5563] mb-12 max-w-2xl mx-auto leading-relaxed">
            A passionate full-stack developer skilled in React.js and Node.js, with a knack for creating seamless user
            experiences. Strong foundation in HTML, CSS, and MongoDB.
          </p>
        </div>

        <div className="animate-fade-in-up opacity-0 animate-delay-600">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-[#1a1a1a] text-white hover:bg-[#4b5563] transition-all duration-300 px-8 py-3"
            >
              View Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>

            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 px-8 py-3"
            >
              Contact Me
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="animate-fade-in-up opacity-0 animate-delay-600">
          <button
            onClick={() => scrollToSection("about")}
            className="text-[#4b5563] hover:text-[#1a1a1a] transition-colors duration-300"
          >
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
