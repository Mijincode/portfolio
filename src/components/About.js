import React from "react";
import "../index.css";
import { AcademicCapIcon } from "@heroicons/react/outline";

export default function About() {
  return (
    <section id="about" className="">
      <div className="container px-5 py-10 mx-auto">
        <div className="mx-auto about-container">
          <div className="text-4xl font-bold text-center mb-8">
            <h2>About Me</h2>
          </div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center">
            I am currently pursuing a Graduate Certificate in Information
            Technology (Web Development) and have completed a Master of Teaching
            (Primary), both from QUT My journey in education sparked a strong
            interest in the integration of technology and education, leading me
            to further my studies in Information Technology. This transition has
            not only equipped me with the skills to expand and develop my IT
            knowledge but has also deepened my passion for coding and gaining a
            comprehensive understanding of technology. I thrive on learning new
            technologies, which fuels my enthusiasm for exploring innovative
            solutions and advancing my professional growth.
          </p>
        </div>
        <div className="container px-5 py-5">
          <h3 className="text-2xl text-center font-bold mb-4 mt-5">
            Education:
          </h3>
          <ul className="lg:w-2/3 mx-auto leading-relaxed text-base">
            <li>
              <AcademicCapIcon className="inline-block w-5 h-5 mr-2 text-green-500" />
              Graduate Certificate in Information Technology (Web Development) -
              (QUT) | 2023 - 2024
            </li>
            <li>
              <AcademicCapIcon className="inline-block w-5 h-5 mr-2 text-green-500" />
              Master of Teaching (Primary) - (QUT) | 2018 - 2021
            </li>
            <li>
              <AcademicCapIcon className="inline-block w-5 h-5 mr-2 text-green-500" />
              Certificate IV in Adult Tertiary Preparation - (TAFE) | 2016 -
              2017
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
