import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Achievements from "@/components/achievements"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#faf9f7] to-[#f5f2ed]">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
    </main>
  )
}
