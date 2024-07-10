import React from "react";
import "../index.css";
import { Card } from "react-bootstrap";
import { AcademicCapIcon } from "@heroicons/react/outline";

export default function About() {
  return (
    <section id="about" className="bg-B2967D py-10">
      <div className="container px-5 mx-auto">
        <div className="text-4xl font-bold text-center mb-8">
          <h2>About Me</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="mb-4">
            <Card.Body>
              <Card.Text className="leading-relaxed text-base ">
                I have recently completed a Graduate Certificate in Information
                Technology (Web Development). <br />
                <br /> Throughout my journey, I've been deeply passionate about
                both education and technology. My journey into IT began during
                my high school years, where I developed a strong foundation in
                technology by mastering software such as Microsoft Word and
                Excel, and even delving into basic coding. This early exposure
                sparked my fascination with IT, prompting me to continue
                learning and exploring new technologies While I initially
                pursued a career in teaching to make a positive impact in
                students' lives, my passion for technology remained strong.{" "}
                <br />
                <br />
                As a student teacher, I observed that integrating technology
                into the classroom had a significant positive impact. This
                experience motivated me to study more deeply into technologies
                by experimenting with coding and exploring various software
                applications outside of the classroom.
                <br />
                <br />
                Now, with a solid understanding of technology fundamentals and
                valuable skills gained from teaching, I'm eager to transition
                into a role where I can leverage my coding skills and enthusiasm
                to further advance my growth and development in the field of
                software development.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ marginTop: "50px" }}>
            <Card.Body>
              <h2 className="text-4xl font-bold text-center mb-8">
                Education:
              </h2>
              <ul className="leading-relaxed text-base">
                <li className="flex items-center mb-2">
                  <AcademicCapIcon className="inline-block w-5 h-5 mr-2 text-green-500" />
                  Graduate Certificate in Information Technology (Web
                  Development) - (QUT) | 2023 - 2024
                </li>
                <li>
                  <AcademicCapIcon className="inline-block w-5 h-5 mr-2 text-green-500" />
                  Master of Teaching (Primary) - (QUT) | 2018 - 2021
                </li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
}
