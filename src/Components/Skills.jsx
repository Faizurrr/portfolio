import {
  SiCplusplus,
  SiHtml5,
  SiCss3,
    SiC,
    SiPostgresql,
    SiPython,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit
} from "react-icons/si";
import { FaCode } from "react-icons/fa";

export default function Navbar() {
  return (
    <section id="skills">
      <div className="bg-black min-h-screen pt-32">

        {/* Heading */}
        <div className="relative flex items-center justify-center">
          <h1 className="absolute text-8xl font-extrabold text-white/15">
            Skills
          </h1>
          <h1 className="relative text-6xl font-extrabold text-white">
            Skills
          </h1>
        </div>

        {/* Skills Summary */}
        <p className="max-w-3xl mx-auto text-center text-gray-500 text-lg leading-relaxed py-7">
          python, C ,C++, Data Structures & Algorithms, Object-Oriented Programming, HTML, CSS, JavaScript, React, Tailwind CSS,  Git, Problem Solving & Database
        </p>

        {/* Skills Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6 mt-10">
            <SkillCard icon={<SiPython />} title="Python" color="text-yellow-400" />

          <SkillCard icon={<SiCplusplus />} title="C++" color="text-blue-400" />
            <SkillCard icon={<SiC />} title="C Language" color="text-gray-300" />

          <SkillCard icon={<FaCode />} title="DSA" color="text-green-400" />
          <SkillCard icon={<FaCode />} title="OOP" color="text-yellow-400" />
          <SkillCard icon={<SiHtml5 />} title="HTML" color="text-orange-500" />
          <SkillCard icon={<SiCss3 />} title="CSS" color="text-blue-500" />
          <SkillCard icon={<SiJavascript />} title="JavaScript" color="text-yellow-300" />
          <SkillCard icon={<SiReact />} title="React" color="text-cyan-400" />
          <SkillCard icon={<SiTailwindcss />} title="Tailwind CSS" color="text-sky-400" />
          <SkillCard icon={<SiGit />} title="Git" color="text-red-500" />
           <SkillCard icon={<SiPostgresql />} title="PostgreSQL" color="text-sky-400" />
 


        </div>
      </div>
    </section>
  );
}

/* Skill Card Component */
function SkillCard({ icon, title, color }) {
  return (
    <div className="bg-zinc-900 rounded-xl p-6 flex flex-col items-center 
                    hover:scale-105 hover:shadow-xl transition duration-300">
      <div className={`text-5xl mb-3 ${color}`}>
        {icon}
      </div>
      <p className="text-white font-semibold">{title}</p>
    </div>
  );
}
