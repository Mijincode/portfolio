import React from "react";
import mijin from "./image/mijinPhoto.jpg";
import "../index.css";

export default function About() {
  return (
    <section id="about" className="">
      <div className="container mx-auto px-4">
        <div className="lg:max-w-2xl lg:mx-auto about-container">
          <div className="flex items-center justify-center mb-8">
            <img
              src={mijin}
              alt="Mijin Lee"
              className="rounded-full h-40 w-40 object-cover about-image"
            />
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hi, I'm Mijin Lee. A dedicated professional currently pursuing a
              Graduate Certificate in Information Technology (Web Development),
              I bring a strong foundation in this field, complemented by a
              Master of Teaching (Primary) from QUT and a robust background in
              Information Technology. Seeking a challenging role that leverages
              my technical proficiency, I am eager to apply my expertise to
              enhance a dynamic, technology-focused team.
            </p>
          </div>
          <div>
            <h3 className="about-education">Education:</h3>
            <ul className="about-list list-disc">
              <li>
                Graduate Certificate in Information Technology (Web Development)
                - Queensland University of Technology (QUT) | 2023 - 2024
              </li>
              <li>
                Master of Teaching (Primary) - Queensland University of
                Technology (QUT) | 2018 - 2021
              </li>
            </ul>
          </div>
          <div>
            <h3 className="about-skills">Skills:</h3>
            <ul className="about-list list-disc">
              <li>
                Proficient in JavaScript for frontend and backend development
              </li>
              <li>Experienced in using Node.js for server-side development</li>
              <li>Skilled in React for building dynamic user interfaces</li>
              <li>Proficient in MySQL for database management</li>
              <li>
                Demonstrated expertise in utilizing Express to develop robust
                web applications and APIs
              </li>
              <li>
                Knowledgeable in integrating various technologies to develop
                scalable and efficient web solutions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
