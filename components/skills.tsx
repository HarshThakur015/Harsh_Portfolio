const Skills = () => {
  const coreSkills = ["HTML", "CSS", "React.js", "Node.js", "MongoDB"]
  const otherSkills = ["Leadership", "Communication", "Figma", "Java", "C++"]

  const SkillBadge = ({ skill }: { skill: string }) => (
    <span className="inline-block bg-white/70 backdrop-blur-sm text-[#1a1a1a] px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
      {skill}
    </span>
  )

  return (
    <section
      id="skills"
      className="my-12 mx-auto py-12 px-2 sm:px-4 bg-white/30 rounded-xl shadow-lg max-w-3xl"
    >
      <div className="text-center mb-12">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1a1a1a] mb-4">
          Skills & Technologies
        </h2>
        <div className="w-20 h-1 bg-[#b8956a] mx-auto"></div>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="font-serif font-semibold text-xl text-[#1a1a1a] mb-4 text-center">
            Core Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {coreSkills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-serif font-semibold text-xl text-[#1a1a1a] mb-4 text-center">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {otherSkills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
