import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1a1a1a] mb-4">Education</h2>
          <div className="w-20 h-1 bg-[#b8956a] mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="card-hover bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-[#b8956a] rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="font-serif text-xl text-[#1a1a1a]">Chitkara University, Baddi</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-[#4b5563] mb-2">Bachelor of Engineering in Computer Science (B.E. CSE)</p>
              <p className="text-[#b8956a] font-semibold">CGPA: 9.67 (till 3rd semester)</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Education
