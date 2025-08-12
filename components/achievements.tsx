import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Code, Users } from "lucide-react"

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "HackFest 2025 Leadership",
      description:
        "Led Team Aagaz to present Swarit at HackFest 2025, one of the largest national hackathons, showcasing a voice-based platform that empowers rural communities.",
    },
    {
      icon: Code,
      title: "DSA Hackathon Participant",
      description:
        "Participated in a DSA-focused hackathon, solving algorithmic problems and building logic-based solutions under timed conditions.",
    },
    {
      icon: Users,
      title: "Codewars 5.0 Competition",
      description:
        "Participated in Codewars 5.0 coding competition, demonstrating problem-solving skills and competitive programming abilities.",
    },
  ]

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1a1a1a] mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-[#b8956a] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <Card key={index} className="card-hover bg-white/70 backdrop-blur-sm border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#b8956a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="font-serif text-lg text-[#1a1a1a]">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#4b5563] leading-relaxed">
                    {achievement.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Achievements
