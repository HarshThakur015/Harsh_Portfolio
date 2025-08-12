import { Button } from "@/components/ui/button";
import { Download, MapPin } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1a1a1a] mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-[#b8956a] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="font-serif font-semibold text-2xl text-[#1a1a1a] mb-4">
                Hello! I&apos;m Harsh
              </h3>
              <p className="text-[#4b5563] leading-relaxed mb-6">
                A passionate full-stack developer skilled in React.js and
                Node.js, with a knack for creating seamless user experiences. I
                have a strong foundation in HTML, CSS, and MongoDB, with basic
                skills in Java and C++. I&apos;m a quick learner and team player
                with a drive to innovate.
              </p>

              <div className="flex items-center text-[#4b5563] mb-6">
                <MapPin className="h-5 w-5 mr-2 text-[#b8956a]" />
                <span>Chandigarh, India</span>
              </div>

              <Button className="bg-[#b8956a] text-white hover:bg-[#c4a882] transition-colors duration-300">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-[#e8e1d4] to-[#d4c4a8] rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
              <Image
                src="/profile-photo.jpg" // file must be in /public
                alt="Profile"
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
