import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

const skillsData = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MySQL",
  "Knex.js",
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-center mb-8">
            Skills &amp; Technologies
          </h2>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skillsData.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div
                className="rounded flex p-4 h-full items-center"
                style={{ background: "#e7d8c9" }}
              >
                <CheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-black">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
