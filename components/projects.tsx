import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "Kickoff Central",
      description: "A web platform for managing kickoff events with participant tracking and scheduling.",
      tech: ["React.js", "Node.js", "MongoDB"],
      demo: "https://harshthakurkickofffcentral.netlify.app/", // Corrected link
      github: "https://github.com/kalviumcommunity/S84_HarshThakur_Capstone_KickOffCentral"
    },
    {
      title: "Chuck Norris Joke App",
      description: "A fun app that fetches and displays random Chuck Norris jokes from an API.",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "https://ultimatedadjoke.netlify.app/", // Placeholder link
      github: "https://github.com/HarshThakur015/ChuckNorrisJoke", // Placeholder link
    },
    {
      title: "SiteTracker Extension",
      description: "A browser extension that tracks your browsing habits, monitors time spent on different websites, and provides productivity insights.",
      tech: ["JavaScript", "Chrome Extension API", "Local Storage", "CSS"],
     //emo: "#", // Placeholder link
      github: "https://github.com/HarshThakur015/Site_Time_Tracker", // Placeholder link
    },
    {
      title: "Moodify",
      description: "A music app that analyzes your mood and recommends songs that match your current emotional state using AI-powered mood detection.",
      tech: ["React.js", "Python", "Machine Learning", "Spotify API", "TensorFlow"],
      demo: "https://moodify-umwm.onrender.com", // Placeholder link
      github: "https://github.com/HarshThakur015/Moodify", // Placeholder link
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1a1a1a] mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-[#b8956a] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-[#1a1a1a]">{project.title}</CardTitle>
                <CardDescription className="text-[#4b5563]">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#e8e1d4] text-[#1a1a1a] px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="bg-[#1a1a1a] text-white hover:bg-[#4b5563] transition-colors duration-300"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>

                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 bg-transparent"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
