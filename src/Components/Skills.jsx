import {
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiC,
  SiPostgresql,
  
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";

const skills = [
  
  { icon: <SiCplusplus />, title: "C++", color: "text-blue-400" },
  { icon: <SiC />, title: "C Language", color: "text-gray-300" },
  { icon: <FaCode />, title: "DSA", color: "text-green-400" },
  { icon: <FaCode />, title: "OOP", color: "text-yellow-400" },
  { icon: <SiHtml5 />, title: "HTML", color: "text-orange-500" },
  { icon: <SiCss3 />, title: "CSS", color: "text-blue-500" },
  { icon: <SiJavascript />, title: "JavaScript", color: "text-yellow-300" },
  { icon: <SiReact />, title: "React", color: "text-cyan-400" },
  { icon: <SiRedux />, title: "Redux Toolkit", color: "text-purple-400" },
  { icon: <SiTailwindcss />, title: "Tailwind CSS", color: "text-sky-400" },
  { icon: <SiNodedotjs />, title: "Node.js", color: "text-green-500" },
  { icon: <SiExpress />, title: "Express.js", color: "text-gray-300" },
  { icon: <SiMongodb />, title: "MongoDB", color: "text-green-400" },
  { icon: <SiPostgresql />, title: "PostgreSQL", color: "text-sky-400" },
  { icon: <SiGit />, title: "Git", color: "text-red-500" },
];

export default function Skills() {
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
          Python, C, C++, Data Structures & Algorithms, Object-Oriented
          Programming, HTML, CSS, JavaScript, React, Redux Toolkit, Tailwind
          CSS, Node.js, Express.js, MongoDB, PostgreSQL, Git & Problem Solving
        </p>

        {/* Skills Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6 mt-10 pb-16">
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ icon, title, color }) {
  return (
    <div
      className="bg-zinc-900 rounded-xl p-6 flex flex-col items-center
                 hover:scale-105 hover:shadow-xl transition duration-300"
    >
      <div className={`text-5xl mb-3 ${color}`}>{icon}</div>
      <p className="text-white font-semibold">{title}</p>
    </div>
  );
}