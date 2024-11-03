import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMysql } from "react-icons/si";

const skillsData = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 w-6 h-6" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 w-6 h-6" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400 w-6 h-6" />,
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-500 w-6 h-6" />,
  },
  { name: "React", icon: <FaReact className="text-blue-400 w-6 h-6" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-6 h-6" /> },
  { name: "Express", icon: <SiExpress className="text-gray-500 w-6 h-6" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700 w-6 h-6" /> },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-center mb-8 mt-8">
            Skills &amp; Technologies
          </h2>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skillsData.map((skill) => (
            <div key={skill.name} className="p-2 sm:w-1/2 w-full">
              <div
                className="rounded flex p-4 h-full items-center"
                style={{ background: "#e7d8c9" }}
              >
                <div className="w-6 h-6 flex-shrink-0 mr-4">{skill.icon}</div>
                <span className="title-font font-medium text-black">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
