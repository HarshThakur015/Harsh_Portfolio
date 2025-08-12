const Skills = () => {
  const coreSkills = ["HTML", "CSS", "React.js", "Node.js", "MongoDB"]
  const otherSkills = ["Leadership", "Communication", "Figma", "Java", "C++"]

  const SkillBadge = ({ skill }: { skill: string }) => (
    <span className="inline-block bg-white/70 backdrop-blur-sm text-[#1a1a1a] px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
      {skill}
    </span>
  )

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1a1a1a] mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-[#b8956a] mx-auto"></div>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="font-serif font-semibold text-xl text-[#1a1a1a] mb-6 text-center">Core Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {coreSkills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-xl text-[#1a1a1a] mb-6 text-center">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {otherSkills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
