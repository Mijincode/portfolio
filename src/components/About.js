import React from "react";
import mijin from "../components/image/mijinPhoto.jpg";

export default function About() {
  return (
    <section id="about" className="">
      <div className="container mx-auto px-4">
        <div className="lg:max-w-2xl lg:mx-auto">
          <div className="flex items-center justify-center mb-8">
            <img
              src={mijin}
              alt="Mijin Lee"
              className="rounded-full h-40 w-40 object-cover"
              style={{ width: "400px", height: "500px" }}
            />
          </div>
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg leading-relaxed text-black">
            Hi, I'm Mijin Lee. A dedicated professional currently pursuing a
            Graduate Certificate in Information Technology (Web Development), I
            bring a strong foundation in this field, complemented by a Master of
            Teaching (Primary) from QUT and a robust background in Information
            Technology. Seeking a challenging role that leverages my technical
            proficiency, I am eager to apply my expertise to enhance a dynamic,
            technology-focused team. Recognized for delivering exceptional
            technical support, fostering effective collaboration, and adeptly
            adapting to technological advancements.
          </p>
          <div>
            <h3 className="text-2xl font-bold mb-4">Education:</h3>
            <ul className="text-lg leading-relaxed text-black">
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
            <h3 className="text-2xl font-bold mb-4">Skills:</h3>
            <ul className="text-lg leading-relaxed text-black">
              <li>
                Proficient in troubleshooting and resolving technical issues
              </li>
              <li>Excel in collaborating within a team.</li>
              <li>
                Demonstrated ability to organize tasks effectively and
                prioritize workload
              </li>
              <li>
                Effective communicator with exceptional interpersonal skills
              </li>
              <li>Detail-oriented and client-centered</li>
              <li>
                Adaptable and flexible in embracing change and new technologies
              </li>
              <li>
                Strong command of HTML and CSS for building responsive and
                visually appealing web applications
              </li>
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
