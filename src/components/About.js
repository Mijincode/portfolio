import React from "react";
import "../index.css";
import { AcademicCapIcon } from "@heroicons/react/outline";

export default function About() {
  return (
    <section id="about" className="bg-B2967D">
      <div className="container px-5 py-10 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 mt-10">About Me</h2>

        <div className="max-w-3xl mx-auto text-base leading-relaxed">
          <p>
            <p>
              <strong className="text-xl">From classrooms to code,</strong> my
              journey has been shaped by curiosity, creativity, and a deep
              appreciation for the transformative power of technology. After
              transitioning from the education sector to the tech industry, I’ve
              been eager to explore how UI/UX design and full-stack development
              can reshape digital experiences.
            </p>

            <p>
              It all began in high school, when I first experimented with
              Microsoft Office and explored the basics of coding. These early
              experiences sparked a fascination with technology, even though I
              initially pursued a teaching career. While inspiring students in
              the classroom, my passion for technology quietly grew stronger in
              the background, eventually guiding me to pursue a Graduate
              Certificate in Information Technology (Web Development).
            </p>

            <p>
              As I delved deeper into the field, my passion naturally evolved
              toward front-end development, UI/UX design, and crafting
              exceptional user experiences. Now, I am fully immersed in the
              world of UI/UX design, eager to make a meaningful impact by
              merging creativity with technology.
            </p>

            <p>
              In every project, I approach design with creativity and
              innovation, always striving to build solutions that are both
              functional and inspiring. I believe that the fusion of thoughtful
              design and cutting-edge technology can break barriers, solve
              complex problems, and leave a lasting mark on the digital world.
              Driven by a passion for pushing the boundaries of what's possible,
              I continually strive to create designs that prioritize creativity,
              functionality, and seamless user experience. For me, this journey
              is not just about coding and design—it's about crafting digital
              experiences that truly make a difference.
            </p>
          </p>
          <h2 className="text-4xl font-bold text-center my-8 mt-16">
            Education:{" "}
          </h2>{" "}
          <ul className="leading-relaxed text-base">
            <li className="flex items-center mb-4">
              <AcademicCapIcon className="inline-block w-5 h-5 mr-2 text-green-500" />
              Graduate Certificate in Information Technology (Web Development) -
              (QUT) | 2023 - 2024
            </li>
            <li>
              <AcademicCapIcon className="inline-block w-5 h-5 mr-2 text-green-500" />
              Master of Teaching (Primary) - (QUT) | 2018 - 2021
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
