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
            <strong className="text-xl">From classrooms to code,</strong> my
            journey has been driven by curiosity and a deep appreciation for the
            transformative power of technology. Holding a Graduate Certificate
            in Information Technology (Web Development), I'm now making an
            exciting leap from education to the tech industry—a move inspired by
            the limitless potential technology offers to reshape how we live,
            work, and learn.
          </p>
          <p className="mt-4">
            It all started in high school, where I first delved into programs
            like Microsoft Word and Excel, and even experimented with basic
            coding. These early interactions with technology lit a spark,
            fueling my fascination with how a few lines of code could accomplish
            so much. Though I initially chose a career in teaching, aiming to
            inspire and uplift students, I always carried my passion for tech in
            my back pocket.
          </p>
          <p className="mt-4">
            Throughout my careers in education, I saw firsthand the incredible
            impact of technology in the classroom. Simple digital tools could
            captivate students, turning traditional lessons into interactive
            experiences that unlocked new levels of engagement and
            understanding. This revelation inspired me to dig even deeper into
            coding and tech tools, experimenting beyond the classroom to expand
            my skills.
          </p>
          <p className="mt-4">
            Now, I'm ready to channel my experience in both education and
            technology into a software development role, eager to contribute my
            skills in meaningful ways and explore tech's vast potential. With
            each new project, I’m driven by the belief that technology holds the
            power to solve problems, break boundaries, and create a lasting
            impact—and I’m thrilled to be part of it.
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
